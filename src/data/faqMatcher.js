import { FAQS2 } from './index.js';

function tokenize(str) {
  return new Set(
    str.toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 2)
  );
}

function jaccard(a, b) {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

// Ordered keyword rules — first match wins
const RULES = [
  {
    re: /\b(price|cost|how much|per cask|per crate|minimum|min order|how many)\b/,
    answer: () => 'Casks are £2,000 each, sold by the crate of 6 (£12,000 list). The minimum order is 5 crates (30 casks). Volume discounts run from 5% at 5–9 crates up to 15% at 60–100 crates — the calculator on the page shows your live price as you adjust.',
  },
  {
    re: /\b(discount|tier|tiered|crate discount|volume|bulk|how does.*crate|crate.*work)\b/,
    answer: () => "Volume discounts are applied to your whole order based on how many crates you buy. Investor (5–9 crates) saves 5%; Collector (10–19) saves 7.5%; Portfolio (20–39) saves 10%; Reserve (40–59) saves 12.5%; Founder (60–100) saves 15%. The discount is off the £2,000 list price per cask. The calculator shows your exact price live as you adjust.",
  },
  {
    re: /\b(deposit|refund|refundable|non.?refundable|10.?%)\b/,
    answer: () => FAQS2[1]?.a,
  },
  {
    re: /\b(balance|90.?%|remaining|rest|invoice|other 90|pay the rest|when do i pay)\b/,
    answer: () => FAQS2[2]?.a,
  },
  {
    re: /\b(own|ownership|certificate|title|my cask|do i own)\b/,
    answer: () => FAQS2[0]?.a,
  },
  {
    re: /\b(stor|warehouse|bond|bonded|insur|where are)\b/,
    answer: () => FAQS2[3]?.a,
  },
  {
    re: /\b(sell|exit|resale|resell|liquidity|cash out|when can i|how do i sell)\b/,
    answer: () => FAQS2[4]?.a,
  },
  {
    re: /\b(risk|safe|guaranteed|guarantee|fscs|regulated|regulation|protect|lose)\b/,
    answer: () => FAQS2[5]?.a,
  },
  {
    re: /\b(tax|isa|sipp|hmrc|cgt|capital gains|inherit|duty)\b/,
    answer: () => FAQS2[6]?.a,
  },
  {
    re: /\b(gnd|great northern|distillery|distiller|who makes|who produce)\b/,
    answer: () => "Great Northern Distillery is Ireland's largest independent distillery, founded by the team behind Cooley and Kilbeggan — the people who revived Irish whiskey. They have over 500,000 casks in bond and supply the spirit behind around 60% of all Irish whiskey labels worldwide. More at gndireland.com.",
  },
];

export function matchFaq(question) {
  const lower = question.toLowerCase();
  for (const { re, answer } of RULES) {
    if (re.test(lower)) {
      const a = answer();
      if (a) return a;
    }
  }
  // Fallback: Jaccard similarity against FAQ question text
  const qTokens = tokenize(question);
  let best = { score: 0, answer: null };
  for (const { q, a } of FAQS2) {
    const score = jaccard(qTokens, tokenize(q));
    if (score > best.score) best = { score, answer: a };
  }
  return best.score >= 0.3 ? best.answer : null;
}
