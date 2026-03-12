import UTD from '../assets/UTD.png';
import VIT from '../assets/VIT.png';
export default function About() {
  return (
    <section className="py-10 border-t border-slate-100 dark:border-slate-800" id="about">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">person</span> About Me
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            <p>
              Hi, I'm Aditya. I sit at the intersection of technology, data, and business. With experience in Consulting, Business Analysis, technical solution ideation, and product ownership, I enjoy translating complex business problems into practical digital solutions.
            </p>
            <p>
              My approach combines structured problem solving with data-driven insights, technical curiosity, and product thinking to ensure that every feature built aligns with real user needs and clear business outcomes.
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Education & Honors</h3>
          <div className="space-y-6">
            {/* UTD */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img
                  alt="UTD Logo"
                  src={UTD}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">MS in IT &amp; Management</h4>
                <p className="text-slate-500">The University of Texas at Dallas</p>
                <div className="mt-2 flex items-center gap-2 flex-wrap">
                  <span className="bg-primary/5 text-primary text-xs font-bold px-2 py-1 rounded">GPA 3.888</span>
                  <span className="bg-yellow-500/10 text-yellow-600 text-xs font-bold px-2 py-1 rounded">Beta Gamma Sigma</span>
                  <span className="bg-green-500/10 text-green-600 text-xs font-bold px-2 py-1 rounded">Dean's Council</span>
                  <span className="bg-red-500/10 text-red-600 text-xs font-bold px-2 py-1 rounded">Student Leadership Council</span>
                  <span className="bg-purple-500/10 text-purple-600 text-xs font-bold px-2 py-1 rounded">Nash Leader</span>
                  <span className="bg-orange-500/10 text-orange-600 text-xs font-bold px-2 py-1 rounded">Impact Award</span>
                </div>
              </div>
            </div>

            {/* VIT */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img
                  alt="VIT Logo"
                  src={VIT}
                  className="max-w-full max-h-full object-contain scale-125"
                />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  B.Tech in Electronics and Communication Engineering
                </h4>
                <p className="text-slate-500">Vellore Institute of Technology</p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="bg-primary/5 text-primary text-xs font-bold px-2 py-1 rounded">GPA 8.14</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
