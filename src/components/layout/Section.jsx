const BG_MAP = {
  white: 'var(--white)',
  mint: 'var(--teal-100)',
  paper: 'var(--paper)',
  navy: 'var(--navy-800)',
  navyDeep: 'var(--navy-900)',
  teal: 'var(--teal-500)',
};

export default function Section({ id, bg = 'white', children, style, pad, max = 1160 }) {
  return (
    <section
      id={id}
      style={{
        background: BG_MAP[bg] || bg,
        padding: pad || '100px 24px',
        ...style,
      }}
    >
      <div style={{ maxWidth: max, margin: '0 auto', position: 'relative' }}>
        {children}
      </div>
    </section>
  );
}
