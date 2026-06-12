import Section from '../layout/Section.jsx';
import SectionHead from '../layout/SectionHead.jsx';
import Icon from '../primitives/Icon.jsx';
import { STEPS2 } from '../../data/index.js';
import { useT } from '../../i18n/index.jsx';

export default function HowItWorks() {
  const t = useT();
  return (
    <Section id="how" bg="white">
      <SectionHead
        eyebrow={t.how.eyebrow}
        title={t.how.title}
        intro={t.how.intro}
        align="center"
      />

      <div className="wi-grid-3" style={{ marginTop: 56 }}>
        {STEPS2.map((s, i) => (
          <div
            key={s.icon}
            className="wi-lift"
            style={{
              background: i === 1 ? 'var(--navy-800)' : 'var(--teal-100)',
              borderRadius: 'var(--radius-lg)',
              padding: '26px 26px 28px',
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 18,
              }}
            >
              <span
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 13,
                  background: i === 1 ? 'var(--coral-500)' : 'var(--white)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: i === 1 ? 'var(--shadow-action)' : 'var(--shadow-xs)',
                }}
              >
                <Icon
                  name={s.icon}
                  size={23}
                  color={i === 1 ? '#fff' : 'var(--teal-600)'}
                  strokeWidth={1.9}
                />
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 30,
                  color: i === 1 ? 'rgba(255,255,255,.25)' : 'var(--teal-300)',
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 18,
                color: i === 1 ? '#fff' : 'var(--text-strong)',
                margin: '0 0 8px',
                letterSpacing: '-0.01em',
              }}
            >
              {t.how.steps[i].title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                lineHeight: 1.55,
                color: i === 1 ? 'rgba(255,255,255,.72)' : 'var(--text-muted)',
                margin: 0,
              }}
            >
              {t.how.steps[i].body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
