import React from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Server,
  Database,
  ShieldCheck,
  Lock,
  ArrowRight,
  Cpu,
  Layers,
  Code2,
  Zap,
  CreditCard,
  Sparkles,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function About() {
  const { personalInfo } = portfolioData;
  const featureCards = portfolioData.featureCards || portfolioData.workflowPhases;

  const iconMap = {
    Frontend: <Layout size={24} />,
    Backend: <Server size={24} />,
    Database: <Database size={24} />,
    Security: <ShieldCheck size={24} />,
    Code2: <Code2 size={24} />,
    Zap: <Zap size={24} />,
    Layers: <Layers size={24} />,
  };

  return (
    <section id="about" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
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
              <ShieldCheck size={14} />
              About & Technical Profile
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-gradient"
          >
            Building Scalable, End-to-End Web Applications from Concept to Production
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            I'm Farjana Akter, a Full-Stack Developer specializing in React, Next.js, Node.js, Express, 
            and modern databases. I engineer complete web applications with clean architecture, 
            robust security, and seamless user experiences.
          </motion.p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '4.5rem',
          }}
        >
          {/* Left: Minimalist Photo Showcase with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '440px',
                margin: '0 auto',
              }}
            >
              {/* Glowing Aura Ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '2rem',
                  background: 'linear-gradient(135deg, var(--color-cyan-glow) 0%, var(--color-indigo-glow) 100%)',
                  filter: 'blur(20px)',
                  opacity: 0.65,
                }}
              />

              <div
                className="glass-panel"
                style={{
                  position: 'relative',
                  padding: '1.25rem',
                  borderRadius: '1.75rem',
                  border: '1px solid var(--border-glass-strong)',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '4 / 4.8',
                    borderRadius: '1.25rem',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'contrast(1.05)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(7, 10, 18, 0.75) 0%, transparent 60%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1.25rem',
                      left: '1.25rem',
                      right: '1.25rem',
                      background: 'rgba(11, 17, 32, 0.8)',
                      backdropFilter: 'blur(16px)',
                      padding: '0.9rem 1.25rem',
                      borderRadius: '1rem',
                      border: '1px solid var(--border-glass)',
                    }}
                  >
                    <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>
                      {personalInfo.name}
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-cyan-bright)', marginTop: '0.15rem' }}>
                      {personalInfo.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating micro-badge: Frontend Stack */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  top: '15%',
                  left: '-20px',
                  background: 'var(--bg-glass-strong)',
                  backdropFilter: 'blur(16px)',
                  padding: '0.6rem 1rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-glass-strong)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Cpu size={16} style={{ color: 'var(--color-cyan-bright)' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>React & Next.js</span>
              </motion.div>

              {/* Floating micro-badge: Backend & ORM */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  right: '-20px',
                  background: 'var(--bg-glass-strong)',
                  backdropFilter: 'blur(16px)',
                  padding: '0.6rem 1rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-glass-strong)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Layers size={16} style={{ color: 'var(--color-indigo-bright)' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Node.js & Prisma</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Narrative Details & Core Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <h3
              style={{
                fontSize: '1.9rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Transforming complex product ideas into reliable, full-stack realities.
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              {personalInfo.extendedBio}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
                marginTop: '0.75rem',
              }}
            >
              <div
                className="glass-panel-subtle"
                style={{
                  padding: '1.25rem',
                  borderLeft: '3px solid var(--color-cyan)',
                }}
              >
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Frontend & Kinetic UI
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Responsive React & Next.js layouts styled with Tailwind CSS and animated using Framer Motion.
                </p>
              </div>

              <div
                className="glass-panel-subtle"
                style={{
                  padding: '1.25rem',
                  borderLeft: '3px solid var(--color-indigo)',
                }}
              >
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Backend, Data & Security
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Node.js & Express REST APIs, PostgreSQL & MongoDB with Prisma ORM, Better Auth & Stripe billing.
                </p>
              </div>
            </div>

            {/* Quick Action Button */}
            <div style={{ marginTop: '0.5rem' }}>
              <a
                href="#projects"
                className="btn-secondary"
                style={{ display: 'inline-flex', padding: '0.8rem 1.6rem' }}
              >
                <span>Explore Shipped Applications</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards: 4 Core Pillars of Full-Stack Profile */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-cyan-bright)',
              }}
            >
              Full-Stack Competencies
            </span>
            <h3
              style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                marginTop: '0.35rem',
                letterSpacing: '-0.02em',
              }}
            >
              Core Pillars of My Technical Architecture
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {featureCards.map((card, index) => (
              <motion.div
                key={card.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <SpotlightCard
                  style={{
                    padding: '2rem 1.75rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Top Row: Step number & Icon */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1.5rem',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '2rem',
                          fontWeight: 800,
                          fontFamily: 'var(--font-heading)',
                          color: 'var(--text-muted)',
                          opacity: 0.4,
                        }}
                      >
                        {card.step}
                      </span>
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '12px',
                          background: 'var(--bg-glass-hover)',
                          border: '1px solid var(--border-glass)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-cyan-bright)',
                        }}
                      >
                        {iconMap[card.icon] || <Zap size={22} />}
                      </div>
                    </div>

                    <h4
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        marginBottom: '0.45rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {card.title}
                    </h4>

                    {card.stack && (
                      <p
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          color: 'var(--color-cyan-bright)',
                          marginBottom: '0.75rem',
                          letterSpacing: '0.01em',
                        }}
                      >
                        {card.stack}
                      </p>
                    )}

                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.65,
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: '2rem',
                      height: '3px',
                      borderRadius: '9999px',
                      background: 'linear-gradient(90deg, var(--color-cyan) 0%, var(--color-indigo) 100%)',
                      opacity: 0.45,
                    }}
                  />
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
