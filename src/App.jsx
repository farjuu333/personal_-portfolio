import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Layout & Global Components
import CustomCursor from './components/CustomCursor';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Section Components
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Resume from './components/Resume';
import Contact from './components/Contact';

// Modals
import ResumeModal from './components/ResumeModal';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // Theme state: dark mode by default, persisted in localStorage
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved || 'dark';
  });

  // Resume Modal visibility state
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeResumeVersionId, setActiveResumeVersionId] = useState('fullstack');

  const handleOpenResumeModal = (versionId = 'fullstack') => {
    if (versionId && typeof versionId === 'string') {
      setActiveResumeVersionId(versionId);
    }
    setIsResumeModalOpen(true);
  };

  // Sync theme with DOM and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-wrapper">
      {/* Magnetic Cursor Follower */}
      <CustomCursor enabled={true} />

      {/* Dynamic 2D/3D Particle Canvas & Ambient Gradient Orbs */}
      <CanvasBackground theme={theme} />

      {/* Floating Glassmorphic Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main>
        {/* 1. High-Impact Hero Section with GSAP Split Text */}
        <Hero onOpenResumeModal={handleOpenResumeModal} />

        {/* 2. About & 4-Stage Workflow Section */}
        <About />

        {/* 3. Filterable Projects & Case Study Showcase */}
        <Projects />

        {/* 4. Skills & Competencies with Animated Proficiency */}
        <Skills />

        {/* 5. Achievements & Verified Milestones Timeline */}
        <Timeline />

        {/* 6. Resume & Drag-and-Drop Uploader Component */}
        <Resume onOpenResumeModal={handleOpenResumeModal} />

        {/* 7. Contact Form with Canvas Confetti & Direct Channels */}
        <Contact />
      </main>

      {/* Minimalist Glassmorphic Footer */}
      <Footer />

      {/* Dedicated Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        initialVersionId={activeResumeVersionId}
      />
    </div>
  );
}
