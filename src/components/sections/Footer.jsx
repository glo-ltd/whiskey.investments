import { Link } from 'react-router-dom';
import Icon from '../primitives/Icon.jsx';
import Button from '../primitives/Button.jsx';
import { NAV_LINKS2, LANGS2, scrollToId } from '../../data/index.js';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy-900)', color: 'rgba(255,255,255,.7)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '72px 24px 32px' }}>
        <div className="wi-footer-grid">
          {/* Brand + guide capture */}
          <div>
            <img
              src="/assets/wi-logo-white.svg"
              alt="whiskey.investments"
              width={150}
              height={48}
              style={{ height: 48, width: 'auto', display: 'block' }}
            />
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14.5,
                lineHeight: 1.6,
                margin: '20px 0 24px',
                maxWidth: 340,
                color: 'rgba(255,255,255,.62)',
              }}
            >
              A digital reservation storefront for Great Northern Distillery whiskey casks, transparent pricing, verifiable ownership, complete investor control.
            </p>
            <div
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-md)',
                padding: 18,
                maxWidth: 360,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 15,
                  color: '#fff',
                  marginBottom: 6,
                }}
              >
                Not ready to reserve?
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: 'rgba(255,255,255,.6)',
                  margin: '0 0 12px',
                }}
              >
                Download the investment guide, everything in this page, in your inbox.
              </p>
              <Button
                variant="secondary"
                size="sm"
                block
                iconLeft={<Icon name="download" size={16} />}
                onClick={() => document.dispatchEvent(new CustomEvent('wi2-open-guide'))}
              >
                Download the guide
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: 12,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,.58)',
                marginBottom: 18,
              }}
            >
              Explore
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {NAV_LINKS2.map((l) => (
                <a
                  key={l.id}
                  href={'#' + l.id}
                  onClick={(e) => { e.preventDefault(); scrollToId(l.id); }}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14.5,
                    color: 'rgba(255,255,255,.66)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,.66)')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Distillery */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: 12,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,.58)',
                marginBottom: 18,
              }}
            >
              Fulfilment
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                color: 'rgba(255,255,255,.66)',
                lineHeight: 1.5,
              }}
            >
              <span>
                Great Northern Distillery
                <br />
                Dundalk, Ireland
              </span>
              <a
                href="https://gndireland.com"
                target="_blank"
                rel="noopener"
                style={{
                  color: 'var(--mint)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                gndireland.com <Icon name="external-link" size={13} />
              </a>
            </div>
          </div>

          {/* Language + trust */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: 12,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,.58)',
                marginBottom: 18,
              }}
            >
              Language
            </div>
            <div style={{ position: 'relative', marginBottom: 24 }}>
              <select
                className="wi-langselect"
                defaultValue="English"
                aria-label="Language"
              >
                {LANGS2.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
              <span
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  color: 'rgba(255,255,255,.6)',
                }}
              >
                <Icon name="chevron-down" size={16} />
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {[
                ['landmark', 'Trustly'],
                ['lock', 'SSL'],
              ].map(([ic, lb]) => (
                <span
                  key={lb}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '7px 11px',
                    borderRadius: 999,
                    background: 'rgba(255,255,255,0.06)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 12,
                    color: 'rgba(255,255,255,.75)',
                  }}
                >
                  <Icon name={ic} size={14} color="var(--mint)" /> {lb}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Legal */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginTop: 48,
            paddingTop: 24,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,.5)',
              margin: '0 0 16px',
              maxWidth: 880,
            }}
          >
            Whiskey.Investments acts as an introducer for Great Northern Distillery cask sales. The 10% reservation deposit is non-refundable; the balance is invoiced and collected directly by the distillery, which owns production, storage, insurance, certification and resale. The value of whiskey casks can go down as well as up and past performance is not a guide to future returns. Whiskey cask investment is not regulated in the UK, no FSCS protection or FOS recourse applies. Nothing on this page is financial, legal or tax advice.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12.5,
                color: 'rgba(255,255,255,.5)',
              }}
            >
              © 2026 GRO AI LLC.
            </div>
            <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap' }}>
              {[
                ['Privacy', '/legal/privacy'],
                ['Terms & conditions', '/legal/terms'],
                ['Non-refundable deposit policy', '/legal/deposit-policy'],
              ].map(([l, to]) => (
                <Link
                  key={l}
                  to={to}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 12.5,
                    color: 'rgba(255,255,255,.5)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,.85)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,.5)')}
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
