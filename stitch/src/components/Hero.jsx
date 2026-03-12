import linkedinLogo from '../assets/linkedin_logo.jpg';
import resumePDF from '../assets/Aditya Vemparala Resume v1.0.pdf'
import Aditya from '../assets/Aditya Picture.jpeg';

export default function Hero() {
  return (
    <section className="pt-10 pb-10 lg:pb-32 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-wider uppercase">
            Available for new opportunities
          </span>
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white" style={{fontFamily: "'Lucida Calligraphy', cursive"}}>
            Aditya VVS
          </h1>
          <p className="text-xl text-primary font-semibold">Product and AI Enthusiast</p>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            Building intelligent digital products that combine technology, data, and product thinking to solve real business problems.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-start">
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm text-white">download</span> Resume
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-v-v-s-b7614a13a/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-200 dark:border-slate-800 px-6 py-3 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all flex items-center gap-2"
          >
            <img src={linkedinLogo} alt="LinkedIn Logo" className="w-5 h-5 rounded-sm object-cover" />
            Let's Connect
          </a>
        </div>
      </div>
      <div className="relative w-full max-w-md">
        <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
          <img
            alt="Professional Portrait of Aditya"
            className="w-full h-full object-cover"
            src={Aditya}
          />
        </div>
      </div>
    </section>
  );
}
