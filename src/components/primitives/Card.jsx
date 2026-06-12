export default function Card({ variant = 'default', padding = '24px', style, className, children }) {
  const base = {
    borderRadius: 'var(--radius-lg)',
    padding,
  };

  const variantStyles = {
    default: {
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--line)',
    },
    dark: {
      background: 'var(--navy-800)',
    },
  };

  return (
    <div
      className={className}
      style={{ ...base, ...(variantStyles[variant] || variantStyles.default), ...style }}
    >
      {children}
    </div>
  );
}
