import { useState } from 'react';
import { projects, caseStudies } from './projectData';
import ProjectCard from './ProjectCard';

const VIEW_ALL_URL = '/projects-all';
const CARDS_PER_VIEW = 3;

function Carousel({ children, className = '' }) {
  const items = Array.isArray(children) ? children : [];
  const count = items.length;
  const totalSlides = Math.max(1, Math.ceil(count / CARDS_PER_VIEW));
  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(totalSlides - 1, i + 1));

  const slideWidthPercent = 100 / totalSlides;
  const slides = [];

  for (let s = 0; s < totalSlides; s += 1) {
    slides.push(
      <div
        key={s}
        className="grid gap-6 min-w-0 shrink-0"
        style={{
          flex: `0 0 ${slideWidthPercent}%`,
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        }}
      >
        {items
          .slice(s * CARDS_PER_VIEW, s * CARDS_PER_VIEW + CARDS_PER_VIEW)
          .map((card, i) => (
            <div key={`${s}-${i}`} className="min-w-0 flex">
              {card}
            </div>
          ))}
      </div>
    );
  }

  return (
    <div className={`relative w-full ${className}`}>
      <button
        type="button"
        onClick={goPrev}
        disabled={index === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 size-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none"
        aria-label="Previous"
      >
        <span className="material-symbols-outlined text-xl">chevron_left</span>
      </button>
      <button
        type="button"
        onClick={goNext}
        disabled={index >= totalSlides - 1}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 size-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none"
        aria-label="Next"
      >
        <span className="material-symbols-outlined text-xl">chevron_right</span>
      </button>
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            width: `${totalSlides * 100}%`,
            transform: `translateX(-${(index / totalSlides) * 100}%)`,
          }}
        >
          {slides}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projectCards = projects.map((p) => (
    <ProjectCard key={p.id} project={p} />
  ));

  const caseStudyCards = caseStudies.map((c) => (
    <ProjectCard key={c.id} project={c} />
  ));

  return (
    <section
      className="py-10 border-t border-slate-100 dark:border-slate-800"
      id="projects"
    >
      <div className="mb-12">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">
            rocket_launch
          </span>
          Featured Projects
        </h2>
        <p className="text-slate-500 mt-2">
          Selected work in AI, Data, and Web Platforms
        </p>
      </div>

      {/* Projects */}
      <div className="mb-16">
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">
              code
            </span>
            Projects
          </h3>
          <a
            href={VIEW_ALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold flex items-center gap-1 hover:underline"
          >
            View All{' '}
            <span className="material-symbols-outlined text-base">
              arrow_outward
            </span>
          </a>
        </div>
        <Carousel>{projectCards}</Carousel>
      </div>

      {/* Case Studies */}
      <div>
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">
              description
            </span>
            Case Studies
          </h3>
          <a
            href={VIEW_ALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold flex items-center gap-1 hover:underline"
          >
            View All{' '}
            <span className="material-symbols-outlined text-base">
              arrow_outward
            </span>
          </a>
        </div>
        <Carousel>{caseStudyCards}</Carousel>
      </div>
    </section>
  );
}