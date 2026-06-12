import Icon from './Icon.jsx';

export default function Input({ label, placeholder, icon, onChange, value, autoComplete, type = 'text' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {label && (
        <label style={{
          fontFamily: 'var(--font-body)',
          fontSize: 13.5,
          fontWeight: 500,
          color: 'var(--text-body)',
        }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        {icon && (
          <span style={{
            position: 'absolute',
            left: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-subtle)',
            pointerEvents: 'none',
            display: 'flex',
          }}>
            <Icon name={icon} size={16} />
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          style={{
            width: '100%',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-sm)',
            padding: icon ? '11px 13px 11px 38px' : '11px 13px',
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            color: 'var(--text-body)',
            background: 'var(--white)',
            outline: 'none',
            transition: 'border-color .2s var(--ease-standard)',
          }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--teal-500)')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
        />
      </div>
    </div>
  );
}
