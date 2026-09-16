import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug } from '../data/blogPosts';
import BlogLayout from './BlogLayout';

function formatDate(dateStr) {
  const t = Date.parse(dateStr);
  if (!Number.isFinite(t)) return dateStr;
  return new Date(t).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function WritingPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <BlogLayout>
        <main style={{ padding: '72px 40px 0' }}>
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

        <div style={{ maxWidth: 760, padding: '44px 40px 0' }}>
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

          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 17,
              fontWeight: 500,
              color: 'var(--ink)',
              margin: '0 0 40px',
              paddingBottom: 32,
              borderBottom: '1px solid var(--line)',
            }}
          >
            {formatDate(post.date)}
          </p>

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
