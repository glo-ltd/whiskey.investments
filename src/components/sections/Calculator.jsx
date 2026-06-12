import { useState, useEffect, useRef } from 'react';
import Section from '../layout/Section.jsx';
import Eyebrow from '../layout/Eyebrow.jsx';
import Icon from '../primitives/Icon.jsx';
import Button from '../primitives/Button.jsx';
import Badge from '../primitives/Badge.jsx';
import Card from '../primitives/Card.jsx';
import { priceOrder, TIERS2, GROWTH_RATE, CASK_PRICE, fmtGBP } from '../../data/index.js';

function useCountUp(target, dur = 450) {
  const [val, setVal] = useState(target);
  const fromRef = useRef(target);
  const rafRef = useRef(null);

  useEffect(() => {
    const from = fromRef.current;
    const start = performance.now();
    cancelAnimationFrame(rafRef.current);
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(from + (target - from) * eased);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else fromRef.current = target;
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, dur]);

  return val;
}

export default function Calculator() {
  const [crates, setCrates] = useState(5);
  const [years, setYears] = useState(8);

  const o = priceOrder(crates);
  const futureValue = o.orderValue * Math.pow(1 + GROWTH_RATE, years);
  const aDeposit = useCountUp(o.deposit);
  const aOrder = useCountUp(o.orderValue);
  const aFuture = useCountUp(futureValue);

  const cratePct = ((crates - 5) / (100 - 5)) * 100;
  const yearPct = ((years - 5) / (8 - 5)) * 100;

  const reserve = () =>
    document.dispatchEvent(
      new CustomEvent('wi2-open-reserve', { detail: { crates } })
    );

  return (
    <Section id="calculator" bg="navyDeep">
      <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
        <Eyebrow color="rgba(255,255,255,.55)">Cask calculator</Eyebrow>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(30px, 4vw, 44px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: '14px 0 0',
            color: '#fff',
          }}
        >
          Size your order. Watch the price fall.
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 17,
            lineHeight: 1.6,
            margin: '16px auto 0',
            color: 'rgba(255,255,255,.7)',
            maxWidth: 600,
          }}
        >
          Casks are {fmtGBP(CASK_PRICE)} each, sold by the crate of six. The more crates you reserve, the bigger the discount on your whole order.
        </p>
      </div>

      <div className="wi-calc2-grid" style={{ marginTop: 52 }}>
        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Crate slider */}
          <div
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 'var(--radius-lg)',
              padding: '26px 26px 22px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: 6,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 500,
                  color: 'rgba(255,255,255,.65)',
                }}
              >
                Your order
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 26,
                  letterSpacing: '-0.01em',
                  color: '#fff',
                }}
              >
                {crates} crate{crates === 1 ? '' : 's'}{' '}
                <span
                  style={{ fontSize: 16, fontWeight: 500, color: 'var(--mint)' }}
                >
                  = {o.casks} casks
                </span>
              </span>
            </div>
            <input
              className="calc-slider calc-slider-dark"
              type="range"
              min={5}
              max={100}
              step={1}
              value={crates}
              onChange={(e) => setCrates(Number(e.target.value))}
              aria-label="Crates"
              style={{
                background: `linear-gradient(to right, var(--mint) 0%, var(--mint) ${cratePct}%, rgba(255,255,255,.16) ${cratePct}%, rgba(255,255,255,.16) 100%)`,
                marginTop: 10,
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-body)',
                fontSize: 11.5,
                color: 'rgba(255,255,255,.45)',
                fontWeight: 500,
                marginTop: 10,
              }}
            >
              <span>5 crates · 30 casks</span>
              <span>100 crates · 600 casks</span>
            </div>
          </div>

          {/* Tier ladder */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                fontWeight: 500,
                color: 'rgba(255,255,255,.55)',
                marginBottom: 12,
              }}
            >
              Volume discount tiers
            </div>
            <div className="wi-tier-ladder">
              {TIERS2.map((t) => {
                const active = o.tier.name === t.name;
                return (
                  <button
                    key={t.name}
                    onClick={() => setCrates(t.min)}
                    style={{
                      flex: 1,
                      minWidth: 88,
                      padding: '12px 8px 11px',
                      borderRadius: 12,
                      cursor: 'pointer',
                      textAlign: 'center',
                      border: active
                        ? '1px solid var(--mint)'
                        : '1px solid rgba(255,255,255,0.12)',
                      background: active
                        ? 'rgba(98,212,197,0.15)'
                        : 'rgba(255,255,255,0.04)',
                      transition: 'all .2s var(--ease-standard)',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: 13,
                        color: active ? 'var(--mint)' : 'rgba(255,255,255,.75)',
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 11.5,
                        color: active
                          ? 'rgba(255,255,255,.85)'
                          : 'rgba(255,255,255,.45)',
                        marginTop: 3,
                      }}
                    >
                      {t.disc === 0
                        ? 'list price'
                        : `−${(t.disc * 100).toFixed(1).replace('.0', '')}%`}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 10.5,
                        color: 'rgba(255,255,255,.4)',
                        marginTop: 2,
                      }}
                    >
                      {t.max === 100
                        ? `${t.min}–100 crates`
                        : t.min === t.max
                        ? `${t.min} crate`
                        : `${t.min}–${t.max} crates`}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Holding period slider */}
          <div
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 'var(--radius-lg)',
              padding: '22px 26px 20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: 6,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 500,
                  color: 'rgba(255,255,255,.65)',
                }}
              >
                Holding period (for the estimate)
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 20,
                  color: '#fff',
                }}
              >
                {years} years
              </span>
            </div>
            <input
              className="calc-slider calc-slider-dark"
              type="range"
              min={5}
              max={8}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              aria-label="Holding period"
              style={{
                background: `linear-gradient(to right, var(--mint) 0%, var(--mint) ${yearPct}%, rgba(255,255,255,.16) ${yearPct}%, rgba(255,255,255,.16) 100%)`,
                marginTop: 10,
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-body)',
                fontSize: 11.5,
                color: 'rgba(255,255,255,.45)',
                fontWeight: 500,
                marginTop: 10,
              }}
            >
              <span>5 yrs</span>
              <span style={{ color: 'var(--mint)' }}>
                Irish malt sweet spot: 5–8 yrs
              </span>
              <span>8 yrs</span>
            </div>
          </div>
        </div>

        {/* Live receipt */}
        <Card
          variant="default"
          padding="0"
          style={{
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            alignSelf: 'start',
          }}
        >
          <div
            style={{
              padding: '24px 26px 18px',
              borderBottom: '1px solid var(--line)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 17,
                color: 'var(--text-strong)',
              }}
            >
              Your reservation
            </div>
            <Badge tone="brand" dot>
              {o.tier.name} tier
              {o.tier.disc
                ? ` · −${(o.tier.disc * 100).toFixed(1).replace('.0', '')}%`
                : ''}
            </Badge>
          </div>

          <div style={{ padding: '18px 26px 4px' }}>
            {[
              ['Casks', `${o.casks} (${crates} × 6)`],
              ['Price per cask', o.tier.disc ? null : fmtGBP(CASK_PRICE)],
              ['Order value', fmtGBP(Math.round(aOrder))],
              ['You save', o.saving > 0 ? fmtGBP(o.saving) : '£0'],
            ].map(([k, v]) =>
              k === 'Price per cask' && v === null ? (
                <div
                  key={k}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '11px 0',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      color: 'var(--text-muted)',
                    }}
                  >
                    {k}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: 15,
                      color: 'var(--text-strong)',
                    }}
                  >
                    <s
                      style={{
                        color: 'var(--text-subtle)',
                        fontWeight: 400,
                        marginRight: 8,
                        display: o.tier.disc ? 'inline' : 'none',
                      }}
                    >
                      {fmtGBP(CASK_PRICE)}
                    </s>
                    {fmtGBP(o.tier.perCask)}
                  </span>
                </div>
              ) : (
                <div
                  key={k}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '11px 0',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      color: 'var(--text-muted)',
                    }}
                  >
                    {k}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: 15,
                      color:
                        k === 'You save' && o.saving > 0
                          ? 'var(--teal-600)'
                          : 'var(--text-strong)',
                    }}
                  >
                    {v}
                  </span>
                </div>
              )
            )}

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 0 14px',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: 'var(--text-strong)',
                  }}
                >
                  Deposit due today (10%)
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 11.5,
                    color: 'var(--text-subtle)',
                    marginTop: 2,
                  }}
                >
                  Non-refundable, casks are made to order
                </div>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 30,
                  letterSpacing: '-0.02em',
                  color: 'var(--coral-600)',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {fmtGBP(Math.round(aDeposit))}
              </div>
            </div>

            <div
              style={{
                background: 'var(--teal-100)',
                borderRadius: 'var(--radius-md)',
                padding: '14px 16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 8,
                gap: 12,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  color: 'var(--text-muted)',
                }}
              >
                Est. value in {years} years
                <span style={{ color: 'var(--text-subtle)' }}>*</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 21,
                  color: 'var(--teal-600)',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {fmtGBP(Math.round(aFuture))}
              </div>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                lineHeight: 1.45,
                color: 'var(--text-subtle)',
                padding: '4px 0 10px',
              }}
            >
              Balance of {fmtGBP(o.balance)} is invoiced and collected directly by Great Northern Distillery.
            </div>
          </div>

          <div style={{ padding: '8px 20px 22px' }}>
            <Button
              variant="action"
              size="lg"
              block
              iconRight={<Icon name="arrow-right" size={18} />}
              onClick={reserve}
            >
              Reserve my allocation
            </Button>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 10.5,
                lineHeight: 1.5,
                color: 'var(--text-subtle)',
                margin: '12px 0 0',
                textAlign: 'center',
              }}
            >
              *Illustration only, based on the Knight Frank Wealth Report 2024 (whisky +280% over the 10 years to 2023, ~14.3% p.a. annualised). Past performance is not a guide to future returns; values can go down as well as up. Not regulated in the UK. Not advice.
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
}
