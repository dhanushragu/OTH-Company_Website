import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Workflow
} from 'lucide-react';
import './ServicesSection.css';

const services = [
  {
    id: 'data-migration',
    number: '01',
    title: 'Data Migration',
    tag: 'INFRASTRUCTURE & INTEGRITY',
    tagline: 'Flawless transfer of mission-critical business data with zero integrity loss.',
    description:
      'We architect secure, schema-mapped extraction, transformation, and automated loading pipelines. Our methodology guarantees seamless migration from legacy systems or disparate spreadsheets into centralized cloud architectures with continuous validation.',
    image: '/services/data migration.jpg',
    imageAlt: 'Data Migration Pipeline and Secure Cloud Architecture',
    accent: '#fbbf24',
    deliverables: [
      'Automated schema transformation & field mapping',
      'Zero-loss validation & historical data cleansing',
      'Pre-cutover staging & parallel reconciliation'
    ],
    metric: '100% Data Parity'
  },
  {
    id: 'custom-app-development',
    number: '02',
    title: 'Custom App Development',
    tag: 'BESPOKE SOFTWARE & WORKFLOWS',
    tagline: 'Purpose-built enterprise applications engineered around your exact operations.',
    description:
      'When off-the-shelf software falls short, we design tailored low-code and full-stack enterprise portals, internal tools, and client-facing interfaces built to scale alongside your organization’s evolving operational demands.',
    image: '/services/custom app development.jpg',
    imageAlt: 'Custom Application Development and Tiered Logic Architecture',
    accent: '#f59e0b',
    deliverables: [
      'Custom role-based portals & admin dashboards',
      'Automated business logic & multi-tier approval flows',
      'Scalable relational schemas & responsive UX'
    ],
    metric: 'Bespoke Logic'
  },
  {
    id: 'roadmap-business-analysis',
    number: '03',
    title: 'Roadmap & Business Analysis',
    tag: 'STRATEGIC ARCHITECTURE & ADVISORY',
    tagline: 'Translating executive vision into an executable, milestone-driven technical roadmap.',
    description:
      'Our senior business consultants dissect your operational bottlenecks, audit current digital assets, and draft a structured milestone roadmap designed to eliminate redundancy, optimize costs, and accelerate company velocity.',
    image: '/services/roadmap and business analysis.jpg',
    imageAlt: 'Strategic Roadmap and Business Process Analysis Blueprint',
    accent: '#fbbf24',
    deliverables: [
      'Comprehensive business process gap analysis',
      'Milestone-driven technical implementation roadmap',
      'Resource allocation & digital ROI optimization'
    ],
    metric: 'Clear Milestones'
  },
  {
    id: 'zoho-implementation',
    number: '04',
    title: 'Zoho Implementation',
    tag: 'UNIFIED CLOUD ECOSYSTEMS',
    tagline: 'End-to-end deployment of Zoho One and standalone enterprise modules.',
    description:
      'Authored by published Zoho implementation experts, we turn complex multi-app Zoho ecosystems into a harmonious, synchronized operating system—integrating CRM, Books, Creator, Analytics, and Desk into a single unified engine.',
    image: '/services/implementation.jpg',
    imageAlt: 'Zoho One Implementation and Interconnected Operating Modules',
    accent: '#d97706',
    deliverables: [
      'Turnkey Zoho One blueprinting & setup',
      'Custom Deluge scripting & automated webhooks',
      'Executive dashboards & cross-departmental sync'
    ],
    metric: 'Enterprise Certified'
  },
  {
    id: '3rd-party-integrations',
    number: '05',
    title: '3rd Party Integrations',
    tag: 'SYNCHRONIZED CONNECTIVITY & APIS',
    tagline: 'Bridging disparate tools, legacy ERPs, and cloud apps via resilient API gateways.',
    description:
      'We build low-latency webhooks, middleware conduits, and RESTful API bridges connecting your core platforms with payment gateways, logistics carriers, marketing engines, accounting software, and external partner databases.',
    image: '/services/3rd party integration.jpg',
    imageAlt: '3rd Party Integrations and Unified API Gateway Network',
    accent: '#fbbf24',
    deliverables: [
      'Bi-directional REST & GraphQL API connectors',
      'Event-triggered webhooks & automated payload sync',
      'Fault-tolerant queuing & error-recovery pipelines'
    ],
    metric: 'Zero-Latency Sync'
  }
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play slideshow every 6.5s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleJump = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const currentService = services[currentIndex];

  // Motion variants for the 4:5 Portrait Image Card (exact ratio & smooth entrance like Process section)
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

  // Motion variants for the clean, unboxed typography column
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
    <section className="services-section" id="services">
      {/* Background Ambient Glows */}
      <div className="services-ambient-glow glow-gold-top" aria-hidden="true" />
      <div className="services-ambient-glow glow-gold-bottom" aria-hidden="true" />
      <div className="services-grid-mesh" aria-hidden="true" />

      <div className="services-container">
        {/* Editorial Section Introduction */}
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="services-eyebrow-pill">
            <Sparkles size={14} className="eyebrow-gold-sparkle" />
            <span>WHAT WE DO</span>
          </div>

          <h2 className="services-main-title">
            <span className="title-lead">Our</span>{' '}
            <span className="title-gold-gradient">Services</span>
          </h2>

          <div className="services-gold-line-divider" aria-hidden="true">
            <span className="divider-sparkle-gem" />
          </div>
        </motion.div>

        {/* Top Quick-Navigation Tabs Strip */}
        <div className="services-top-bar">
          <div className="services-tabs-strip" role="tablist">
            {services.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`service-tab-btn ${isActive ? 'tab-active' : ''}`}
                  onClick={() => handleJump(idx)}
                >
                  <span className="btn-tab-num">0{idx + 1}</span>
                  <span className="btn-tab-title">{item.title}</span>
                  {isActive && (
                    <motion.div 
                      className="tab-gold-indicator"
                      layoutId="activeServiceTabGlow"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 
          SIX-STAGE STORY STYLE COMPOSITION (NO BOX AROUND CONTENT)
          - Left: 4:5 Portrait Image Card matching process section ratio & floating step badge
          - Right: Clean editorial typography, tag pill, headline, and deliverables
        */}
        <div 
          className="services-story-showcase"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="services-story-row">
            {/* LEFT: 4:5 Portrait Image Card */}
            <div className="service-portrait-column">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`img-${currentService.id}`}
                  custom={direction}
                  variants={imageColumnVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="services-portrait-card-wrapper"
                >
                  <div className="services-portrait-card">
                    <img
                      src={currentService.image}
                      alt={currentService.imageAlt}
                      className="services-portrait-image"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for luxury feel */}
                    <div className="portrait-luxury-overlay" />

                    {/* Floating Step Number Badge (Exact ProcessSection 48x48 style) */}
                    <div className="service-floating-badge">
                      <span className="badge-number-text">{currentService.number}</span>
                      <div className="badge-glow-ring" />
                    </div>

                    {/* Gold Outer Border Ring */}
                    <div className="portrait-gold-border" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT: Pure Editorial Content (NO background box/frame - clean, stylish typography) */}
            <div className="service-typography-column">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`content-${currentService.id}`}
                  custom={direction}
                  variants={contentColumnVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="service-typography-flow"
                >
                  {/* Category Tag Pill */}
                  <div className="service-tag-pill">
                    <Workflow size={14} className="tag-pill-icon" />
                    <span className="tracking-animated">{currentService.tag}</span>
                  </div>

                  {/* Stylish Main Title */}
                  <h3 className="service-headline">
                    <span className="service-order-number">{currentService.number}.</span>{' '}
                    <span className="service-title-text">{currentService.title}</span>
                  </h3>

                  {/* Golden Tagline */}
                  <p className="service-tagline">{currentService.tagline}</p>

                  {/* Clean Description */}
                  <p className="service-description">{currentService.description}</p>

                  {/* Capabilities Checklist */}
                  <ul className="service-checklist">
                    {currentService.deliverables.map((item, idx) => (
                      <li key={idx} className="checklist-item">
                        <CheckCircle2 size={16} className="check-gold-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Inquire Action Link */}
                  <div className="service-action-container">
                    <a href="#contact-us" className="service-gold-cta-btn">
                      <span>Inquire About {currentService.title}</span>
                      <ArrowUpRight size={17} className="btn-arrow" />
                    </a>
                    <span className="service-sla-label">Enterprise SLA & Security NDA</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Interactive Navigation Control Bar */}
          <div className="services-slideshow-nav-bar">
            {/* Prev Arrow */}
            <button
              type="button"
              className="nav-arrow-btn prev-btn"
              onClick={handlePrev}
              aria-label="Previous Service"
            >
              <ChevronLeft size={20} />
              <span>Previous</span>
            </button>

            {/* Central Progress Pills & Counter */}
            <div className="nav-center-tracker">
              <div className="tracker-counter">
                <span className="active-idx">0{currentIndex + 1}</span>
                <span className="sep-slash">/</span>
                <span className="tot-idx">0{services.length}</span>
              </div>

              <div className="tracker-dots-row">
                {services.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`tracker-dot ${idx === currentIndex ? 'dot-active' : ''}`}
                    onClick={() => handleJump(idx)}
                    aria-label={`Jump to service ${idx + 1}`}
                  >
                    <span className="dot-fill" />
                  </button>
                ))}
              </div>
            </div>

            {/* Next Arrow */}
            <button
              type="button"
              className="nav-arrow-btn next-btn"
              onClick={handleNext}
              aria-label="Next Service"
            >
              <span>Next Service</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
