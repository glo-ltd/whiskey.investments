export default function Eyebrow({ children, color }) {
  return (
    <div className="wi-eyebrow" style={color ? { color } : undefined}>
      {children}
    </div>
  );
}
