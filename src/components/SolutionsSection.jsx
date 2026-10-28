import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Workflow,
  Sun,
  FlaskConical,
  Users
} from 'lucide-react';
import './SolutionsSection.css';

const erpSolutions = [
  {
    id: 'solar-management',
    number: '01',
    title: 'Solar Management',
    tag: 'CLEAN ENERGY & GRID ASSET ERP',
    icon: Sun,
    tagline: 'Real-time SCADA telemetry, supply chain BOM tracking, and automated yield accounting.',
    description:
      'Engineered for utility solar developers, EPC contractors, and asset operators. Harmonize feasibility modeling, inverter IoT telemetry, PPA compliance billing, and automated subcontractor maintenance dispatch into a single unified cloud operating system.',
    image: '/erp%20solutions/solar%20erp.png',
    imageAlt: 'Solar Management ERP and Commercial Solar Power Grid Monitoring',
    accent: '#fbbf24',
    deliverables: [
      'Live inverter SCADA & predictive yield telemetry',
      'Automated PPA billing & grid compliance reporting',
      'BOM tracking, procurement & subcontractor dispatch'
    ],
    metric: '+38% Yield Efficiency',
    link: '#contact-us'
  },
  {
    id: 'chemical-pharma-erp',
    number: '02',
    title: 'Chemical & Pharmaceutical Manufacturing ERP',
    tag: 'FORMULATION & REGULATORY CGMP',
    icon: FlaskConical,
    tagline: 'High-compliance formulation management, forward-backward batch genealogy, and e-BMR validation.',
    description:
      'Purpose-built for pharmaceutical compounders and chemical synthesizers operating under strict FDA 21 CFR Part 11 and cGMP standards. Features electronic batch manufacturing records (e-BMR), dynamic potency adjustments, and automated multi-tier QA sign-offs.',
    image: '/erp%20solutions/chemical%20and%20pharmaceutical%20manufacturing%20ERP.jpg',
    imageAlt: 'Chemical and Pharmaceutical Cleanroom Manufacturing ERP System',
    accent: '#f59e0b',
    deliverables: [
      'Bidirectional batch genealogy & instant recall tracing',
      '21 CFR Part 11 compliant digital signatures & e-BMR',
      'Dynamic potency adjustments & automated quarantine workflows'
    ],
    metric: '100% Batch Traceability',
    link: '#contact-us'
  },
  {
    id: 'staffing-erp-360',
    number: '03',
    title: 'Staffing ERP 360',
    tag: 'WORKFORCE & TALENT INTELLIGENCE',
    icon: Users,
    tagline: 'Unified talent matching, automated timesheet billing, margin analytics, and multi-entity payroll.',
    description:
      'An all-in-one synchronized operations engine for global recruitment agencies, staffing firms, and contingent workforce providers. Connects client pipelines, AI-driven candidate ranking, automated split-commission invoicing, and multi-state compliance dispatch.',
    image: '/erp%20solutions/staffing%20ERP%20360.jpg',
    imageAlt: 'Staffing ERP 360 Talent Management and Executive Workforce Platform',
    accent: '#d97706',
    deliverables: [
      'AI-driven applicant matching & credential compliance',
      'Automated timesheet reconciliation & split-commission engine',
      'Real-time gross margin analytics & multi-entity payroll'
    ],
    metric: '360° Velocity Matrix',
    link: '#contact-us'
  }
];

export default function SolutionsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slideshow every 6.5s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % erpSolutions.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % erpSolutions.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + erpSolutions.length) % erpSolutions.length);
  };

  const handleJump = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const currentSolution = erpSolutions[currentIndex];
  const IconComponent = currentSolution.icon;

  // Motion variants for the 4:5 Portrait Image Card (exact Services Section style)
  const imageColumnVariants = {
    enter: (dir) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(8px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 1.04,
      filter: 'blur(8px)',
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  // Motion variants for the unboxed typography column
  const contentColumnVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
      filter: 'blur(8px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.08
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 1.02,
      filter: 'blur(8px)',
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section className="solutions-section" id="our-solutions">
      {/* Background Ambient Atmosphere */}
      <div className="solutions-ambient-glow glow-gold-top" aria-hidden="true" />
      <div className="solutions-ambient-glow glow-gold-bottom" aria-hidden="true" />
      <div className="solutions-grid-mesh" aria-hidden="true" />

      <div className="solutions-container">
        {/* Editorial Section Introduction */}
        <motion.div
          className="solutions-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="solutions-eyebrow-pill">
            <Sparkles size={14} className="eyebrow-gold-sparkle" />
            <span>ENTERPRISE ARCHITECTURE</span>
          </div>

          <h2 className="solutions-main-title">
            <span className="title-lead">ERP Solutions</span>{' '}
            <span className="title-gold-gradient">Which We Provide</span>
          </h2>

          <p className="solutions-subheading">
            Tailored enterprise resource planning systems engineered for high-stakes industries, regulatory compliance, and modern workforce dynamics.
          </p>

          <div className="solutions-gold-line-divider" aria-hidden="true">
            <span className="divider-sparkle-gem" />
          </div>
        </motion.div>

        {/* Top Quick-Navigation Tabs Strip */}
        <div className="solutions-top-bar">
          <div className="solutions-tabs-strip" role="tablist">
            {erpSolutions.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`solution-tab-btn ${isActive ? 'tab-active' : ''}`}
                  onClick={() => handleJump(idx)}
                >
                  <span className="btn-tab-num">0{idx + 1}</span>
                  <span className="btn-tab-title">{item.title}</span>
                  {isActive && (
                    <motion.div
                      className="tab-gold-indicator"
                      layoutId="activeSolutionTabGlow"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 
          STORY SHOWCASE COMPOSITION (EXACT SERVICES SECTION REFERENCE)
          - Left: 4:5 Portrait Image Card matching process/services section ratio with floating step badge
          - Right: Clean editorial typography (NO enclosing box/card around content)
        */}
        <div
          className="solutions-story-showcase"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="solutions-story-row">
            {/* LEFT: 4:5 Portrait Image Card */}
            <div className="solution-portrait-column">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`img-${currentSolution.id}`}
                  custom={direction}
                  variants={imageColumnVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="solutions-portrait-card-wrapper"
                >
                  <div className="solutions-portrait-card">
                    <img
                      src={currentSolution.image}
                      alt={currentSolution.imageAlt}
                      className="solutions-portrait-image"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for luxury feel */}
                    <div className="portrait-luxury-overlay" />

                    {/* Floating Step Number Badge */}
                    <div className="solution-floating-badge">
                      <span className="badge-number-text">{currentSolution.number}</span>
                      <div className="badge-glow-ring" />
                    </div>

                    {/* Gold Outer Border Ring */}
                    <div className="portrait-gold-border" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT: Pure Editorial Content (NO background box/frame) */}
            <div className="solution-typography-column">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`content-${currentSolution.id}`}
                  custom={direction}
                  variants={contentColumnVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="solution-typography-flow"
                >
                  {/* Category Tag Pill */}
                  <div className="solution-tag-pill">
                    <IconComponent size={14} className="tag-pill-icon" />
                    <span className="tracking-animated">{currentSolution.tag}</span>
                  </div>

                  {/* Stylish Main Title */}
                  <h3 className="solution-headline">
                    <span className="solution-order-number">{currentSolution.number}.</span>{' '}
                    <span className="solution-title-text">{currentSolution.title}</span>
                  </h3>

                  {/* Golden Tagline */}
                  <p className="solution-tagline">{currentSolution.tagline}</p>

                  {/* Clean Description */}
                  <p className="solution-description">{currentSolution.description}</p>

                  {/* Capabilities Checklist */}
                  <ul className="solution-checklist">
                    {currentSolution.deliverables.map((item, idx) => (
                      <li key={idx} className="checklist-item">
                        <CheckCircle2 size={16} className="check-gold-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link & Metric Badge */}
                  <div className="solution-action-container">
                    <a
                      href={currentSolution.link}
                      className="solution-gold-cta-btn"
                    >
                      <span>Explore Solution</span>
                      <ArrowUpRight size={17} className="btn-arrow" />
                    </a>
                    <span className="solution-metric-badge">{currentSolution.metric}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Interactive Navigation Bar */}
          <div className="solutions-slideshow-nav-bar">
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="nav-arrow-btn"
              aria-label="Previous solution"
            >
              <ChevronLeft size={18} />
              <span>Previous</span>
            </button>

            {/* Center Tracker: Counter + Progress Dots */}
            <div className="nav-center-tracker">
              <div className="tracker-counter">
                <span className="act-idx">0{currentIndex + 1}</span>
                <span className="sep-slash">/</span>
                <span className="tot-idx">0{erpSolutions.length}</span>
              </div>

              <div className="tracker-dots-row">
                {erpSolutions.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleJump(idx)}
                    className={`tracker-dot ${idx === currentIndex ? 'dot-active' : ''}`}
                    aria-label={`Go to solution 0${idx + 1}`}
                  >
                    {idx === currentIndex && (
                      <motion.div
                        className="tracker-dot-fill"
                        layoutId="activeSolutionDotFill"
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="nav-arrow-btn"
              aria-label="Next solution"
            >
              <span>Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
