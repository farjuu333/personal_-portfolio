import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personalInfo, contactInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid var(--border-glass-subtle)',
        background: 'var(--bg-glass-strong)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '4rem 0 2.5rem 0',
      }}
    >
      <div className="max-container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
          }}
        >
          {/* Main Footer Grid: Brand / Contact / Socials */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2.5rem',
              alignItems: 'start',
            }}
          >
            {/* Column 1: Brand & Bio */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, var(--color-cyan-bright) 0%, var(--color-indigo) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    boxShadow: '0 0 15px rgba(6, 182, 212, 0.45)',
                  }}
                >
                  FA
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {personalInfo.name}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-cyan-bright)', fontWeight: 600 }}>
                    {personalInfo.role}
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  maxWidth: '360px',
                  marginBottom: '1.25rem',
                }}
              >
                Building scalable, end-to-end web applications with React, Next.js, Node.js, and modern databases.
              </p>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                }}
              >
                <MapPin size={15} style={{ color: 'var(--color-indigo-bright)' }} />
                <span>{contactInfo.officeLocation}</span>
              </div>
            </div>

            {/* Column 2: Direct Contact Details */}
            <div>
              <h4
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                  marginBottom: '1.25rem',
                }}
              >
                Direct Contact
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {/* Email mailto link */}
                <a
                  href={`mailto:${contactInfo.directEmail}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    transition: 'color 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan-bright)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(6, 182, 212, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-cyan-bright)',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={16} />
                  </div>
                  <span>{contactInfo.directEmail}</span>
                </a>

                {/* Phone / WhatsApp tel link */}
                <a
                  href={`tel:${contactInfo.phone}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    transition: 'color 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-emerald)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-emerald)',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={16} />
                  </div>
                  <span>{contactInfo.phone}</span>
                </a>

                {/* Location */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(99, 102, 241, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-indigo-bright)',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={16} />
                  </div>
                  <span>{contactInfo.officeLocation}</span>
                </div>
              </div>
            </div>

            {/* Column 3: Connect & Social Presence */}
            <div>
              <h4
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                  marginBottom: '1.25rem',
                }}
              >
                Connect & Socials
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {/* GitHub */}
                <a
                  href={contactInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel-subtle"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 1rem',
                    borderRadius: '0.75rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-glow-cyan)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-glass-subtle)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <GithubIcon size={18} />
                    <span>GitHub (@farjuu333)</span>
                  </div>
                  <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
                </a>

                {/* LinkedIn */}
                <a
                  href={contactInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel-subtle"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 1rem',
                    borderRadius: '0.75rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-glow-indigo)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-glass-subtle)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <LinkedinIcon size={18} />
                    <span>LinkedIn (/in/farjana-akter-dev)</span>
                  </div>
                  <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
                </a>

                {/* WhatsApp */}
                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel-subtle"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 1rem',
                    borderRadius: '0.75rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-glass-subtle)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <WhatsAppIcon size={18} color="var(--color-emerald)" />
                    <span>WhatsApp (+8801749600538)</span>
                  </div>
                  <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links & Scroll to Top */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.25rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-glass-subtle)',
            }}
          >
            <nav
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan-bright)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="glass-panel-subtle"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.84rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                border: '1px solid var(--border-glass)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-cyan-bright)';
                e.currentTarget.style.color = 'var(--color-cyan-bright)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-glass)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </button>
          </div>

          {/* Bottom Bar: Copyright & Operational Status */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              fontSize: '0.84rem',
              color: 'var(--text-muted)',
              paddingTop: '0.5rem',
            }}
          >
            <p>
              © {currentYear} {personalInfo.name} — Dhaka, Bangladesh. Built with React, Framer Motion & Vanilla CSS.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-emerald)',
                  boxShadow: '0 0 8px var(--color-emerald)',
                }}
              />
              <span style={{ color: 'var(--text-secondary)' }}>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
