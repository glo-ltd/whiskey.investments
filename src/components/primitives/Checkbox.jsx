import { useState } from 'react';

export default function Checkbox({ label, onChange }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const val = e.target.checked;
    setChecked(val);
    if (onChange) onChange(val);
  };

  return (
    <label style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--text-body)',
    }}>
      <div style={{ position: 'relative', flex: '0 0 auto', marginTop: 1 }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
        />
        <div style={{
          width: 18,
          height: 18,
          borderRadius: 5,
          border: checked ? 'none' : '1.5px solid var(--line-strong)',
          background: checked ? 'var(--teal-500)' : 'var(--white)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all .15s var(--ease-standard)',
        }}>
          {checked && (
            <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
              <path d="M1 4L4.5 7.5L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </div>
      <span>{label}</span>
    </label>
  );
}
