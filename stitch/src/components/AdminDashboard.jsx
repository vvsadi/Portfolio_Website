import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useTheme } from '../hooks/useTheme';
import { useIsMobile } from '../hooks/useIsMobile';

function formatDate(dateStr) {
  const t = Date.parse(dateStr);
  if (!Number.isFinite(t)) return dateStr;
  return new Date(t).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function AdminDashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme, toggle } = useTheme();
  const isMobile = useIsMobile();

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setPosts(data);
    setLoading(false);
  }

  async function handleDelete(id, title) {
    if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) return;
    await supabase.from('posts').delete().eq('id', id);
    setPosts((prev) => prev.filter((p) => p.id !== id));
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.reload();
  }

  const btnStyle = {
    padding: '8px 16px',
    fontSize: 14,
    fontWeight: 600,
    border: '1px solid var(--line)',
    borderRadius: 8,
    background: 'transparent',
    color: 'var(--ink)',
    cursor: 'pointer',
    transition: 'background .15s ease',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--paper)',
        animation: 'pagein .45s cubic-bezier(.2,.8,.3,1) both',
      }}
    >
      {/* Top bar */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '16px 16px' : '20px 32px',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <Link to="/" style={{ display: 'inline-block' }}>
          <span
            style={{
              fontFamily: "'Lucida Calligraphy','Lucida Handwriting',cursive",
              fontSize: 28,
              color: 'var(--ink)',
            }}
          >
            VVS
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
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
          <button onClick={handleLogout} style={btnStyle}>
            Sign out
          </button>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: isMobile ? '32px 16px' : '48px 32px' }}>
        {/* Tab nav */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 40 }}>
          <span
            style={{
              padding: '10px 20px',
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              color: 'var(--paper)',
              background: 'var(--ink)',
            }}
          >
            Posts
          </span>
          <Link
            to="/admin/photos"
            style={{
              padding: '10px 20px',
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              color: 'var(--muted)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--chip)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            Photos
          </Link>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 40,
          }}
        >
          <div>
            <h1
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 1,
                margin: '0 0 8px',
              }}
            >
              Posts
            </h1>
            <p style={{ fontSize: 15, color: 'var(--muted)', margin: 0 }}>
              {posts.length} {posts.length === 1 ? 'post' : 'posts'}
            </p>
          </div>

          <Link
            to="/admin/new"
            style={{
              padding: '12px 24px',
              fontSize: 15,
              fontWeight: 700,
              border: 'none',
              borderRadius: 10,
              background: 'var(--ink)',
              color: 'var(--paper)',
              cursor: 'pointer',
              transition: 'transform .15s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}
          >
            + New post
          </Link>
        </div>

        {loading ? (
          <p style={{ color: 'var(--muted)', fontSize: 15 }}>Loading...</p>
        ) : posts.length === 0 ? (
          <div
            style={{
              padding: 48,
              border: '1px dashed var(--line)',
              borderRadius: 12,
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: 16, color: 'var(--muted)', margin: '0 0 16px' }}>
              No posts yet. Create your first one!
            </p>
            <Link
              to="/admin/new"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--ink)',
              }}
            >
              + New post →
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {posts.map((post) => (
              <div
                key={post.id}
                style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  justifyContent: 'space-between',
                  padding: '24px 0',
                  borderTop: '1px solid var(--line)',
                  gap: isMobile ? 12 : 20,
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      margin: '0 0 6px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {post.title}
                  </h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 13,
                        color: 'var(--muted)',
                      }}
                    >
                      {formatDate(post.created_at)}
                    </span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 13,
                        color: 'var(--muted)',
                      }}
                    >
                      /{post.slug}
                    </span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 13,
                        color: 'var(--muted)',
                      }}
                    >
                      ♥ {post.likes || 0}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                  <Link
                    to={`/admin/edit/${post.id}`}
                    style={btnStyle}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--chip)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id, post.title)}
                    style={{ ...btnStyle, color: '#e0245e', borderColor: '#e0245e' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(224,36,94,.08)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
