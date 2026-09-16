import { Link } from 'react-router-dom';
import { getAllPosts } from '../data/blogPosts';
import BlogLayout from './BlogLayout';

function formatDate(dateStr) {
  const t = Date.parse(dateStr);
  if (!Number.isFinite(t)) return dateStr;
  return new Date(t).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function Writing() {
  const posts = getAllPosts();

  return (
    <BlogLayout>
      <main style={{ padding: '72px 40px 0', maxWidth: 1000 }}>
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

        {posts.length === 0 ? (
          <p style={{ color: 'var(--muted)', fontSize: 15 }}>No posts yet.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {posts.map((po) => (
              <Link
                key={po.slug}
                to={`/blog/writing/${po.slug}`}
                data-reveal
                style={{
                  display: 'grid',
                  gridTemplateColumns: '150px minmax(0, 1fr) 96px',
                  gap: 28,
                  alignItems: 'baseline',
                  padding: '30px 0',
                  borderTop: '1px solid var(--line)',
                  transition: 'padding-left .25s cubic-bezier(.2,.7,.3,1)',
                  color: 'var(--ink)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = '14px'; }}
                onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = '0'; }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 15, fontWeight: 500, color: 'var(--ink)' }}>
                  {formatDate(po.date)}
                </span>
                <div>
                  <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 10px' }}>{po.title}</h2>
                  <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.6, margin: 0, maxWidth: '62ch' }}>{po.excerpt}</p>
                </div>
                <span style={{ fontSize: 14, fontWeight: 600, textAlign: 'right' }}>Read →</span>
              </Link>
            ))}
          </div>
        )}
      </main>
    </BlogLayout>
  );
}
