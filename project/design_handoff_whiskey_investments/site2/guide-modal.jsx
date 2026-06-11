/* global React */
/* v2, Guide modal: capture first name, last name, email, phone to send the investment guide. */
const { useState: useStateG, useEffect: useEffectG } = React;
const WIgm = window.WI2;
const DSgm = window.WhiskeyInvestmentsDesignSystem_1f4fba || {};

function GuideModal() {
  const { Icon } = WIgm;
  const { Button, Input } = DSgm;
  const [open, setOpen] = useStateG(false);
  const [sent, setSent] = useStateG(false);
  const [form, setForm] = useStateG({ first: "", last: "", email: "", phone: "" });

  useEffectG(() => {
    const h = () => { setOpen(true); setSent(false); };
    document.addEventListener("wi2-open-guide", h);
    return () => document.removeEventListener("wi2-open-guide", h);
  }, []);

  useEffectG(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;
  const val = (e) => (e && e.target ? e.target.value : e);
  const emailOk = /.+@.+\..+/.test(form.email);
  const ready = form.first.trim() && form.last.trim() && emailOk && form.phone.trim();

  return (
    <div onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
      style={{ position: "fixed", inset: 0, zIndex: 90, background: "rgba(29,46,60,0.6)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div role="dialog" aria-modal="true" aria-label="Download the investment guide"
        style={{ width: "min(460px, 100%)", maxHeight: "min(86vh, 680px)", background: "var(--white)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", display: "flex", flexDirection: "column", overflow: "hidden", animation: "wi-chat-in .26s var(--ease-emphasis)" }}>
        {/* Header */}
        <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "space-between", flex: "0 0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 38, height: 38, borderRadius: 10, background: "var(--teal-100)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={sent ? "check" : "download"} size={19} color="var(--teal-600)" />
            </span>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16.5, color: "var(--text-strong)" }}>{sent ? "Guide on its way" : "Download the guide"}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-subtle)" }}>{sent ? "Check your inbox" : "Everything on this page, in your inbox"}</div>
            </div>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close"
            style={{ width: 34, height: 34, borderRadius: 10, border: "none", background: "var(--surface-tint)", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--text-body)" }}>
            <Icon name="x" size={17} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "24px", overflowY: "auto" }}>
          {sent ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 12, padding: "14px 0 6px" }}>
              <span style={{ width: 56, height: 56, borderRadius: 999, background: "var(--teal-100)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="mail-check" size={26} color="var(--teal-600)" />
              </span>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6, color: "var(--text-body)", margin: 0, maxWidth: 320 }}>
                Thanks {form.first.trim()}. The investment guide is on its way to <strong>{form.email}</strong>.
              </p>
              {Button ? <Button variant="primary" size="md" onClick={() => setOpen(false)} style={{ marginTop: 8 }}>Done</Button> : null}
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (ready) setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div className="wi-form-2col">
                {Input ? <Input label="First name" placeholder="Alex" onChange={(e) => setForm((f) => ({ ...f, first: val(e) }))} /> : null}
                {Input ? <Input label="Last name" placeholder="Murphy" onChange={(e) => setForm((f) => ({ ...f, last: val(e) }))} /> : null}
              </div>
              {Input ? <Input label="Email" icon="mail" placeholder="you@example.com" onChange={(e) => setForm((f) => ({ ...f, email: val(e) }))} /> : null}
              {Input ? <Input label="Phone number" icon="phone" placeholder="+44…" onChange={(e) => setForm((f) => ({ ...f, phone: val(e) }))} /> : null}
              {Button ? (
                <Button variant="action" size="lg" block disabled={!ready} iconLeft={<Icon name="download" size={18} />} style={{ marginTop: 4 }}>
                  Send me the guide
                </Button>
              ) : null}
              <p style={{ fontFamily: "var(--font-body)", fontSize: 11, lineHeight: 1.5, color: "var(--text-subtle)", margin: 0, textAlign: "center" }}>
                We'll only use your details to send the guide and follow up about your enquiry. No spam, unsubscribe any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

window.WI2Sections = Object.assign(window.WI2Sections || {}, { GuideModal });
