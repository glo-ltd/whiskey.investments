import { useState, useRef } from 'react';
import Section from '../layout/Section.jsx';
import Eyebrow from '../layout/Eyebrow.jsx';
import Icon from '../primitives/Icon.jsx';
import Button from '../primitives/Button.jsx';
import { useT } from '../../i18n/index.jsx';

function GndVideo() {
  const t = useT();
  const [playing, setPlaying] = useState(false);
  const vidRef = useRef(null);

  const start = () => {
    setPlaying(true);
    const v = vidRef.current;
    if (v) {
      if (!v.getAttribute('src')) v.setAttribute('src', '/assets/gnd-story.mp4');
      v.play();
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 24,
        overflow: 'hidden',
        background: 'var(--navy-900)',
        border: '1px solid rgba(255,255,255,0.28)',
        boxShadow: 'var(--shadow-lg)',
        aspectRatio: '16 / 9',
        alignSelf: 'center',
        width: '100%',
      }}
    >
      <video
        ref={vidRef}
        preload="none"
        controls={playing}
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      {!playing ? (
        <button
          onClick={start}
          aria-label={t.distillery.videoAria}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            background:
              'linear-gradient(160deg, var(--navy-800) 0%, var(--navy-900) 100%)',
            color: '#fff',
          }}
        >
          <span
            style={{
              width: 76,
              height: 76,
              borderRadius: 999,
              background: 'var(--coral-500)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-action)',
              paddingLeft: 6,
            }}
          >
            <Icon name="play" size={30} color="#fff" fill />
          </span>
          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 18,
                letterSpacing: '-0.01em',
              }}
            >
              {t.distillery.videoTitle}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13.5,
                color: 'rgba(255,255,255,.65)',
              }}
            >
              {t.distillery.videoSub}
            </span>
          </span>
        </button>
      ) : null}
    </div>
  );
}

export default function Distillery() {
  const t = useT();
  return (
    <Section bg="teal" pad="88px 24px">
      <div className="wi-gnd-grid">
        <div>
          <Eyebrow color="rgba(255,255,255,.7)">{t.distillery.eyebrow}</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(30px, 4vw, 42px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#fff',
              margin: '14px 0 0',
            }}
          >
            {t.distillery.title}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16.5,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,.85)',
              margin: '16px 0 0',
              maxWidth: 480,
            }}
          >
            {t.distillery.intro}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, margin: '28px 0 30px' }}>
            {t.distillery.stats.map((s) => (
              <div
                key={s.value}
                style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}
              >
                <span
                  style={{
                    width: 4,
                    alignSelf: 'stretch',
                    borderRadius: 2,
                    background: 'rgba(255,255,255,0.45)',
                    flex: '0 0 auto',
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 19,
                      letterSpacing: '-0.01em',
                      color: '#fff',
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13.5,
                      lineHeight: 1.45,
                      color: 'rgba(255,255,255,.78)',
                      marginTop: 2,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="dark"
            size="md"
            iconRight={<Icon name="external-link" size={16} />}
            onClick={() =>
              window.open('https://www.gndireland.com/history', '_blank', 'noopener')
            }
          >
            {t.distillery.cta}
          </Button>
        </div>

        <GndVideo />
      </div>
    </Section>
  );
}
