
import "./index.css";

import HeroSection from "./Sections/HeroSection";
import CPSection from "./Sections/CPSection";
import SkillsSection from "./Sections/SkillsSection";
import ProjectsSection from "./Sections/ProjectsSection";
import ContactSection from "./Sections/ContactSection";




const App = () => {
  return (
    <div className="app-container">
      {/* Sticky Top Navbar */}
      <nav className="top-navbar">
        <div className="nav-container">
          <a href="#hero" className="nav-logo">Sadat</a>
          <div className="nav-links">
            <a href="#cp">CP</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>



      <HeroSection />

      <CPSection />

      <SkillsSection />

      <ProjectsSection />

      <ContactSection />


    </div >
  )
}

export default App
