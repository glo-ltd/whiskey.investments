export default function Select({ label, options = [], onChange, defaultValue, autoComplete }) {
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
      <select
        defaultValue={defaultValue}
        onChange={onChange}
        autoComplete={autoComplete}
        style={{
          width: '100%',
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius-sm)',
          padding: '11px 13px',
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          color: 'var(--text-body)',
          background: 'var(--white)',
          outline: 'none',
          cursor: 'pointer',
          appearance: 'none',
          WebkitAppearance: 'none',
        }}
        onFocus={(e) => (e.target.style.borderColor = 'var(--teal-500)')}
        onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
