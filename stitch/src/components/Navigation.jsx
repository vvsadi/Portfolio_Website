import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();
  const isHome = location.pathname === '/';

  function scrollTo(id) {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b" style={{ background: 'var(--paper)', borderColor: 'var(--line)' }}>
      <div className="mx-auto flex items-center justify-between gap-6" style={{ maxWidth: 1180, padding: '0 28px', height: 72 }}>
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
          <Link to="/blog" className="transition-colors duration-200" style={{ color: 'var(--ink)', paddingBottom: 3 }}>Blog</Link>
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
          <button
            onClick={() => scrollTo('contact')}
            className="pill"
            style={{
              background: 'var(--ink)', color: 'var(--paper)',
              padding: '11px 20px', fontSize: 14, fontWeight: 600,
              border: 'none', cursor: 'pointer',
            }}
          >Contact</button>
        </div>
      </div>
    </header>
  );
}
