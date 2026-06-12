import { useState, useEffect } from 'react';
import Icon from '../primitives/Icon.jsx';
import Button from '../primitives/Button.jsx';
import Badge from '../primitives/Badge.jsx';
import Input from '../primitives/Input.jsx';
import Select from '../primitives/Select.jsx';
import Checkbox from '../primitives/Checkbox.jsx';
import { priceOrder, fmtGBP } from '../../data/index.js';
import { useT, fmt } from '../../i18n/index.jsx';

export default function ReserveModal() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [crates, setCrates] = useState(5);
  const [paid, setPaid] = useState(false);
  const [orderRef, setOrderRef] = useState('');
  const [form, setForm] = useState({
    first: '',
    last: '',
    email: '',
    phone: '',
    address1: '',
    city: '',
    postcode: '',
  });
  const [passport, setPassport] = useState('');
  const [ackDeposit, setAckDeposit] = useState(false);
  const [ackRisk, setAckRisk] = useState(false);
  const [ackFunds, setAckFunds] = useState(false);

  useEffect(() => {
    const h = (e) => {
      setOpen(true);
      setPaid(false);
      if (e.detail && e.detail.crates) setCrates(e.detail.crates);
      setOrderRef('WI-2026-' + String(Math.floor(1000 + Math.random() * 9000)));
    };
    document.addEventListener('wi2-open-reserve', h);
    return () => document.removeEventListener('wi2-open-reserve', h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const o = priceOrder(crates);
  const emailOk = /.+@.+\..+/.test(form.email);
  const ready =
    form.first.trim() &&
    form.last.trim() &&
    emailOk &&
    form.address1.trim() &&
    ackDeposit &&
    ackRisk &&
    ackFunds;

  const stepBtn = (dir) => (
    <button
      onClick={() => setCrates((c) => Math.max(1, Math.min(60, c + dir)))}
      aria-label={dir > 0 ? t.reserve.addCrate : t.reserve.removeCrate}
      style={{
        width: 38,
        height: 38,
        borderRadius: 10,
        border: '1px solid var(--line)',
        background: 'var(--white)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--teal-700)',
      }}
    >
      <Icon name={dir > 0 ? 'plus' : 'minus'} size={18} />
    </button>
  );

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
        style={{
          width: 'min(540px, 100%)',
          maxHeight: 'min(86vh, 760px)',
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
              <Icon name={paid ? 'check' : 'lock'} size={19} color="var(--teal-600)" />
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
                {paid ? t.reserve.titleDone : t.reserve.titleOpen}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  color: 'var(--text-subtle)',
                }}
              >
                {t.reserve.orderRef} · {orderRef}
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label={t.reserve.close}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-muted)',
            }}
          >
            <Icon name="x" size={22} />
          </button>
        </div>

        {paid ? (
          /* Success */
          <div style={{ padding: '30px 28px 30px', overflowY: 'auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <span
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: 'var(--teal-100)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}
              >
                <Icon name="check-circle" size={36} color="var(--teal-600)" strokeWidth={1.8} />
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 24,
                  color: 'var(--text-strong)',
                  margin: '0 0 8px',
                }}
              >
                {fmt(t.reserve.successTitle, { amount: fmtGBP(o.deposit) })}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14.5,
                  lineHeight: 1.55,
                  color: 'var(--text-muted)',
                  margin: '0 auto',
                  maxWidth: 380,
                }}
              >
                {fmt(t.reserve.successBody, { casks: o.casks, ref: orderRef, email: form.email || t.reserve.successYou })}
              </p>
            </div>
            <div
              style={{
                background: 'var(--teal-100)',
                borderRadius: 'var(--radius-lg)',
                padding: '20px 22px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 14.5,
                  color: 'var(--text-strong)',
                  marginBottom: 14,
                }}
              >
                {t.reserve.nextTitle}
              </div>
              {[
                ['send', t.reserve.nextSteps[0]],
                ['receipt', fmt(t.reserve.nextSteps[1], { balance: fmtGBP(o.balance) })],
                ['award', t.reserve.nextSteps[2]],
              ].map(([ic, tx]) => (
                <div
                  key={ic}
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'flex-start',
                    padding: '7px 0',
                    fontFamily: 'var(--font-body)',
                    fontSize: 13.5,
                    lineHeight: 1.5,
                    color: 'var(--text-body)',
                  }}
                >
                  <Icon name={ic} size={17} color="var(--teal-600)" style={{ marginTop: 2 }} />
                  <span>{tx}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <Button variant="primary" size="md" block onClick={() => setOpen(false)}>
                {t.reserve.done}
              </Button>
            </div>
          </div>
        ) : (
          /* Checkout */
          <div style={{ padding: '22px 24px 24px', overflowY: 'auto' }}>
            {/* Order summary */}
            <div
              style={{
                background: 'var(--teal-100)',
                borderRadius: 'var(--radius-lg)',
                padding: '18px 20px',
                marginBottom: 22,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 12,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  {stepBtn(-1)}
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 19,
                      color: 'var(--text-strong)',
                      minWidth: 130,
                      textAlign: 'center',
                    }}
                  >
                    {crates} {crates === 1 ? t.reserve.crate_one : t.reserve.crate_other} · {o.casks} {t.reserve.casks}
                  </span>
                  {stepBtn(1)}
                </div>
                <Badge tone="brand">
                  {o.tier.name}
                  {o.tier.disc
                    ? ` −${(o.tier.disc * 100).toFixed(1).replace('.0', '')}%`
                    : ''}
                </Badge>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-body)',
                  fontSize: 13.5,
                  color: 'var(--text-muted)',
                  padding: '6px 0',
                  borderBottom: '1px solid rgba(40,61,79,.08)',
                }}
              >
                <span>{fmt(t.reserve.orderValuePerCask, { price: fmtGBP(o.tier.perCask) })}</span>
                <span
                  style={{ fontWeight: 600, color: 'var(--text-strong)' }}
                >
                  {fmtGBP(o.orderValue)}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-body)',
                  fontSize: 13.5,
                  color: 'var(--text-muted)',
                  padding: '8px 0 0',
                }}
              >
                <span style={{ fontWeight: 600, color: 'var(--text-strong)' }}>
                  {t.reserve.depositDue}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 17,
                    color: 'var(--coral-600)',
                  }}
                >
                  {fmtGBP(o.deposit)}
                </span>
              </div>
            </div>

            {/* Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="wi-form-2col">
                <Input
                  label={t.reserve.firstName}
                  placeholder={t.reserve.passportPlaceholder}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, first: e.target.value }))
                  }
                />
                <Input
                  label={t.reserve.lastName}
                  placeholder={t.reserve.passportPlaceholder}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, last: e.target.value }))
                  }
                />
              </div>
              <div className="wi-form-2col">
                <Input
                  label={t.reserve.email}
                  placeholder={t.reserve.emailPlaceholder}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                />
                <Input
                  label={t.reserve.phone}
                  placeholder={t.reserve.phonePlaceholder}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                />
              </div>
              <Input
                label={t.reserve.billingAddress}
                placeholder={t.reserve.addressPlaceholder}
                onChange={(e) =>
                  setForm((f) => ({ ...f, address1: e.target.value }))
                }
              />
              <div className="wi-form-2col">
                <Input
                  label={t.reserve.city}
                  placeholder={t.reserve.cityPlaceholder}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, city: e.target.value }))
                  }
                />
                <Input
                  label={t.reserve.postcode}
                  placeholder={t.reserve.postcodePlaceholder}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, postcode: e.target.value }))
                  }
                />
              </div>
              <Select label={t.reserve.country} options={t.reserve.countries} />

              {/* Passport upload */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: 'var(--text-body)',
                    marginBottom: 7,
                  }}
                >
                  {t.reserve.idLabel}
                </div>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '14px 16px',
                    border: '1.5px dashed var(--teal-300)',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--teal-100)',
                    cursor: 'pointer',
                  }}
                >
                  <Icon
                    name={passport ? 'file-check' : 'upload'}
                    size={20}
                    color="var(--teal-600)"
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13.5,
                      color: passport ? 'var(--teal-700)' : 'var(--text-muted)',
                      fontWeight: passport ? 600 : 400,
                    }}
                  >
                    {passport || t.reserve.idUpload}
                  </span>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    style={{ display: 'none' }}
                    onChange={(e) =>
                      setPassport(
                        e.target.files && e.target.files[0]
                          ? e.target.files[0].name
                          : ''
                      )
                    }
                  />
                </label>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 11.5,
                    color: 'var(--text-subtle)',
                    marginTop: 6,
                  }}
                >
                  {t.reserve.idNote}
                </div>
              </div>

              {/* Acknowledgements */}
              <div
                style={{
                  background: 'var(--paper)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <Checkbox
                  label={
                    <span>
                      {t.reserve.ackDeposit1}{' '}
                      <a
                        href="/legal/terms"
                        target="_blank"
                        rel="noopener"
                        onClick={(e) => e.stopPropagation()}
                        style={{ color: 'var(--teal-700)', fontWeight: 500 }}
                      >
                        {t.reserve.ackDepositLink}
                      </a>
                      .
                    </span>
                  }
                  onChange={setAckDeposit}
                />
                <Checkbox label={t.reserve.ackRisk} onChange={setAckRisk} />
                <Checkbox label={t.reserve.ackFunds} onChange={setAckFunds} />
              </div>

              <Button
                variant="action"
                size="lg"
                block
                disabled={!ready}
                iconLeft={<Icon name="lock" size={17} />}
                onClick={() => setPaid(true)}
              >
                {fmt(t.reserve.payCta, { amount: fmtGBP(o.deposit) })}
              </Button>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  color: 'var(--text-subtle)',
                }}
              >
                <Icon name="landmark" size={14} /> {t.reserve.trustlyNote}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
