import { useEffect, useRef } from 'react';
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
import BlogOverview from './components/BlogOverview';
import Writing from './components/Writing';
import WritingPost from './components/WritingPost';
import Photography from './components/Photography';
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './components/AdminDashboard';
import AdminEditor from './components/AdminEditor';
import AdminPhotos from './components/AdminPhotos';
import { useScrollReveal } from './hooks/useScrollReveal';

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
        <Projects />
        <About />
        <Experience />
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

function App() {
  return (
    <Router>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/blog" element={<BlogOverview />} />
        <Route path="/blog/writing" element={<Writing />} />
        <Route path="/blog/writing/:slug" element={<WritingPost />} />
        <Route path="/blog/photography" element={<Photography />} />
        <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/admin/new" element={<AdminLayout><AdminEditor /></AdminLayout>} />
        <Route path="/admin/edit/:id" element={<AdminLayout><AdminEditor /></AdminLayout>} />
        <Route path="/admin/photos" element={<AdminLayout><AdminPhotos /></AdminLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
