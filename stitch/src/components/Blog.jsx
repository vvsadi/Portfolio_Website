import Navigation from './Navigation';
import Footer from './Footer';

export default function Blog() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-6 py-20 lg:py-32 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-6">
          <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-primary text-4xl">history_edu</span>
          </div>
          <h1 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Blog
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            This is where I write about my experiences, learnings, and thoughts on various topics.
          </p>
          <div className="mt-12 p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm inline-block">
             <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
             <p className="text-slate-500">I'm currently working on some exciting articles. Check back later!</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
