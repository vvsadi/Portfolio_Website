import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import ProjectsAll from './components/ProjectsAll';

function Home() {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects-all" element={<ProjectsAll />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
