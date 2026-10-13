import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowDown, Download, Sparkles, FolderGit2, CheckCircle2, Award, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal }) {
  const { personalInfo, stats } = portfolioData;
  const heroTitleRef = useRef(null);
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Split text GSAP reveal animation on mount
  useEffect(() => {
    if (!heroTitleRef.current) return;
    const chars = heroTitleRef.current.querySelectorAll('.hero-char');
    if (chars.length > 0) {
      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: 45,
          rotateX: -40,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.035,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    }
  }, []);

  // Dynamic typing & deleting subtext animation
  useEffect(() => {
    const currentFullText = personalInfo.typingSubtitles[subtitleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setSubtitleIndex((prev) => (prev + 1) % personalInfo.typingSubtitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, subtitleIndex, personalInfo.typingSubtitles]);

  // Split name into animated characters
  const greetingText = "Hello, I'm ";
  const nameText = personalInfo.name;

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '7.5rem',
        paddingBottom: '4rem',
        overflow: 'hidden',
      }}
    >
      <div className="max-container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Text & CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Availability Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ display: 'inline-flex' }}
            >
              <div className="status-beacon">
                <span className="status-beacon-dot" />
                <span>{personalInfo.availabilityStatus}</span>
              </div>
            </motion.div>

            {/* Main Greeting & Name with GSAP Split Text */}
            <h1
              ref={heroTitleRef}
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.035em',
              }}
            >
              <span style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.65em', fontWeight: 600 }}>
                {greetingText}
              </span>
              <span className="text-gradient-cyan-indigo" style={{ display: 'inline-block' }}>
                {nameText.split('').map((char, index) => (
                  <span
                    key={index}
                    className="hero-char"
                    style={{
                      display: 'inline-block',
                      whiteSpace: char === ' ' ? 'pre' : 'normal',
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h1>

            {/* Dynamic Typing Subtext with Glowing Caret */}
            <div
              style={{
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                }}
              >
                {displayedText}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '1.4em',
                  backgroundColor: 'var(--color-cyan-bright)',
                  boxShadow: '0 0 10px var(--color-cyan)',
                  animation: 'blinkCaret 0.9s infinite',
                }}
              />
            </div>

            {/* Narrative Bio */}
            <p
              style={{
                fontSize: '1.08rem',
                color: 'var(--text-secondary)',
                maxWidth: '560px',
                lineHeight: 1.7,
              }}
            >
              {personalInfo.bio}
            </p>

            {/* Magnetic CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                paddingTop: '0.5rem',
              }}
            >
              {/* Primary CTA: View Projects */}
              <a
                href="#projects"
                className="btn-primary"
                style={{
                  padding: '0.95rem 2rem',
                  fontSize: '1rem',
                }}
              >
                <FolderGit2 size={18} />
                <span>View Projects</span>
              </a>

              {/* Secondary CTA: Tailored Resumes */}
              <a
                href="#resume"
                className="btn-secondary"
                style={{
                  padding: '0.95rem 1.85rem',
                  fontSize: '1rem',
                }}
              >
                <Download size={18} />
                <span>Resume (3 Tailored Roles)</span>
              </a>

              {/* Quick Resume Modal Trigger */}
              <button
                type="button"
                onClick={() => onOpenResumeModal('fullstack')}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--color-cyan-bright)',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '9999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'opacity 0.2s ease',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <Sparkles size={15} />
                <span>Quick View CV</span>
              </button>
            </motion.div>

            {/* Quick Social Connect Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                flexWrap: 'wrap',
                paddingTop: '0.25rem',
              }}
            >
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Social & Direct:
              </span>
              <a
                href={portfolioData.contactInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill"
                style={{
                  padding: '0.35rem 0.8rem',
                  fontSize: '0.82rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  textDecoration: 'none',
                }}
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
              <a
                href={portfolioData.contactInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill"
                style={{
                  padding: '0.35rem 0.8rem',
                  fontSize: '0.82rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  textDecoration: 'none',
                }}
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href={portfolioData.contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill"
                style={{
                  padding: '0.35rem 0.8rem',
                  fontSize: '0.82rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  textDecoration: 'none',
                }}
              >
                <WhatsAppIcon size={14} color="var(--color-emerald)" />
                <span>WhatsApp</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '430px',
              }}
            >
              {/* Outer Decorative Glowing Border */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  borderRadius: '2rem',
                  background: 'linear-gradient(135deg, var(--color-cyan-glow), var(--color-indigo-glow), var(--color-violet-glow))',
                  filter: 'blur(16px)',
                  opacity: 0.7,
                  zIndex: 0,
                }}
              />

              {/* Main Profile Card Container */}
              <div
                className="glass-panel"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: '1.75rem',
                  borderRadius: '1.75rem',
                  border: '1px solid var(--border-glass-strong)',
                  overflow: 'hidden',
                }}
              >
                {/* Photo slot */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    borderRadius: '1.25rem',
                    overflow: 'hidden',
                    marginBottom: '1.5rem',
                    border: '1px solid var(--border-glass)',
                  }}
                >
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Gradient overlay inside photo */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(7, 10, 18, 0.7) 0%, transparent 60%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Floating role badge inside photo */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      right: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'rgba(11, 17, 32, 0.75)',
                      backdropFilter: 'blur(12px)',
                      padding: '0.6rem 0.9rem',
                      borderRadius: '0.85rem',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    <div>
                      <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>
                        {personalInfo.name}
                      </p>
                      <p style={{ fontSize: '0.72rem', color: 'var(--color-cyan-bright)' }}>
                        {personalInfo.role}
                      </p>
                    </div>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--color-cyan) 0%, var(--color-indigo) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                      }}
                    >
                      <Terminal size={15} />
                    </div>
                  </div>
                </div>

                {/* Quick Highlights Row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    className="glass-panel-subtle"
                    style={{
                      padding: '0.85rem',
                      textAlign: 'center',
                    }}
                  >
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location</p>
                    <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                      {personalInfo.location}
                    </p>
                  </div>
                  <div
                    className="glass-panel-subtle"
                    style={{
                      padding: '0.85rem',
                      textAlign: 'center',
                    }}
                  >
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Focus</p>
                    <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-emerald)', marginTop: '0.2rem' }}>
                      Next.js & Node.js
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Orbiting Chip 1: Role */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  zIndex: 2,
                  background: 'var(--bg-glass-strong)',
                  backdropFilter: 'blur(16px)',
                  padding: '0.6rem 1rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-glow-cyan)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Award size={16} style={{ color: 'var(--color-cyan-bright)' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Full-Stack Dev
                </span>
              </motion.div>

              {/* Floating Orbiting Chip 2: Production Deployments */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  left: '-15px',
                  zIndex: 2,
                  background: 'var(--bg-glass-strong)',
                  backdropFilter: 'blur(16px)',
                  padding: '0.6rem 1rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-glow-indigo)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <CheckCircle2 size={16} style={{ color: 'var(--color-indigo-bright)' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  End-to-End Web Apps
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Performance Stats Counter Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            marginTop: '5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--border-glass-subtle)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-panel"
              style={{
                padding: '1.4rem 1.6rem',
                borderRadius: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
              }}
            >
              <span
                style={{
                  fontSize: '2.4rem',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  fontFamily: 'var(--font-heading)',
                }}
                className="text-gradient-cyan-indigo"
              >
                {stat.value}
              </span>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {stat.label}
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                {stat.change}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pulsing Down Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About Section"
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          color: 'var(--text-muted)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.35rem',
          fontSize: '0.75rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan-bright)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
      >
        <span>Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </a>

      <style>{`
        @keyframes blinkCaret {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
