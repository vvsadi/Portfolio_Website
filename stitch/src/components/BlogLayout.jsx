import { useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function BlogLayout({ children }) {
  const containerRef = useRef(null);
  useScrollReveal(containerRef);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();

  const isWriting = location.pathname.startsWith('/blog/writing');
  const isPhoto = location.pathname === '/blog/photography';

  function goHomeSection(id) {
    setMenuOpen(false);
    navigate('/', { state: { scrollTo: id } });
  }

  const navItemStyle = (active) => ({
    padding: '11px 14px',
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 500,
    display: 'block',
    color: active ? 'var(--paper)' : 'var(--muted)',
    background: active ? 'var(--ink)' : 'transparent',
    textDecoration: 'none',
    transition: 'background .15s ease',
  });

  return (
    <div
      ref={containerRef}
      style={{
        display: 'grid',
        gridTemplateColumns: `${sidebarOpen ? '220px' : '74px'} minmax(0, 1fr)`,
        transition: 'grid-template-columns .3s cubic-bezier(.2,.8,.3,1)',
        animation: 'pagein .45s cubic-bezier(.2,.8,.3,1) both',
        minHeight: '100vh',
      }}
    >
      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        style={{
          position: 'fixed',
          top: 22,
          right: 24,
          zIndex: 70,
          width: 46,
          height: 46,
          border: '1px solid var(--line)',
          background: 'var(--paper)',
          borderRadius: 10,
          color: 'var(--ink)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
          boxShadow: '0 6px 18px rgba(0,0,0,.10)',
        }}
      >
        <span style={{ display: 'block', width: 18, height: 1.5, background: 'var(--ink)' }} />
        <span style={{ display: 'block', width: 18, height: 1.5, background: 'var(--ink)' }} />
        <span style={{ display: 'block', width: 18, height: 1.5, background: 'var(--ink)' }} />
      </button>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 78,
            right: 24,
            zIndex: 71,
            background: 'var(--paper)',
            border: '1px solid var(--line)',
            borderRadius: 12,
            padding: 10,
            minWidth: 200,
            boxShadow: '0 24px 48px rgba(0,0,0,.22)',
            animation: 'menuin .22s cubic-bezier(.2,.8,.3,1) both',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <button onClick={() => goHomeSection('about')} style={menuBtnStyle}>About</button>
          <button onClick={() => goHomeSection('experience')} style={menuBtnStyle}>Experience</button>
          <button onClick={() => goHomeSection('work')} style={menuBtnStyle}>Projects</button>
          <Link to="/blog" onClick={() => setMenuOpen(false)} style={menuBtnStyle}>Blog</Link>
        </div>
      )}

      {/* Sidebar */}
      <aside
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          borderRight: '1px solid var(--line)',
          background: 'var(--paper)',
          boxSizing: 'border-box',
          overflow: 'hidden',
          padding: sidebarOpen ? '34px 26px' : '28px 18px',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          {sidebarOpen && (
            <Link to="/" aria-label="Home" style={{ display: 'inline-block' }}>
              <span style={{ fontFamily: "'Lucida Calligraphy','Lucida Handwriting',cursive", fontSize: 28, color: 'var(--ink)' }}>VVS</span>
            </Link>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
            style={{
              width: 34,
              height: 34,
              flexShrink: 0,
              border: '1px solid var(--line)',
              background: 'transparent',
              color: 'var(--ink)',
              borderRadius: 8,
              cursor: 'pointer',
              fontSize: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {sidebarOpen ? '‹' : '›'}
          </button>
        </div>

        {sidebarOpen && (
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Link to="/blog" style={navItemStyle(!isWriting && !isPhoto)}>Overview</Link>
            <Link to="/blog/writing" style={navItemStyle(isWriting)}>Writing</Link>
            <Link to="/blog/photography" style={navItemStyle(isPhoto)}>Photography</Link>
          </nav>
        )}

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              width: 34,
              height: 34,
              border: '1px solid var(--line)',
              background: 'transparent',
              color: 'var(--ink)',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: 13,
            }}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          {sidebarOpen && (
            <Link
              to="/"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '.06em',
                color: 'var(--ink)',
              }}
            >
              ← Main site
            </Link>
          )}
        </div>
      </aside>

      {/* Content pane */}
      {children}
    </div>
  );
}

const menuBtnStyle = {
  padding: '11px 14px',
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
