const TONE_STYLES = {
  brand: {
    background: 'var(--teal-100)',
    color: 'var(--teal-700)',
    border: '1px solid var(--teal-200)',
  },
  action: {
    background: 'var(--coral-200)',
    color: 'var(--coral-600)',
    border: '1px solid var(--coral-300)',
  },
};

export default function Badge({ tone = 'brand', dot = false, children }) {
  const tStyle = TONE_STYLES[tone] || TONE_STYLES.brand;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: dot ? 6 : 0,
        padding: '4px 10px',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        fontWeight: 600,
        whiteSpace: 'nowrap',
        ...tStyle,
      }}
    >
      {dot && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: tone === 'action' ? 'var(--coral-500)' : 'var(--teal-500)',
            flex: '0 0 auto',
          }}
        />
      )}
      {children}
    </span>
  );
}
