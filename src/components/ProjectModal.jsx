import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, TrendingUp, Cpu, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, isOpen, onClose }) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.25rem',
        }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(5, 8, 16, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 25 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="glass-panel"
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: '820px',
            maxHeight: '90vh',
            overflowY: 'auto',
            borderRadius: '1.75rem',
            border: '1px solid var(--border-glass-strong)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(99, 102, 241, 0.25)',
            padding: '2rem',
            background: 'var(--bg-glass-strong)',
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Project Modal"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-glass-hover)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 20,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-glass-hover)';
              e.currentTarget.style.borderColor = 'var(--border-glass)';
            }}
          >
            <X size={20} />
          </button>

          {/* Hero Image & Badge Header */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '320px',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              marginBottom: '1.75rem',
              border: '1px solid var(--border-glass)',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(7, 10, 18, 0.85) 0%, transparent 60%)',
              }}
            />

            {/* Category tag */}
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                padding: '0.4rem 0.95rem',
                borderRadius: '9999px',
                background: 'rgba(11, 17, 32, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border-glow-cyan)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--color-cyan-bright)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <Sparkles size={14} />
              <span>{project.category}</span>
            </div>

            {/* Title & Subtitle overlay at bottom of image */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                right: '1.25rem',
              }}
            >
              <h3
                id="modal-project-title"
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.25rem',
                }}
              >
                {project.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Deep-Dive Case Study Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div>
              <h4
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Cpu size={18} style={{ color: 'var(--color-cyan-bright)' }} />
                <span>Architecture & Engineering Overview</span>
              </h4>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                }}
              >
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Impact Metrics Grid */}
            {project.impactMetrics && project.impactMetrics.length > 0 && (
              <div>
                <h4
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <TrendingUp size={18} style={{ color: 'var(--color-emerald)' }} />
                  <span>Production Impact & Telemetry</span>
                </h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                  }}
                >
                  {project.impactMetrics.map((metric, i) => (
                    <div
                      key={i}
                      className="glass-panel-subtle"
                      style={{
                        padding: '1.1rem',
                        textAlign: 'center',
                        border: '1px solid var(--border-glass)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '1.6rem',
                          fontWeight: 800,
                          color: 'var(--color-cyan-bright)',
                          display: 'block',
                        }}
                      >
                        {metric.value}
                      </span>
                      <span
                        style={{
                          fontSize: '0.82rem',
                          color: 'var(--text-muted)',
                          marginTop: '0.2rem',
                          display: 'block',
                        }}
                      >
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features List */}
            {project.keyFeatures && (
              <div>
                <h4
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Key Architectural Features
                </h4>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                  }}
                >
                  {project.keyFeatures.map((feat, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.92rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <CheckCircle2
                        size={17}
                        style={{ color: 'var(--color-cyan-bright)', flexShrink: 0, marginTop: '2px' }}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div>
              <h4
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}
              >
                Technologies Employed
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      background: 'var(--bg-glass-subtle)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-glass-subtle)',
              }}
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ flex: 1, minWidth: '180px' }}
                >
                  <span>Launch Live Deployment</span>
                  <ExternalLink size={16} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ flex: 1, minWidth: '180px' }}
                >
                  <GithubIcon size={16} />
                  <span>Inspect Source Code</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
