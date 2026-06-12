import { useState } from 'react';
import Icon from '../primitives/Icon.jsx';
import Button from '../primitives/Button.jsx';
import Badge from '../primitives/Badge.jsx';
import { priceOrder, GROWTH_RATE, fmtGBP, scrollToId } from '../../data/index.js';

const trust = [
  { icon: 'factory', label: 'Fulfilled by Great Northern Distillery' },
  { icon: 'badge-check', label: 'Verifiable ownership certificates' },
  { icon: 'warehouse', label: '5-year insured bonded storage' },
  { icon: 'hand-coins', label: 'Reserve with just a 10% deposit' },
  { icon: 'percent', label: 'Volume discounts on larger orders' },
  { icon: 'refresh-ccw', label: 'Distillery resale support' },
];

export default function Hero() {
  const [crates, setCrates] = useState(5);
  const o = priceOrder(crates);
  const est8 = o.orderValue * Math.pow(1 + GROWTH_RATE, 8);
  const cratePct = ((crates - 5) / (20 - 5)) * 100;

  return (
    <section
      id="top"
      style={{
        background: 'var(--teal-100)',
        paddingTop: 142,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <img
        src="/assets/logo-mark.svg"
        alt=""
        width={520}
        height={637}
        fetchpriority="high"
        style={{
          position: 'absolute',
          right: '-150px',
          top: '-60px',
          width: 520,
          height: 'auto',
          opacity: 0.07,
          pointerEvents: 'none',
        }}
      />
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <div className="wi-hero-grid">
          {/* Left: copy */}
          <div className="wi-hero-copy" style={{ padding: '56px 0 96px', maxWidth: 580 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '7px 14px',
                borderRadius: 999,
                background: 'var(--white)',
                boxShadow: 'var(--shadow-xs)',
                marginBottom: 26,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: 'var(--coral-500)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: 11.5,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                The world's first dedicated whiskey investment platform
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(42px, 5.6vw, 68px)',
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
                color: 'var(--text-strong)',
                margin: 0,
              }}
            >
              The future of whiskey investing.
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 18.5,
                lineHeight: 1.6,
                color: 'var(--text-muted)',
                margin: '24px 0 0',
                maxWidth: 520,
              }}
            >
              Invest directly into distillery-backed Irish whiskey casks, transparent pricing, verifiable ownership and complete investor control. No brokers, no cold calls, no hidden fees.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 32 }}>
              <Button
                variant="action"
                size="lg"
                iconRight={<Icon name="arrow-right" size={18} />}
                onClick={() => scrollToId('calculator')}
              >
                Use our calculator
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconLeft={<Icon name="download" size={18} />}
                onClick={() => document.dispatchEvent(new CustomEvent('wi2-open-guide'))}
              >
                Download guide
              </Button>
            </div>

            <div
              className="wi-hero-usps"
              style={{ display: 'grid', gap: '12px 24px', marginTop: 40 }}
            >
              {trust.map((t) => (
                <div
                  key={t.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    color: 'var(--text-body)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  <Icon name={t.icon} size={18} color="var(--teal-600)" />
                  {t.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: mini calculator teaser */}
          <div className="wi-hero-media" style={{ padding: '16px 0 96px' }}>
            <div
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-lg)',
                maxWidth: 440,
                marginLeft: 'auto',
                padding: '24px 26px 26px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 4,
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
                  What could your casks return?
                </div>
                <Badge tone="brand">AB2 Malt Cask</Badge>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  color: 'var(--text-muted)',
                  margin: 0,
                }}
              >
                {fmtGBP(2000)} per cask, sold by the crate of six.
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  margin: '20px 0 8px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13.5,
                    color: 'var(--text-muted)',
                  }}
                >
                  Your order
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 20,
                    letterSpacing: '-0.01em',
                    color: 'var(--text-strong)',
                  }}
                >
                  {crates} crate{crates === 1 ? '' : 's'} · {o.casks} casks
                </span>
              </div>

              <input
                className="calc-slider"
                type="range"
                min={5}
                max={20}
                step={1}
                value={crates}
                onChange={(e) => setCrates(Number(e.target.value))}
                aria-label="Crates"
                style={{
                  background: `linear-gradient(to right, var(--teal-500) 0%, var(--teal-500) ${cratePct}%, var(--surface-tint) ${cratePct}%, var(--surface-tint) 100%)`,
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 18 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    padding: '9px 0',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13.5,
                      color: 'var(--text-muted)',
                    }}
                  >
                    Order value
                    {o.tier.disc
                      ? ` (${o.tier.name} −${(o.tier.disc * 100).toFixed(1).replace('.0', '')}%)`
                      : ''}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: 15.5,
                      color: 'var(--text-strong)',
                    }}
                  >
                    {fmtGBP(o.orderValue)}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    padding: '9px 0',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13.5,
                      color: 'var(--text-muted)',
                    }}
                  >
                    Deposit today (10%)
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 15.5,
                      color: 'var(--coral-600)',
                    }}
                  >
                    {fmtGBP(o.deposit)}
                  </span>
                </div>

                <div
                  style={{
                    background: 'var(--teal-100)',
                    borderRadius: 'var(--radius-md)',
                    padding: '13px 16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 12,
                    marginTop: 6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      color: 'var(--text-muted)',
                    }}
                  >
                    Est. value in 8 years
                    <span style={{ color: 'var(--text-subtle)' }}>*</span>
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 22,
                      letterSpacing: '-0.01em',
                      color: 'var(--teal-600)',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {fmtGBP(Math.round(est8))}
                  </span>
                </div>
              </div>

              <div style={{ marginTop: 16 }}>
                <Button
                  variant="primary"
                  size="md"
                  block
                  iconRight={<Icon name="arrow-down" size={17} />}
                  onClick={() => scrollToId('calculator')}
                >
                  Open the full calculator
                </Button>
              </div>

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
                *Illustration based on the Knight Frank Wealth Report 2024 (whisky +280% over the 10 years to 2023, ~14.3% p.a.). Past performance is not a guide to future returns; values can go down as well as up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
