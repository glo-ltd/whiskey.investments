const TONE_COLORS = {
  teal: { bg: 'var(--teal-200)', color: 'var(--teal-700)' },
  navy: { bg: 'var(--navy-300)', color: 'var(--navy-800)' },
  coral: { bg: 'var(--coral-200)', color: 'var(--coral-600)' },
};

const SIZE_MAP = {
  sm: 32,
  md: 42,
  lg: 52,
};

export default function Avatar({ name = '', tone = 'teal', size = 'md' }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
  const px = SIZE_MAP[size] || SIZE_MAP.md;
  const tStyle = TONE_COLORS[tone] || TONE_COLORS.teal;

  return (
    <div
      style={{
        width: px,
        height: px,
        borderRadius: '50%',
        background: tStyle.bg,
        color: tStyle.color,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: px * 0.38,
        flex: '0 0 auto',
        userSelect: 'none',
      }}
      aria-label={name}
    >
      {initials}
    </div>
  );
}
