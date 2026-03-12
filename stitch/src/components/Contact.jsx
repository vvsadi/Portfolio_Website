import gmailIcon from '../assets/Gmail_icon.png';
import githubIcon from '../assets/Github.png';
import whatsappIcon from '../assets/Whatsapp.png';

export default function Contact() {
  return (
    <section className="py-20 border-t border-slate-100 dark:border-slate-800" id="contact">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">alternate_email</span> Get in Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
            Interested in collaborating on a product or discussing the latest in AI? I'm always open to talking shop.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="size-14 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors overflow-hidden">
                <img src={whatsappIcon} alt="Whatsapp" className="w-full h-full object-contain dark:invert group-hover:invert-0 transition-all" />
              </div>
              <span className="font-medium">+1 (945)-251-3495</span>
            </div>
            <a className="flex items-center gap-4 group" href="mailto:adityavemparalausa@gmail.com">
              <div className="size-12 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors overflow-hidden p-2.5">
                <img src={gmailIcon} alt="Gmail" className="w-full h-full object-contain" />
              </div>
              <span className="font-medium">adityavemparalausa@gmail.com</span>
            </a>
            <a className="flex items-center gap-4 group" href="https://github.com/vvsadi" target="_blank" rel="noopener noreferrer">
              <div className="size-12 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors overflow-hidden p-2.5">
                <img src={githubIcon} alt="GitHub" className="w-full h-full object-contain dark:invert group-hover:invert-0 transition-all" />
              </div>
              <span className="font-medium">github.com/vvsadi</span>
            </a>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Name</label>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</label>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all" placeholder="john@example.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Message</label>
              <textarea className="w-full bg-slate-50 dark:bg-slate-800 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all" placeholder="How can I help you?" rows="4"></textarea>
            </div>
            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
