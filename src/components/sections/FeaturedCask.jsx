import Section from '../layout/Section.jsx';
import Eyebrow from '../layout/Eyebrow.jsx';
import Icon from '../primitives/Icon.jsx';
import Button from '../primitives/Button.jsx';
import Badge from '../primitives/Badge.jsx';
import Avatar from '../primitives/Avatar.jsx';
import { fmtGBP, scrollToId } from '../../data/index.js';
import { useT, fmt } from '../../i18n/index.jsx';

const REASON_ICONS = [
  'shield-check',
  'droplets',
  'calendar-range',
  'award',
  'factory',
  'fingerprint',
  'scale',
  'boxes',
];

export default function FeaturedCask() {
  const t = useT();
  return (
    <Section id="cask" bg="white">
      <div className="wi-cask-grid">
        {/* Featured cask image */}
        <div style={{ position: 'relative' }}>
          <img
            src="/assets/cask-warehouse.webp"
            alt={t.cask.imageAlt}
            width={1120}
            height={747}
            loading="lazy"
            style={{
              width: '100%',
              height: '460px',
              objectFit: 'cover',
              borderRadius: 24,
              boxShadow: 'var(--shadow-lg)',
              display: 'block',
            }}
          />
          <div style={{ position: 'absolute', top: 18, left: 18 }}>
            <Badge tone="action">{t.cask.badge}</Badge>
          </div>
        </div>

        {/* Details */}
        <div>
          <Eyebrow>{t.cask.eyebrow}</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(30px, 4vw, 42px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text-strong)',
              margin: '14px 0 0',
            }}
          >
            {t.cask.title1}
            <br />
            {t.cask.title2}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16.5,
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              margin: '16px 0 26px',
              maxWidth: 460,
            }}
          >
            {t.cask.intro}
          </p>

          <div style={{ borderTop: '1px solid var(--line)' }}>
            {t.cask.specs.map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 18,
                  padding: '12px 0',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    color: 'var(--text-muted)',
                    flex: '0 0 auto',
                  }}
                >
                  {k}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: 14.5,
                    color: 'var(--text-strong)',
                    textAlign: 'right',
                  }}
                >
                  {v}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginTop: 24,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 34,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-strong)',
                }}
              >
                {fmtGBP(2000)}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12.5,
                  color: 'var(--text-subtle)',
                }}
              >
                {fmt(t.cask.perCask, { price: fmtGBP(12000) })}
              </div>
            </div>
            <Button
              variant="action"
              size="lg"
              iconRight={<Icon name="arrow-right" size={18} />}
              onClick={() => scrollToId('calculator')}
            >
              {t.cask.cta}
            </Button>
          </div>
        </div>
      </div>

      {/* Why the AB2 section */}
      <div style={{ marginTop: 88 }}>
        <div className="wi-ab2-head">
          <div>
            <Eyebrow>{t.cask.whyEyebrow}</Eyebrow>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(26px, 3.2vw, 34px)',
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                color: 'var(--text-strong)',
                margin: '12px 0 0',
              }}
            >
              {t.cask.whyTitle}
            </h3>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'var(--teal-100)',
              borderRadius: 999,
              padding: '10px 20px 10px 12px',
            }}
          >
            <Avatar name="David Oliver" tone="teal" size="md" />
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 14,
                  color: 'var(--text-strong)',
                }}
              >
                {t.cask.insightsFrom}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  color: 'var(--text-muted)',
                }}
              >
                {t.cask.insightsRole}
              </div>
            </div>
          </div>
        </div>

        <div className="wi-compare-grid" style={{ marginTop: 32 }}>
          {REASON_ICONS.map((icon, i) => (
            <div
              key={icon}
              className="wi-lift"
              style={{
                background: 'var(--teal-100)',
                borderRadius: 'var(--radius-lg)',
                padding: '26px 28px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 14,
                  right: 20,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 44,
                  lineHeight: 1,
                  color: 'rgba(40,61,79,0.08)',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 13,
                  background: 'var(--white)',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}
              >
                <Icon name={icon} size={23} color="var(--teal-600)" strokeWidth={1.9} />
              </span>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 18,
                  color: 'var(--text-strong)',
                  margin: '0 0 9px',
                  letterSpacing: '-0.01em',
                }}
              >
                {t.cask.reasons[i].title}
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: 'var(--text-body)',
                  margin: 0,
                }}
              >
                {t.cask.reasons[i].body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
