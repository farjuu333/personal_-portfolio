import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Trophy, CheckCircle, Star, ExternalLink, Calendar, Milestone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function Timeline() {
  const { achievements } = portfolioData;

  const getMilestoneIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return <Award size={20} />;
      case 'ShieldCheck': return <ShieldCheck size={20} />;
      case 'Trophy': return <Trophy size={20} />;
      case 'CheckCircle': return <CheckCircle size={20} />;
      case 'Star': return <Star size={20} />;
      default: return <Milestone size={20} />;
    }
  };

  return (
    <section id="timeline" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
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
              <Trophy size={14} />
              Verified Milestones & Honors
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-gradient"
          >
            Chronology of Excellence: Awards & Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            Recognized by global design authorities, cloud providers, and international hackathons.
            A continuous trajectory of technical leadership and architectural innovation.
          </motion.p>
        </div>

        {/* Vertical Timeline Tree */}
        <div
          style={{
            position: 'relative',
            maxWidth: '920px',
            margin: '0 auto',
            padding: '2rem 0',
          }}
        >
          {/* Central Glowing Timeline Line */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--color-cyan-bright) 0%, var(--color-indigo) 50%, var(--color-violet) 100%)',
              boxShadow: '0 0 15px rgba(6, 182, 212, 0.45)',
              zIndex: 1,
            }}
            className="timeline-central-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {achievements.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: isEven ? 'flex-start' : 'flex-end',
                    width: '100%',
                  }}
                  className="timeline-item-wrapper"
                >
                  {/* Central Milestone Glowing Node */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      top: '50%',
                      zIndex: 3,
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'var(--bg-glass-strong)',
                      border: '2px solid var(--color-cyan-bright)',
                      boxShadow: '0 0 20px rgba(6, 182, 212, 0.65)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-cyan-bright)',
                    }}
                    className="timeline-marker"
                  >
                    {getMilestoneIcon(item.icon)}
                  </div>

                  {/* Milestone Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    style={{
                      width: 'calc(50% - 45px)',
                    }}
                    className="timeline-card-container"
                  >
                    <SpotlightCard
                      style={{
                        padding: '1.75rem',
                      }}
                    >
                      {/* Top Meta: Year & Badge */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '0.85rem',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            color: 'var(--color-cyan-bright)',
                          }}
                        >
                          <Calendar size={14} />
                          <span>{item.year}</span>
                        </div>

                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            padding: '0.2rem 0.65rem',
                            borderRadius: '9999px',
                            background: 'rgba(99, 102, 241, 0.18)',
                            border: '1px solid var(--border-glow-indigo)',
                            color: 'var(--color-indigo-bright)',
                            letterSpacing: '0.03em',
                          }}
                        >
                          {item.badge}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          letterSpacing: '-0.02em',
                          marginBottom: '0.35rem',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '0.86rem',
                          fontWeight: 600,
                          color: 'var(--text-muted)',
                          marginBottom: '0.85rem',
                        }}
                      >
                        {item.organization}
                      </p>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: '0.9rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.65,
                          marginBottom: '1.25rem',
                        }}
                      >
                        {item.description}
                      </p>

                      {/* Verification Link */}
                      {item.credentialUrl && (
                        <a
                          href={item.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.84rem',
                            fontWeight: 600,
                            color: 'var(--color-cyan-bright)',
                            transition: 'opacity 0.2s',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                        >
                          <span>Verify Credential</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </SpotlightCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Responsive styles for mobile timeline stacking */}
      <style>{`
        @media (max-width: 768px) {
          .timeline-central-line {
            left: 24px !important;
            transform: none !important;
          }
          .timeline-marker {
            left: 24px !important;
            transform: translate(-50%, -50%) !important;
            top: 2.2rem !important;
            width: 38px !important;
            height: 38px !important;
          }
          .timeline-item-wrapper {
            justifyContent: flex-start !important;
            padding-left: 60px !important;
          }
          .timeline-card-container {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
