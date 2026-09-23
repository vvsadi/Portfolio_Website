import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { ProjectCard, CaseStudyCard, CardGrid } from './Projects';
import { projects, caseStudies } from './projectData';
import { useIsMobile } from '../hooks/useIsMobile';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Full listing behind the home page's "View all" buttons; `kind` is 'projects' or 'caseStudies'.
export default function AllWork({ kind }) {
  const ref = useRef(null);
  useScrollReveal(ref);
  const isMobile = useIsMobile();
  const isCaseStudies = kind === 'caseStudies';

  return (
    <div ref={ref}>
      <Navigation />
      <main style={{ maxWidth: 1180, margin: '0 auto', padding: isMobile ? '48px 16px 0' : '64px 28px 0', animation: 'pagein .5s cubic-bezier(.2,.8,.3,1) both' }}>
        <Link
          to="/"
          state={{ scrollTo: 'work' }}
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--muted)' }}
        >
          ← Back home
        </Link>
        <h1 className="section-heading" style={{ margin: '28px 0 40px' }}>
          {isCaseStudies ? 'Case studies' : 'Projects'}
        </h1>
        <CardGrid>
          {isCaseStudies
            ? caseStudies.map((c) => <CaseStudyCard key={c.id} c={c} />)
            : projects.map((p) => <ProjectCard key={p.id} p={p} />)}
        </CardGrid>
      </main>
      <Footer />
    </div>
  );
}
