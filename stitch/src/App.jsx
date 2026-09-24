import { useEffect, useRef, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import AllWork from './components/AllWork';
import BlogOverview from './components/BlogOverview';
import Writing from './components/Writing';
import WritingPost from './components/WritingPost';
import Photography from './components/Photography';
import { useScrollReveal } from './hooks/useScrollReveal';

const AdminLayout = lazy(() => import('./components/AdminLayout'));
const AdminDashboard = lazy(() => import('./components/AdminDashboard'));
const AdminEditor = lazy(() => import('./components/AdminEditor'));
const AdminPhotos = lazy(() => import('./components/AdminPhotos'));

function ScrollToSection() {
  const location = useLocation();
  useEffect(() => {
    const id = location.state?.scrollTo;
    if (id) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
  return null;
}

function Home() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <div ref={ref}>
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function ProjectPage() {
  return (
    <>
      <Navigation />
      <ProjectDetail />
      <Footer />
    </>
  );
}

function AdminFallback() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--paper)' }}>
      <p style={{ color: 'var(--muted)', fontSize: 15 }}>Loading...</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllWork kind="projects" />} />
        <Route path="/case-studies" element={<AllWork kind="caseStudies" />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/blog" element={<BlogOverview />} />
        <Route path="/blog/writing" element={<Writing />} />
        <Route path="/blog/writing/:slug" element={<WritingPost />} />
        <Route path="/blog/photography" element={<Photography />} />
        <Route path="/admin" element={<Suspense fallback={<AdminFallback />}><AdminLayout><AdminDashboard /></AdminLayout></Suspense>} />
        <Route path="/admin/new" element={<Suspense fallback={<AdminFallback />}><AdminLayout><AdminEditor /></AdminLayout></Suspense>} />
        <Route path="/admin/edit/:id" element={<Suspense fallback={<AdminFallback />}><AdminLayout><AdminEditor /></AdminLayout></Suspense>} />
        <Route path="/admin/photos" element={<Suspense fallback={<AdminFallback />}><AdminLayout><AdminPhotos /></AdminLayout></Suspense>} />
      </Routes>
    </Router>
  );
}

export default App;
