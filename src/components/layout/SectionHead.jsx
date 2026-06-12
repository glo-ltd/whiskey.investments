import Eyebrow from './Eyebrow.jsx';

export default function SectionHead({ eyebrow, title, intro, align = 'left', dark = false, max = 720 }) {
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? max : 'none',
        margin: align === 'center' ? '0 auto' : 0,
      }}
    >
      {eyebrow ? (
        <Eyebrow color={dark ? 'rgba(255,255,255,.55)' : undefined}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(30px, 4vw, 44px)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          margin: '14px 0 0',
          color: dark ? 'var(--white)' : 'var(--text-strong)',
        }}
      >
        {title}
      </h2>
      {intro ? (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 18,
            lineHeight: 1.6,
            margin: '18px 0 0',
            color: dark ? 'rgba(255,255,255,.72)' : 'var(--text-muted)',
            maxWidth: 680,
            ...(align === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : null),
          }}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
