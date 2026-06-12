/* Whiskey.Investments v2 — shared data, pricing model and utilities */

/* ---------- Formatting + pricing model ---------- */
const gbp2 = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });
export const fmtGBP = (n) => gbp2.format(n);

export const CASK_PRICE = 2000;
export const CASKS_PER_CRATE = 6;
export const GROWTH_RATE = 0.143;

export const TIERS2 = [
  { name: "Investor",  min: 5,  max: 9,   disc: 0.025, perCask: 1950 },
  { name: "Collector", min: 10, max: 19,  disc: 0.05,  perCask: 1900 },
  { name: "Portfolio", min: 20, max: 39,  disc: 0.075, perCask: 1850 },
  { name: "Reserve",   min: 40, max: 59,  disc: 0.10,  perCask: 1800 },
  { name: "Elite",     min: 60, max: 79,  disc: 0.125, perCask: 1750 },
  { name: "Apex",      min: 80, max: 100, disc: 0.15,  perCask: 1700 },
];

export function tierForCrates(crates) {
  return TIERS2.find((t) => crates >= t.min && crates <= t.max) || TIERS2[0];
}

export function priceOrder(crates) {
  const tier = tierForCrates(crates);
  const casks = crates * CASKS_PER_CRATE;
  const listValue = casks * CASK_PRICE;
  const orderValue = Math.round(casks * tier.perCask);
  return {
    tier,
    casks,
    listValue,
    orderValue,
    saving: listValue - orderValue,
    deposit: Math.round(orderValue * 0.10),
    balance: orderValue - Math.round(orderValue * 0.10),
  };
}

/* ---------- Navigation ---------- */
export const NAV_LINKS2 = [
  { id: "why", label: "Why we exist" },
  { id: "whiskey", label: "Why whiskey" },
  { id: "how", label: "How it works" },
  { id: "calculator", label: "Calculator" },
  { id: "cask", label: "The cask" },
  { id: "faq", label: "FAQ" },
];

/* ---------- Languages ---------- */
export const LANGS2 = ["English", "Gaeilge", "Français", "Deutsch", "Español", "Italiano", "中文", "日本語"];

/* ---------- Content ---------- */
export const PROBLEMS = [
  { icon: "trending-up", title: "Inflated prices", body: "Casks marked up far beyond distillery rates, with the margin hidden from you." },
  { icon: "eye-off", title: "Hidden fees", body: "Storage, insurance and exit charges that only surface after you've committed." },
  { icon: "phone-off", title: "Cold-callers", body: "Pressure selling from brokers whose commission depends on your yes." },
  { icon: "file-question", title: "Unclear ownership", body: "Paper promises with no cask ID, no certificate and no named warehouse." },
];

export const ANSWERS = [
  { icon: "tag", title: "One transparent price", body: "£2,000 per cask, by the crate, with the volume discount shown live before you pay." },
  { icon: "badge-check", title: "Verifiable ownership", body: "Your casks are made to order by the distillery, certified with a unique cask ID." },
  { icon: "mouse-pointer-click", title: "Self-service, no salespeople", body: "Size your order with the calculator and reserve online. Nobody will ever call you." },
  { icon: "factory", title: "Direct distillery fulfilment", body: "Great Northern Distillery makes, stores, insures, certifies and resells your casks." },
];

export const WHISKEY_STATS = [
  { icon: "hourglass", value: "Finite supply", label: "Whiskey must age for years in bond. Maturing stock cannot be rushed or replicated." },
  { icon: "globe", value: "Growing demand", label: "Irish whiskey is among the fastest-growing spirit categories worldwide." },
  { icon: "package", value: "Tangible asset", label: "A physical cask in a bonded warehouse, in your name, not paper exposure." },
  { icon: "shield", value: "Resilient category", label: "Premium spirits have historically held appeal through market cycles." },
];

export const STEPS2 = [
  { icon: "calculator", title: "Choose your amount", body: "Use the calculator to size your order in crates and see your live price and discount." },
  { icon: "wallet", title: "Reserve", body: "Pay the 10% reservation deposit online. It's non-refundable, as casks are made to order." },
  { icon: "scan-face", title: "Verify", body: "Your identity is verified at checkout, with details and passport collected before payment." },
  { icon: "file-text", title: "Documentation", body: "Your order pack goes straight to the distillery, who collect the balance and certify your casks." },
  { icon: "bell-ring", title: "Stay updated", body: "Hold your distillery-issued certificate and receive valuation and storage updates as your casks mature." },
  { icon: "handshake", title: "Sell", body: "Exit through the distillery's resale support when your casks have matured." },
];

export const FAQS2 = [
  { q: "Do I actually own the casks?", a: "Yes. Your casks are made to order by Great Northern Distillery and held in a bonded warehouse with a unique cask ID. You receive an ownership certificate issued by the distillery once the balance is settled." },
  { q: "Why is the 10% deposit non-refundable?", a: "Because every cask is made to order, with production scheduled against your reservation. This is stated plainly in our terms and you acknowledge it explicitly at checkout, before any payment is taken." },
  { q: "Who collects the remaining 90%?", a: "Great Northern Distillery invoices and collects the balance directly from you. We never hold it. The distillery then makes, stores, insures and certifies your casks." },
  { q: "Where are my casks stored, and are they insured?", a: "In the distillery's bonded warehousing, with five years of insured storage included. Storage, insurance and documentation all sit with Great Northern Distillery." },
  { q: "How do I sell?", a: "The distillery offers resale support for matured casks. Timescales and prices depend on the market at the time. There is no guaranteed exit price." },
  { q: "What are the risks?", a: "The value of whiskey casks can go down as well as up, and past performance is not a guide to future returns. Whiskey cask investment is not regulated in the UK, so there is no FSCS protection or FOS recourse. Never invest more than you can afford to lose." },
  { q: "What about tax?", a: "Whiskey casks held in bond may have favourable tax treatment in some circumstances, but tax depends on your personal situation and jurisdiction. Take independent advice, we don't provide tax, legal or financial advice." },
];

/* ---------- Chat context ---------- */
export const CHAT_CONTEXT2 = `You are the AI assistant for Whiskey.Investments, a digital reservation storefront for Great Northern Distillery (GND) Irish whiskey casks. Be warm, concise, confident, plain-spoken. British English. No emoji. Keep answers to 1–3 short paragraphs.

Facts:
- Casks are £2,000 each (list), sold by the crate of 6 (£12,000 list). Minimum order 5 crates (30 casks); maximum 100 crates (600 casks). Orders rise in whole crates.
- Tiered flat discount on the whole order by crates: 5–9 Investor −5% (£1,900/cask); 10–19 Premium −7.5% (£1,850); 20–39 Portfolio −10% (£1,800); 40–59 Reserve −12.5% (£1,750); 60–100 Founder −15% (£1,700).
- Customers reserve online with a NON-REFUNDABLE 10% deposit (casks are made to order; acknowledged at checkout before payment). Details and passport (KYC) are collected first, then the deposit.
- After the deposit, the order pack goes to Great Northern Distillery, who invoice and collect the remaining 90% directly, then make, store, insure and certify the casks. Storage is bonded with 5 years' insurance included. Each cask has a unique ID and a distillery-issued ownership certificate.
- Exits: distillery resale support for matured casks. No guaranteed exit price.
- GND: Ireland's largest independent distillery, founded by the team behind Cooley & Kilbeggan, 500,000+ casks in bond, supplies the whiskey behind 60% of all Irish labels worldwide. gndireland.com.
- The product is the GND AB2 Irish Single Malt cask (second fill). Why AB2: (1) lower cask risk, an AB2 cask has already been used once successfully; faulty or leaky casks are removed from circulation, so it's a proven performer; (2) smaller angel's share, AB2 casks generally absorb less liquid than fresh AB1 oak, preserving more saleable spirit; (3) Irish single malt has a maturation sweet spot of roughly 5–8 years, ideal for a medium-term hold with strong bottler demand; (4) single malt is the most recognised, most resaleable premium whiskey category; (5) GND's scale & reputation, one of Ireland's largest independents, multiple styles, hundreds of thousands of casks in bond, founded by the team behind the revival of Irish whiskey including the Teeling family; (6) direct distillery provenance, clear origin, known producer, verified production records; (7) excellent cost-to-value ratio at £2,000 per cask; (8) one single product keeps the offer simple, consistent and easy to compare, track and resell. Selection guided by GND's senior inventory & scheduling planning team.
- Risk language (always when discussing returns): values can go down as well as up; past performance (e.g. Knight Frank Wealth Report 2024: whisky +280% over the 10 years to 2023, ~14.3% p.a. annualised) is not a guide to future returns; whiskey cask investment is not regulated in the UK; not financial advice.
If asked something outside these facts, say you'll pass it to the team via the enquiry form. Never guarantee returns.`;

/* ---------- Smooth anchor scrolling ---------- */
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
