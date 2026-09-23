import { Link } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import { useIsMobile } from '../hooks/useIsMobile';
import BlogLayout from './BlogLayout';

function formatDate(dateStr) {
  const t = Date.parse(dateStr);
  if (!Number.isFinite(t)) return dateStr;
  return new Date(t).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function Writing() {
  const { posts, loading } = usePosts();
  const isMobile = useIsMobile();

  return (
    <BlogLayout>
      <main style={{ padding: isMobile ? '72px 16px 0' : '72px 40px 0', maxWidth: 1000 }}>
        <h1
          style={{
            fontSize: 'clamp(38px, 5vw, 64px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            margin: '0 0 18px',
          }}
        >
          Writing
        </h1>
        <p style={{ fontSize: 18, color: 'var(--muted)', maxWidth: '56ch', margin: '0 0 48px', lineHeight: 1.6 }}>
          Thoughts, learnings, and experiences — mostly about product, AI, and starting things before you feel ready.
        </p>

        {loading ? (
          <p style={{ color: 'var(--muted)', fontSize: 15 }}>Loading...</p>
        ) : posts.length === 0 ? (
          <p style={{ color: 'var(--muted)', fontSize: 15 }}>No posts yet.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {posts.map((po) => (
              <Link
                key={po.slug}
                to={`/blog/writing/${po.slug}`}
                data-reveal
                style={{
                  display: isMobile ? 'flex' : 'grid',
                  flexDirection: isMobile ? 'column' : undefined,
                  gridTemplateColumns: isMobile ? undefined : '150px minmax(0, 1fr) 96px',
                  gap: isMobile ? 8 : 28,
                  alignItems: 'baseline',
                  padding: '30px 0',
                  borderTop: '1px solid var(--line)',
                  transition: 'padding-left .25s cubic-bezier(.2,.7,.3,1)',
                  color: 'var(--ink)',
                }}
                onMouseEnter={(e) => { if (!isMobile) e.currentTarget.style.paddingLeft = '14px'; }}
                onMouseLeave={(e) => { if (!isMobile) e.currentTarget.style.paddingLeft = '0'; }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: isMobile ? 13 : 15, fontWeight: 500, color: 'var(--muted)' }}>
                  {formatDate(po.created_at)}
                </span>
                <div>
                  <h2 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 10px' }}>{po.title}</h2>
                  <p style={{ fontSize: isMobile ? 14 : 16, color: 'var(--muted)', lineHeight: 1.6, margin: 0, maxWidth: '62ch' }}>{po.excerpt}</p>
                </div>
                <span style={{ fontSize: 14, fontWeight: 600, textAlign: isMobile ? 'left' : 'right' }}>Read →</span>
              </Link>
            ))}
          </div>
        )}
      </main>
    </BlogLayout>
  );
}
