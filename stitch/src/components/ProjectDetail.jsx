import { useParams, Link } from 'react-router-dom';
import { projects, caseStudies } from './projectData';

const all = [...projects, ...caseStudies];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = all.find((p) => p.id === id);

  if (!project) {
    return (
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '64px 28px 0' }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>Project not found</h1>
        <Link to="/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--muted)' }}>
          ← Back to projects
        </Link>
      </main>
    );
  }

  const hasEmbed = !!project.embed;

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '64px 28px 0', animation: 'pagein .5s cubic-bezier(.2,.8,.3,1) both' }}>
      <Link
        to="/"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          color: 'var(--muted)',
        }}
      >
        ← Back to projects
      </Link>

      <h1
        style={{
          fontSize: 'clamp(40px, 6vw, 72px)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          margin: '28px 0 20px',
        }}
      >
        {project.title}
      </h1>

      <p style={{ fontSize: 20, color: 'var(--muted)', lineHeight: 1.55, margin: '0 0 24px', maxWidth: '60ch' }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 40 }}>
        {project.tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              padding: '5px 10px',
              border: '1px solid var(--line)',
              borderRadius: 999,
              color: 'var(--muted)',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {hasEmbed ? (
        <iframe
          src={project.embed}
          title={project.title}
          loading="lazy"
          allowFullScreen
          style={{
            width: '100%',
            aspectRatio: '16/9',
            border: '1px solid var(--line)',
            borderRadius: 10,
            display: 'block',
            background: 'var(--chip)',
          }}
        />
      ) : (
        <div
          style={{
            aspectRatio: '16/9',
            border: '1px dashed var(--line)',
            borderRadius: 10,
            background: 'repeating-linear-gradient(135deg, var(--chip) 0 12px, transparent 12px 24px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: 'var(--muted)',
          }}
        >
          deck or screenshots go here
        </div>
      )}

      {project.repoUrl && project.repoUrl !== '#' && (
        <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pill"
            style={{
              background: 'var(--ink)',
              color: 'var(--paper)',
              padding: '14px 24px',
              fontSize: 15,
            }}
          >
            View repository
          </a>
        </div>
      )}
    </main>
  );
}
