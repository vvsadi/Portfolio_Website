import { useState } from 'react';
import BlogLayout from './BlogLayout';
import { usePhotos } from '../hooks/usePhotos';

export default function Photography() {
  const { photos, loading, addLike } = usePhotos();
  const [expanded, setExpanded] = useState(null);

  return (
    <BlogLayout>
      <main style={{ padding: '72px 40px 0' }}>
        <h1
          style={{
            fontSize: 'clamp(38px, 5vw, 64px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            margin: '0 0 18px',
          }}
        >
          Photography
        </h1>
        <p style={{ fontSize: 18, color: 'var(--muted)', maxWidth: '56ch', margin: '0 0 48px', lineHeight: 1.6 }}>
          A running set of frames. Captured through my lens....
        </p>

        {loading ? (
          <p style={{ color: 'var(--muted)', fontSize: 15 }}>Loading...</p>
        ) : photos.length === 0 ? (
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              color: 'var(--muted)',
              padding: '24px',
              border: '1px dashed var(--line)',
              textAlign: 'center',
            }}
          >
            No photos yet.
          </p>
        ) : (
          <div style={{ columns: 3, columnGap: 4 }}>
            {photos.map((ph) => {
              const likeCount = ph.likes || 0;

              return (
                <div
                  key={ph.id}
                  data-reveal
                  className="group"
                  style={{
                    breakInside: 'avoid',
                    marginBottom: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'var(--card)',
                    cursor: 'pointer',
                  }}
                  onClick={() => setExpanded(ph)}
                >
                  <img
                    src={ph.storage_url}
                    alt={ph.caption || ph.filename}
                    className="photo-tile-img"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      transition: 'transform .5s cubic-bezier(.2,.7,.3,1)',
                    }}
                  />

                  <button
                    className="photo-tile-overlay"
                    onClick={(e) => { e.stopPropagation(); addLike(ph.id); }}
                    aria-label="Like"
                    style={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      border: `1px solid ${likeCount ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.45)'}`,
                      background: likeCount ? 'rgba(255,255,255,.95)' : 'rgba(0,0,0,.35)',
                      color: likeCount ? '#e0245e' : '#fff',
                      padding: '7px 12px',
                      cursor: 'pointer',
                      fontSize: 13,
                      fontWeight: 700,
                      backdropFilter: 'blur(6px)',
                      borderRadius: 999,
                      opacity: 0,
                      transition: 'opacity .2s ease, transform .2s ease, background .15s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    {likeCount ? '❤️' : '🤍'} {likeCount || ''}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Lightbox */}
        {expanded && (
          <div
            onClick={() => setExpanded(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(0,0,0,.85)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 40,
              cursor: 'zoom-out',
              animation: 'pagein .25s cubic-bezier(.2,.8,.3,1) both',
            }}
          >
            <img
              src={expanded.storage_url}
              alt={expanded.caption || expanded.filename}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: 4,
                cursor: 'default',
              }}
            />
            {expanded.caption && (
              <p style={{
                color: 'rgba(255,255,255,.85)',
                fontSize: 16,
                fontWeight: 500,
                marginTop: 18,
                textAlign: 'center',
                maxWidth: '60ch',
              }}>
                {expanded.caption}
              </p>
            )}
            <button
              onClick={() => setExpanded(null)}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: 24,
                right: 28,
                width: 44,
                height: 44,
                border: '1px solid rgba(255,255,255,.3)',
                background: 'rgba(255,255,255,.1)',
                color: '#fff',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(6px)',
              }}
            >
              ✕
            </button>
          </div>
        )}
      </main>
    </BlogLayout>
  );
}
