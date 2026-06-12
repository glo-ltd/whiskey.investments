import { useState, useEffect, useRef } from 'react';
import Section from '../layout/Section.jsx';
import SectionHead from '../layout/SectionHead.jsx';
import Icon from '../primitives/Icon.jsx';
import { WHISKEY_STATS } from '../../data/index.js';
import { useT } from '../../i18n/index.jsx';

function HeadlineReturn() {
  const ref = useRef(null);
  const [val, setVal] = useState(280);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf;
    const io = new IntersectionObserver(
      (ents) => {
        if (!ents[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1300;
        const tick = (now) => {
          const p = Math.min(1, (now - start) / dur);
          setVal(Math.round(280 * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        setVal(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.7 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <span
      ref={ref}
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 34,
        letterSpacing: '-0.02em',
        color: 'var(--teal-600)',
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      +{val}%
    </span>
  );
}

export default function WhyWhiskey() {
  const t = useT();
  return (
    <Section id="whiskey" bg="mint">
      <SectionHead
        eyebrow={t.whiskey.eyebrow}
        title={t.whiskey.title}
        intro={t.whiskey.intro}
      />

      <div className="wi-grid-4" style={{ marginTop: 48 }}>
        {WHISKEY_STATS.map((s, i) => (
          <div
            key={s.icon}
            className="wi-lift"
            style={{
              background: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              padding: '26px 24px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <Icon name={s.icon} size={26} color="var(--teal-600)" strokeWidth={1.9} />
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 21,
                letterSpacing: '-0.01em',
                color: 'var(--text-strong)',
                margin: '16px 0 8px',
              }}
            >
              {t.whiskey.stats[i].value}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13.5,
                lineHeight: 1.5,
                color: 'var(--text-muted)',
              }}
            >
              {t.whiskey.stats[i].label}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 28,
          background: 'var(--white)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px 28px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px 28px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <HeadlineReturn />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              lineHeight: 1.45,
              color: 'var(--text-muted)',
              maxWidth: 420,
            }}
          >
            {t.whiskey.headlineNote}
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 12,
            color: 'var(--text-subtle)',
            maxWidth: 320,
          }}
        >
          {t.whiskey.headlineDisclaimer}
        </span>
      </div>
    </Section>
  );
}
