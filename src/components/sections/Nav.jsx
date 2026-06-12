import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../primitives/Icon.jsx';
import Button from '../primitives/Button.jsx';
import ComplianceBar from './ComplianceBar.jsx';
import { NAV_LINKS2, LANGS2, scrollToId } from '../../data/index.js';

function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('English');

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Select language"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
          padding: '8px 6px',
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          fontWeight: 500,
          color: 'var(--text-body)',
        }}
      >
        <Icon name="globe" size={18} />
        <span>{lang.slice(0, 2).toUpperCase()}</span>
        <Icon name="chevron-down" size={15} />
      </button>
      {open ? (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            width: 190,
            zIndex: 60,
            background: 'var(--white)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)',
            padding: 8,
            border: '1px solid var(--line)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 10px 8px',
              color: 'var(--text-subtle)',
              fontSize: 11.5,
            }}
          >
            <Icon name="languages" size={14} /> Auto-detected · change anytime
          </div>
          {LANGS2.map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false); }}
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '9px 10px',
                borderRadius: 8,
                border: 'none',
                cursor: 'pointer',
                background: l === lang ? 'var(--teal-100)' : 'transparent',
                color: l === lang ? 'var(--teal-700)' : 'var(--text-body)',
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                fontWeight: l === lang ? 600 : 400,
              }}
            >
              {l}
              {l === lang ? <Icon name="check" size={16} /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    setMenu(false);
    scrollToId(id);
  };

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      <ComplianceBar />
      <div
        style={{
          background: scrolled ? 'rgba(255,255,255,0.94)' : 'var(--teal-100)',
          backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
          borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
          transition: 'background .3s var(--ease-standard), box-shadow .3s var(--ease-standard)',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            height: 68,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <img
              src="/assets/wi-logo.svg"
              alt="whiskey.investments"
              width={125}
              height={40}
              style={{ height: 40, width: 'auto', display: 'block' }}
            />
          </a>

          <nav className="wi-navlinks" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {NAV_LINKS2.map((l) => (
              <a
                key={l.id}
                href={'#' + l.id}
                onClick={handleNavClick(l.id)}
                className="wi-navlink"
                style={{
                  padding: '8px 12px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 500,
                  color: 'var(--text-body)',
                  transition: 'color .2s var(--ease-standard)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--teal-700)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-body)')}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div className="wi-navlinks">
              <LanguageSelector />
            </div>
            <Button
              variant="action"
              size="md"
              onClick={() => scrollToId('calculator')}
            >
              Use our calculator
            </Button>
            <button
              className="wi-burger"
              onClick={() => setMenu((m) => !m)}
              aria-label="Menu"
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--navy-800)',
              }}
            >
              <Icon name={menu ? 'x' : 'menu'} size={26} />
            </button>
          </div>
        </div>

        {menu ? (
          <div
            style={{
              background: 'var(--white)',
              borderTop: '1px solid var(--line)',
              padding: '12px 24px 20px',
            }}
          >
            {NAV_LINKS2.map((l) => (
              <a
                key={l.id}
                href={'#' + l.id}
                onClick={handleNavClick(l.id)}
                style={{
                  display: 'block',
                  padding: '12px 4px',
                  textDecoration: 'none',
                  color: 'var(--text-body)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 16,
                  fontWeight: 500,
                  borderBottom: '1px solid var(--line)',
                }}
              >
                {l.label}
              </a>
            ))}
            <div style={{ paddingTop: 14 }}>
              <LanguageSelector />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
