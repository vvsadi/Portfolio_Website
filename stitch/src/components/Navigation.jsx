import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg tracking-tight">
            <span className="leading-none" style={{ fontFamily: "'Lucida Calligraphy', cursive", fontSize: "2rem", fontWeight: 400 }}>VVS</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a className="hover:text-primary transition-colors" href={isHome ? "#about" : "/#about"}>About</a>
          <a className="hover:text-primary transition-colors" href={isHome ? "#experience" : "/#experience"}>Experience</a>
          <a className="hover:text-primary transition-colors" href={isHome ? "#projects" : "/#projects"}>Projects</a>
          <a className="hover:text-primary transition-colors" href={isHome ? "#skills" : "/#skills"}>Skills</a>
          <Link className="hover:text-primary transition-colors" to="/blog">Blog</Link>
        </div>
        <a className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-sm" href={isHome ? "#contact" : "/#contact"}>
          Contact Me
        </a>
      </div>
    </nav>
  );
}
