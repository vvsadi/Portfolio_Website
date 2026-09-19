import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { supabase } from '../lib/supabase';
import { useTheme } from '../hooks/useTheme';

export default function AdminEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  const { theme, toggle } = useTheme();

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(isEditing);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (!id) return;
    supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data }) => {
        if (data) {
          setTitle(data.title);
          setSlug(data.slug);
          setExcerpt(data.excerpt || '');
          setTags(Array.isArray(data.tags) ? data.tags.join(', ') : '');
          setContent(data.content);
        }
        setLoading(false);
      });
  }, [id]);

  function autoSlug(value) {
    return value
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  function handleTitleChange(value) {
    setTitle(value);
    if (!isEditing) setSlug(autoSlug(value));
  }

  async function handleSave() {
    if (!title.trim() || !slug.trim() || !content.trim()) return;
    setSaving(true);

    const postData = {
      title: title.trim(),
      slug: slug.trim(),
      content: content.trim(),
      excerpt: excerpt.trim() || null,
      tags: tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
    };

    let result;
    if (isEditing) {
      result = await supabase.from('posts').update(postData).eq('id', id);
    } else {
      result = await supabase.from('posts').insert(postData);
    }

    setSaving(false);

    if (result.error) {
      setError(result.error.message);
      return;
    }

    navigate('/admin');
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    fontSize: 16,
    border: '1px solid var(--line)',
    borderRadius: 10,
    background: 'var(--card)',
    color: 'var(--ink)',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color .15s ease',
  };

  const labelStyle = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '.1em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
  };

  const btnStyle = {
    padding: '10px 20px',
    fontSize: 14,
    fontWeight: 600,
    border: '1px solid var(--line)',
    borderRadius: 8,
    background: 'transparent',
    color: 'var(--ink)',
    cursor: 'pointer',
    transition: 'background .15s ease',
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--muted)', fontSize: 15 }}>Loading...</p>
      </div>
    );
  }

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
          padding: '20px 32px',
          borderBottom: '1px solid var(--line)',
          position: 'sticky',
          top: 0,
          background: 'var(--paper)',
          zIndex: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Link to="/admin" style={{ display: 'inline-block' }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--ink)',
              }}
            >
              ← Posts
            </span>
          </Link>
          <span style={{ fontSize: 14, color: 'var(--muted)' }}>
            {isEditing ? 'Edit post' : 'New post'}
          </span>
        </div>

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
          <button
            onClick={() => setPreview(!preview)}
            style={{
              ...btnStyle,
              background: preview ? 'var(--ink)' : 'transparent',
              color: preview ? 'var(--paper)' : 'var(--ink)',
            }}
          >
            {preview ? 'Edit' : 'Preview'}
          </button>
          <button
            onClick={handleSave}
            disabled={saving || !title.trim() || !slug.trim() || !content.trim()}
            style={{
              padding: '10px 24px',
              fontSize: 14,
              fontWeight: 700,
              border: 'none',
              borderRadius: 8,
              background: 'var(--ink)',
              color: 'var(--paper)',
              cursor: saving ? 'not-allowed' : 'pointer',
              opacity: saving || !title.trim() || !slug.trim() || !content.trim() ? 0.5 : 1,
              transition: 'opacity .15s ease, transform .15s ease',
            }}
            onMouseEnter={(e) => { if (!saving) e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}
          >
            {saving ? 'Saving...' : isEditing ? 'Update' : 'Publish'}
          </button>
        </div>
      </header>

      <main style={{ maxWidth: 800, margin: '0 auto', padding: '40px 32px' }}>
        {error && (
          <div style={{ padding: '14px 18px', background: 'rgba(224,36,94,.08)', border: '1px solid #e0245e', borderRadius: 10, marginBottom: 24 }}>
            <p style={{ fontSize: 14, color: '#e0245e', margin: 0 }}>{error}</p>
          </div>
        )}
        {preview ? (
          <div>
            <h1
              style={{
                fontSize: 'clamp(32px, 5vw, 52px)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                margin: '0 0 16px',
              }}
            >
              {title || 'Untitled'}
            </h1>
            {excerpt && (
              <p style={{ fontSize: 17, color: 'var(--muted)', margin: '0 0 32px', lineHeight: 1.6 }}>
                {excerpt}
              </p>
            )}
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: 32 }}>
              <article
                className="prose prose-slate dark:prose-invert max-w-none"
                style={{ fontSize: 18, lineHeight: 1.7 }}
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
              </article>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={labelStyle}>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Post title"
                style={{ ...inputStyle, fontSize: 20, fontWeight: 700 }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--ink)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--line)'; }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={labelStyle}>Slug</label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="post-url-slug"
                style={{ ...inputStyle, fontFamily: "'JetBrains Mono', monospace", fontSize: 14 }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--ink)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--line)'; }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={labelStyle}>Excerpt</label>
              <input
                type="text"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="A short summary for the blog list"
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = 'var(--ink)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--line)'; }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={labelStyle}>Tags</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="tag1, tag2, tag3"
                style={{ ...inputStyle, fontFamily: "'JetBrains Mono', monospace", fontSize: 14 }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--ink)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--line)'; }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={labelStyle}>Content (Markdown)</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your post in markdown..."
                rows={20}
                style={{
                  ...inputStyle,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 15,
                  lineHeight: 1.7,
                  resize: 'vertical',
                  minHeight: 400,
                }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--ink)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--line)'; }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
