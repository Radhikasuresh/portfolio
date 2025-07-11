import { useState } from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';
import Certifications from './components/certifications/Certifications';


function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="portfolio-container">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <About id="about" setActiveSection={setActiveSection} />
        <Skills id="skills" setActiveSection={setActiveSection} />
        <Experience id="experience" setActiveSection={setActiveSection} />
        <Projects id="projects" setActiveSection={setActiveSection} />
        <Certifications id="certifications" setActiveSection={setActiveSection} />
        <Education id="education" setActiveSection={setActiveSection} />
        <Contact id="contact" setActiveSection={setActiveSection} /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;