import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useTheme } from '../hooks/useTheme';
import { useIsMobile } from '../hooks/useIsMobile';

function formatDate(dateStr) {
  const t = Date.parse(dateStr);
  if (!Number.isFinite(t)) return dateStr;
  return new Date(t).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function AdminPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [caption, setCaption] = useState('');
  const [error, setError] = useState('');
  const fileRef = useRef(null);
  const { theme, toggle } = useTheme();
  const isMobile = useIsMobile();

  useEffect(() => {
    fetchPhotos();
  }, []);

  async function fetchPhotos() {
    const { data } = await supabase
      .from('photos')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setPhotos(data);
    setLoading(false);
  }

  async function handleUpload() {
    const file = fileRef.current?.files?.[0];
    if (!file) return;

    setError('');
    setUploading(true);

    const ext = file.name.split('.').pop();
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

    const { error: uploadErr } = await supabase.storage
      .from('photos')
      .upload(filename, file);

    if (uploadErr) {
      setError(uploadErr.message);
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from('photos')
      .getPublicUrl(filename);

    const { error: insertErr } = await supabase.from('photos').insert({
      filename,
      caption: caption.trim() || null,
      storage_url: urlData.publicUrl,
    });

    if (insertErr) {
      setError(insertErr.message);
      setUploading(false);
      return;
    }

    setCaption('');
    if (fileRef.current) fileRef.current.value = '';
    setUploading(false);
    fetchPhotos();
  }

  async function handleDelete(photo) {
    if (!window.confirm(`Delete "${photo.filename}"? This cannot be undone.`)) return;

    await supabase.storage.from('photos').remove([photo.filename]);
    await supabase.from('photos').delete().eq('id', photo.id);
    setPhotos((prev) => prev.filter((p) => p.id !== photo.id));
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
          <Link
            to="/admin"
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
            Posts
          </Link>
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
            Photos
          </span>
        </div>

        {/* Upload form */}
        <div
          style={{
            padding: 28,
            border: '1px solid var(--line)',
            borderRadius: 14,
            marginBottom: 40,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <h2
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Upload Photo
          </h2>

          {error && (
            <div style={{ padding: '14px 18px', background: 'rgba(224,36,94,.08)', border: '1px solid #e0245e', borderRadius: 10 }}>
              <p style={{ fontSize: 14, color: '#e0245e', margin: 0 }}>{error}</p>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label style={labelStyle}>Image</label>
            <input
              type="file"
              ref={fileRef}
              accept="image/*"
              style={{
                ...inputStyle,
                padding: '10px 16px',
                cursor: 'pointer',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label style={labelStyle}>Caption (optional)</label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="A short description of the photo"
              style={inputStyle}
              onFocus={(e) => { e.target.style.borderColor = 'var(--ink)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'var(--line)'; }}
            />
          </div>

          <button
            onClick={handleUpload}
            disabled={uploading}
            style={{
              alignSelf: 'flex-start',
              padding: '12px 28px',
              fontSize: 15,
              fontWeight: 700,
              border: 'none',
              borderRadius: 10,
              background: 'var(--ink)',
              color: 'var(--paper)',
              cursor: uploading ? 'not-allowed' : 'pointer',
              opacity: uploading ? 0.6 : 1,
              transition: 'opacity .15s ease, transform .15s ease',
            }}
            onMouseEnter={(e) => { if (!uploading) e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>

        {/* Photo list */}
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            margin: '0 0 8px',
          }}
        >
          Library
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', margin: '0 0 24px' }}>
          {photos.length} {photos.length === 1 ? 'photo' : 'photos'}
        </p>

        {loading ? (
          <p style={{ color: 'var(--muted)', fontSize: 15 }}>Loading...</p>
        ) : photos.length === 0 ? (
          <div
            style={{
              padding: 48,
              border: '1px dashed var(--line)',
              borderRadius: 12,
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: 16, color: 'var(--muted)', margin: 0 }}>
              No photos yet. Upload your first one above!
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 16,
            }}
          >
            {photos.map((photo) => (
              <div
                key={photo.id}
                style={{
                  border: '1px solid var(--line)',
                  borderRadius: 12,
                  overflow: 'hidden',
                  background: 'var(--card)',
                }}
              >
                <img
                  src={photo.storage_url}
                  alt={photo.caption || photo.filename}
                  style={{
                    width: '100%',
                    height: 180,
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div style={{ padding: '14px 16px' }}>
                  {photo.caption && (
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        margin: '0 0 6px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {photo.caption}
                    </p>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 12,
                        color: 'var(--muted)',
                      }}
                    >
                      {formatDate(photo.created_at)} · ♥ {photo.likes || 0}
                    </span>
                    <button
                      onClick={() => handleDelete(photo)}
                      style={{
                        ...btnStyle,
                        padding: '4px 10px',
                        fontSize: 12,
                        color: '#e0245e',
                        borderColor: '#e0245e',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(224,36,94,.08)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
