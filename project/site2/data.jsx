/* global React */
/* Whiskey.Investments v2, shared primitives + blueprint data. Exposes window.WI2. */
const { useState, useEffect, useRef } = React;

/* ---------- Lucide icon (ref-isolated) ---------- */
function Icon({ name, size = 22, strokeWidth = 2, color, fill = false, style, className }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = `<i data-lucide="${name}"></i>`;
    window.lucide.createIcons({ attrs: { width: size, height: size, "stroke-width": strokeWidth } });
  }, [name, size, strokeWidth]);
  return (
    <span ref={ref} className={"wi-ico " + (fill ? "wi-ico-fill " : "") + (className || "")}
      style={{ display: "inline-flex", width: size, height: size, color, flex: "0 0 auto", ...style }} aria-hidden="true" />
  );
}

/* ---------- Layout primitives ---------- */
const BG2 = { white: "var(--white)", mint: "var(--teal-100)", paper: "var(--paper)", navy: "var(--navy-800)", navyDeep: "var(--navy-900)", teal: "var(--teal-500)" };

function Section({ id, bg = "white", children, style, pad, max = 1160 }) {
  return (
    <section id={id} style={{ background: BG2[bg] || bg, padding: pad || "100px 24px", ...style }}>
      <div style={{ maxWidth: max, margin: "0 auto", position: "relative" }}>{children}</div>
    </section>
  );
}

function Eyebrow({ children, color }) {
  return <div className="wi-eyebrow" style={color ? { color } : null}>{children}</div>;
}

function SectionHead({ eyebrow, title, intro, align = "left", dark = false, max = 720 }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === "center" ? max : "none", margin: align === "center" ? "0 auto" : 0 }}>
      {eyebrow ? <Eyebrow color={dark ? "rgba(255,255,255,.55)" : undefined}>{eyebrow}</Eyebrow> : null}
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "14px 0 0", color: dark ? "var(--white)" : "var(--text-strong)" }}>
        {title}
      </h2>
      {intro ? (
        <p style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6, margin: "18px 0 0", color: dark ? "rgba(255,255,255,.72)" : "var(--text-muted)", maxWidth: 680, ...(align === "center" ? { marginLeft: "auto", marginRight: "auto" } : null) }}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}

/* ---------- Formatting + pricing model ---------- */
const gbp2 = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });
const fmtGBP = (n) => gbp2.format(n);

const CASK_PRICE = 2000;          // list price per cask
const CASKS_PER_CRATE = 6;        // one crate = 6 casks (£12,000 list)
const GROWTH_RATE = 0.143;        // Knight Frank Wealth Report 2024, whisky +280% (10y to 2023), ~14.3% p.a.

const TIERS2 = [
  { name: "Investor",  min: 5,  max: 9,   disc: 0.025, perCask: 1950 },
  { name: "Collector", min: 10, max: 19,  disc: 0.05,  perCask: 1900 },
  { name: "Portfolio", min: 20, max: 39,  disc: 0.075, perCask: 1850 },
  { name: "Reserve",   min: 40, max: 59,  disc: 0.10,  perCask: 1800 },
  { name: "Elite",     min: 60, max: 79,  disc: 0.125, perCask: 1750 },
  { name: "Apex",      min: 80, max: 100, disc: 0.15,  perCask: 1700 },
];

function tierForCrates(crates) {
  return TIERS2.find((t) => crates >= t.min && crates <= t.max) || TIERS2[0];
}

function priceOrder(crates) {
  const tier = tierForCrates(crates);
  const casks = crates * CASKS_PER_CRATE;
  const listValue = casks * CASK_PRICE;
  const orderValue = Math.round(casks * tier.perCask);
  return { tier, casks, listValue, orderValue, saving: listValue - orderValue, deposit: Math.round(orderValue * 0.10), balance: orderValue - Math.round(orderValue * 0.10) };
}

/* ---------- Content data ---------- */
const NAV_LINKS2 = [
  { id: "why", label: "Why we exist" },
  { id: "whiskey", label: "Why whiskey" },
  { id: "how", label: "How it works" },
  { id: "calculator", label: "Calculator" },
  { id: "cask", label: "The cask" },
  { id: "faq", label: "FAQ" },
];

const PROBLEMS = [
  { icon: "trending-up", title: "Inflated prices", body: "Casks marked up far beyond distillery rates, with the margin hidden from you." },
  { icon: "eye-off", title: "Hidden fees", body: "Storage, insurance and exit charges that only surface after you’ve committed." },
  { icon: "phone-off", title: "Cold-callers", body: "Pressure selling from brokers whose commission depends on your yes." },
  { icon: "file-question", title: "Unclear ownership", body: "Paper promises with no cask ID, no certificate and no named warehouse." },
];

const ANSWERS = [
  { icon: "tag", title: "One transparent price", body: "£2,000 per cask, by the crate, with the volume discount shown live before you pay." },
  { icon: "badge-check", title: "Verifiable ownership", body: "Your casks are made to order by the distillery, certified with a unique cask ID." },
  { icon: "mouse-pointer-click", title: "Self-service, no salespeople", body: "Size your order with the calculator and reserve online. Nobody will ever call you." },
  { icon: "factory", title: "Direct distillery fulfilment", body: "Great Northern Distillery makes, stores, insures, certifies and resells your casks." },
];

const WHISKEY_STATS = [
  { icon: "hourglass", value: "Finite supply", label: "Whiskey must age for years in bond. Maturing stock cannot be rushed or replicated." },
  { icon: "globe", value: "Growing demand", label: "Irish whiskey is among the fastest-growing spirit categories worldwide." },
  { icon: "package", value: "Tangible asset", label: "A physical cask in a bonded warehouse, in your name, not paper exposure." },
  { icon: "shield", value: "Resilient category", label: "Premium spirits have historically held appeal through market cycles." },
];

const STEPS2 = [
  { icon: "calculator", title: "Choose your amount", body: "Use the calculator to size your order in crates and see your live price and discount." },
  { icon: "wallet", title: "Reserve", body: "Pay the 10% reservation deposit online. It’s non-refundable, as casks are made to order." },
  { icon: "scan-face", title: "Verify", body: "Your identity is verified at checkout, with details and passport collected before payment." },
  { icon: "file-text", title: "Documentation", body: "Your order pack goes straight to the distillery, who collect the balance and certify your casks." },
  { icon: "bell-ring", title: "Stay updated", body: "Hold your distillery-issued certificate and receive valuation and storage updates as your casks mature." },
  { icon: "handshake", title: "Sell", body: "Exit through the distillery’s resale support when your casks have matured." },
];

const FAQS2 = [
  { q: "Do I actually own the casks?", a: "Yes. Your casks are made to order by Great Northern Distillery and held in a bonded warehouse with a unique cask ID. You receive an ownership certificate issued by the distillery once the balance is settled." },
  { q: "Why is the 10% deposit non-refundable?", a: "Because every cask is made to order, with production scheduled against your reservation. This is stated plainly in our terms and you acknowledge it explicitly at checkout, before any payment is taken." },
  { q: "Who collects the remaining 90%?", a: "Great Northern Distillery invoices and collects the balance directly from you. We never hold it. The distillery then makes, stores, insures and certifies your casks." },
  { q: "Where are my casks stored, and are they insured?", a: "In the distillery’s bonded warehousing, with five years of insured storage included. Storage, insurance and documentation all sit with Great Northern Distillery." },
  { q: "How do I sell?", a: "The distillery offers resale support for matured casks. Timescales and prices depend on the market at the time. There is no guaranteed exit price." },
  { q: "What are the risks?", a: "The value of whiskey casks can go down as well as up, and past performance is not a guide to future returns. Whiskey cask investment is not regulated in the UK, so there is no FSCS protection or FOS recourse. Never invest more than you can afford to lose." },
  { q: "What about tax?", a: "Whiskey casks held in bond may have favourable tax treatment in some circumstances, but tax depends on your personal situation and jurisdiction. Take independent advice, we don’t provide tax, legal or financial advice." },
];

/* ---------- Smooth anchor scrolling ---------- */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

window.WI2 = {
  Icon, Section, Eyebrow, SectionHead, BG2, fmtGBP, scrollToId,
  CASK_PRICE, CASKS_PER_CRATE, GROWTH_RATE, TIERS2, tierForCrates, priceOrder,
  NAV_LINKS2, PROBLEMS, ANSWERS, WHISKEY_STATS, STEPS2, FAQS2,
};
