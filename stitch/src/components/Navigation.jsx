import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();
  const isHome = location.pathname === '/';
  const isMobile = useIsMobile();
  const [mobileMenu, setMobileMenu] = useState(false);

  function scrollTo(id) {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b" style={{ background: 'var(--paper)', borderColor: 'var(--line)' }}>
      <div className="mx-auto flex items-center justify-between gap-6" style={{ maxWidth: 1180, padding: isMobile ? '0 16px' : '0 28px', height: 72 }}>
        <Link to="/" aria-label="Home" className="flex items-center gap-3">
          <span className="relative inline-block" style={{ padding: '6px 4px 8px' }}>
            <span
              className="inline-block"
              style={{
                fontFamily: "'Lucida Calligraphy','Lucida Handwriting',cursive",
                fontSize: 32,
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: '-0.025em',
                color: 'var(--ink)',
                animation: 'sign 1.25s cubic-bezier(.55,.05,.25,1) both',
              }}
            >VVS</span>
            <span
              className="absolute"
              style={{
                left: 4, right: 4, bottom: 2, height: '1.5px',
                background: 'var(--theme-signal)',
                transformOrigin: 'left center',
                animation: 'underdraw .55s cubic-bezier(.6,.05,.2,1) 1.1s both',
              }}
            />
            <span
              className="absolute"
              style={{
                left: 2, bottom: 1, width: 5, height: 5, borderRadius: '50%',
                background: 'var(--theme-signal)',
                '--penend': '74px',
                animation: 'penrun 1.25s cubic-bezier(.55,.05,.25,1) both',
              }}
            />
          </span>
        </Link>

        <nav className="hidden md:flex items-center" style={{ gap: 30, fontSize: 14, fontWeight: 500 }}>
          <button onClick={() => scrollTo('about')} className="transition-colors duration-200 hover:text-signal" style={{ color: 'var(--ink)', background: 'none', border: 'none', cursor: 'pointer', paddingBottom: 3 }}>About</button>
          <button onClick={() => scrollTo('experience')} className="transition-colors duration-200 hover:text-signal" style={{ color: 'var(--ink)', background: 'none', border: 'none', cursor: 'pointer', paddingBottom: 3 }}>Experience</button>
          <button onClick={() => scrollTo('work')} className="transition-colors duration-200 hover:text-signal" style={{ color: 'var(--ink)', background: 'none', border: 'none', cursor: 'pointer', paddingBottom: 3 }}>Projects</button>
          <Link to="/blog" className="transition-colors duration-200 hover:text-signal" style={{ color: 'var(--ink)', paddingBottom: 3 }}>Blog</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex items-center justify-center"
            style={{
              width: 40, height: 40, borderRadius: '50%',
              border: '1px solid var(--line)',
              background: 'transparent',
              color: 'var(--ink)',
              cursor: 'pointer',
              fontSize: 13,
            }}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          {isMobile ? (
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Menu"
              style={{
                width: 40, height: 40, borderRadius: 8,
                border: '1px solid var(--line)',
                background: 'transparent',
                color: 'var(--ink)',
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 4,
              }}
            >
              <span style={{ display: 'block', width: 16, height: 1.5, background: 'var(--ink)' }} />
              <span style={{ display: 'block', width: 16, height: 1.5, background: 'var(--ink)' }} />
              <span style={{ display: 'block', width: 16, height: 1.5, background: 'var(--ink)' }} />
            </button>
          ) : (
            <button
              onClick={() => scrollTo('contact')}
              className="pill"
              style={{
                background: 'var(--ink)', color: 'var(--paper)',
                padding: '11px 20px', fontSize: 14, fontWeight: 600,
                border: 'none', cursor: 'pointer',
              }}
            >Contact</button>
          )}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobile && mobileMenu && (
        <div
          style={{
            borderTop: '1px solid var(--line)',
            background: 'var(--paper)',
            padding: '12px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            animation: 'menuin .22s cubic-bezier(.2,.8,.3,1) both',
          }}
        >
          <button onClick={() => { scrollTo('about'); setMobileMenu(false); }} style={mobileNavBtn}>About</button>
          <button onClick={() => { scrollTo('experience'); setMobileMenu(false); }} style={mobileNavBtn}>Experience</button>
          <button onClick={() => { scrollTo('work'); setMobileMenu(false); }} style={mobileNavBtn}>Projects</button>
          <Link to="/blog" onClick={() => setMobileMenu(false)} style={mobileNavBtn}>Blog</Link>
          <button onClick={() => { scrollTo('contact'); setMobileMenu(false); }} style={{ ...mobileNavBtn, color: 'var(--paper)', background: 'var(--ink)', borderRadius: 8 }}>Contact</button>
        </div>
      )}
    </header>
  );
}

const mobileNavBtn = {
  padding: '12px 14px',
  borderRadius: 8,
  fontSize: 15,
  fontWeight: 500,
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  color: 'var(--ink)',
  textAlign: 'left',
  width: '100%',
  display: 'block',
  textDecoration: 'none',
};
