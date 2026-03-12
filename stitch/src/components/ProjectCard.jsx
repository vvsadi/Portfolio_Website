const cardBase =
  'group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all flex flex-col h-full';

export default function ProjectCard({ project }) {
  const { title, description, mediaType, mediaSrc, tags, repoUrl } = project;

  return (
    <div className={cardBase}>
      <div className="p-6 pb-0">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
          {title}
        </h3>
      </div>
      <div className="px-6">
        <div className="relative aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center">
          {mediaType === 'image' ? (
            <img alt={title} src={mediaSrc} className="w-full h-full object-cover" />
          ) : (
            <iframe
              src={mediaSrc}
              title={title}
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
            />
          )}
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
          {description}
        </p>
        {tags?.length ? (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-600 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        {repoUrl && (
          <div className="flex gap-4">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-primary flex items-center gap-1"
            >
              View Repository{' '}
              <span className="material-symbols-outlined text-xs">open_in_new</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

