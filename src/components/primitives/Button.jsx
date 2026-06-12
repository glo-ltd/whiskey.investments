const VARIANT_STYLES = {
  primary: {
    background: 'var(--teal-500)',
    color: '#fff',
    border: 'none',
  },
  action: {
    background: 'var(--coral-500)',
    color: '#fff',
    border: 'none',
  },
  secondary: {
    background: 'transparent',
    border: '1.5px solid rgba(255,255,255,0.28)',
    color: '#fff',
  },
  outline: {
    background: 'transparent',
    border: '1.5px solid var(--teal-500)',
    color: 'var(--teal-600)',
  },
  dark: {
    background: 'rgba(255,255,255,0.12)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.2)',
  },
};

const SIZE_STYLES = {
  sm: { padding: '8px 16px', fontSize: 13, borderRadius: 'var(--radius-sm)', gap: 6 },
  md: { padding: '10px 20px', fontSize: 14, borderRadius: 'var(--radius-sm)', gap: 7 },
  lg: { padding: '13px 26px', fontSize: 15.5, borderRadius: 'var(--radius-md)', gap: 8 },
};

export default function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconLeft,
  iconRight,
  onClick,
  children,
  style,
  type = 'button',
}) {
  const vStyle = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;
  const sStyle = SIZE_STYLES[size] || SIZE_STYLES.md;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: sStyle.gap,
        padding: sStyle.padding,
        fontSize: sStyle.fontSize,
        borderRadius: sStyle.borderRadius,
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        width: block ? '100%' : undefined,
        letterSpacing: '-0.01em',
        lineHeight: 1,
        ...vStyle,
        ...style,
      }}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
