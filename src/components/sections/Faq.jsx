import { useState } from 'react';
import Section from '../layout/Section.jsx';
import SectionHead from '../layout/SectionHead.jsx';
import Icon from '../primitives/Icon.jsx';
import Button from '../primitives/Button.jsx';
import Card from '../primitives/Card.jsx';
import { FAQS2, scrollToId } from '../../data/index.js';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" bg="mint">
      <div className="wi-faq-grid">
        <div>
          <SectionHead
            eyebrow="FAQ"
            title="Asked, answered"
            intro="Ownership, storage, resale, risk and tax, plainly answered. Anything else, ask the assistant."
          />

          <Card variant="dark" padding="26px" style={{ marginTop: 30 }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 19,
                color: '#fff',
                margin: '0 0 10px',
              }}
            >
              Ready to reserve?
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                lineHeight: 1.6,
                color: 'rgba(255,255,255,.72)',
                margin: '0 0 18px',
              }}
            >
              Pay a 10% reservation deposit today. It's non-refundable, because your casks are made to order. Great Northern Distillery collects the balance and handles everything else.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Button
                variant="action"
                size="md"
                iconRight={<Icon name="arrow-right" size={17} />}
                onClick={() => scrollToId('calculator')}
              >
                Use our calculator
              </Button>
              <Button
                variant="secondary"
                size="md"
                iconLeft={<Icon name="message-circle" size={17} />}
                onClick={() => document.dispatchEvent(new CustomEvent('wi-open-chat'))}
              >
                Ask the assistant
              </Button>
            </div>
          </Card>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQS2.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                style={{
                  background: 'var(--white)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-xs)',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '19px 22px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: 15.5,
                      color: 'var(--text-strong)',
                    }}
                  >
                    {f.q}
                  </span>
                  <span
                    style={{
                      transition: 'transform .25s var(--ease-standard)',
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      flex: '0 0 auto',
                      color: 'var(--teal-600)',
                    }}
                  >
                    <Icon name="chevron-down" size={20} />
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 360 : 0,
                    overflow: 'hidden',
                    transition: 'max-height .3s var(--ease-standard)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      color: 'var(--text-muted)',
                      margin: 0,
                      padding: '0 22px 20px',
                    }}
                  >
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
