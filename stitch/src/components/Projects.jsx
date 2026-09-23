import { Link, useNavigate } from 'react-router-dom';
import { projects, caseStudies } from './projectData';
import { useIsMobile } from '../hooks/useIsMobile';

const HOME_LIMIT = 3;

const tagStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 10,
  padding: '4px 8px',
  border: '1px solid var(--line)',
  borderRadius: 999,
  color: 'var(--ink)',
  opacity: 0.82,
};

const descStyle = {
  fontSize: 15,
  color: 'var(--muted)',
  lineHeight: 1.55,
  margin: 0,
  flex: 1,
  minHeight: '4.65em',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

// Inner links handle their own navigation so the card-level click doesn't also fire.
const stop = (e) => e.stopPropagation();

export function ProjectCard({ p }) {
  const navigate = useNavigate();

  return (
    <div
      data-reveal
      className="group"
      onClick={() => navigate(`/projects/${p.id}`)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--card)',
        border: '1px solid var(--line)',
        borderRadius: 10,
        padding: 26,
        gap: 14,
        cursor: 'pointer',
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
        onClick={stop}
        style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.15 }}
      >
        {p.title}
      </Link>
      <p style={descStyle}>{p.card_description ?? p.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {p.tags.map((t) => <span key={t} style={tagStyle}>{t}</span>)}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          paddingTop: 14,
          borderTop: '1px solid var(--line)',
          fontSize: 14,
          fontWeight: 900,
        }}
      >
        <Link to={`/projects/${p.id}`} onClick={stop} style={{ color: 'var(--ink)' }}>View project →</Link>
        {p.repoUrl && p.repoUrl !== '#' && (
          <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" onClick={stop} style={{ color: 'var(--muted)' }}>View GitHub ↗</a>
        )}
      </div>
    </div>
  );
}

export function CaseStudyCard({ c }) {
  const navigate = useNavigate();

  return (
    <div
      data-reveal
      className="group"
      onClick={() => navigate(`/projects/${c.id}`)}
      style={{
        background: 'var(--card)',
        border: '1px solid var(--line)',
        borderRadius: 10,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'transform .25s cubic-bezier(.2,.7,.3,1), border-color .25s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--line)'; }}
    >
      <div style={{ padding: '22px 22px 16px' }}>
        <h3 style={{ fontSize: 23, fontWeight: 700, letterSpacing: '-0.025em', margin: 0 }}>
          <Link to={`/projects/${c.id}`} onClick={stop} style={{ color: 'var(--ink)' }}>{c.title}</Link>
        </h3>
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
        <p style={descStyle}>{c.card_description ?? c.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {c.tags.map((t) => <span key={t} style={tagStyle}>{t}</span>)}
        </div>
        <div style={{ paddingTop: 14, borderTop: '1px solid var(--line)', fontSize: 14, fontWeight: 900 }}>
          <Link to={`/projects/${c.id}`} onClick={stop} style={{ color: 'var(--ink)' }}>View case study →</Link>
        </div>
      </div>
    </div>
  );
}

export function CardGrid({ children }) {
  const isMobile = useIsMobile();
  return (
    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
      {children}
    </div>
  );
}

function SectionHeader({ title, viewAllTo, showViewAll, marginBottom }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', margin: `0 0 ${marginBottom}px` }}>
      <h2 className="section-heading" style={{ margin: 0 }}>{title}</h2>
      {showViewAll && (
        <Link
          to={viewAllTo}
          className="pill"
          style={{
            border: '1px solid var(--ink)',
            color: 'var(--ink)',
            padding: '10px 20px',
            fontSize: 14,
            transition: 'background .18s ease, color .18s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--paper)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; }}
        >
          View all →
        </Link>
      )}
    </div>
  );
}

export default function Projects() {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Projects */}
      <section id="work" data-reveal style={{ maxWidth: 1180, margin: '0 auto', padding: isMobile ? '64px 16px 0' : '92px 28px 0' }}>
        <SectionHeader title="Projects" viewAllTo="/projects" showViewAll={projects.length > HOME_LIMIT} marginBottom={40} />
        <CardGrid>
          {projects.slice(0, HOME_LIMIT).map((p) => <ProjectCard key={p.id} p={p} />)}
        </CardGrid>
      </section>

      {/* Case Studies */}
      <section data-reveal style={{ maxWidth: 1180, margin: '0 auto', padding: isMobile ? '48px 16px 0' : '76px 28px 0' }}>
        <SectionHeader title="Case studies" viewAllTo="/case-studies" showViewAll={caseStudies.length > HOME_LIMIT} marginBottom={32} />
        <CardGrid>
          {caseStudies.slice(0, HOME_LIMIT).map((c) => <CaseStudyCard key={c.id} c={c} />)}
        </CardGrid>
      </section>
    </>
  );
}
