import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, FolderGit2, ArrowUpRight, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projectCategories, projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
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
              <FolderGit2 size={14} />
              Featured Works & Case Studies
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-gradient"
          >
            Engineering Proof: Production Systems & 3D Interfaces
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            From high-throughput serverless pipelines to immersive WebGL rendering engines. 
            Each project is built for real-world resilience, performance, and conversion.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '3.5rem',
          }}
        >
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  position: 'relative',
                  padding: '0.6rem 1.35rem',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--border-glow-cyan)' : 'var(--border-glass)',
                  background: isActive ? 'var(--bg-glass-hover)' : 'var(--bg-glass-subtle)',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '9999px',
                      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.25) 0%, rgba(99, 102, 241, 0.25) 100%)',
                      border: '1px solid var(--border-glow-cyan)',
                      zIndex: -1,
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <SpotlightCard
                  enableTilt={true}
                  tiltStrength={8}
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.5rem',
                  }}
                >
                  <div>
                    {/* Project Image Box with Hover Zoom */}
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '210px',
                        borderRadius: '1rem',
                        overflow: 'hidden',
                        marginBottom: '1.25rem',
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
                          transition: 'transform 0.5s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      />

                      {/* Category Badge on Image */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '0.75rem',
                          left: '0.75rem',
                          background: 'rgba(7, 10, 18, 0.75)',
                          backdropFilter: 'blur(8px)',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '9999px',
                          border: '1px solid var(--border-glass-strong)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: 'var(--color-cyan-bright)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                        }}
                      >
                        <Sparkles size={12} />
                        <span>{project.category}</span>
                      </div>

                      {/* Featured Indicator */}
                      {project.featured && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '0.75rem',
                            right: '0.75rem',
                            background: 'rgba(99, 102, 241, 0.85)',
                            padding: '0.35rem 0.75rem',
                            borderRadius: '9999px',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: '#ffffff',
                            letterSpacing: '0.04em',
                          }}
                        >
                          FEATURED
                        </div>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <h3
                      style={{
                        fontSize: '1.28rem',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        marginBottom: '0.35rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: 'var(--color-cyan-bright)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {project.subtitle}
                    </p>

                    {/* Short Description */}
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: '0.25rem 0.65rem',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            background: 'var(--bg-glass-subtle)',
                            border: '1px solid var(--border-glass-subtle)',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span
                          style={{
                            padding: '0.25rem 0.55rem',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            background: 'var(--bg-glass-subtle)',
                            color: 'var(--text-muted)',
                          }}
                        >
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-glass-subtle)',
                    }}
                  >
                    {/* Case Study Trigger Button */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: 'var(--color-cyan-bright)',
                        cursor: 'pointer',
                        transition: 'opacity 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight size={16} />
                    </button>

                    {/* Quick Link Icons */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub source for ${project.title}`}
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
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.borderColor = 'var(--border-glass-strong)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--text-secondary)';
                            e.currentTarget.style.borderColor = 'var(--border-glass)';
                          }}
                        >
                          <GithubIcon size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo for ${project.title}`}
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
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--color-cyan-bright)';
                            e.currentTarget.style.borderColor = 'var(--color-cyan)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--text-secondary)';
                            e.currentTarget.style.borderColor = 'var(--border-glass)';
                          }}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
