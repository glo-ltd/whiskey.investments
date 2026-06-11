/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;
const DS = window.WhiskeyInvestmentsDesignSystem_1f4fba || {};
const { Button, Badge, Card, LogoMark } = DS;

/* ---- The cited basis: Knight Frank Wealth Report 2024 ----
   Reported whisky return of +280% over the 10 years to 2023  ≈  ~14.3% annualised. */
const RATE = 0.143;

const ACCENTS = {
  teal:   { fill: "var(--teal-500)", deep: "var(--teal-600)", soft: "var(--teal-100)" },
  coral:  { fill: "var(--coral-500)", deep: "var(--coral-600)", soft: "var(--coral-200)" },
  indigo: { fill: "var(--indigo-500)", deep: "var(--indigo-600)", soft: "var(--indigo-200)" },
};

const gbp0 = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });

/* Count-up animation hook */
function useCountUp(target, dur = 550) {
  const [val, setVal] = useState(target);
  const fromRef = useRef(target);
  const rafRef = useRef(null);
  useEffect(() => {
    const from = fromRef.current;
    const start = performance.now();
    cancelAnimationFrame(rafRef.current);
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      const v = from + (target - from) * eased;
      setVal(v);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else fromRef.current = target;
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, dur]);
  return val;
}

/* ---- Slider control ---- */
function SliderRow({ label, value, display, min, max, step, onChange, accent, unit }) {
  const fmtBound = (n) => (unit === "years" ? `${n} yrs` : gbp0.format(n));
  const pct = ((value - min) / (max - min)) * 100;
  const trackBg = `linear-gradient(to right, ${accent.fill} 0%, ${accent.fill} ${pct}%, var(--surface-tint) ${pct}%, var(--surface-tint) 100%)`;
  return (
    <div style={calcStyles.sliderRow}>
      <div style={calcStyles.sliderHead}>
        <span style={calcStyles.sliderLabel}>{label}</span>
        <span style={{ ...calcStyles.sliderValue, color: accent.deep }}>{display}</span>
      </div>
      <input
        className="calc-slider"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ background: trackBg }}
        aria-label={label}
      />
      <div style={calcStyles.sliderBounds}>
        <span>{fmtBound(min)}</span>
        <span>{fmtBound(max)}</span>
      </div>
    </div>
  );
}
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const accent = ACCENTS[t.accent] || ACCENTS.teal;

  const [invest, setInvest] = useState(60000); // 30 casks (5 crates) at £2,000 list
  const [years, setYears] = useState(8);

  const projected = invest * Math.pow(1 + RATE, years);
  const profit = projected - invest;
  const multiple = projected / invest;

  const animProjected = useCountUp(projected);
  const animProfit = useCountUp(profit);

  // push accent to CSS so the slider thumbs pick it up
  useEffect(() => {
    document.documentElement.style.setProperty("--calc-accent", accent.fill);
  }, [accent.fill]);

  const dark = t.surface === "dark";

  return (
    <div style={calcStyles.wrap}>
      <Card
        variant={dark ? "dark" : "default"}
        padding="0"
        style={{ ...calcStyles.card, borderRadius: "var(--radius-xl)", overflow: "hidden" }}
      >
        {/* Header */}
        <div style={calcStyles.header}>
          <div style={calcStyles.brandRow}>
            {LogoMark ? <LogoMark size={30} tone={dark ? "white" : "color"} /> : null}
            <span style={{ ...calcStyles.eyebrow, color: dark ? "rgba(255,255,255,.6)" : "var(--text-eyebrow)" }}>
              Whiskey ROI Calculator
            </span>
          </div>
          <h1 style={{ ...calcStyles.heading, color: dark ? "var(--white)" : "var(--text-strong)" }}>
            See how your cask portfolio could grow
          </h1>
        </div>

        {/* Sliders */}
        <div style={calcStyles.controls}>
          <SliderRow
            label="Investment"
            value={invest}
            display={gbp0.format(invest)}
            min={60000}
            max={1200000}
            step={12000}
            onChange={setInvest}
            accent={accent}
          />
          <SliderRow
            label="Holding period"
            value={years}
            display={`${years} year${years === 1 ? "" : "s"}`}
            min={5}
            max={8}
            step={1}
            onChange={setYears}
            accent={accent}
            unit="years"
          />
        </div>

        {/* Result */}
        <div
          style={{
            ...calcStyles.result,
            background: dark ? "rgba(255,255,255,0.05)" : accent.soft,
          }}
        >
          <span style={{ ...calcStyles.resultLabel, color: dark ? "rgba(255,255,255,.6)" : "var(--text-muted)" }}>
            Projected value after {years} year{years === 1 ? "" : "s"}
          </span>
          <div key={`${invest}-${years}`} style={{ ...calcStyles.bigNumber, color: accent.deep }}>
            {gbp0.format(Math.round(animProjected))}
          </div>
          <div style={calcStyles.resultMeta}>
            {Badge ? (
              <Badge tone="success" dot>{`+${gbp0.format(Math.round(animProfit))} gain`}</Badge>
            ) : null}
            {t.showMultiple && Badge ? (
              <Badge tone="action">{`${multiple.toFixed(1)}× return`}</Badge>
            ) : null}
          </div>
          <p style={{ ...calcStyles.basis, color: dark ? "rgba(255,255,255,.55)" : "var(--text-muted)" }}>
            Based on the <strong style={{ color: dark ? "rgba(255,255,255,.8)" : "var(--text-body)" }}>Knight Frank
            Wealth Report 2024</strong>, a reported whisky return of <strong style={{ color: dark ? "rgba(255,255,255,.8)" : "var(--text-body)" }}>+280%</strong> over
            the 10 years to 2023 (~14.3% p.a., approx. annualised ROI).
          </p>
        </div>

        {/* CTA + disclaimer */}
        <div style={calcStyles.footer}>
          {Button ? (
            <Button variant="action" size="lg" block iconRight={<ArrowIcon />}>
              Invest now
            </Button>
          ) : null}
          <p style={{ ...calcStyles.disclaimer, color: dark ? "rgba(255,255,255,.45)" : "var(--text-subtle)" }}>
            Illustrative only. Past performance reported in the Knight Frank Wealth Report 2024 is not a guarantee of
            future returns; cask values can fall as well as rise. Not investment advice.
          </p>
        </div>
      </Card>

      {/* Tweaks */}
      <TweaksPanel>
        <TweakSection label="Appearance" />
        <TweakRadio
          label="Accent"
          value={t.accent}
          options={["teal", "coral", "indigo"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakRadio
          label="Surface"
          value={t.surface}
          options={["light", "dark"]}
          onChange={(v) => setTweak("surface", v)}
        />
        <TweakSection label="Result" />
        <TweakToggle
          label="Show return multiple"
          value={t.showMultiple}
          onChange={(v) => setTweak("showMultiple", v)}
        />
      </TweaksPanel>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14"></path>
      <path d="m13 6 6 6-6 6"></path>
    </svg>
  );
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "teal",
  "surface": "light",
  "showMultiple": true
}/*EDITMODE-END*/;

const calcStyles = {
  wrap: { width: "100%", maxWidth: 480, display: "flex", flexDirection: "column" },
  card: { width: "100%", boxShadow: "var(--shadow-lg)" },
  header: { padding: "28px 28px 4px" },
  brandRow: { display: "flex", alignItems: "center", gap: 10, marginBottom: 16 },
  eyebrow: {
    fontFamily: "var(--font-label)", fontSize: 12, fontWeight: 500,
    letterSpacing: "0.185em", textTransform: "uppercase",
  },
  heading: {
    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 26,
    lineHeight: 1.18, letterSpacing: "-0.01em", margin: 0,
  },
  controls: { padding: "22px 28px 8px", display: "flex", flexDirection: "column", gap: 26 },
  sliderRow: { display: "flex", flexDirection: "column", gap: 12 },
  sliderHead: { display: "flex", alignItems: "baseline", justifyContent: "space-between" },
  sliderLabel: {
    fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "var(--text-muted)",
  },
  sliderValue: { fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em" },
  sliderBounds: {
    display: "flex", justifyContent: "space-between",
    fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-subtle)", fontWeight: 500,
  },
  result: {
    margin: "22px 20px 0", padding: "22px 20px 20px", borderRadius: "var(--radius-lg)",
    display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
  },
  resultLabel: {
    fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500, letterSpacing: "0.01em",
  },
  bigNumber: {
    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 46, lineHeight: 1.05,
    letterSpacing: "-0.02em", margin: "6px 0 14px", fontVariantNumeric: "tabular-nums",
    animation: "calc-pop 280ms var(--ease-emphasis)",
  },
  resultMeta: { display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" },
  basis: {
    fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.5, margin: "16px 4px 0",
    maxWidth: 360,
  },
  footer: { padding: "20px 20px 24px", display: "flex", flexDirection: "column", gap: 12 },
  disclaimer: {
    fontFamily: "var(--font-body)", fontSize: 11, lineHeight: 1.5, margin: 0, textAlign: "center",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
