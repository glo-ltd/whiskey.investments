/* global React */
/* v2, Compliance bar + Nav + Hero. */
const { useState: useStateHdr, useEffect: useEffectHdr } = React;
const WIh = window.WI2;
const DSh = window.WhiskeyInvestmentsDesignSystem_1f4fba || {};

const LANGS2 = ["English", "Gaeilge", "Français", "Deutsch", "Español", "Italiano", "中文", "日本語"];

function LanguageSelector() {
  const { Icon } = WIh;
  const [open, setOpen] = useStateHdr(false);
  const [lang, setLang] = useStateHdr("English");
  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen((o) => !o)} aria-label="Select language"
        style={{ display: "inline-flex", alignItems: "center", gap: 7, cursor: "pointer", background: "transparent", border: "none", padding: "8px 6px", fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "var(--text-body)" }}>
        <Icon name="globe" size={18} />
        <span>{lang.slice(0, 2).toUpperCase()}</span>
        <Icon name="chevron-down" size={15} />
      </button>
      {open ? (
        <div style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, width: 190, zIndex: 60, background: "var(--white)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", padding: 8, border: "1px solid var(--line)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 10px 8px", color: "var(--text-subtle)", fontSize: 11.5 }}>
            <Icon name="languages" size={14} /> Auto-detected · change anytime
          </div>
          {LANGS2.map((l) => (
            <button key={l} onClick={() => { setLang(l); setOpen(false); }}
              style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", padding: "9px 10px", borderRadius: 8, border: "none", cursor: "pointer", background: l === lang ? "var(--teal-100)" : "transparent", color: l === lang ? "var(--teal-700)" : "var(--text-body)", fontFamily: "var(--font-body)", fontSize: 14, fontWeight: l === lang ? 600 : 400 }}>
              {l}{l === lang ? <Icon name="check" size={16} /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/* Thin, always-visible compliance bar (ASA/CAP: above the fold, not buried) */
function ComplianceBar() {
  return (
    <div style={{ background: "var(--navy-900)", color: "rgba(255,255,255,.78)", fontFamily: "var(--font-body)", fontSize: 12, lineHeight: 1.4, textAlign: "center", padding: "7px 16px" }}>
      Capital at risk. The value of whiskey casks can go down as well as up. Whiskey cask investment is not regulated in the UK.
    </div>
  );
}

function Nav() {
  const { Icon, NAV_LINKS2, scrollToId } = WIh;
  const { Button, Logo } = DSh;
  const [scrolled, setScrolled] = useStateHdr(false);
  const [menu, setMenu] = useStateHdr(false);
  useEffectHdr(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}>
      <ComplianceBar />
      <div style={{ background: scrolled ? "rgba(255,255,255,0.94)" : "var(--teal-100)", backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none", WebkitBackdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none", boxShadow: scrolled ? "var(--shadow-sm)" : "none", borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent", transition: "background .3s var(--ease-standard), box-shadow .3s var(--ease-standard)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src="assets/wi-logo.svg" alt="whiskey.investments" style={{ height: 40, width: "auto", display: "block" }} />
          </a>
          <nav className="wi-navlinks" style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {NAV_LINKS2.map((l) => (
              <a key={l.id} href={"#" + l.id} onClick={(e) => { e.preventDefault(); scrollToId(l.id); }} className="wi-navlink"
                style={{ padding: "8px 12px", borderRadius: 8, textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "var(--text-body)", transition: "color .2s var(--ease-standard)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal-700)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-body)")}>
                {l.label}
              </a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div className="wi-navlinks"><LanguageSelector /></div>
            {Button ? <Button variant="action" size="md" onClick={() => scrollToId("calculator")}>Use our calculator</Button> : null}
            <button className="wi-burger" onClick={() => setMenu((m) => !m)} aria-label="Menu"
              style={{ display: "none", background: "transparent", border: "none", cursor: "pointer", color: "var(--navy-800)" }}>
              <Icon name={menu ? "x" : "menu"} size={26} />
            </button>
          </div>
        </div>
        {menu ? (
          <div style={{ background: "var(--white)", borderTop: "1px solid var(--line)", padding: "12px 24px 20px" }}>
            {NAV_LINKS2.map((l) => (
              <a key={l.id} href={"#" + l.id} onClick={(e) => { e.preventDefault(); setMenu(false); scrollToId(l.id); }}
                style={{ display: "block", padding: "12px 4px", textDecoration: "none", color: "var(--text-body)", fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 500, borderBottom: "1px solid var(--line)" }}>
                {l.label}
              </a>
            ))}
            <div style={{ paddingTop: 14 }}><LanguageSelector /></div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function Hero() {
  const { Icon, scrollToId, fmtGBP, priceOrder, GROWTH_RATE } = WIh;
  const { Button, Badge } = DSh;
  const [crates, setCrates] = useStateHdr(5);
  const o = priceOrder(crates);
  const est8 = o.orderValue * Math.pow(1 + GROWTH_RATE, 8);
  const cratePct = ((crates - 5) / (20 - 5)) * 100;
  const trust = [
    { icon: "factory", label: "Fulfilled by Great Northern Distillery" },
    { icon: "badge-check", label: "Verifiable ownership certificates" },
    { icon: "warehouse", label: "5-year insured bonded storage" },
    { icon: "hand-coins", label: "Reserve with just a 10% deposit" },
    { icon: "percent", label: "Volume discounts on larger orders" },
    { icon: "refresh-ccw", label: "Distillery resale support" },
  ];
  return (
    <section id="top" style={{ background: "var(--teal-100)", paddingTop: 142, position: "relative", overflow: "hidden" }}>
      <img src="assets/logo-mark.svg" alt="" style={{ position: "absolute", right: "-150px", top: "-60px", width: 520, opacity: 0.07, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div className="wi-hero-grid">
          {/* Left: copy */}
          <div className="wi-hero-copy" style={{ padding: "56px 0 96px", maxWidth: 580 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 14px", borderRadius: 999, background: "var(--white)", boxShadow: "var(--shadow-xs)", marginBottom: 26 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--coral-500)" }} />
              <span style={{ fontFamily: "var(--font-label)", fontSize: 11.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                The world’s first dedicated whiskey investment platform
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(42px, 5.6vw, 68px)", lineHeight: 1.04, letterSpacing: "-0.03em", color: "var(--text-strong)", margin: 0 }}>
              The future of whiskey investing.
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 18.5, lineHeight: 1.6, color: "var(--text-muted)", margin: "24px 0 0", maxWidth: 520 }}>
              Invest directly into distillery-backed Irish whiskey casks, transparent pricing, verifiable ownership and complete investor control. No brokers, no cold calls, no hidden fees.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 32 }}>
              {Button ? <Button variant="action" size="lg" iconRight={<Icon name="arrow-right" size={18} />} onClick={() => scrollToId("calculator")}>Use our calculator</Button> : null}
              {Button ? <Button variant="outline" size="lg" iconLeft={<Icon name="download" size={18} />} onClick={() => document.dispatchEvent(new CustomEvent("wi2-open-guide"))}>Download guide</Button> : null}
            </div>
            <div className="wi-hero-usps" style={{ display: "grid", gap: "12px 24px", marginTop: 40 }}>
              {trust.map((t) => (
                <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-body)", fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500 }}>
                  <Icon name={t.icon} size={18} color="var(--teal-600)" /> {t.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: mini calculator teaser */}
          <div className="wi-hero-media" style={{ padding: "16px 0 96px" }}>
            <div style={{ background: "var(--white)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", maxWidth: 440, marginLeft: "auto", padding: "24px 26px 26px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, color: "var(--text-strong)" }}>What could your casks return?</div>
                {Badge ? <Badge tone="brand">AB2 Malt Cask</Badge> : null}
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)", margin: 0 }}>
                {fmtGBP(2000)} per cask, sold by the crate of six.
              </p>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", margin: "20px 0 8px" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--text-muted)" }}>Your order</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.01em", color: "var(--text-strong)" }}>
                  {crates} crate{crates === 1 ? "" : "s"} · {o.casks} casks
                </span>
              </div>
              <input className="calc-slider" type="range" min={5} max={20} step={1} value={crates}
                onChange={(e) => setCrates(Number(e.target.value))} aria-label="Crates"
                style={{ background: `linear-gradient(to right, var(--teal-500) 0%, var(--teal-500) ${cratePct}%, var(--surface-tint) ${cratePct}%, var(--surface-tint) 100%)` }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "9px 0", borderBottom: "1px solid var(--line)" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--text-muted)" }}>Order value{o.tier.disc ? ` (${o.tier.name} −${(o.tier.disc * 100).toFixed(1).replace(".0", "")}%)` : ""}</span>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15.5, color: "var(--text-strong)" }}>{fmtGBP(o.orderValue)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "9px 0" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--text-muted)" }}>Deposit today (10%)</span>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15.5, color: "var(--coral-600)" }}>{fmtGBP(o.deposit)}</span>
                </div>
                <div style={{ background: "var(--teal-100)", borderRadius: "var(--radius-md)", padding: "13px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginTop: 6 }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)" }}>Est. value in 8 years<span style={{ color: "var(--text-subtle)" }}>*</span></span>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.01em", color: "var(--teal-600)", fontVariantNumeric: "tabular-nums" }}>{fmtGBP(Math.round(est8))}</span>
                </div>
              </div>

              {Button ? (
                <div style={{ marginTop: 16 }}>
                  <Button variant="primary" size="md" block iconRight={<Icon name="arrow-down" size={17} />} onClick={() => scrollToId("calculator")}>
                    Open the full calculator
                  </Button>
                </div>
              ) : null}
              <p style={{ fontFamily: "var(--font-body)", fontSize: 10.5, lineHeight: 1.5, color: "var(--text-subtle)", margin: "12px 0 0", textAlign: "center" }}>
                *Illustration based on the Knight Frank Wealth Report 2024 (whisky +280% over the 10 years to 2023, ~14.3% p.a.). Past performance is not a guide to future returns; values can go down as well as up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.WI2Sections = Object.assign(window.WI2Sections || {}, { Nav, Hero });
