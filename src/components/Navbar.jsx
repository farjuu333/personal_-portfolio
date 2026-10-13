import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { contactInfo } = portfolioData;

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll spy for active section
      const sections = ['hero', 'about', 'projects', 'skills', 'timeline', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: '1.25rem',
          left: 0,
          right: 0,
          zIndex: 900,
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
          padding: '0 1rem',
        }}
      >
        <nav
          className="glass-panel"
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            padding: '0.6rem 1.25rem',
            borderRadius: '9999px',
            border: scrolled
              ? '1px solid var(--border-glass-strong)'
              : '1px solid var(--border-glass)',
            boxShadow: scrolled
              ? '0 12px 35px -5px rgba(0, 0, 0, 0.45), 0 0 15px rgba(99, 102, 241, 0.2)'
              : 'var(--shadow-glass)',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            maxWidth: '960px',
            width: '100%',
          }}
        >
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              fontWeight: 700,
              fontSize: '1.05rem',
              letterSpacing: '-0.02em',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--color-cyan-bright) 0%, var(--color-indigo) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.95rem',
                boxShadow: '0 0 15px rgba(6, 182, 212, 0.5)',
              }}
            >
              FA
            </div>
            <span style={{ display: 'none' }} className="brand-text">
              {portfolioData.personalInfo.name}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div
            className="desktop-nav-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    position: 'relative',
                    padding: '0.45rem 0.95rem',
                    borderRadius: '9999px',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    transition: 'color 0.2s ease',
                    textDecoration: 'none',
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '9999px',
                        background: 'var(--bg-glass-hover)',
                        border: '1px solid var(--border-glow-indigo)',
                        zIndex: -1,
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Controls: Socials, Theme Switch & CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {/* Header GitHub Link */}
            <a
              href={contactInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="header-social-btn"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-glass-subtle)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-cyan)';
                e.currentTarget.style.color = 'var(--color-cyan-bright)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-glass)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <GithubIcon size={16} />
            </a>

            {/* Header LinkedIn Link */}
            <a
              href={contactInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="header-social-btn"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-glass-subtle)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-glow-indigo)';
                e.currentTarget.style.color = 'var(--color-indigo-bright)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-glass)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <LinkedinIcon size={16} />
            </a>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-glass-subtle)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-primary)',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-glass)')}
            >
              {theme === 'dark' ? (
                <Sun size={16} style={{ color: '#fbbf24' }} />
              ) : (
                <Moon size={16} style={{ color: '#6366f1' }} />
              )}
            </button>

            {/* Quick Hire CTA button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary desktop-cta"
              style={{
                padding: '0.45rem 1.05rem',
                fontSize: '0.84rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                textDecoration: 'none',
              }}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle Navigation Menu"
              style={{
                display: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-glass-subtle)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
              }}
            >
              {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="glass-panel"
            style={{
              position: 'fixed',
              top: '5.2rem',
              left: '1rem',
              right: '1rem',
              zIndex: 899,
              padding: '1.5rem',
              borderRadius: '1.5rem',
              border: '1px solid var(--border-glass-strong)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              background: 'var(--bg-glass-strong)',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  padding: '0.65rem 0.95rem',
                  borderRadius: '0.75rem',
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  color: activeSection === link.href.replace('#', '') ? 'var(--color-cyan-bright)' : 'var(--text-primary)',
                  background: activeSection === link.href.replace('#', '') ? 'var(--bg-glass-hover)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                }}
              >
                <span>{link.name}</span>
                <ArrowUpRight size={15} opacity={0.6} />
              </a>
            ))}

            {/* Mobile Contact & Social Quick Info */}
            <div
              style={{
                marginTop: '0.5rem',
                paddingTop: '0.85rem',
                borderTop: '1px solid var(--border-glass-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <a
                href={`mailto:${contactInfo.directEmail}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                }}
              >
                <Mail size={15} style={{ color: 'var(--color-cyan-bright)' }} />
                <span>{contactInfo.directEmail}</span>
              </a>

              <a
                href={`tel:${contactInfo.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                }}
              >
                <Phone size={15} style={{ color: 'var(--color-emerald)' }} />
                <span>{contactInfo.phone}</span>
              </a>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                }}
              >
                <MapPin size={15} style={{ color: 'var(--color-indigo-bright)' }} />
                <span>{contactInfo.officeLocation}</span>
              </div>
            </div>

            {/* Mobile Social Link Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '0.65rem',
                marginTop: '0.35rem',
              }}
            >
              <a
                href={contactInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  fontSize: '0.82rem',
                  justifyContent: 'center',
                  textDecoration: 'none',
                }}
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>

              <a
                href={contactInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  fontSize: '0.82rem',
                  justifyContent: 'center',
                  textDecoration: 'none',
                }}
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  fontSize: '0.82rem',
                  justifyContent: 'center',
                  textDecoration: 'none',
                }}
              >
                <WhatsAppIcon size={15} color="var(--color-emerald)" />
                <span>WhatsApp</span>
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary"
              style={{
                marginTop: '0.4rem',
                width: '100%',
                padding: '0.75rem',
                fontSize: '0.92rem',
                textDecoration: 'none',
                justifyContent: 'center',
              }}
            >
              <span>Get in Touch</span>
              <Sparkles size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 640px) {
          .brand-text {
            display: inline !important;
          }
        }
        @media (max-width: 820px) {
          .desktop-nav-links {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .header-social-btn {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
