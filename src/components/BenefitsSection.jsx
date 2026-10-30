import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  Workflow, 
  Cpu, 
  Headphones, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';
import './BenefitsSection.css';

// 4 Centralized Benefits & Solutions points with strictly 15-word descriptions
const benefitsData = [
  {
    id: 1,
    stepNum: '01',
    title: 'Streamlined Operations',
    tag: 'EFFICIENCY & AUTOMATION',
    desc: 'Optimize complex enterprise workflows, eliminate operational bottlenecks, and automate routine tasks to maximize overall efficiency.',
    image: '/benefits%20&%20solutions%20img/Streamlined%20Operations.jpg',
    imageAlt: 'Streamlined Operations with Zoho Solutions - Office Hub Tech',
    badge: 'Zero-Latency Workflows',
    badgeIcon: Workflow,
    objectPosition: 'center center',
  },
  {
    id: 2,
    stepNum: '02',
    title: 'Customized Solutions',
    tag: 'BESPOKE ENGINEERING',
    desc: 'Bespoke Zoho architectures engineered precisely around your unique business models, daily processes, and industry requirements.',
    image: '/benefits%20&%20solutions%20img/Customized%20Solutions.jpg',
    imageAlt: 'Customized Zoho Solutions - Office Hub Tech',
    badge: '100% Tailored Architecture',
    badgeIcon: Cpu,
    objectPosition: 'center center',
  },
  {
    id: 3,
    stepNum: '03',
    title: 'Expert Support and Training',
    tag: 'ENTERPRISE ENABLEMENT',
    desc: 'Comprehensive hands-on team enablement and dedicated certified technical specialists ensuring seamless, uninterrupted enterprise software adoption.',
    image: '/benefits%20&%20solutions%20img/Expert%20Support%20and%20Training.jpg',
    imageAlt: 'Expert Support and Training - Office Hub Tech',
    badge: 'Certified Zoho Specialists',
    badgeIcon: Headphones,
    objectPosition: 'center center',
  },
  {
    id: 4,
    stepNum: '04',
    title: 'Scalable Growth',
    tag: 'FUTURE-PROOF EXPANSION',
    desc: 'Robust cloud infrastructure designed to scale effortlessly as your enterprise expands and revenue rapidly multiplies.',
    image: '/benefits%20&%20solutions%20img/Scalable%20Growth.jpg',
    imageAlt: 'Scalable Business Growth with Zoho - Office Hub Tech',
    badge: 'High-Velocity Scalability',
    badgeIcon: TrendingUp,
    objectPosition: 'center center',
  },
];

export default function BenefitsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Preload all 4 images on mount to avoid visual delay
  useEffect(() => {
    benefitsData.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  // Automatic slide rotation every 5.5s, pauses on hover
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefitsData.length);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % benefitsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + benefitsData.length) % benefitsData.length);
  };

  const handleSelect = (idx) => {
    setCurrentIndex(idx);
  };

  const currentItem = benefitsData[currentIndex];
  const BadgeIcon = currentItem.badgeIcon;

  // Refined, subtle image transition (restrained & cinematic)
  const imageVariants = {
    initial: {
      opacity: 0,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 1.01,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Synchronized text entrance from right side
  const textContainerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      x: 15,
      transition: {
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  };

  const textItemVariants = {
    initial: {
      opacity: 0,
      x: 25,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section 
      className="benefits-section" 
      id="benefits"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Company Benefits & Solutions"
    >
      {/* Background Atmosphere: Deep Forest & Emerald Glows */}
      <div className="benefits-ambient-glow glow-benefits-left" aria-hidden="true" />
      <div className="benefits-ambient-glow glow-benefits-right" aria-hidden="true" />
      <div className="benefits-grid-mesh" aria-hidden="true" />

      <div className="benefits-container">
        
        {/* Compact Section Header */}
        <div className="benefits-header">
          <div className="benefits-eyebrow-pill">
            <span className="benefits-pill-dot" />
            <span>COMPANY BENEFITS & SOLUTIONS</span>
          </div>

          <h2 className="benefits-main-title">
            <span className="title-lead">Empowering Your Business Growth with</span>{' '}
            <span className="title-gold-gradient">Tailored Zoho Solutions</span>
          </h2>
        </div>

        {/* Desktop Single-Screen 2-Column Composition */}
        <div className="benefits-showcase-row">

          {/* =================================================================
              LEFT: REFINED RECTANGULAR IMAGE FRAME
              Clean subtle rounded corners, sharp presentation, no irregular mask
              ================================================================= */}
          <div className="benefits-image-stage">
            <div className="benefits-image-frame">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`benefit-img-${currentItem.id}`}
                  className="benefits-image-wrapper"
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <img
                    src={currentItem.image}
                    alt={currentItem.imageAlt}
                    className="benefits-cover-image"
                    style={{ objectPosition: currentItem.objectPosition }}
                    loading="eager"
                  />
                  {/* Subtle soft gradient for depth without excessive darkness */}
                  <div className="benefits-image-soft-gradient" />
                </motion.div>
              </AnimatePresence>

              {/* Refined Status Badge */}
              <div className="benefits-floating-badge-wrap">
                <div className="benefits-floating-glass-badge">
                  <BadgeIcon size={14} className="benefits-badge-icon" />
                  <span>{currentItem.badge}</span>
                </div>
              </div>

              {/* Frame Accent Border */}
              <div className="benefits-frame-border" aria-hidden="true" />
            </div>
          </div>

          {/* =================================================================
              RIGHT: EDITORIAL CONTENT & 4-POINT NAVIGATOR
              ================================================================= */}
          <div className="benefits-content-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={`benefit-text-${currentItem.id}`}
                className="benefits-text-flow"
                variants={textContainerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Category Pill Tag */}
                <motion.div variants={textItemVariants} className="benefits-tag-pill">
                  <span className="benefits-tag-accent" />
                  <span>{currentItem.tag}</span>
                </motion.div>

                {/* Point Headline: Clean Space Grotesk typography */}
                <motion.h3 variants={textItemVariants} className="benefits-item-headline">
                  <span className="headline-index">{currentItem.stepNum}.</span>{' '}
                  <span className="headline-title-text">{currentItem.title}</span>
                </motion.h3>

                {/* 15-Word Supporting Description: Crisp Inter typography */}
                <motion.p variants={textItemVariants} className="benefits-item-desc">
                  {currentItem.desc}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Interactive 4 Points Navigator (2x2 Grid) */}
            <div className="benefits-points-list" role="tablist" aria-label="Benefits Points">
              {benefitsData.map((point, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <button
                    key={point.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`benefit-point-tab ${isActive ? 'tab-active' : ''}`}
                    onClick={() => handleSelect(idx)}
                  >
                    <div className="tab-left-indicator">
                      <span className="tab-number">{point.stepNum}</span>
                      <CheckCircle2 size={14} className={`tab-check-icon ${isActive ? 'icon-active' : ''}`} />
                    </div>
                    <span className="tab-title">{point.title}</span>
                  </button>
                );
              })}
            </div>

            {/* CTA and Stepper Controls */}
            <div className="benefits-actions-row">
              <a href="#contact-us" className="benefits-primary-cta">
                <span>Explore Zoho Solutions</span>
                <ArrowUpRight size={15} className="cta-arrow" />
              </a>

              {/* Stepper Navigation */}
              <div className="benefits-nav-controls">
                <span className="benefits-stepper-counter">
                  0{currentIndex + 1} <span className="counter-sep">/</span> 0{benefitsData.length}
                </span>

                <div className="benefits-arrow-buttons">
                  <button
                    type="button"
                    className="benefits-arrow-btn"
                    onClick={handlePrev}
                    aria-label="Previous Benefit"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    className="benefits-arrow-btn"
                    onClick={handleNext}
                    aria-label="Next Benefit"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
