export default function Skills() {
  return (
    <section className="py-10 border-t border-slate-100 dark:border-slate-800" id="skills">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary">psychology</span> Skills & Expertise
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Product */}
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
          <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary">view_quilt</span>
          </div>
          <h3 className="text-xl font-bold mb-4">Product Management</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> <span className="text-sm">Product Strategy</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> <span className="text-sm">Agile / Scrum</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> <span className="text-sm">Product Roadmapping</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> <span className="text-sm">Stakeholder Communication</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> <span className="text-sm">User Story Writing</span></div>
          </div>
        </div>
        {/* AI & Data */}
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
          <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary">data_object</span>
          </div>
          <h3 className="text-xl font-bold mb-4">AI and Data</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> <span className="text-sm">Large Language Models (LLMs)</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> <span className="text-sm">RAG Architecture</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> <span className="text-sm">Knowledge Graphs</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> <span className="text-sm">Data Analysis</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> <span className="text-sm">Prompt Engineering</span></div>
          </div>
        </div>
        {/* Engineering */}
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
          <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary">code</span>
          </div>
          <h3 className="text-xl font-bold mb-4">Engineering</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> <span className="text-sm">Python / Flask</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> <span className="text-sm">React.js</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> <span className="text-sm">SQL / PostgreSQL</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> <span className="text-sm">AWS Services</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> <span className="text-sm">API Development</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
