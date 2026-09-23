import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { usePost } from '../hooks/usePosts';
import { useIsMobile } from '../hooks/useIsMobile';
import BlogLayout from './BlogLayout';

function formatDate(dateStr) {
  const t = Date.parse(dateStr);
  if (!Number.isFinite(t)) return dateStr;
  return new Date(t).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function WritingPost() {
  const { slug } = useParams();
  const { post, loading, incrementLikes } = usePost(slug);
  const isMobile = useIsMobile();

  if (loading) {
    return (
      <BlogLayout>
        <main style={{ padding: isMobile ? '72px 16px 0' : '72px 40px 0' }}>
          <p style={{ color: 'var(--muted)', fontSize: 15 }}>Loading...</p>
        </main>
      </BlogLayout>
    );
  }

  if (!post) {
    return (
      <BlogLayout>
        <main style={{ padding: isMobile ? '72px 16px 0' : '72px 40px 0' }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>Post not found</h1>
          <Link
            to="/blog/writing"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--ink)',
            }}
          >
            ← All writing
          </Link>
        </main>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <main style={{ padding: 0 }}>
        {/* Banner */}
        <div
          style={{
            position: 'relative',
            height: 'clamp(280px, 42vh, 420px)',
            overflow: 'hidden',
            background: 'repeating-linear-gradient(135deg, var(--chip) 0 14px, transparent 14px 28px)',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <span
            style={{
              position: 'absolute',
              bottom: 16,
              right: 20,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            post banner — set in code
          </span>
        </div>

        <div style={{ maxWidth: 760, padding: isMobile ? '28px 16px 0' : '44px 40px 0' }}>
          <Link
            to="/blog/writing"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--ink)',
            }}
          >
            ← All writing
          </Link>

          <h1
            style={{
              fontSize: 'clamp(38px, 5.5vw, 64px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              margin: '22px 0 14px',
            }}
          >
            {post.title}
          </h1>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              margin: '0 0 40px',
              paddingBottom: 32,
              borderBottom: '1px solid var(--line)',
            }}
          >
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 17,
                fontWeight: 500,
                color: 'var(--ink)',
                margin: 0,
              }}
            >
              {formatDate(post.created_at)}
            </p>
            <button
              onClick={incrementLikes}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                border: '1px solid var(--line)',
                background: 'transparent',
                color: 'var(--ink)',
                padding: '6px 14px',
                borderRadius: 999,
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 600,
                transition: 'background .15s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--chip)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              ♥ {post.likes || 0}
            </button>
          </div>

          <article
            className="prose prose-slate dark:prose-invert max-w-none"
            style={{ fontSize: 18, lineHeight: 1.7 }}
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </article>
        </div>
      </main>
    </BlogLayout>
  );
}
