import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  FileText,
  Briefcase,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Code2,
  Server,
  Layers,
  ArrowDownToLine,
  ExternalLink,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, initialVersionId = 'fullstack' }) {
  const { resumeDetails, personalInfo } = portfolioData;
  const versions = resumeDetails.resumeVersions || [];

  const [activeVersionId, setActiveVersionId] = useState(initialVersionId);
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    if (initialVersionId) {
      setActiveVersionId(initialVersionId);
    }
  }, [initialVersionId]);

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

  if (!isOpen) return null;

  const currentVersion =
    versions.find((v) => v.id === activeVersionId) ||
    versions[0] || {
      id: 'fullstack',
      name: 'Full-Stack Developer Resume',
      label: 'Full-Stack Developer',
      role: 'Full-Stack Developer',
      downloadFilename: 'Farjana_Akter_Full_Stack_Developer_Resume.pdf',
      downloadUrl: '/Farjana_Akter_Full_Stack_Developer_Resume.pdf',
      objective: resumeDetails.summary,
      badge: 'PostgreSQL & Prisma Focus',
      highlights: resumeDetails.coreCompetencies,
    };

  const getRoleIcon = (id, size = 15) => {
    switch (id) {
      case 'frontend':
        return <Code2 size={size} />;
      case 'mern':
        return <Server size={size} />;
      case 'fullstack':
      default:
        return <Layers size={size} />;
    }
  };

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
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
          }}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="glass-panel"
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: '920px',
            maxHeight: '92vh',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '1.75rem',
            border: '1px solid var(--border-glass-strong)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.75), 0 0 30px rgba(99, 102, 241, 0.25)',
            overflow: 'hidden',
            background: 'var(--bg-glass-strong)',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '1.5rem 2rem',
              borderBottom: '1px solid var(--border-glass)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                <h3 id="resume-modal-title" style={{ fontSize: '1.45rem', fontWeight: 800 }}>
                  {personalInfo.name} — Curriculum Vitae
                </h3>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    background: 'rgba(6, 182, 212, 0.15)',
                    border: '1px solid var(--border-glow-cyan)',
                    color: 'var(--color-cyan-bright)',
                  }}
                >
                  {currentVersion.badge}
                </span>
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                {personalInfo.location} • <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--color-cyan-bright)' }}>{personalInfo.email}</a> • <a href={`tel:${personalInfo.phone}`} style={{ color: 'var(--text-secondary)' }}>{personalInfo.phone}</a>
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a
                href={currentVersion.downloadUrl}
                download={currentVersion.downloadFilename}
                className="btn-primary"
                style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
              >
                <ArrowDownToLine size={16} />
                <span>Download {currentVersion.label}</span>
              </a>

              <button
                onClick={onClose}
                aria-label="Close Resume Modal"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--bg-glass-hover)',
                  border: '1px solid var(--border-glass)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Role Version Switcher Row */}
          <div
            style={{
              padding: '0.75rem 2rem',
              background: 'rgba(0, 0, 0, 0.25)',
              borderBottom: '1px solid var(--border-glass-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                Tailored Version:
              </span>
              {versions.map((ver) => {
                const isSelected = activeVersionId === ver.id;
                return (
                  <button
                    key={ver.id}
                    type="button"
                    onClick={() => setActiveVersionId(ver.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      fontSize: '0.8rem',
                      fontWeight: isSelected ? 700 : 500,
                      background: isSelected
                        ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.25) 0%, rgba(99, 102, 241, 0.3) 100%)'
                        : 'var(--bg-glass-subtle)',
                      border: isSelected
                        ? '1px solid var(--border-glow-cyan)'
                        : '1px solid var(--border-glass-subtle)',
                      color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {getRoleIcon(ver.id, 13)}
                    <span>{ver.name}</span>
                  </button>
                );
              })}
            </div>

            <a
              href={currentVersion.downloadUrl}
              download={currentVersion.downloadFilename}
              style={{
                fontSize: '0.78rem',
                color: 'var(--color-cyan-bright)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontWeight: 600,
              }}
            >
              <Download size={13} />
              <span>Get PDF ({currentVersion.downloadFilename})</span>
            </a>
          </div>

          {/* Sub-navigation tabs (Experience, Summary, Education) */}
          <div
            style={{
              padding: '0.65rem 2rem',
              borderBottom: '1px solid var(--border-glass-subtle)',
              display: 'flex',
              gap: '0.5rem',
              background: 'rgba(0, 0, 0, 0.1)',
            }}
          >
            {[
              { id: 'experience', label: 'Work & Project Experience', icon: <Briefcase size={15} /> },
              { id: 'summary', label: 'Target Objective & Skills', icon: <FileText size={15} /> },
              { id: 'education', label: 'Education & Certifications', icon: <GraduationCap size={15} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: activeTab === tab.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                  background: activeTab === tab.id ? 'var(--bg-glass-hover)' : 'transparent',
                  border: '1px solid',
                  borderColor: activeTab === tab.id ? 'var(--border-glow-cyan)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Body Content */}
          <div style={{ padding: '2rem', overflowY: 'auto', flex: 1 }}>
            {/* Tab: Work & Project Experience */}
            {activeTab === 'experience' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {resumeDetails.experience.map((exp, i) => (
                  <div
                    key={i}
                    className="glass-panel-subtle"
                    style={{
                      padding: '1.5rem',
                      borderLeft: '3px solid var(--color-cyan)',
                      borderRadius: '1rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <div>
                        <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                          {exp.role}
                        </h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-cyan-bright)', fontWeight: 600 }}>
                          {exp.company} — {exp.location}
                        </p>
                      </div>
                      <span
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          background: 'var(--bg-glass-hover)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <ul
                      style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        marginTop: '0.85rem',
                      }}
                    >
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.65rem',
                            fontSize: '0.92rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                          }}
                        >
                          <CheckCircle2
                            size={16}
                            style={{ color: 'var(--color-indigo-bright)', flexShrink: 0, marginTop: '3px' }}
                          />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Tab: Target Objective & Skills */}
            {activeTab === 'summary' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div
                  className="glass-panel-subtle"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    borderLeft: '3px solid var(--color-cyan-bright)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700 }}>
                      Career Objective ({currentVersion.name})
                    </h4>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '9999px',
                        background: 'rgba(99, 102, 241, 0.2)',
                        color: 'var(--color-indigo-bright)',
                      }}
                    >
                      {currentVersion.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                    {currentVersion.objective}
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                    Skills Breakdown for this Profile
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-cyan-bright)', marginBottom: '1rem', fontWeight: 600 }}>
                    {currentVersion.skillsSummary}
                  </p>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                      gap: '0.85rem',
                    }}
                  >
                    {currentVersion.highlights.map((comp, i) => (
                      <div
                        key={i}
                        className="glass-panel-subtle"
                        style={{
                          padding: '1rem 1.25rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.65rem',
                        }}
                      >
                        <Sparkles size={16} style={{ color: 'var(--color-cyan-bright)' }} />
                        <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Education & Certifications */}
            {activeTab === 'education' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div
                  className="glass-panel-subtle"
                  style={{
                    padding: '1.75rem',
                    borderLeft: '3px solid var(--color-indigo)',
                    borderRadius: '1rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                        B.Sc. in Computer Science and Engineering
                      </h4>
                      <p style={{ fontSize: '0.95rem', color: 'var(--color-indigo-bright)', fontWeight: 600 }}>
                        Institute of Science and Technology (IST) — Dhaka, Bangladesh
                      </p>
                    </div>
                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        background: 'var(--bg-glass-hover)',
                      }}
                    >
                      Expected 2027
                    </span>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.6 }}>
                    <strong>Relevant Coursework:</strong> Web Development, Database Management Systems (DBMS), Software Engineering, Data Structures & Algorithms, Object-Oriented Programming (OOP), Data Telecommunications, Computer Networking.
                  </p>
                </div>

                <div
                  className="glass-panel-subtle"
                  style={{
                    padding: '1.5rem',
                    borderLeft: '3px solid var(--color-cyan-bright)',
                    borderRadius: '1rem',
                  }}
                >
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Complete Web Development Course — Programming Hero (2026)
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                    Intensive specialization covering modern React, Next.js, Node.js, Express, MongoDB, and Full-Stack Engineering.
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1-Q_vY_krib8QTPXKn9E8KztSkOBu0dcF/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.84rem',
                      color: 'var(--color-cyan-bright)',
                      marginTop: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    <span>Verify Credential Certificate</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                <div
                  className="glass-panel-subtle"
                  style={{
                    padding: '1.25rem',
                    borderRadius: '1rem',
                  }}
                >
                  <h5 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Languages
                  </h5>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    English (Professional) • Bangla (Native) • Hindi (Basic)
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
