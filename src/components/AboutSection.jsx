import React, { useState, useRef } from 'react';
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
import confetti from 'canvas-confetti';
import { Confetti } from '@/components/ui/confetti';
import './AboutSection.css';

const aboutPillars = [
  {
    id: 'expertise-innovation',
    title: 'Expertise and Innovation',
    icon: Zap
  },
  {
    id: 'tailored-solutions',
    title: 'Tailored Solutions',
    icon: Target
  },
  {
    id: 'continuous-support',
    title: 'Continuous Support',
    icon: Headphones
  },
  {
    id: 'commitment-excellence',
    title: 'Commitment to Excellence',
    icon: Award
  }
];

export default function AboutSection() {
  const [activePillarId, setActivePillarId] = useState(aboutPillars[0].id);
  const confettiRef = useRef(null);
  const hasTriggeredOnEnter = useRef(false);

  // Trigger grand golden celebratory fireworks & star confetti
  const triggerGoldConfetti = () => {
    // Center cannon burst
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FFA500', '#FFF3B0', '#FFFFFF', '#D4AF37'],
    });

    // Left cannon
    confetti({
      particleCount: 35,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.65 },
      colors: ['#FFD700', '#FFA500', '#FFE400'],
    });

    // Right cannon
    confetti({
      particleCount: 35,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.65 },
      colors: ['#FFD700', '#FFA500', '#FFE400'],
    });
  };

  // Automated entrance trigger: fires automatically when scrolling into the About section
  const handleViewportEnter = () => {
    if (!hasTriggeredOnEnter.current) {
      hasTriggeredOnEnter.current = true;
      // Slight delay so the user sees the section title settle before the celebratory golden shower
      setTimeout(() => {
        triggerGoldConfetti();
      }, 400);
    }
  };

  // Motion variants matching ServicesSection with stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

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
    <section 
      className="about-section" 
      id="about"
    >
      {/* Background Atmosphere */}
      <div className="about-ambient-glow glow-gold-top" aria-hidden="true" />
      <div className="about-ambient-glow glow-gold-bottom" aria-hidden="true" />
      <div className="about-grid-mesh" aria-hidden="true" />

      {/* Invisible Viewport Intersection Trigger for Enter Animation */}
      <motion.div
        className="about-enter-trigger"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        onViewportEnter={handleViewportEnter}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100px', pointerEvents: 'none' }}
        aria-hidden="true"
      />

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
                <motion.div 
                  className="about-portrait-card"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src="/images/OfficeHub%20Tech%20Ranked1.png"
                    alt="OfficeHub Tech Ranked #1"
                    className="about-portrait-image"
                    loading="eager"
                  />

                  {/* Gradient Overlay for luxury depth */}
                  <div className="about-luxury-overlay" />

                  {/* Shimmer sweep light */}
                  <div className="about-shimmer-sweep" aria-hidden="true" />

                  {/* Floating Rank Badge with subtle float bobbing and gold confetti burst on click/hover */}
                  <motion.div 
                    className="about-floating-badge"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    onClick={triggerGoldConfetti}
                    title="Ranked #1 Worldwide - Click to celebrate!"
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="badge-rank-text">#1</span>
                    <div className="badge-glow-ring" />
                  </motion.div>

                  {/* Gold Outer Border Ring */}
                  <div className="about-gold-border" />
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT: Pure Editorial Content Flow (ServicesSection style) */}
            <div className="about-typography-column">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="about-typography-flow"
              >
                {/* Category Tag Pill */}
                <motion.div variants={itemFadeUp} className="about-tag-pill">
                  <Workflow size={14} className="tag-pill-icon" />
                  <span>PIONEERING DIGITAL TRANSFORMATION</span>
                </motion.div>

                {/* Stylish Main Section Headline */}
                <motion.h3 variants={itemFadeUp} className="about-headline">
                  Pioneering Digital Transformation for{' '}
                  <span className="headline-gold-gradient">Modern Businesses</span>
                </motion.h3>

                {/* Golden Tagline */}
                <motion.p variants={itemFadeUp} className="about-tagline">
                  Office Hub Tech specializes in providing comprehensive Zoho services to businesses.
                </motion.p>

                {/* Clean Description */}
                <motion.p variants={itemFadeUp} className="about-description">
                  We focus on leveraging Zoho’s suite of tools to optimize business processes, from sales automation and CRM to ERP solutions and custom app development.
                </motion.p>

                {/* 4 Core Pillars Checklist (ServicesSection style) */}
                <div className="about-pillars-grid">
                  {aboutPillars.map((pillar) => {
                    const isActive = activePillarId === pillar.id;
                    return (
                      <motion.div 
                        key={pillar.id}
                        variants={itemFadeUp}
                        whileHover={{ x: 6 }}
                        transition={{ duration: 0.2 }}
                        className={`about-pillar-card ${isActive ? 'pillar-active' : ''}`}
                        onClick={() => setActivePillarId(pillar.id)}
                      >
                        <div className="pillar-header">
                          <CheckCircle2 size={18} className="pillar-check-icon" />
                          <h4 className="pillar-title">{pillar.title}</h4>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Action Link: [Know More](https://officehubtech.com/about/) */}
                <motion.div variants={itemFadeUp} className="about-action-container">
                  <motion.a 
                    href="https://officehubtech.com/about/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="about-gold-cta-btn"
                    aria-label="Know More About Office Hub Tech"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={triggerGoldConfetti}
                  >
                    <span>Know More</span>
                    <ArrowUpRight size={17} className="btn-arrow" />
                  </motion.a>

                  <div 
                    className="about-trust-tag"
                    onClick={triggerGoldConfetti}
                    style={{ cursor: 'pointer' }}
                    title="Click to celebrate #1 Global Ranking!"
                  >
                    <ShieldCheck size={16} className="trust-shield-icon" />
                    <span>Ranked #1 Globally • Official Certified Partner</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

