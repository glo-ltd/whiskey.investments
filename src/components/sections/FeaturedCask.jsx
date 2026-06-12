import Section from '../layout/Section.jsx';
import Eyebrow from '../layout/Eyebrow.jsx';
import Icon from '../primitives/Icon.jsx';
import Button from '../primitives/Button.jsx';
import Badge from '../primitives/Badge.jsx';
import Avatar from '../primitives/Avatar.jsx';
import { fmtGBP, scrollToId } from '../../data/index.js';

const specs = [
  ['Distillery', 'Great Northern Distillery, Ireland'],
  ['Product', 'AB2 Irish Single Malt cask'],
  ['Fill', 'Second fill, a proven performer'],
  ['Maturation window', '5–8 year sweet spot'],
  ['Format', 'Sold by the crate of 6 casks'],
  ['Storage', '5-year insured bonded storage included'],
  ['Provenance', 'Fully traceable · unique cask ID · certificate'],
];

const reasons = [
  {
    icon: 'shield-check',
    title: 'Lower cask risk',
    body: 'An AB2 cask has already been used once, successfully. Casks with structural issues, excessive leakage or poor performance are removed from circulation rather than reused, so a second-fill cask is a proven performer, with a lower risk of spirit loss than a fresh AB1.',
  },
  {
    icon: 'droplets',
    title: "A smaller angel's share",
    body: "Evaporation and absorption into the wood are maturation's biggest costs. AB2 casks generally absorb less liquid than fresh oak, preserving more spirit over time, more saleable whiskey at maturity, and potentially higher returns.",
  },
  {
    icon: 'calendar-range',
    title: 'The 5–8 year sweet spot',
    body: 'Irish single malt tends to hit its stride between roughly five and eight years, long enough for significant maturation, short enough to avoid drawn-out holding periods, with strong demand from bottlers and brand owners at exit.',
  },
  {
    icon: 'award',
    title: 'The category that sells',
    body: "Single malt is the most recognised category in premium whiskey, sought after by investors, collectors and independent bottlers. Asked what he'd buy himself, GND's own planner picks malt over grain: an easier story to tell, and an easier cask to resell.",
  },
  {
    icon: 'factory',
    title: 'Distillery scale & reputation',
    body: "Great Northern is one of Ireland's largest independent distilleries, multiple whiskey styles, hundreds of thousands of casks in bond, founded by the team behind the revival of Irish whiskey, including the Teeling family. Proven production, consistent quality, global demand for GND spirit.",
  },
  {
    icon: 'fingerprint',
    title: 'Direct distillery provenance',
    body: "Traceability is the cask market's biggest worry. Every AB2 cask comes with a clear origin, a known producer and verified production records, a provenance story that becomes particularly valuable when you come to resell.",
  },
  {
    icon: 'scale',
    title: 'Excellent cost-to-value ratio',
    body: 'At £2,000 a cask, the AB2 offers a compelling balance between acquisition cost and maturation potential, a working asset priced for upside, not a prestige markup.',
  },
  {
    icon: 'boxes',
    title: 'Simple, scalable, consistent',
    body: "One carefully chosen cask keeps the offer easy to understand, no confusing menu of types, ages and pricing structures. A cleaner buying journey that's easier to compare, track, explain and resell at scale.",
  },
];

export default function FeaturedCask() {
  return (
    <Section id="cask" bg="white">
      <div className="wi-cask-grid">
        {/* Featured cask image */}
        <div style={{ position: 'relative' }}>
          <img
            src="/assets/cask-warehouse.jpg"
            alt="GND bonded warehouse — AB2 Irish Single Malt casks in bond"
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
            <Badge tone="action">Featured investment</Badge>
          </div>
        </div>

        {/* Details */}
        <div>
          <Eyebrow>The cask</Eyebrow>
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
            One cask. One price.
            <br />
            No catalogue.
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
            We offer a single product, the GND AB2 Irish Single Malt Cask, selected with the distillery's own planning team for its balance of risk, maturation potential and resale value.
          </p>

          <div style={{ borderTop: '1px solid var(--line)' }}>
            {specs.map(([k, v]) => (
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
                per cask · {fmtGBP(12000)} per crate
              </div>
            </div>
            <Button
              variant="action"
              size="lg"
              iconRight={<Icon name="arrow-right" size={18} />}
              onClick={() => scrollToId('calculator')}
            >
              Use our calculator
            </Button>
          </div>
        </div>
      </div>

      {/* Why the AB2 section */}
      <div style={{ marginTop: 88 }}>
        <div className="wi-ab2-head">
          <div>
            <Eyebrow>Why this cask</Eyebrow>
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
              Why the AB2 malt cask makes sense
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
                Insights from David Oliver
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  color: 'var(--text-muted)',
                }}
              >
                Senior Inventory &amp; Scheduling Planner · Great Northern Distillery
              </div>
            </div>
          </div>
        </div>

        <div className="wi-compare-grid" style={{ marginTop: 32 }}>
          {reasons.map((r, i) => (
            <div
              key={r.title}
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
                <Icon name={r.icon} size={23} color="var(--teal-600)" strokeWidth={1.9} />
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
                {r.title}
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
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
