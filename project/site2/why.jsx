/* global React */
/* v2, Why we exist (problem vs answer) + Why whiskey (stat cards). */
const WIw = window.WI2;
const DSw = window.WhiskeyInvestmentsDesignSystem_1f4fba || {};
const { useState: useStateW, useEffect: useEffectW, useRef: useRefW } = React;

/* Counts 0 → +280% when scrolled into view */
function HeadlineReturn() {
  const ref = useRefW(null);
  const [val, setVal] = useStateW(280);
  useEffectW(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf;
    const io = new IntersectionObserver((ents) => {
      if (!ents[0].isIntersecting) return;
      io.disconnect();
      const start = performance.now(), dur = 1300;
      const tick = (now) => {
        const p = Math.min(1, (now - start) / dur);
        setVal(Math.round(280 * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      setVal(0);
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.7 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);
  return (
    <span ref={ref} style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34, letterSpacing: "-0.02em", color: "var(--teal-600)", fontVariantNumeric: "tabular-nums" }}>+{val}%</span>
  );
}

function WhyWeExist() {
  const { Section, SectionHead, Icon, PROBLEMS, ANSWERS } = WIw;
  const { Card } = DSw;
  return (
    <Section id="why" bg="white">
      <SectionHead
        eyebrow="Why we exist"
        title="Cask investing has a trust problem. We built the fix."
        intro="The cask market is full of inflated prices, hidden fees, cold-callers and unclear ownership. Whiskey.Investments is the transparent alternative, a platform, not a sales floor."
        align="center"
      />
      <div className="wi-compare-grid" style={{ marginTop: 56 }}>
        {/* The market today */}
        <div style={{ background: "var(--paper)", borderRadius: "var(--radius-xl)", padding: "32px 30px", border: "1px solid var(--line)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <Icon name="alert-triangle" size={20} color="var(--danger)" />
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "var(--text-strong)", margin: 0 }}>The cask market today</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {PROBLEMS.map((p) => (
              <div key={p.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ width: 40, height: 40, borderRadius: 11, background: "var(--danger-bg)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}>
                  <Icon name={p.icon} size={19} color="var(--danger)" />
                </span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15.5, color: "var(--text-strong)", marginBottom: 3 }}>{p.title}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.5, color: "var(--text-muted)" }}>{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* The fix */}
        <Card variant="dark" padding="32px 30px">
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <Icon name="check-circle" size={20} color="var(--mint)" />
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "#fff", margin: 0 }}>The Whiskey.Investments way</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {ANSWERS.map((a) => (
              <div key={a.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ width: 40, height: 40, borderRadius: 11, background: "rgba(98,212,197,0.16)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}>
                  <Icon name={a.icon} size={19} color="var(--mint)" />
                </span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15.5, color: "#fff", marginBottom: 3 }}>{a.title}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,.68)" }}>{a.body}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

function WhyWhiskey() {
  const { Section, SectionHead, Icon, WHISKEY_STATS } = WIw;
  return (
    <Section id="whiskey" bg="mint">
      <SectionHead
        eyebrow="Why whiskey"
        title="A tangible asset with time on its side"
        intro="Whiskey casks appreciate for structural reasons, supply is finite by law of nature, and the world keeps acquiring the taste."
      />
      <div className="wi-grid-4" style={{ marginTop: 48 }}>
        {WHISKEY_STATS.map((s) => (
          <div key={s.value} className="wi-lift" style={{ background: "var(--white)", borderRadius: "var(--radius-lg)", padding: "26px 24px", boxShadow: "var(--shadow-sm)" }}>
            <Icon name={s.icon} size={26} color="var(--teal-600)" strokeWidth={1.9} />
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 21, letterSpacing: "-0.01em", color: "var(--text-strong)", margin: "16px 0 8px" }}>{s.value}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.5, color: "var(--text-muted)" }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 28, background: "var(--white)", borderRadius: "var(--radius-lg)", padding: "24px 28px", boxShadow: "var(--shadow-sm)", display: "flex", flexWrap: "wrap", gap: "12px 28px", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <HeadlineReturn />
          <span style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.45, color: "var(--text-muted)", maxWidth: 420 }}>
            Reported whisky return over the 10 years to 2023, Knight Frank Wealth Report 2024 (~14.3% p.a., approx. annualised ROI).
          </span>
        </div>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-subtle)", maxWidth: 320 }}>
          Past performance is not a guide to future returns. The value of casks can go down as well as up.
        </span>
      </div>
    </Section>
  );
}

window.WI2Sections = Object.assign(window.WI2Sections || {}, { WhyWeExist, WhyWhiskey });
