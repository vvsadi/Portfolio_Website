import { Link } from 'react-router-dom';
import { projects, caseStudies } from './projectData';

export default function Projects() {
  return (
    <>
      {/* Projects */}
      <section id="work" data-reveal style={{ maxWidth: 1180, margin: '0 auto', padding: '92px 28px 0' }}>
        <h2 className="section-heading" style={{ margin: '0 0 40px' }}>Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
          {projects.map((p) => (
            <div
              key={p.id}
              data-reveal
              className="group"
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: 10,
                padding: 26,
                gap: 14,
                transition: 'border-color .18s ease, transform .25s cubic-bezier(.2,.7,.3,1)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--ink)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'none'; }}
            >
              <span
                style={{
                  alignSelf: 'flex-start',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  padding: '5px 10px',
                  borderRadius: 999,
                  background: 'var(--chip)',
                  color: 'var(--ink)',
                  fontWeight: 500,
                }}
              >
                {p.category}
              </span>
              <Link
                to={`/projects/${p.id}`}
                style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.15 }}
              >
                {p.title}
              </Link>
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.55, margin: 0, flex: 1, whiteSpace: 'pre-line' }}>{p.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      padding: '4px 8px',
                      border: '1px solid var(--line)',
                      borderRadius: 999,
                      color: 'var(--muted)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 18,
                  paddingTop: 14,
                  borderTop: '1px solid var(--line)',
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                <Link to={`/projects/${p.id}`} style={{ color: 'var(--ink)' }}>View project →</Link>
                <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)' }}>View GitHub ↗</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section data-reveal style={{ maxWidth: 1180, margin: '0 auto', padding: '76px 28px 0' }}>
        <h2 className="section-heading" style={{ margin: '0 0 32px' }}>Case studies</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
          {caseStudies.map((c) => (
            <div
              key={c.id}
              data-reveal
              className="group"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: 10,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform .25s cubic-bezier(.2,.7,.3,1), border-color .25s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--line)'; }}
            >
              <div style={{ padding: '22px 22px 16px' }}>
                <h3 style={{ fontSize: 23, fontWeight: 700, letterSpacing: '-0.025em', margin: 0, color: 'var(--ink)' }}>{c.title}</h3>
              </div>
              <div style={{ padding: '0 22px' }}>
                <iframe
                  src={c.embed}
                  title={c.title}
                  loading="lazy"
                  allowFullScreen
                  style={{
                    width: '100%',
                    aspectRatio: '16/10',
                    border: '1px solid var(--line)',
                    borderRadius: 8,
                    display: 'block',
                    background: 'var(--chip)',
                  }}
                />
              </div>
              <div style={{ padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.55, margin: 0, flex: 1, whiteSpace: 'pre-line' }}>{c.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        padding: '4px 8px',
                        border: '1px solid var(--line)',
                        borderRadius: 999,
                        color: 'var(--muted)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
