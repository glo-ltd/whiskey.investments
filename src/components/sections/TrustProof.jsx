import Section from '../layout/Section.jsx';
import SectionHead from '../layout/SectionHead.jsx';
import Icon from '../primitives/Icon.jsx';
import Card from '../primitives/Card.jsx';
import { useT } from '../../i18n/index.jsx';

const PROOF_ICONS = ['badge-check', 'warehouse', 'handshake'];

export default function TrustProof() {
  const t = useT();
  return (
    <Section bg="white">
      <SectionHead
        eyebrow={t.trust.eyebrow}
        title={t.trust.title}
        intro={t.trust.intro}
        align="center"
      />

      <div className="wi-grid-3" style={{ marginTop: 52 }}>
        {PROOF_ICONS.map((icon, i) => (
          <Card
            key={icon}
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
              <Icon name={icon} size={25} color="var(--teal-600)" strokeWidth={1.9} />
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
              {t.trust.proofs[i].title}
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
              {t.trust.proofs[i].body}
            </p>
          </Card>
        ))}
      </div>

      {/* Reviews */}
      <div className="wi-compare-grid" style={{ marginTop: 24 }}>
        {t.trust.reviews.map((r) => (
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
            {t.trust.riskTitle}
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
            {t.trust.riskBody}
          </p>
        </div>
      </div>
    </Section>
  );
}
