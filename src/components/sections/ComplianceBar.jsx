import { useT } from '../../i18n/index.jsx';

export default function ComplianceBar() {
  const t = useT();
  return (
    <div
      style={{
        background: 'var(--navy-900)',
        color: 'rgba(255,255,255,.78)',
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        lineHeight: 1.4,
        textAlign: 'center',
        padding: '7px 16px',
      }}
    >
      {t.compliance}
    </div>
  );
}
