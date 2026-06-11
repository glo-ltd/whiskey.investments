/* global React */
/* v2, Featured investment (one product) + Great Northern Distillery trust transfer. */
const WIg = window.WI2;
const DSg = window.WhiskeyInvestmentsDesignSystem_1f4fba || {};

function FeaturedCask() {
  const { Section, Eyebrow, Icon, fmtGBP } = WIg;
  const { Button, Badge, Avatar } = DSg;
  const specs = [
    ["Distillery", "Great Northern Distillery, Ireland"],
    ["Product", "AB2 Irish Single Malt cask"],
    ["Fill", "Second fill, a proven performer"],
    ["Maturation window", "5–8 year sweet spot"],
    ["Format", "Sold by the crate of 6 casks"],
    ["Storage", "5-year insured bonded storage included"],
    ["Provenance", "Fully traceable · unique cask ID · certificate"],
  ];
  const reasons = [
    {
      icon: "shield-check", title: "Lower cask risk",
      body: "An AB2 cask has already been used once, successfully. Casks with structural issues, excessive leakage or poor performance are removed from circulation rather than reused, so a second-fill cask is a proven performer, with a lower risk of spirit loss than a fresh AB1.",
    },
    {
      icon: "droplets", title: "A smaller angel’s share",
      body: "Evaporation and absorption into the wood are maturation’s biggest costs. AB2 casks generally absorb less liquid than fresh oak, preserving more spirit over time, more saleable whiskey at maturity, and potentially higher returns.",
    },
    {
      icon: "calendar-range", title: "The 5–8 year sweet spot",
      body: "Irish single malt tends to hit its stride between roughly five and eight years, long enough for significant maturation, short enough to avoid drawn-out holding periods, with strong demand from bottlers and brand owners at exit.",
    },
    {
      icon: "award", title: "The category that sells",
      body: "Single malt is the most recognised category in premium whiskey, sought after by investors, collectors and independent bottlers. Asked what he’d buy himself, GND’s own planner picks malt over grain: an easier story to tell, and an easier cask to resell.",
    },
    {
      icon: "factory", title: "Distillery scale & reputation",
      body: "Great Northern is one of Ireland’s largest independent distilleries, multiple whiskey styles, hundreds of thousands of casks in bond, founded by the team behind the revival of Irish whiskey, including the Teeling family. Proven production, consistent quality, global demand for GND spirit.",
    },
    {
      icon: "fingerprint", title: "Direct distillery provenance",
      body: "Traceability is the cask market’s biggest worry. Every AB2 cask comes with a clear origin, a known producer and verified production records, a provenance story that becomes particularly valuable when you come to resell.",
    },
    {
      icon: "scale", title: "Excellent cost-to-value ratio",
      body: "At £2,000 a cask, the AB2 offers a compelling balance between acquisition cost and maturation potential, a working asset priced for upside, not a prestige markup.",
    },
    {
      icon: "boxes", title: "Simple, scalable, consistent",
      body: "One carefully chosen cask keeps the offer easy to understand, no confusing menu of types, ages and pricing structures. A cleaner buying journey that’s easier to compare, track, explain and resell at scale.",
    },
  ];
  return (
    <Section id="cask" bg="white">
      <div className="wi-cask-grid">
        {/* Image */}
        <div style={{ position: "relative" }}>
          <image-slot id="featured-cask" shape="rounded" radius="24" placeholder="Drop the AB2 cask photo"
            style={{ display: "block", width: "100%", height: "460px", boxShadow: "var(--shadow-lg)", background: "var(--surface-tint)" }}></image-slot>
          <div style={{ position: "absolute", top: 18, left: 18 }}>
            {Badge ? <Badge tone="action">Featured investment</Badge> : null}
          </div>
        </div>
        {/* Details */}
        <div>
          <Eyebrow>The cask</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(30px, 4vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--text-strong)", margin: "14px 0 0" }}>
            One cask. One price.<br />No catalogue.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16.5, lineHeight: 1.6, color: "var(--text-muted)", margin: "16px 0 26px", maxWidth: 460 }}>
            We offer a single product, the GND AB2 Irish Single Malt Cask, selected with the distillery’s own planning team for its balance of risk, maturation potential and resale value.
          </p>
          <div style={{ borderTop: "1px solid var(--line)" }}>
            {specs.map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 18, padding: "12px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)", flex: "0 0 auto" }}>{k}</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5, color: "var(--text-strong)", textAlign: "right" }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 24, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34, letterSpacing: "-0.02em", color: "var(--text-strong)" }}>{fmtGBP(2000)}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--text-subtle)" }}>per cask · {fmtGBP(12000)} per crate</div>
            </div>
            {Button ? <Button variant="action" size="lg" iconRight={<Icon name="arrow-right" size={18} />} onClick={() => WIg.scrollToId("calculator")}>Use our calculator</Button> : null}
          </div>
        </div>
      </div>

      {/* Why the AB2, distillery rationale */}
      <div style={{ marginTop: 88 }}>
        <div className="wi-ab2-head">
          <div>
            <Eyebrow>Why this cask</Eyebrow>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px, 3.2vw, 34px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "var(--text-strong)", margin: "12px 0 0" }}>
            Why the AB2 malt cask makes sense
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, background: "var(--teal-100)", borderRadius: 999, padding: "10px 20px 10px 12px" }}>
            {Avatar ? <Avatar name="David Oliver" tone="teal" size="md" /> : null}
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "var(--text-strong)" }}>Insights from David Oliver</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-muted)" }}>Senior Inventory &amp; Scheduling Planner · Great Northern Distillery</div>
            </div>
          </div>
        </div>
        <div className="wi-compare-grid" style={{ marginTop: 32 }}>
          {reasons.map((r, i) => (
            <div key={r.title} className="wi-lift" style={{ background: "var(--teal-100)", borderRadius: "var(--radius-lg)", padding: "26px 28px", position: "relative", overflow: "hidden" }}>
              <span style={{ position: "absolute", top: 14, right: 20, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 44, lineHeight: 1, color: "rgba(40,61,79,0.08)" }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ width: 48, height: 48, borderRadius: 13, background: "var(--white)", boxShadow: "var(--shadow-xs)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <Icon name={r.icon} size={23} color="var(--teal-600)" strokeWidth={1.9} />
              </span>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, color: "var(--text-strong)", margin: "0 0 9px", letterSpacing: "-0.01em" }}>{r.title}</h4>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* Click-to-play GND story video. Nothing is fetched until the user presses play (preload="none" + src attached on first play). */
function GndVideo() {
  const { Icon } = WIg;
  const [playing, setPlaying] = React.useState(false);
  const vidRef = React.useRef(null);
  const start = () => {
    setPlaying(true);
    const v = vidRef.current;
    if (v) {
      if (!v.getAttribute("src")) v.setAttribute("src", "assets/gnd-story.mp4");
      v.play();
    }
  };
  return (
    <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: "var(--navy-900)", border: "1px solid rgba(255,255,255,0.28)", boxShadow: "var(--shadow-lg)", aspectRatio: "16 / 9", alignSelf: "center", width: "100%" }}>
      <video ref={vidRef} preload="none" controls={playing} playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}></video>
      {!playing ? (
        <button onClick={start} aria-label="Play the GND story video"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, background: "linear-gradient(160deg, var(--navy-800) 0%, var(--navy-900) 100%)", color: "#fff" }}>
          <span style={{ width: 76, height: 76, borderRadius: 999, background: "var(--coral-500)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-action)", paddingLeft: 6 }}>
            <Icon name="play" size={30} color="#fff" fill />
          </span>
          <span style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, letterSpacing: "-0.01em" }}>Watch the GND story</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "rgba(255,255,255,.65)" }}>Inside Ireland’s largest independent distillery · 2 min</span>
          </span>
        </button>
      ) : null}
    </div>
  );
}

function Distillery() {
  const { Section, Eyebrow, Icon } = WIg;
  const { Button } = DSg;
  const stats = [
    { value: "No. 1", label: "Ireland’s largest independent distillery" },
    { value: "Cooley & Kilbeggan", label: "Founded by the team behind two of Ireland’s great whiskey houses" },
    { value: "500,000+", label: "Casks maturing in bonded warehouses" },
  ];
  return (
    <Section bg="teal" pad="88px 24px">
      <div className="wi-gnd-grid">
        <div>
          <Eyebrow color="rgba(255,255,255,.7)">Fulfilled by</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(30px, 4vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff", margin: "14px 0 0" }}>
            Backed by Great Northern Distillery
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,.85)", margin: "16px 0 0", maxWidth: 480 }}>
            Your casks are made, stored, insured, certified and resold by the distillery itself, not a middleman. Their scale and track record become your security.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, margin: "28px 0 30px" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ width: 4, alignSelf: "stretch", borderRadius: 2, background: "rgba(255,255,255,0.45)", flex: "0 0 auto" }} />
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, letterSpacing: "-0.01em", color: "#fff" }}>{s.value}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.45, color: "rgba(255,255,255,.78)", marginTop: 2 }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
          {Button ? (
            <Button variant="dark" size="md" iconRight={<Icon name="external-link" size={16} />}
              onClick={() => window.open("https://www.gndireland.com/history", "_blank", "noopener")}>
              The GND Story
            </Button>
          ) : null}
        </div>

        {/* GND story video, loads only when played */}
        <GndVideo />
      </div>
    </Section>
  );
}

window.WI2Sections = Object.assign(window.WI2Sections || {}, { FeaturedCask, Distillery });
