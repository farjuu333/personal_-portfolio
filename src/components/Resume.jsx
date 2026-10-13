import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Download,
  Eye,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  RefreshCw,
  Clock,
  ShieldAlert,
  Code2,
  Server,
  Layers,
  ArrowDownToLine,
  ExternalLink,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function Resume({ onOpenResumeModal }) {
  const { resumeDetails } = portfolioData;
  const versions = resumeDetails.resumeVersions || [];

  // Active tailored role state (defaults to 'fullstack')
  const [selectedVersionId, setSelectedVersionId] = useState('fullstack');

  // Drag & drop uploader state
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('idle'); // idle | uploading | success | error
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  const activeVersion =
    versions.find((v) => v.id === selectedVersionId) || versions[0] || {
      id: 'fullstack',
      name: 'Full-Stack Developer Resume',
      role: 'Full-Stack Developer',
      downloadFilename: 'Farjana_Akter_Full_Stack_Developer_Resume.pdf',
      downloadUrl: '/Farjana_Akter_Full_Stack_Developer_Resume.pdf',
      badge: 'PostgreSQL & Prisma Focus',
      objective: resumeDetails.summary,
      skillsSummary: 'React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Prisma ORM, Stripe, Better Auth',
      highlights: resumeDetails.coreCompetencies,
    };

  const getRoleIcon = (id, size = 18) => {
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

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file) => {
    const validExtensions = ['pdf', 'docx'];
    const extension = file.name.split('.').pop().toLowerCase();

    if (!validExtensions.includes(extension)) {
      setErrorMessage('Invalid file format. Please upload a PDF or DOCX file.');
      setUploadStatus('error');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage('File exceeds 10MB limit. Please compress your document.');
      setUploadStatus('error');
      return;
    }

    setUploadedFile(file);
    setUploadStatus('uploading');
    setUploadProgress(0);
    setErrorMessage('');

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 18) + 14;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setUploadProgress(100);
        setTimeout(() => {
          setUploadStatus('success');
        }, 350);
      } else {
        setUploadProgress(progress);
      }
    }, 160);
  };

  const handleResetUpload = () => {
    setUploadStatus('idle');
    setUploadProgress(0);
    setUploadedFile(null);
    setErrorMessage('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section id="resume" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="max-container">
        {/* Section Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">
              <FileText size={14} />
              Tailored Curriculum Vitae
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-gradient"
          >
            Role-Tailored Resumes: Download for Your Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            Choose between my tailored resumes for Frontend, MERN Stack, or Full-Stack roles.
            Download the official publication-ready PDF or preview full competencies in the interactive viewer.
          </motion.p>
        </div>

        {/* 3 Interactive Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2.5rem',
          }}
        >
          <div
            className="glass-panel"
            style={{
              display: 'inline-flex',
              padding: '0.4rem',
              borderRadius: '9999px',
              border: '1px solid var(--border-glass-strong)',
              gap: '0.4rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              maxWidth: '100%',
            }}
          >
            {versions.map((version) => {
              const isSelected = selectedVersionId === version.id;
              return (
                <button
                  key={version.id}
                  type="button"
                  onClick={() => setSelectedVersionId(version.id)}
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    padding: '0.65rem 1.35rem',
                    borderRadius: '9999px',
                    fontSize: '0.9rem',
                    fontWeight: isSelected ? 700 : 500,
                    color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeResumeTabPill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '9999px',
                        background:
                          'linear-gradient(135deg, rgba(6, 182, 212, 0.28) 0%, rgba(99, 102, 241, 0.35) 100%)',
                        border: '1px solid var(--border-glow-cyan)',
                        boxShadow: '0 0 20px rgba(6, 182, 212, 0.35)',
                        zIndex: 0,
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: isSelected ? 'var(--color-cyan-bright)' : 'inherit',
                    }}
                  >
                    {getRoleIcon(version.id, 16)}
                  </span>
                  <span style={{ position: 'relative', zIndex: 1 }}>{version.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Two-Column Grid: Left (Selected Tailored Resume Showcase), Right (Drag & Drop Uploader) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch',
            marginBottom: '3rem',
          }}
        >
          {/* Left Column: Active Tailored Resume Showcase */}
          <motion.div
            key={activeVersion.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <SpotlightCard
              style={{
                padding: '2.5rem 2rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Top Status & Role Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--color-cyan-bright)',
                    }}
                  >
                    <Clock size={15} />
                    <span>Updated: {resumeDetails.lastUpdated}</span>
                  </div>

                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      background: 'rgba(99, 102, 241, 0.18)',
                      border: '1px solid var(--border-glow-indigo)',
                      color: 'var(--color-indigo-bright)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <Sparkles size={12} />
                    {activeVersion.badge}
                  </span>
                </div>

                {/* Name Label */}
                <h3
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    marginBottom: '0.65rem',
                  }}
                  className="text-gradient"
                >
                  {activeVersion.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.86rem',
                    color: 'var(--color-cyan-bright)',
                    fontWeight: 600,
                    marginBottom: '1rem',
                  }}
                >
                  Tailored for {activeVersion.role} Roles • Single-Page PDF
                </p>

                {/* Tailored Career Objective */}
                <div
                  className="glass-panel-subtle"
                  style={{
                    padding: '1.15rem',
                    borderRadius: '1rem',
                    marginBottom: '1.5rem',
                    borderLeft: '3px solid var(--color-cyan-bright)',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontWeight: 700,
                      color: 'var(--text-muted)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Target Career Objective
                  </p>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                    }}
                  >
                    {activeVersion.objective}
                  </p>
                </div>

                {/* Tailored Highlights Grid */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontWeight: 700,
                      color: 'var(--text-muted)',
                      marginBottom: '0.65rem',
                    }}
                  >
                    Key Competency Highlights
                  </p>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                      gap: '0.65rem',
                    }}
                  >
                    {activeVersion.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="glass-panel-subtle"
                        style={{
                          padding: '0.65rem 0.85rem',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                        }}
                      >
                        <CheckCircle2 size={14} style={{ color: 'var(--color-emerald)', flexShrink: 0 }} />
                        <span style={{ lineHeight: 1.3 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: View in Modal & Direct Download Button */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--border-glass-subtle)',
                }}
              >
                <button
                  type="button"
                  onClick={() => onOpenResumeModal(activeVersion.id)}
                  className="btn-secondary"
                  style={{
                    flex: 1,
                    minWidth: '150px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Eye size={17} />
                  <span>Preview in Viewer</span>
                </button>

                <a
                  href={activeVersion.downloadUrl}
                  download={activeVersion.downloadFilename}
                  className="btn-primary"
                  style={{
                    flex: 1.2,
                    minWidth: '200px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Download size={17} />
                  <span>Download {activeVersion.label}</span>
                </a>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right Column: Drag & Drop Resume Uploader Component */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard
              style={{
                padding: '2.5rem 2rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Authorized CV Uploader
                  </h3>
                  <div className="glass-pill" style={{ fontSize: '0.75rem' }}>
                    <ShieldAlert size={13} style={{ color: 'var(--color-cyan-bright)' }} />
                    <span>Admin Pipeline</span>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  Drop in newly updated curriculum vitae files (PDF or DOCX) to simulate seamless
                  client-side parsing, schema validation, and storage synchronization.
                </p>

                {/* Drop Zone Area */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current && fileInputRef.current.click()}
                  style={{
                    position: 'relative',
                    padding: '2.5rem 1.5rem',
                    borderRadius: '1.25rem',
                    border: '2px dashed',
                    borderColor: isDragging
                      ? 'var(--color-cyan-bright)'
                      : uploadStatus === 'error'
                      ? '#ef4444'
                      : uploadStatus === 'success'
                      ? 'var(--color-emerald)'
                      : 'var(--border-glass-strong)',
                    background: isDragging
                      ? 'rgba(6, 182, 212, 0.12)'
                      : 'var(--bg-glass-subtle)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isDragging ? '0 0 25px rgba(6, 182, 212, 0.35)' : 'none',
                  }}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.docx"
                    onChange={handleFileSelect}
                    style={{ display: 'none' }}
                  />

                  {/* Idle state */}
                  {uploadStatus === 'idle' && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                      <div
                        style={{
                          width: '54px',
                          height: '54px',
                          borderRadius: '50%',
                          background: 'var(--bg-glass-hover)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-cyan-bright)',
                          border: '1px solid var(--border-glass)',
                        }}
                      >
                        <UploadCloud size={28} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          Drag & drop your resume file here
                        </p>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                          Supports PDF, DOCX (Max 10MB)
                        </p>
                      </div>
                      <span
                        className="btn-secondary"
                        style={{
                          padding: '0.45rem 1.15rem',
                          fontSize: '0.82rem',
                          marginTop: '0.5rem',
                        }}
                      >
                        Browse Computer
                      </span>
                    </div>
                  )}

                  {/* Uploading Progress state */}
                  {uploadStatus === 'uploading' && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          background: 'rgba(99, 102, 241, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-indigo-bright)',
                          animation: 'spin 1.8s linear infinite',
                        }}
                      >
                        <RefreshCw size={24} />
                      </div>

                      <div style={{ width: '100%', maxWidth: '280px' }}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            marginBottom: '0.4rem',
                          }}
                        >
                          <span style={{ color: 'var(--text-secondary)' }}>Uploading {uploadedFile?.name}...</span>
                          <span style={{ color: 'var(--color-cyan-bright)' }}>{uploadProgress}%</span>
                        </div>

                        <div
                          style={{
                            width: '100%',
                            height: '6px',
                            borderRadius: '9999px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            overflow: 'hidden',
                          }}
                        >
                          <motion.div
                            style={{
                              height: '100%',
                              width: `${uploadProgress}%`,
                              borderRadius: '9999px',
                              background: 'linear-gradient(90deg, var(--color-cyan) 0%, var(--color-indigo) 100%)',
                              boxShadow: '0 0 10px rgba(6, 182, 212, 0.7)',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Success state */}
                  {uploadStatus === 'success' && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem' }}>
                      <div
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '50%',
                          background: 'rgba(16, 185, 129, 0.15)',
                          border: '1px solid rgba(16, 185, 129, 0.4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#34d399',
                        }}
                      >
                        <CheckCircle2 size={30} />
                      </div>

                      <div>
                        <p style={{ fontSize: '1rem', fontWeight: 700, color: '#34d399' }}>
                          Upload Completed Successfully!
                        </p>
                        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                          File parsed & cached: {uploadedFile?.name} ({(uploadedFile?.size / 1024).toFixed(1)} KB)
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleResetUpload();
                        }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: 'var(--color-cyan-bright)',
                          marginTop: '0.5rem',
                        }}
                      >
                        <RefreshCw size={14} />
                        <span>Upload Another File</span>
                      </button>
                    </div>
                  )}

                  {/* Error state */}
                  {uploadStatus === 'error' && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem' }}>
                      <div
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          background: 'rgba(239, 68, 68, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#f87171',
                        }}
                      >
                        <AlertCircle size={26} />
                      </div>

                      <div>
                        <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f87171' }}>
                          Upload Validation Failed
                        </p>
                        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                          {errorMessage}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleResetUpload();
                        }}
                        className="btn-secondary"
                        style={{
                          padding: '0.4rem 1rem',
                          fontSize: '0.82rem',
                          marginTop: '0.5rem',
                        }}
                      >
                        Try Again
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom security assurance */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  marginTop: '1.25rem',
                  justifyContent: 'center',
                }}
              >
                <CheckCircle2 size={14} style={{ color: 'var(--color-emerald)' }} />
                <span>Client-side sandbox inspection with zero telemetry tracking</span>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* 3 Dedicated Downloadable Version Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <h4
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '0.35rem',
              }}
            >
              All Downloadable Versions
            </h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
              Direct one-click download for each specialized engineering profile
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {versions.map((ver) => (
              <SpotlightCard
                key={ver.id}
                style={{
                  padding: '1.75rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '1.25rem',
                  border:
                    selectedVersionId === ver.id
                      ? '1px solid var(--border-glow-cyan)'
                      : '1px solid var(--border-glass)',
                  background:
                    selectedVersionId === ver.id
                      ? 'rgba(6, 182, 212, 0.04)'
                      : 'var(--bg-glass-subtle)',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background:
                          ver.id === 'frontend'
                            ? 'rgba(6, 182, 212, 0.15)'
                            : ver.id === 'mern'
                            ? 'rgba(99, 102, 241, 0.15)'
                            : 'rgba(168, 85, 247, 0.15)',
                        color:
                          ver.id === 'frontend'
                            ? 'var(--color-cyan-bright)'
                            : ver.id === 'mern'
                            ? 'var(--color-indigo-bright)'
                            : '#c084fc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {getRoleIcon(ver.id, 20)}
                    </div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.65rem',
                        borderRadius: '9999px',
                        background: 'var(--bg-glass-hover)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {ver.badge}
                    </span>
                  </div>

                  {/* Name label */}
                  <h4
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {ver.name}
                  </h4>

                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {ver.objective.length > 130
                      ? ver.objective.slice(0, 130) + '...'
                      : ver.objective}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {/* Download button with exact name label */}
                  <a
                    href={ver.downloadUrl}
                    download={ver.downloadFilename}
                    className="btn-primary"
                    style={{
                      padding: '0.65rem 1rem',
                      fontSize: '0.86rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.45rem',
                      width: '100%',
                    }}
                  >
                    <ArrowDownToLine size={16} />
                    <span>Download {ver.label}</span>
                  </a>

                  {/* Preview button */}
                  <button
                    type="button"
                    onClick={() => onOpenResumeModal(ver.id)}
                    className="btn-secondary"
                    style={{
                      padding: '0.55rem 1rem',
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.45rem',
                      width: '100%',
                    }}
                  >
                    <Eye size={15} />
                    <span>Interactive Preview</span>
                  </button>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
