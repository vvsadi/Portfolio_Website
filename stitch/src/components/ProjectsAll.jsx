import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { projects, caseStudies } from './projectData';
import ProjectCard from './ProjectCard';

export default function ProjectsAll() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">rocket_launch</span>
            Projects & Case Studies
          </h1>
          <p className="text-slate-500 mt-2">All featured work in AI, Data, and Web Platforms</p>
        </div>

        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">code</span>
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">description</span>
            Case Studies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((c) => (
              <ProjectCard key={c.id} project={c} />
            ))}
          </div>
        </section>

        <div className="mt-12">
          <Link to="/" className="text-primary font-bold flex items-center gap-1 hover:underline">
            <span className="material-symbols-outlined text-base">arrow_back</span> Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
