import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  Workflow, 
  ArrowUpRight, 
  RotateCcw,
  Layers,
  Award,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import './WhyOfficeHubSection.css';

// Centralized editable content data structure
export const whyOfficeHubData = {
  eyebrow: 'ZOHO CONSULTING EXCELLENCE',
  introImage: '/YOfficeHub/Y office Hub.png',
  heading: 'Why Office Hub Tech?',
  reasons: [
    {
      id: 'expertise-in-zoho',
      number: '01',
      title: 'Expertise in Zoho Solutions',
      tag: 'ZOHO ECOSYSTEM MASTERY',
      description:
        'Deep understanding and experience in customizing and deploying Zoho products to meet specific business needs.',
      deliverables: [
        'Custom Deluge scripting & automated triggers',
        'Multi-app sync across CRM, Books, Creator & Desk',
        'Zero-latency process optimization'
      ],
      metric: '100% Customized',
      icon: Layers
    },
    {
      id: 'comprehensive-service-range',
      number: '02',
      title: 'Comprehensive Service Range',
      tag: 'FULL-SPECTRUM REACH',
      description:
        'From CRM to ERP solutions, we provide a wide array of services to support various business operations.',
      deliverables: [
        'Turnkey CRM & ERP enterprise deployment',
        'Legacy system migration & data validation',
        'Omnichannel customer service & accounting sync'
      ],
      metric: 'End-to-End Solutions',
      icon: Sparkles
    },
    {
      id: 'zoho-certified-expertise',
      number: '03',
      title: 'Zoho Certified Expertise',
      tag: 'AUTHORIZED PARTNER',
      description:
        'As Zoho Certified Consultants, Office Hub Tech boosts your business with expert Zoho solutions, ensuring efficiency and growth.',
      deliverables: [
        'Certified Zoho Consultant methodologies',
        'Enterprise security governance & compliance',
        'Executive dashboards & continuous optimization'
      ],
      metric: 'Certified Consultants',
      icon: Award
    }
  ]
};

export default function WhyOfficeHubSection() {
  // Step state: 'intro' (Image + "Why Office Hub Tech?") -> 'reasons' (Heading + All 3 Reasons)
  const [currentStep, setCurrentStep] = useState('intro');
  const sectionRef = useRef(null);
  const autoTransitionTimerRef = useRef(null);
  const introMountedTimeRef = useRef(0);

  // Accurate detection: only trigger when at least 45% of the section is visible in the viewport
  const isInView = useInView(sectionRef, { amount: 0.45, once: true });

  // Transition to Reasons
  const showReasons = () => {
    if (autoTransitionTimerRef.current) {
      clearTimeout(autoTransitionTimerRef.current);
      autoTransitionTimerRef.current = null;
    }
    setCurrentStep('reasons');
  };

  // Replay Opening Intro
  const replayIntro = () => {
    if (autoTransitionTimerRef.current) {
      clearTimeout(autoTransitionTimerRef.current);
    }
    setCurrentStep('intro');
    introMountedTimeRef.current = Date.now();
    
    // Auto transition after 4.5 seconds
    autoTransitionTimerRef.current = setTimeout(() => {
      setCurrentStep('reasons');
    }, 4500);
  };

  // ONLY start the timer when the section is ACTUALLY in the user's viewport
  useEffect(() => {
    if (!isInView || currentStep !== 'intro') return;

    introMountedTimeRef.current = Date.now();

    // Comfortable, elegant reading time: 4.5s total (1.1s entrance + 3.4s rest)
    autoTransitionTimerRef.current = setTimeout(() => {
      setCurrentStep('reasons');
    }, 4500);

    return () => {
      if (autoTransitionTimerRef.current) {
        clearTimeout(autoTransitionTimerRef.current);
      }
    };
  }, [isInView, currentStep]);

  // Wheel listener: ONLY active when the user is ACTUALLY inside the section
  // and has had at least 1.8 seconds to see the intro
  useEffect(() => {
    if (currentStep !== 'intro' || !isInView) return;

    const handleWheel = (e) => {
      const elapsed = Date.now() - introMountedTimeRef.current;
      // Prevent premature skip: user must have seen intro for at least 1.8s
      if (elapsed > 1800 && e.deltaY > 25) {
        showReasons();
      }
    };

    const sectionEl = sectionRef.current;
    if (sectionEl) {
      sectionEl.addEventListener('wheel', handleWheel, { passive: true });
    }

    return () => {
      if (sectionEl) {
        sectionEl.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentStep, isInView]);

  // Motion variants for Image in Intro Step: Smooth, slow, elegant easing
  const introImageVariants = {
    enter: {
      x: -70,
      opacity: 0,
      scale: 0.92,
      filter: 'blur(10px)'
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      x: -45,
      opacity: 0,
      scale: 0.94,
      filter: 'blur(12px)',
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Motion variants for Heading in Intro Step
  const introHeadingVariants = {
    enter: {
      x: 70,
      opacity: 0,
      scale: 0.94,
      filter: 'blur(10px)'
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.15,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.12
      }
    },
    exit: {
      y: -35,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(10px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Motion variants for 3 reasons cards grid: Graceful stagger
  const reasonsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.15
      }
    }
  };

  const reasonCardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(8px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="why-section" id="why-us" ref={sectionRef}>
      {/* Ambient background glows */}
      <div className="why-ambient-glow glow-top-left" aria-hidden="true" />
      <div className="why-ambient-glow glow-bottom-right" aria-hidden="true" />
      <div className="why-grid-mesh" aria-hidden="true" />

      <div className="why-container">
        <AnimatePresence mode="wait">
          {/* =================================================================
              STEP 1: INTRO (First time entering section)
              Shows ONLY "Why Office Hub Tech?" heading with the image.
              NO description or extra text!
              Proper speed, pauses 4.5s, then automatically moves & disappears.
              ================================================================= */}
          {currentStep === 'intro' ? (
            <motion.div
              key="why-step-intro"
              className="why-intro-stage"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="why-intro-content-row">
                {/* Image using ServicesSection portrait card style */}
                <motion.div
                  variants={introImageVariants}
                  initial="enter"
                  animate={isInView ? 'center' : 'enter'}
                  exit="exit"
                  className="why-intro-portrait-wrapper"
                >
                  <div className="why-intro-portrait-card">
                    <img
                      src={whyOfficeHubData.introImage}
                      alt="Why Office Hub Tech"
                      className="why-intro-image"
                      loading="eager"
                    />

                    {/* Gradient Overlay */}
                    <div className="why-intro-overlay" />

                    {/* Floating Gold Question Badge */}
                    <div className="why-intro-floating-badge">
                      <span className="why-intro-badge-mark">?</span>
                      <div className="why-intro-badge-glow" />
                    </div>

                    {/* Gold Outer Border Ring */}
                    <div className="why-intro-gold-border" />
                  </div>
                </motion.div>

                {/* ONLY "Why Office Hub Tech?" heading (NO description) */}
                <motion.div
                  variants={introHeadingVariants}
                  initial="enter"
                  animate={isInView ? 'center' : 'enter'}
                  exit="exit"
                  className="why-intro-heading-wrapper"
                >
                  <div className="why-eyebrow-pill">
                    <Sparkles size={14} className="eyebrow-gold-sparkle" />
                    <span>{whyOfficeHubData.eyebrow}</span>
                  </div>

                  <h2 className="why-pure-intro-title">
                    <span className="title-lead">Why</span>{' '}
                    <span className="title-gold-gradient">Office Hub Tech?</span>
                  </h2>

                  {/* Smooth countdown progress bar & skip button */}
                  <div className="why-intro-footer-cue">
                    <button
                      type="button"
                      onClick={showReasons}
                      className="why-skip-pill-btn"
                      aria-label="View all three reasons now"
                    >
                      <span>Explore 3 Reasons</span>
                      <ArrowRight size={14} className="cue-arrow" />
                    </button>

                    <div className="why-auto-progress-bar">
                      <div className="why-auto-progress-fill" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            /* =================================================================
               STEP 2: ALL THREE REASONS WITH "Why Office Hub Tech?" HEADING
               The image and initial intro have disappeared.
               Heading is prominently at the top.
               All three reasons are shown together in ServicesSection style.
               ================================================================= */
            <motion.div
              key="why-step-reasons"
              className="why-reasons-overview-stage"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Main Heading at Top: "Why Office Hub Tech?" */}
              <div className="why-header">
                <div className="why-eyebrow-pill">
                  <Sparkles size={14} className="eyebrow-gold-sparkle" />
                  <span>{whyOfficeHubData.eyebrow}</span>
                </div>

                <h2 className="why-main-title">
                  <span className="title-lead">Why</span>{' '}
                  <span className="title-gold-gradient">Office Hub Tech?</span>
                </h2>

                <div className="why-gold-line-divider" aria-hidden="true">
                  <span className="divider-sparkle-gem" />
                </div>
              </div>

              {/* ALL THREE REASONS DISPLAYED TOGETHER (ServicesSection style) */}
              <motion.div
                className="why-three-reasons-grid"
                variants={reasonsContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {whyOfficeHubData.reasons.map((reason) => {
                  const Icon = reason.icon || Sparkles;
                  return (
                    <motion.div
                      key={reason.id}
                      className="why-reason-card"
                      variants={reasonCardVariants}
                      whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    >
                      {/* Top Bar with Number & Category Tag */}
                      <div className="why-card-top-bar">
                        <div className="why-card-number-badge">
                          <span>{reason.number}</span>
                        </div>

                        <div className="why-card-tag-pill">
                          <Icon size={12} className="tag-icon" />
                          <span>{reason.tag}</span>
                        </div>
                      </div>

                      {/* Reason Title */}
                      <h3 className="why-card-title">
                        {reason.title}
                      </h3>

                      {/* Complete Reason Description */}
                      <p className="why-card-description">
                        {reason.description}
                      </p>

                      {/* Capabilities / Advantages Checklist (ServicesSection style) */}
                      <ul className="why-card-checklist">
                        {reason.deliverables.map((item, idx) => (
                          <li key={idx} className="why-card-checklist-item">
                            <CheckCircle2 size={15} className="check-gold-icon" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Card Footer with Credential Metric */}
                      <div className="why-card-footer">
                        <div className="why-card-metric-pill">
                          <ShieldCheck size={14} className="metric-shield-icon" />
                          <span>{reason.metric}</span>
                        </div>

                        <a href="#contact-us" className="why-card-inquire-link" aria-label={`Inquire about ${reason.title}`}>
                          <span>Inquire</span>
                          <ArrowUpRight size={14} className="link-arrow" />
                        </a>
                      </div>

                      {/* Ambient Gold Border & Glow Overlay */}
                      <div className="why-card-border-glow" aria-hidden="true" />
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Replay Intro Button */}
              <div className="why-replay-row">
                <button
                  type="button"
                  onClick={replayIntro}
                  className="why-replay-btn"
                  aria-label="Replay intro image and question"
                >
                  <RotateCcw size={13} />
                  <span>Replay Intro</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
