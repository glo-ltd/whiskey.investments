/* global React */
/* v2, Trust & proof + FAQ + final reserve card + AI chatbot (new model context). */
const { useState: useStateT2, useEffect: useEffectT2, useRef: useRefT2 } = React;
const WIt2 = window.WI2;
const DSt2 = window.WhiskeyInvestmentsDesignSystem_1f4fba || {};

function TrustProof() {
  const { Section, SectionHead, Icon } = WIt2;
  const { Card } = DSt2;
  const proofs = [
    { icon: "badge-check", title: "Verifiable ownership", body: "A unique cask ID and a distillery-issued certificate for every cask, checkable, traceable, yours." },
    { icon: "warehouse", title: "5-year insured storage", body: "Bonded warehousing with insurance included for five years, with fire, theft and damage covered." },
    { icon: "handshake", title: "Resale support", body: "Exit through the distillery's resale support. GND supplies 60% of all Irish labels worldwide." },
  ];
  const reviews = [
    { quote: "Clear pricing, no phone calls, and the certificate arrived exactly as described.", who: "Verified investor · 5 crates" },
    { quote: "The calculator told me everything before I paid a penny. That’s how it should work.", who: "Verified investor · 10 crates" },
  ];
  return (
    <Section bg="white">
      <SectionHead eyebrow="Trust & proof" title="Built to be checked" intro="Everything we claim is verifiable, on your certificate, in the bonded warehouse records, and with the distillery itself." align="center" />
      <div className="wi-grid-3" style={{ marginTop: 52 }}>
        {proofs.map((p) => (
          <Card key={p.title} variant="default" padding="28px" className="wi-lift" style={{ height: "100%" }}>
            <span style={{ width: 52, height: 52, borderRadius: 14, background: "var(--teal-100)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <Icon name={p.icon} size={25} color="var(--teal-600)" strokeWidth={1.9} />
            </span>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, color: "var(--text-strong)", margin: "0 0 9px" }}>{p.title}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.55, color: "var(--text-muted)", margin: 0 }}>{p.body}</p>
          </Card>
        ))}
      </div>

      {/* Reviews */}
      <div className="wi-compare-grid" style={{ marginTop: 24 }}>
        {reviews.map((r) => (
          <div key={r.who} className="wi-lift" style={{ background: "var(--teal-100)", borderRadius: "var(--radius-lg)", padding: "24px 26px" }}>
            <div style={{ display: "flex", gap: 3, marginBottom: 12 }}>
              {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={16} color="var(--coral-500)" fill />)}
            </div>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16.5, lineHeight: 1.45, color: "var(--text-strong)", margin: "0 0 10px" }}>“{r.quote}”</p>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--text-subtle)" }}>{r.who}</div>
          </div>
        ))}
      </div>

      {/* Risk panel, ASA/CAP */}
      <div style={{ marginTop: 24, border: "1.5px solid var(--coral-300)", background: "var(--coral-200)", borderRadius: "var(--radius-lg)", padding: "22px 26px", display: "flex", gap: 16, alignItems: "flex-start" }}>
        <Icon name="alert-triangle" size={22} color="var(--coral-600)" style={{ marginTop: 2 }} />
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15.5, color: "var(--text-strong)", marginBottom: 6 }}>Understand the risks before you reserve</div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>
            The value of whiskey casks can go down as well as up, and past performance is not a guide to future returns. Whiskey cask investment is not regulated in the UK, so there is no FSCS protection or FOS recourse. Returns are not guaranteed, exits depend on market demand, and the 10% reservation deposit is non-refundable because casks are made to order. Never invest more than you can afford to lose.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Faq() {
  const { Section, SectionHead, Icon, FAQS2, scrollToId } = WIt2;
  const { Card, Button } = DSt2;
  const [open, setOpen] = useStateT2(0);
  return (
    <Section id="faq" bg="mint">
      <div className="wi-faq-grid">
        <div>
          <SectionHead eyebrow="FAQ" title="Asked, answered" intro="Ownership, storage, resale, risk and tax, plainly answered. Anything else, ask the assistant." />
          <Card variant="dark" padding="26px" style={{ marginTop: 30 }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "#fff", margin: "0 0 10px" }}>Ready to reserve?</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,.72)", margin: "0 0 18px" }}>
              Pay a 10% reservation deposit today. It’s non-refundable, because your casks are made to order. Great Northern Distillery collects the balance and handles everything else.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {Button ? <Button variant="action" size="md" iconRight={<Icon name="arrow-right" size={17} />} onClick={() => scrollToId("calculator")}>Use our calculator</Button> : null}
              {Button ? <Button variant="secondary" size="md" iconLeft={<Icon name="message-circle" size={17} />} onClick={() => document.dispatchEvent(new CustomEvent("wi-open-chat"))}>Ask the assistant</Button> : null}
            </div>
          </Card>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS2.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} style={{ background: "var(--white)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-xs)", overflow: "hidden" }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "19px 22px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15.5, color: "var(--text-strong)" }}>{f.q}</span>
                  <span style={{ transition: "transform .25s var(--ease-standard)", transform: isOpen ? "rotate(180deg)" : "none", flex: "0 0 auto", color: "var(--teal-600)" }}>
                    <Icon name="chevron-down" size={20} />
                  </span>
                </button>
                <div style={{ maxHeight: isOpen ? 360 : 0, overflow: "hidden", transition: "max-height .3s var(--ease-standard)" }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6, color: "var(--text-muted)", margin: 0, padding: "0 22px 20px" }}>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- AI chatbot (new business model context) ---------------- */
const CHAT_CONTEXT2 = `You are the AI assistant for Whiskey.Investments, a digital reservation storefront for Great Northern Distillery (GND) Irish whiskey casks. Be warm, concise, confident, plain-spoken. British English. No emoji. Keep answers to 1–3 short paragraphs.

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

function Chatbot() {
  const { Icon } = WIt2;
  const [open, setOpen] = useStateT2(false);
  const [input, setInput] = useStateT2("");
  const [busy, setBusy] = useStateT2(false);
  const [messages, setMessages] = useStateT2([
    { role: "assistant", content: "Hello, I’m the Whiskey.Investments assistant. Ask me anything about reserving, owning or reselling casks." },
  ]);
  const scrollRef = useRefT2(null);

  useEffectT2(() => {
    const h = () => setOpen(true);
    document.addEventListener("wi-open-chat", h);
    return () => document.removeEventListener("wi-open-chat", h);
  }, []);
  useEffectT2(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open, busy]);

  const send = async (override) => {
    const text = (typeof override === "string" ? override : input).trim();
    if (!text || busy) return;
    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const convo = next.map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`).join("\n");
      const reply = await window.claude.complete({
        messages: [{ role: "user", content: CHAT_CONTEXT2 + "\n\nConversation so far:\n" + convo + "\n\nReply as the assistant to the last user message. Do not prefix with 'Assistant:'." }],
      });
      setMessages((m) => [...m, { role: "assistant", content: (reply || "").trim() || "Sorry, I couldn’t reach the knowledge base just now. Please try again in a moment." }]);
    } catch (e) {
      setMessages((m) => [...m, { role: "assistant", content: "I’m having trouble connecting right now. Please use the enquiry form in the footer and we’ll be in touch." }]);
    } finally {
      setBusy(false);
    }
  };

  const suggestions = ["Why is the deposit non-refundable?", "Who collects the other 90%?", "How does the crate discount work?"];

  return (
    <React.Fragment>
      <button onClick={() => setOpen((o) => !o)} aria-label="Open chat assistant"
        style={{ position: "fixed", right: 24, bottom: 24, zIndex: 80, width: 60, height: 60, borderRadius: "50%", background: "var(--coral-500)", border: "none", cursor: "pointer", color: "#fff", boxShadow: "var(--shadow-action)", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "transform .2s var(--ease-emphasis)" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
        <Icon name={open ? "x" : "message-circle"} size={26} />
      </button>

      {open ? (
        <div style={{ position: "fixed", right: 24, bottom: 96, zIndex: 80, width: "min(380px, calc(100vw - 32px))", height: "min(560px, calc(100vh - 140px))", background: "var(--white)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid var(--line)", animation: "wi-chat-in .26s var(--ease-emphasis)" }}>
          <div style={{ background: "var(--navy-800)", padding: "16px 18px", display: "flex", alignItems: "center", gap: 11 }}>
            <span style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(98,212,197,0.18)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="sparkles" size={19} color="var(--mint)" />
            </span>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "#fff" }}>Whiskey.Investments assistant</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--mint)", display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--mint)" }} /> Online · replies instantly
              </div>
            </div>
          </div>
          <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "18px", display: "flex", flexDirection: "column", gap: 12, background: "var(--teal-100)" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ alignSelf: m.role === "user" ? "flex-end" : "flex-start", maxWidth: "86%" }}>
                <div style={{ padding: "11px 14px", borderRadius: 14, fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.5, whiteSpace: "pre-wrap", background: m.role === "user" ? "var(--teal-500)" : "var(--white)", color: m.role === "user" ? "#fff" : "var(--text-body)", borderBottomRightRadius: m.role === "user" ? 4 : 14, borderBottomLeftRadius: m.role === "user" ? 14 : 4, boxShadow: "var(--shadow-xs)" }}>
                  {m.content}
                </div>
              </div>
            ))}
            {busy ? (
              <div style={{ alignSelf: "flex-start", padding: "12px 16px", borderRadius: 14, background: "var(--white)", boxShadow: "var(--shadow-xs)" }}>
                <span className="wi-typing"><i></i><i></i><i></i></span>
              </div>
            ) : null}
            {messages.length <= 1 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
                {suggestions.map((s) => (
                  <button key={s} onClick={() => { setInput(""); send(s); }}
                    style={{ textAlign: "left", padding: "10px 13px", borderRadius: 12, border: "1px solid var(--teal-300)", background: "rgba(255,255,255,.7)", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--teal-700)", fontWeight: 500 }}>
                    {s}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <div style={{ padding: "12px", borderTop: "1px solid var(--line)", display: "flex", gap: 8, alignItems: "center" }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") send(); }} placeholder="Ask a question…"
              style={{ flex: 1, border: "1px solid var(--line)", borderRadius: 999, padding: "11px 16px", fontFamily: "var(--font-body)", fontSize: 14, outline: "none", color: "var(--text-body)" }} />
            <button onClick={() => send()} disabled={busy || !input.trim()} aria-label="Send"
              style={{ width: 42, height: 42, borderRadius: "50%", border: "none", cursor: busy || !input.trim() ? "default" : "pointer", background: busy || !input.trim() ? "var(--navy-300)" : "var(--coral-500)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}>
              <Icon name="send" size={18} />
            </button>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}

window.WI2Sections = Object.assign(window.WI2Sections || {}, { TrustProof, Faq, Chatbot });
