import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Sparkles,
  Flame,
  Palette,
  Box,
  Cpu,
  Terminal,
  Database,
  Zap,
  Share2,
  Radio,
  Layers,
  CloudRain,
  GitBranch,
  Wrench,
  CheckCircle2,
  Layout,
  Server,
  Cloud,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function Skills() {
  const { skillGroups } = portfolioData;
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  // Icon mapping helper
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Atom': return <Layers size={18} />;
      case 'Code': return <Code size={18} />;
      case 'Sparkles': return <Sparkles size={18} />;
      case 'Flame': return <Flame size={18} />;
      case 'Palette': return <Palette size={18} />;
      case 'Box': return <Box size={18} />;
      case 'Cpu': return <Cpu size={18} />;
      case 'Terminal': return <Terminal size={18} />;
      case 'Database': return <Database size={18} />;
      case 'Zap': return <Zap size={18} />;
      case 'Share2': return <Share2 size={18} />;
      case 'Radio': return <Radio size={18} />;
      case 'Layers': return <Layers size={18} />;
      case 'CloudRain': return <CloudRain size={18} />;
      case 'GitBranch': return <GitBranch size={18} />;
      case 'Wrench': return <Wrench size={18} />;
      case 'CheckCircle2': return <CheckCircle2 size={18} />;
      case 'Figma': return <Palette size={18} />;
      default: return <Code size={18} />;
    }
  };

  const getGroupIcon = (name) => {
    if (name.includes('Frontend')) return <Layout size={20} />;
    if (name.includes('Backend')) return <Server size={20} />;
    return <Cloud size={20} />;
  };

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
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
              <Zap size={14} />
              Skills & Core Competencies
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-gradient"
          >
            Full-Spectrum Mastery: From Pixel Shaders to Distributed Meshes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            A cohesive stack honed over 6+ years of continuous shipping. Deep expertise in high-scale
            React/Next.js architectures, fluid motion choreography, and cloud backends.
          </motion.p>
        </div>

        {/* Skill Group Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          {skillGroups.map((group, idx) => {
            const isActive = activeGroupIndex === idx;
            return (
              <button
                key={group.name}
                onClick={() => setActiveGroupIndex(idx)}
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.75rem 1.45rem',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--border-glow-cyan)' : 'var(--border-glass)',
                  background: isActive ? 'var(--bg-glass-hover)' : 'var(--bg-glass-subtle)',
                  backdropFilter: 'blur(12px)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillGroupPill"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '9999px',
                      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.22) 0%, rgba(99, 102, 241, 0.22) 100%)',
                      border: '1px solid var(--border-glow-cyan)',
                      zIndex: -1,
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span style={{ color: isActive ? 'var(--color-cyan-bright)' : 'var(--text-muted)' }}>
                  {getGroupIcon(group.name)}
                </span>
                <span>{group.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Group Description Banner */}
        <motion.div
          key={activeGroupIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="glass-panel"
          style={{
            padding: '1.25rem 1.75rem',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            border: '1px solid var(--border-glass-strong)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--color-cyan-bright) 0%, var(--color-indigo) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}
            >
              {getGroupIcon(skillGroups[activeGroupIndex].name)}
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>
                {skillGroups[activeGroupIndex].name}
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                {skillGroups[activeGroupIndex].description}
              </p>
            </div>
          </div>

          <div className="glass-pill" style={{ borderColor: 'var(--border-glow-cyan)' }}>
            <Sparkles size={14} style={{ color: 'var(--color-cyan-bright)' }} />
            <span>High Proficiency Standard</span>
          </div>
        </motion.div>

        {/* Staggered Skills Grid with SpotlightCards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillGroups[activeGroupIndex].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <SpotlightCard
                enableTilt={false}
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  height: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Top: Icon + Name + Highlight Tag */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.65rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          background: 'var(--bg-glass-hover)',
                          border: '1px solid var(--border-glass)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-cyan-bright)',
                        }}
                      >
                        {getIcon(skill.icon)}
                      </div>
                      <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {skill.name}
                      </h4>
                    </div>

                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '9999px',
                        background: 'rgba(99, 102, 241, 0.15)',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                        color: 'var(--color-indigo-bright)',
                      }}
                    >
                      {skill.highlight}
                    </span>
                  </div>
                </div>

                {/* Progress Bar & Level Metric */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      marginBottom: '0.4rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <span>Proficiency Score</span>
                    <span style={{ color: 'var(--color-cyan-bright)' }}>{skill.level}%</span>
                  </div>

                  {/* Animated Bar Background */}
                  <div
                    style={{
                      width: '100%',
                      height: '7px',
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.9, delay: index * 0.06, ease: 'easeOut' }}
                      style={{
                        height: '100%',
                        borderRadius: '9999px',
                        background: 'linear-gradient(90deg, var(--color-cyan-bright) 0%, var(--color-indigo) 100%)',
                        boxShadow: '0 0 10px rgba(34, 211, 238, 0.6)',
                      }}
                    />
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
