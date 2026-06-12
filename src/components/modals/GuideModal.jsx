import { useState, useEffect } from 'react';
import Icon from '../primitives/Icon.jsx';
import Button from '../primitives/Button.jsx';
import Input from '../primitives/Input.jsx';
import { useT, fmt } from '../../i18n/index.jsx';

export default function GuideModal() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ first: '', last: '', email: '', phone: '' });

  useEffect(() => {
    const h = () => { setOpen(true); setSent(false); };
    document.addEventListener('wi2-open-guide', h);
    return () => document.removeEventListener('wi2-open-guide', h);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const emailOk = /.+@.+\..+/.test(form.email);
  const ready = form.first.trim() && form.last.trim() && emailOk && form.phone.trim();

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        background: 'rgba(29,46,60,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.guide.ariaLabel}
        style={{
          width: 'min(460px, 100%)',
          maxHeight: 'min(86vh, 680px)',
          background: 'var(--white)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'wi-chat-in .26s var(--ease-emphasis)',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid var(--line)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: '0 0 auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: 'var(--teal-100)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon name={sent ? 'check' : 'download'} size={19} color="var(--teal-600)" />
            </span>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 16.5,
                  color: 'var(--text-strong)',
                }}
              >
                {sent ? t.guide.titleDone : t.guide.titleOpen}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  color: 'var(--text-subtle)',
                }}
              >
                {sent ? t.guide.subDone : t.guide.subOpen}
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label={t.guide.close}
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              border: 'none',
              background: 'var(--surface-tint)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-body)',
            }}
          >
            <Icon name="x" size={17} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '24px', overflowY: 'auto' }}>
          {sent ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 12,
                padding: '14px 0 6px',
              }}
            >
              <span
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 999,
                  background: 'var(--teal-100)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon name="mail-check" size={26} color="var(--teal-600)" />
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: 'var(--text-body)',
                  margin: 0,
                  maxWidth: 320,
                }}
              >
                {fmt(t.guide.successBody, { name: form.first.trim(), email: form.email })}
              </p>
              <Button
                variant="primary"
                size="md"
                onClick={() => setOpen(false)}
                style={{ marginTop: 8 }}
              >
                {t.guide.done}
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (ready) setSent(true);
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
            >
              <div className="wi-form-2col">
                <Input
                  label={t.guide.firstName}
                  placeholder={t.guide.firstPlaceholder}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, first: e.target.value }))
                  }
                />
                <Input
                  label={t.guide.lastName}
                  placeholder={t.guide.lastPlaceholder}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, last: e.target.value }))
                  }
                />
              </div>
              <Input
                label={t.guide.email}
                icon="mail"
                placeholder={t.guide.emailPlaceholder}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
              />
              <Input
                label={t.guide.phone}
                icon="phone"
                placeholder={t.guide.phonePlaceholder}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
              />
              <Button
                variant="action"
                size="lg"
                block
                disabled={!ready}
                iconLeft={<Icon name="download" size={18} />}
                type="submit"
                style={{ marginTop: 4 }}
              >
                {t.guide.cta}
              </Button>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  lineHeight: 1.5,
                  color: 'var(--text-subtle)',
                  margin: 0,
                  textAlign: 'center',
                }}
              >
                {t.guide.privacyNote}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
