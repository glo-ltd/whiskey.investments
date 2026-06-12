import Section from '../layout/Section.jsx';
import SectionHead from '../layout/SectionHead.jsx';
import Icon from '../primitives/Icon.jsx';
import Card from '../primitives/Card.jsx';
import { PROBLEMS, ANSWERS } from '../../data/index.js';

export default function WhyWeExist() {
  return (
    <Section id="why" bg="white">
      <SectionHead
        eyebrow="Why we exist"
        title="Cask investing has a trust problem. We built the fix."
        intro="The cask market is full of inflated prices, hidden fees, cold-callers and unclear ownership. Whiskey.Investments is the transparent alternative, a platform, not a sales floor."
        align="center"
      />

      <div className="wi-compare-grid" style={{ marginTop: 56 }}>
        {/* The market today */}
        <div
          style={{
            background: 'var(--paper)',
            borderRadius: 'var(--radius-xl)',
            padding: '32px 30px',
            border: '1px solid var(--line)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 24,
            }}
          >
            <Icon name="alert-triangle" size={20} color="var(--danger)" />
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 19,
                color: 'var(--text-strong)',
                margin: 0,
              }}
            >
              The cask market today
            </h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {PROBLEMS.map((p) => (
              <div
                key={p.title}
                style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}
              >
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 11,
                    background: 'var(--danger-bg)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: '0 0 auto',
                  }}
                >
                  <Icon name={p.icon} size={19} color="var(--danger)" />
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: 15.5,
                      color: 'var(--text-strong)',
                      marginBottom: 3,
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: 'var(--text-muted)',
                    }}
                  >
                    {p.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The fix */}
        <Card variant="dark" padding="32px 30px">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 24,
            }}
          >
            <Icon name="check-circle" size={20} color="var(--mint)" />
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 19,
                color: '#fff',
                margin: 0,
              }}
            >
              The Whiskey.Investments way
            </h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {ANSWERS.map((a) => (
              <div
                key={a.title}
                style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}
              >
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 11,
                    background: 'rgba(98,212,197,0.16)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: '0 0 auto',
                  }}
                >
                  <Icon name={a.icon} size={19} color="var(--mint)" />
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: 15.5,
                      color: '#fff',
                      marginBottom: 3,
                    }}
                  >
                    {a.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: 'rgba(255,255,255,.68)',
                    }}
                  >
                    {a.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
