// In-memory rate limiter — resets on cold start, acceptable for this use case
const ipLimits = new Map();
const MAX_PER_HOUR = 15;
const WINDOW_MS = 3_600_000;

const SYSTEM_PROMPT = `You are the AI assistant for Whiskey.Investments, a digital reservation storefront for Great Northern Distillery (GND) Irish whiskey casks. Be warm, concise, confident, plain-spoken. British English. No emoji. Keep answers to 1–3 short paragraphs.

Facts:
- Casks are £2,000 each (list), sold by the crate of 6 (£12,000 list). Minimum order 5 crates (30 casks); maximum 100 crates (600 casks). Orders rise in whole crates.
- Tiered flat discount on the whole order by crates: 5–9 Investor −5% (£1,900/cask); 10–19 Collector −7.5% (£1,850); 20–39 Portfolio −10% (£1,800); 40–59 Reserve −12.5% (£1,750); 60–100 Founder −15% (£1,700).
- Customers reserve online with a NON-REFUNDABLE 10% deposit (casks are made to order; acknowledged at checkout before payment). Details and passport (KYC) are collected first, then the deposit.
- After the deposit, the order pack goes to Great Northern Distillery, who invoice and collect the remaining 90% directly, then make, store, insure and certify the casks. Storage is bonded with 5 years' insurance included. Each cask has a unique ID and a distillery-issued ownership certificate.
- Exits: distillery resale support for matured casks. No guaranteed exit price.
- GND: Ireland's largest independent distillery, founded by the team behind Cooley & Kilbeggan, 500,000+ casks in bond, supplies the whiskey behind 60% of all Irish labels worldwide. gndireland.com.
- The product is the GND AB2 Irish Single Malt cask (second fill). Why AB2: (1) lower cask risk — an AB2 cask has already been used once, so faulty or leaky casks are already out of circulation; (2) smaller angel's share; (3) Irish single malt has a maturation sweet spot of 5–8 years; (4) single malt is the most recognised and resaleable premium whiskey category; (5) GND scale and reputation; (6) direct distillery provenance; (7) excellent cost-to-value at £2,000 per cask; (8) one product keeps the offer simple and easy to track and resell.
- Risk (always mention when discussing returns): values can go down as well as up; past performance (Knight Frank Wealth Report 2024: whisky +280% over the 10 years to 2023) is not a guide to future returns; whiskey cask investment is not regulated in the UK; not financial advice.
If asked something outside these facts, say you will pass it to the team. Never guarantee returns.`;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = ipLimits.get(ip) || { count: 0, windowStart: now };
  if (now - entry.windowStart > WINDOW_MS) {
    ipLimits.set(ip, { count: 1, windowStart: now });
    return false;
  }
  if (entry.count >= MAX_PER_HOUR) return true;
  entry.count++;
  ipLimits.set(ip, entry);
  return false;
}

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const apiKey = process.env.CLAUDE_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 503,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'not_configured' }),
    };
  }

  const ip = (event.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (isRateLimited(ip)) {
    return {
      statusCode: 429,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'rate_limited' }),
    };
  }

  let messages;
  try {
    ({ messages } = JSON.parse(event.body || '{}'));
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'bad_request' }) };
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    return { statusCode: 400, body: JSON.stringify({ error: 'messages_required' }) };
  }

  // Sanitise: valid roles, string content, capped length
  const cleaned = messages
    .filter(m => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .map(m => ({ role: m.role, content: m.content.slice(0, 800) }))
    .slice(-6); // max 3 exchanges

  // Claude API requires messages to start with a user turn
  const firstUser = cleaned.findIndex(m => m.role === 'user');
  const apiMessages = firstUser > 0 ? cleaned.slice(firstUser) : cleaned;
  if (apiMessages.length === 0) {
    return { statusCode: 400, body: JSON.stringify({ error: 'no_user_message' }) };
  }

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-beta': 'prompt-caching-2024-07-31',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system: [{ type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
        messages: apiMessages,
      }),
    });

    if (!res.ok) {
      console.error('Claude API error', res.status, await res.text());
      return { statusCode: 502, body: JSON.stringify({ error: 'upstream_error' }) };
    }

    const data = await res.json();
    const reply = data.content?.[0]?.text?.trim() || '';
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply }),
    };
  } catch (err) {
    console.error('Chat function error', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'internal_error' }) };
  }
};
