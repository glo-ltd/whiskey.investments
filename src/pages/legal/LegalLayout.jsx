import { Link } from 'react-router-dom';

export default function LegalLayout({ title, eyebrow, updated, children }) {
  return (
    <>
      {/* Styles inline to keep legal pages self-contained */}
      <style>{`
        .lg-compliance { background: var(--navy-900); color: rgba(255,255,255,.78); font-family: var(--font-body); font-size: 12px; line-height: 1.4; text-align: center; padding: 7px 16px; }
        .lg-header { background: var(--white); border-bottom: 1px solid var(--line); }
        .lg-header-inner { max-width: 860px; margin: 0 auto; padding: 0 24px; height: 68px; display: flex; align-items: center; justify-content: space-between; }
        .lg-header img { height: 36px; width: auto; display: block; }
        .lg-back { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-body); font-size: 14px; font-weight: 500; color: var(--teal-700); text-decoration: none; padding: 8px 12px; border-radius: 8px; }
        .lg-back:hover { background: var(--teal-100); }
        .lg-main { max-width: 860px; margin: 0 auto; padding: 56px 24px 88px; }
        .lg-eyebrow { font-family: var(--font-label); font-size: 12px; letter-spacing: 0.185em; text-transform: uppercase; color: var(--text-subtle); margin: 0 0 14px; }
        .lg-main h1 { font-family: var(--font-display); font-weight: 700; font-size: clamp(32px, 4.5vw, 44px); line-height: 1.1; letter-spacing: -0.02em; color: var(--text-strong); margin: 0 0 10px; }
        .lg-updated { font-family: var(--font-body); font-size: 13.5px; color: var(--text-subtle); margin: 0 0 36px; }
        .lg-card { background: var(--white); border-radius: 20px; box-shadow: 0 8px 24px rgba(40,61,79,.10); padding: 40px 44px 44px; }
        @media (max-width: 640px) { .lg-card { padding: 28px 22px 32px; } }
        .lg-card h2 { font-family: var(--font-display); font-weight: 600; font-size: 20px; letter-spacing: -0.01em; color: var(--text-strong); margin: 36px 0 12px; }
        .lg-card h2:first-child { margin-top: 0; }
        .lg-card p, .lg-card li { font-family: var(--font-body); font-size: 15px; line-height: 1.7; color: var(--text-body); }
        .lg-card p { margin: 0 0 14px; }
        .lg-card ul { margin: 0 0 14px; padding-left: 22px; }
        .lg-card li { margin-bottom: 8px; }
        .lg-card strong { color: var(--text-strong); }
        .lg-card a { color: var(--teal-700); }
        .lg-callout { background: var(--teal-100); border-radius: 14px; padding: 18px 20px; margin: 0 0 28px; }
        .lg-callout p { margin: 0; font-size: 14px; }
        .lg-address { background: var(--surface-tint); border-radius: 14px; padding: 16px 20px; margin: 0 0 14px; font-family: var(--font-body); font-size: 14.5px; line-height: 1.7; color: var(--text-body); }
        .lg-footer { background: var(--navy-900); margin-top: 0; }
        .lg-footer-inner { max-width: 860px; margin: 0 auto; padding: 28px 24px; display: flex; flex-wrap: wrap; gap: 16px; justify-content: space-between; align-items: center; }
        .lg-footer-inner .lg-copy { font-family: var(--font-body); font-size: 12.5px; color: rgba(255,255,255,.5); }
        .lg-footer-links { display: flex; gap: 22px; flex-wrap: wrap; }
        .lg-footer-links a { font-family: var(--font-body); font-size: 12.5px; color: rgba(255,255,255,.5); text-decoration: none; }
        .lg-footer-links a:hover { color: rgba(255,255,255,.85); }
        body { background: var(--teal-100); }
      `}</style>

      <div className="lg-compliance">
        Capital at risk. The value of whiskey casks can go down as well as up. Whiskey cask investment is not regulated in the UK.
      </div>

      <header className="lg-header">
        <div className="lg-header-inner">
          <Link to="/">
            <img src="/assets/wi-logo.svg" alt="whiskey.investments" />
          </Link>
          <Link to="/" className="lg-back">
            Back to site
          </Link>
        </div>
      </header>

      <main className="lg-main">
        <p className="lg-eyebrow">Legal</p>
        <h1>{title}</h1>
        <p className="lg-updated">{updated}</p>
        <div className="lg-card">{children}</div>
      </main>

      <footer className="lg-footer">
        <div className="lg-footer-inner">
          <div className="lg-copy">© 2026 GRO AI LLC.</div>
          <div className="lg-footer-links">
            <Link to="/legal/privacy">Privacy</Link>
            <Link to="/legal/terms">Terms &amp; conditions</Link>
            <Link to="/legal/deposit-policy">Non-refundable deposit policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
