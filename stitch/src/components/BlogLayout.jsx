import { useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useIsMobile } from '../hooks/useIsMobile';

export default function BlogLayout({ children }) {
  const containerRef = useRef(null);
  useScrollReveal(containerRef);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();
  const isMobile = useIsMobile();

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
        display: isMobile ? 'block' : 'grid',
        gridTemplateColumns: isMobile ? undefined : `${sidebarOpen ? '220px' : '74px'} minmax(0, 1fr)`,
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

      {/* Mobile sidebar toggle */}
      {isMobile && (
        <button
          onClick={() => setMobileSidebar(true)}
          aria-label="Open sidebar"
          style={{
            position: 'fixed',
            top: 22,
            left: 16,
            zIndex: 59,
            width: 46,
            height: 46,
            border: '1px solid var(--line)',
            background: 'var(--paper)',
            borderRadius: 10,
            color: 'var(--ink)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 20,
            boxShadow: '0 6px 18px rgba(0,0,0,.10)',
          }}
        >
          ☰
        </button>
      )}

      {/* Mobile sidebar overlay */}
      {isMobile && mobileSidebar && (
        <div className="blog-sidebar-overlay" onClick={() => setMobileSidebar(false)} />
      )}

      {/* Sidebar */}
      <aside
        style={{
          ...(isMobile ? {
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: 260,
            zIndex: 61,
            transform: mobileSidebar ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform .3s cubic-bezier(.2,.8,.3,1)',
            boxShadow: mobileSidebar ? '8px 0 32px rgba(0,0,0,.15)' : 'none',
          } : {
            position: 'sticky',
            top: 0,
            height: '100vh',
          }),
          borderRight: '1px solid var(--line)',
          background: 'var(--paper)',
          boxSizing: 'border-box',
          overflow: 'hidden',
          padding: isMobile ? '34px 26px' : (sidebarOpen ? '34px 26px' : '28px 18px'),
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <Link to="/" aria-label="Home" style={{ display: 'inline-block' }}>
            <span style={{ fontFamily: "'Lucida Calligraphy','Lucida Handwriting',cursive", fontSize: 28, color: 'var(--ink)' }}>VVS</span>
          </Link>
          {isMobile ? (
            <button
              onClick={() => setMobileSidebar(false)}
              aria-label="Close sidebar"
              style={{
                width: 34,
                height: 34,
                border: '1px solid var(--line)',
                background: 'transparent',
                color: 'var(--ink)',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>
          ) : (
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
          )}
        </div>

        {(isMobile || sidebarOpen) && (
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Link to="/blog" onClick={() => setMobileSidebar(false)} style={navItemStyle(!isWriting && !isPhoto)}>Overview</Link>
            <Link to="/blog/writing" onClick={() => setMobileSidebar(false)} style={navItemStyle(isWriting)}>Writing</Link>
            <Link to="/blog/photography" onClick={() => setMobileSidebar(false)} style={navItemStyle(isPhoto)}>Photography</Link>
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
          {(isMobile || sidebarOpen) && (
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
