import Section from '../layout/Section.jsx';
import SectionHead from '../layout/SectionHead.jsx';
import Icon from '../primitives/Icon.jsx';
import Card from '../primitives/Card.jsx';

const proofs = [
  {
    icon: 'badge-check',
    title: 'Verifiable ownership',
    body: 'A unique cask ID and a distillery-issued certificate for every cask, checkable, traceable, yours.',
  },
  {
    icon: 'warehouse',
    title: '5-year insured storage',
    body: 'Bonded warehousing with insurance included for five years, with fire, theft and damage covered.',
  },
  {
    icon: 'handshake',
    title: 'Resale support',
    body: "Exit through the distillery's resale support. GND supplies 60% of all Irish labels worldwide.",
  },
];

const reviews = [
  {
    quote: 'Clear pricing, no phone calls, and the certificate arrived exactly as described.',
    who: 'Verified investor · 5 crates',
  },
  {
    quote: "The calculator told me everything before I paid a penny. That's how it should work.",
    who: 'Verified investor · 10 crates',
  },
];

export default function TrustProof() {
  return (
    <Section bg="white">
      <SectionHead
        eyebrow="Trust & proof"
        title="Built to be checked"
        intro="Everything we claim is verifiable, on your certificate, in the bonded warehouse records, and with the distillery itself."
        align="center"
      />

      <div className="wi-grid-3" style={{ marginTop: 52 }}>
        {proofs.map((p) => (
          <Card
            key={p.title}
            variant="default"
            padding="28px"
            className="wi-lift"
            style={{ height: '100%' }}
          >
            <span
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: 'var(--teal-100)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 18,
              }}
            >
              <Icon name={p.icon} size={25} color="var(--teal-600)" strokeWidth={1.9} />
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 18,
                color: 'var(--text-strong)',
                margin: '0 0 9px',
              }}
            >
              {p.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14.5,
                lineHeight: 1.55,
                color: 'var(--text-muted)',
                margin: 0,
              }}
            >
              {p.body}
            </p>
          </Card>
        ))}
      </div>

      {/* Reviews */}
      <div className="wi-compare-grid" style={{ marginTop: 24 }}>
        {reviews.map((r) => (
          <div
            key={r.who}
            className="wi-lift"
            style={{
              background: 'var(--teal-100)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px 26px',
            }}
          >
            <div style={{ display: 'flex', gap: 3, marginBottom: 12 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <Icon key={i} name="star" size={16} color="var(--coral-500)" fill />
              ))}
            </div>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 16.5,
                lineHeight: 1.45,
                color: 'var(--text-strong)',
                margin: '0 0 10px',
              }}
            >
              "{r.quote}"
            </p>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12.5,
                color: 'var(--text-subtle)',
              }}
            >
              {r.who}
            </div>
          </div>
        ))}
      </div>

      {/* Risk panel */}
      <div
        style={{
          marginTop: 24,
          border: '1.5px solid var(--coral-300)',
          background: 'var(--coral-200)',
          borderRadius: 'var(--radius-lg)',
          padding: '22px 26px',
          display: 'flex',
          gap: 16,
          alignItems: 'flex-start',
        }}
      >
        <Icon
          name="alert-triangle"
          size={22}
          color="var(--coral-600)"
          style={{ marginTop: 2 }}
        />
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 15.5,
              color: 'var(--text-strong)',
              marginBottom: 6,
            }}
          >
            Understand the risks before you reserve
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13.5,
              lineHeight: 1.6,
              color: 'var(--text-body)',
              margin: 0,
            }}
          >
            The value of whiskey casks can go down as well as up, and past performance is not a guide to future returns. Whiskey cask investment is not regulated in the UK, so there is no FSCS protection or FOS recourse. Returns are not guaranteed, exits depend on market demand, and the 10% reservation deposit is non-refundable because casks are made to order. Never invest more than you can afford to lose.
          </p>
        </div>
      </div>
    </Section>
  );
}
