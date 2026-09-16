import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function BlogOverview() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function goHomeSection(id) {
    setMenuOpen(false);
    navigate('/', { state: { scrollTo: id } });
  }

  return (
    <main style={{ animation: 'pagein .5s cubic-bezier(.2,.8,.3,1) both' }}>
      <section
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: 560,
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        {/* Banner placeholder */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'repeating-linear-gradient(135deg, #2a2926 0 14px, #201f1d 14px 28px)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'zoomslow 1.6s cubic-bezier(.2,.8,.3,1) both',
          }}
        />

        {/* Scrim */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(8,8,7,.92) 0%, rgba(8,8,7,.6) 38%, rgba(8,8,7,.1) 72%, rgba(8,8,7,.28) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* VVS logo */}
        <Link
          to="/"
          aria-label="Home"
          style={{ position: 'absolute', top: 24, left: 28, zIndex: 12, display: 'inline-block' }}
        >
          <span style={{ fontFamily: "'Lucida Calligraphy','Lucida Handwriting',cursive", fontSize: 32, lineHeight: 1, letterSpacing: '-0.025em', color: '#fff' }}>
            VVS
          </span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{
            position: 'absolute',
            top: 24,
            right: 24,
            zIndex: 12,
            width: 48,
            height: 48,
            border: '1px solid rgba(255,255,255,.5)',
            background: 'rgba(15,15,15,.38)',
            backdropFilter: 'blur(8px)',
            borderRadius: 10,
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
          }}
        >
          <span style={{ display: 'block', width: 20, height: 1.5, background: '#fff' }} />
          <span style={{ display: 'block', width: 20, height: 1.5, background: '#fff' }} />
          <span style={{ display: 'block', width: 20, height: 1.5, background: '#fff' }} />
        </button>

        {menuOpen && (
          <div
            style={{
              position: 'absolute',
              top: 82,
              right: 24,
              zIndex: 13,
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              borderRadius: 12,
              padding: 10,
              minWidth: 210,
              boxShadow: '0 24px 48px rgba(0,0,0,.22)',
              animation: 'menuin .22s cubic-bezier(.2,.8,.3,1) both',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <button onClick={() => goHomeSection('about')} style={menuItemStyle}>About</button>
            <button onClick={() => goHomeSection('experience')} style={menuItemStyle}>Experience</button>
            <button onClick={() => goHomeSection('work')} style={menuItemStyle}>Projects</button>
            <Link to="/blog" onClick={() => setMenuOpen(false)} style={menuItemStyle}>Blog</Link>
          </div>
        )}

        {/* Bottom content */}
        <div
          style={{
            position: 'relative',
            zIndex: 11,
            maxWidth: 1180,
            margin: '0 auto',
            padding: '0 28px 86px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(44px, 7vw, 88px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: .95,
              margin: '0 0 22px',
              color: '#fff',
              animation: 'rise .8s cubic-bezier(.2,.7,.3,1) .15s both',
            }}
          >
            Notes &amp; Frames
          </h1>
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,.9)',
              maxWidth: '60ch',
              margin: '0 0 38px',
              animation: 'rise .8s cubic-bezier(.2,.7,.3,1) .28s both',
            }}
          >
            Hi! Welcome to my Blog! I share my thoughts, learnings, experiences, and.... some photography skills!
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 14,
              animation: 'rise .8s cubic-bezier(.2,.7,.3,1) .4s both',
            }}
          >
            <Link
              to="/blog/writing"
              className="blog-hero-pill"
              style={{
                border: '1.5px solid rgba(255,255,255,.8)',
                background: 'transparent',
                color: '#fff',
                padding: '16px 30px',
                borderRadius: 999,
                fontSize: 16,
                fontWeight: 700,
                transition: 'transform .22s cubic-bezier(.2,.8,.3,1), background .22s ease, color .22s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0f0f0f'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}
            >
              Writing
            </Link>
            <Link
              to="/blog/photography"
              className="blog-hero-pill"
              style={{
                border: '1.5px solid rgba(255,255,255,.8)',
                background: 'transparent',
                color: '#fff',
                padding: '16px 30px',
                borderRadius: 999,
                fontSize: 16,
                fontWeight: 700,
                transition: 'transform .22s cubic-bezier(.2,.8,.3,1), background .22s ease, color .22s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0f0f0f'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}
            >
              Photography
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const menuItemStyle = {
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
};
