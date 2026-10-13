import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Calendar,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon, WhatsAppIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function Contact() {
  const { contactInfo, personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      setFormStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');

    // Simulate async submission
    setTimeout(() => {
      setFormStatus('success');

      // Trigger celebratory confetti burst!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#06b6d4', '#6366f1', '#a855f7', '#10b981'],
      });

      // Clear form inputs
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 900);
  };

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Github': return <GithubIcon size={18} />;
      case 'Linkedin': return <LinkedinIcon size={18} />;
      case 'WhatsApp': return <WhatsAppIcon size={18} />;
      case 'Twitter': return <TwitterIcon size={18} />;
      case 'Dribbble': return <DribbbleIcon size={18} />;
      default: return <MessageSquare size={18} />;
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
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
              <Mail size={14} />
              Initiate Collaboration
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-gradient"
          >
            Let's Build Something Unforgettable Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            Whether you need a visionary UI architecture, 3D WebGL experience, or full-stack production overhaul—
            I'm ready to bring your roadmap to life.
          </motion.p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Info Cards & Social Hub */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <SpotlightCard style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                Direct Channels
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
                Reach out directly via email, phone, or schedule an introductory sprint call.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Email */}
                <a
                  href={`mailto:${contactInfo.directEmail}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.85rem 1rem',
                    borderRadius: '0.85rem',
                    background: 'var(--bg-glass-subtle)',
                    border: '1px solid var(--border-glass-subtle)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-glow-cyan)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-glass-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-glass-subtle)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-glass-subtle)';
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(6, 182, 212, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-cyan-bright)',
                    }}
                  >
                    <Mail size={19} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Email Address</span>
                    <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {contactInfo.directEmail}
                    </p>
                  </div>
                </a>

                {/* Phone / WhatsApp */}
                <a
                  href={`tel:${contactInfo.phone}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.85rem 1rem',
                    borderRadius: '0.85rem',
                    background: 'var(--bg-glass-subtle)',
                    border: '1px solid var(--border-glass-subtle)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-glow-cyan)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-glass-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-glass-subtle)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-glass-subtle)';
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-emerald)',
                    }}
                  >
                    <Phone size={19} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Phone / WhatsApp</span>
                    <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {contactInfo.phone}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '0.2rem 0.55rem',
                      borderRadius: '9999px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      color: 'var(--color-emerald)',
                    }}
                  >
                    Call / WhatsApp
                  </span>
                </a>

                {/* Location & Timezone */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.85rem 1rem',
                    borderRadius: '0.85rem',
                    background: 'var(--bg-glass-subtle)',
                    border: '1px solid var(--border-glass-subtle)',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(99, 102, 241, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-indigo-bright)',
                    }}
                  >
                    <MapPin size={19} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location</span>
                    <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {contactInfo.officeLocation}
                    </p>
                  </div>
                </div>

                {/* Turnaround Time */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.85rem 1rem',
                    borderRadius: '0.85rem',
                    background: 'var(--bg-glass-subtle)',
                    border: '1px solid var(--border-glass-subtle)',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-emerald)',
                    }}
                  >
                    <Clock size={19} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Typical Response Time</span>
                    <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {contactInfo.typicalResponseTime}
                    </p>
                  </div>
                </div>

                {/* Direct WhatsApp Chat Action */}
                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    padding: '0.85rem',
                    fontSize: '0.9rem',
                    justifyContent: 'center',
                    marginTop: '0.5rem',
                  }}
                >
                  <WhatsAppIcon size={17} />
                  <span>Start WhatsApp Conversation</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </SpotlightCard>

            {/* Social Network Bar */}
            <SpotlightCard style={{ padding: '1.5rem 2rem' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Global Social Presence
              </span>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  marginTop: '1rem',
                }}
              >
                {personalInfo.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-pill"
                    style={{
                      padding: '0.5rem 1rem',
                      fontSize: '0.85rem',
                    }}
                  >
                    {getSocialIcon(social.icon)}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right Column: Interactive Glassmorphic Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard style={{ padding: '2.5rem 2rem' }}>
              <div style={{ marginBottom: '1.75rem' }}>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                  Send a Confidential Message
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  I treat every inquiry with prompt discretion and architectural focus.
                </p>
              </div>

              {/* Success Notification Alert */}
              <AnimatePresence>
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      padding: '1.25rem',
                      borderRadius: '1rem',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      color: '#34d399',
                      marginBottom: '1.5rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                    }}
                  >
                    <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <p style={{ fontSize: '0.95rem', fontWeight: 700 }}>
                        Message Dispatched Successfully!
                      </p>
                      <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                        Thank you for reaching out. I'll inspect your specs and respond within 4-8 hours.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Error Notification Alert */}
                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      padding: '1rem',
                      borderRadius: '1rem',
                      background: 'rgba(239, 68, 68, 0.15)',
                      border: '1px solid rgba(239, 68, 68, 0.4)',
                      color: '#f87171',
                      marginBottom: '1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                    }}
                  >
                    <AlertCircle size={18} style={{ flexShrink: 0 }} />
                    <p style={{ fontSize: '0.88rem', fontWeight: 600 }}>{errorMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Name & Email Row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.25rem',
                  }}
                >
                  {/* Name Input */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label
                      htmlFor="contact-name"
                      style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)' }}
                    >
                      Your Name <span style={{ color: 'var(--color-cyan-bright)' }}>*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '0.75rem',
                        background: 'var(--bg-glass-subtle)',
                        border: '1px solid var(--border-glass)',
                        color: 'var(--text-primary)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--color-cyan-bright)';
                        e.target.style.boxShadow = '0 0 12px rgba(6, 182, 212, 0.35)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'var(--border-glass)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Email Input */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label
                      htmlFor="contact-email"
                      style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)' }}
                    >
                      Your Email <span style={{ color: 'var(--color-cyan-bright)' }}>*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '0.75rem',
                        background: 'var(--bg-glass-subtle)',
                        border: '1px solid var(--border-glass)',
                        color: 'var(--text-primary)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--color-cyan-bright)';
                        e.target.style.boxShadow = '0 0 12px rgba(6, 182, 212, 0.35)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'var(--border-glass)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label
                    htmlFor="contact-subject"
                    style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)' }}
                  >
                    Project Type / Scope
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Next.js Enterprise Overhaul or 3D WebGL Experience"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '0.75rem',
                      background: 'var(--bg-glass-subtle)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-primary)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-cyan-bright)';
                      e.target.style.boxShadow = '0 0 12px rgba(6, 182, 212, 0.35)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-glass)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Message Textarea */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label
                    htmlFor="contact-message"
                    style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)' }}
                  >
                    Message & Timeline <span style={{ color: 'var(--color-cyan-bright)' }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Describe your project goals, key constraints, target launch date, and budget expectations..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '0.75rem',
                      background: 'var(--bg-glass-subtle)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-primary)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'all 0.2s ease',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-cyan-bright)';
                      e.target.style.boxShadow = '0 0 12px rgba(6, 182, 212, 0.35)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-glass)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Submit CTA Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="btn-primary"
                  style={{
                    padding: '0.95rem',
                    fontSize: '1rem',
                    marginTop: '0.5rem',
                    width: '100%',
                    opacity: formStatus === 'submitting' ? 0.7 : 1,
                  }}
                >
                  <Send size={18} />
                  <span>
                    {formStatus === 'submitting' ? 'Dispatched via Secure Relay...' : 'Send Message'}
                  </span>
                </button>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
