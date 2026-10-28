import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  Workflow, 
  ArrowUpRight, 
  Award, 
  ShieldCheck, 
  Zap, 
  Headphones, 
  Target 
} from 'lucide-react';
import './AboutSection.css';

const aboutPillars = [
  {
    id: 'expertise-innovation',
    title: 'Expertise and Innovation',
    desc: 'Deep mastery of Zoho products combined with forward-thinking cloud engineering.',
    icon: Zap
  },
  {
    id: 'tailored-solutions',
    title: 'Tailored Solutions',
    desc: 'Purpose-built CRM, ERP, and bespoke portal systems engineered around your exact workflow.',
    icon: Target
  },
  {
    id: 'continuous-support',
    title: 'Continuous Support',
    desc: 'Dedicated technical assurance, system health monitoring, and proactive optimization.',
    icon: Headphones
  },
  {
    id: 'commitment-excellence',
    title: 'Commitment to Excellence',
    desc: 'Rigorous certified consultant standards ensuring high reliability and maximum ROI.',
    icon: Award
  }
];

export default function AboutSection() {
  const [activePillarId, setActivePillarId] = useState(aboutPillars[0].id);

  // Motion variants matching ServicesSection
  const imageColumnVariants = {
    hidden: { 
      opacity: 0, 
      x: -50, 
      scale: 0.95, 
      filter: 'blur(8px)' 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.85, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const contentColumnVariants = {
    hidden: { 
      opacity: 0, 
      x: 50, 
      scale: 0.98, 
      filter: 'blur(8px)' 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.9, 
        ease: [0.16, 1, 0.3, 1], 
        delay: 0.12 
      } 
    }
  };

  return (
    <section className="about-section" id="about">
      {/* Background Atmosphere */}
      <div className="about-ambient-glow glow-gold-top" aria-hidden="true" />
      <div className="about-ambient-glow glow-gold-bottom" aria-hidden="true" />
      <div className="about-grid-mesh" aria-hidden="true" />

      <div className="about-container">
        {/* Section Header (Unified font-size: clamp(1.8rem, 2.6vw, 2.4rem)) */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-eyebrow-pill">
            <Sparkles size={14} className="eyebrow-gold-sparkle" />
            <span>ABOUT OFFICE HUB TECH</span>
          </div>

          <h2 className="about-main-title">
            <span className="title-lead">Empowering Businesses with</span>{' '}
            <span className="title-gold-gradient">Zoho Solutions</span>
          </h2>

          <p className="about-subheading">
            Pioneering digital transformation for modern businesses through certified enterprise architecture, custom engineering, and disciplined cloud automation.
          </p>

          <div className="about-gold-line-divider" aria-hidden="true">
            <span className="divider-sparkle-gem" />
          </div>
        </motion.div>

        {/* 
          STORY SHOWCASE (Matching Our Services Section Composition)
          - Left: 4:5 Portrait Image Card with floating rank badge and gold border
          - Right: Editorial typography flow, description, deliverables checklist, and Know More CTA
        */}
        <div className="about-story-showcase">
          <div className="about-story-row">
            {/* LEFT: 4:5 Portrait Image Card (ServicesSection style) */}
            <div className="about-portrait-column">
              <motion.div
                variants={imageColumnVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="about-portrait-card-wrapper"
              >
                <div className="about-portrait-card">
                  <img
                    src="/images/OfficeHub%20Tech%20Ranked1.png"
                    alt="OfficeHub Tech Ranked #1"
                    className="about-portrait-image"
                    loading="eager"
                  />

                  {/* Gradient Overlay for luxury depth */}
                  <div className="about-luxury-overlay" />

                  {/* Floating Rank Badge */}
                  <div className="about-floating-badge">
                    <span className="badge-rank-text">#1</span>
                    <div className="badge-glow-ring" />
                  </div>

                  {/* Gold Outer Border Ring */}
                  <div className="about-gold-border" />
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Pure Editorial Content Flow (ServicesSection style) */}
            <div className="about-typography-column">
              <motion.div
                variants={contentColumnVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="about-typography-flow"
              >
                {/* Category Tag Pill */}
                <div className="about-tag-pill">
                  <Workflow size={14} className="tag-pill-icon" />
                  <span>PIONEERING DIGITAL TRANSFORMATION</span>
                </div>

                {/* Stylish Main Section Headline */}
                <h3 className="about-headline">
                  Pioneering Digital Transformation for{' '}
                  <span className="headline-gold-gradient">Modern Businesses</span>
                </h3>

                {/* Golden Tagline */}
                <p className="about-tagline">
                  Office Hub Tech specializes in providing comprehensive Zoho services to businesses.
                </p>

                {/* Clean Description */}
                <p className="about-description">
                  We focus on leveraging Zoho’s suite of tools to optimize business processes, from sales automation and CRM to ERP solutions and custom app development.
                </p>

                {/* 4 Core Pillars Checklist (ServicesSection style) */}
                <div className="about-pillars-grid">
                  {aboutPillars.map((pillar) => {
                    const Icon = pillar.icon;
                    const isActive = activePillarId === pillar.id;
                    return (
                      <div 
                        key={pillar.id}
                        className={`about-pillar-card ${isActive ? 'pillar-active' : ''}`}
                        onClick={() => setActivePillarId(pillar.id)}
                      >
                        <div className="pillar-header">
                          <CheckCircle2 size={16} className="pillar-check-icon" />
                          <h4 className="pillar-title">{pillar.title}</h4>
                        </div>
                        <p className="pillar-desc">{pillar.desc}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Action Link: [Know More](https://officehubtech.com/about/) */}
                <div className="about-action-container">
                  <a 
                    href="https://officehubtech.com/about/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="about-gold-cta-btn"
                    aria-label="Know More About Office Hub Tech"
                  >
                    <span>Know More</span>
                    <ArrowUpRight size={17} className="btn-arrow" />
                  </a>

                  <div className="about-trust-tag">
                    <ShieldCheck size={16} className="trust-shield-icon" />
                    <span>Ranked #1 Globally • Official Certified Partner</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

