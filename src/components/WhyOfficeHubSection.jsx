import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Sparkles, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import './WhyOfficeHubSection.css';

// Centralized editable content data structure
export const whyOfficeHubData = {
  eyebrow: 'WHY CHOOSE US',
  introImage: '/YOfficeHub/Y office Hub.png',
  heading: 'Why Office Hub Tech?',
  reasons: [
    {
      id: 'expertise-in-zoho',
      number: '01',
      title: 'Expertise in Zoho Solutions',
      emoji: '💎',
      shortDescription:
        'Tailored Zoho implementations and custom Deluge workflows engineered to streamline your unique business operations.',
    },
    {
      id: 'comprehensive-service-range',
      number: '02',
      title: 'Comprehensive Service Range',
      emoji: '👥',
      shortDescription:
        'End-to-end consulting spanning CRM, finance, ERP, and seamless integrations across your entire enterprise.',
    },
    {
      id: 'zoho-certified-expertise',
      number: '03',
      title: 'Zoho Certified Expertise',
      emoji: '⭐',
      shortDescription:
        'Authorized certified consultants delivering secure, scalable, and high-performance Zoho architectures that accelerate growth.',
    }
  ]
};

export default function WhyOfficeHubSection() {
  // Step state: 'intro' (Image + "Why Office Hub Tech?") -> 'reasons' (Heading + All 3 Reasons)
  const [currentStep, setCurrentStep] = useState('intro');
  const sectionRef = useRef(null);
  const autoTransitionTimerRef = useRef(null);
  const introMountedTimeRef = useRef(0);

  // Trigger when at least 45% of the section is visible in the viewport
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

    autoTransitionTimerRef.current = setTimeout(() => {
      setCurrentStep('reasons');
    }, 4500);

    return () => {
      if (autoTransitionTimerRef.current) {
        clearTimeout(autoTransitionTimerRef.current);
      }
    };
  }, [isInView, currentStep]);

  // Wheel listener: user can skip after 1.8s by scrolling down
  useEffect(() => {
    if (currentStep !== 'intro' || !isInView) return;

    const handleWheel = (e) => {
      const elapsed = Date.now() - introMountedTimeRef.current;
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
        staggerChildren: 0.18,
        delayChildren: 0.1
      }
    }
  };

  const reasonCardVariants = {
    hidden: {
      opacity: 0,
      y: 35,
      filter: 'blur(6px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section 
      className={`why-section ${currentStep === 'reasons' ? 'is-reasons' : 'is-intro'}`} 
      id="why-us" 
      ref={sectionRef}
    >
      {/* Ambient background glows (shown only during dark intro stage) */}
      <div className="why-ambient-glow glow-top-left" aria-hidden="true" />
      <div className="why-ambient-glow glow-bottom-right" aria-hidden="true" />
      <div className="why-grid-mesh" aria-hidden="true" />

      <div className="why-container">
        <AnimatePresence mode="wait">
          {/* =================================================================
              STEP 1: INTRO (First time entering section)
              Shows ONLY "Why Office Hub Tech?" heading with the image.
              UNCHANGED before animation completion!
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
                {/* Intro Portrait Image Card */}
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

                {/* ONLY "Why Office Hub Tech?" heading */}
                <motion.div
                  variants={introHeadingVariants}
                  initial="enter"
                  animate={isInView ? 'center' : 'enter'}
                  exit="exit"
                  className="why-intro-heading-wrapper"
                >
                  <div className="why-eyebrow-pill">
                    <Sparkles size={14} className="eyebrow-gold-sparkle" />
                    <span>ZOHO CONSULTING EXCELLENCE</span>
                  </div>

                  <h2 className="why-pure-intro-title">
                    <span className="title-lead">Why</span>{' '}
                    <span className="title-gold-gradient">Office Hub Tech?</span>
                  </h2>

                  {/* Smooth countdown progress bar & explore button */}
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
               STEP 2: POST-ANIMATION REASONS STAGE
               Styled directly like reference image (Elite Moments):
               - Light ivory/beige palette
               - Editorial serif typography
               - Soft white rounded cards with independent emoji/logos
               - Clean ~14 word concise descriptions
               - Single view frame (no scrolling needed)
               ================================================================= */
            <motion.div
              key="why-step-reasons"
              className="why-reasons-overview-stage"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Header matching reference image */}
              <div className="why-ref-header">
                <span className="why-ref-eyebrow">{whyOfficeHubData.eyebrow}</span>
                <h2 className="why-ref-heading">{whyOfficeHubData.heading}</h2>
              </div>

              {/* Three Cards Grid */}
              <motion.div
                className="why-three-reasons-grid"
                variants={reasonsContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {whyOfficeHubData.reasons.map((reason) => (
                  <motion.div
                    key={reason.id}
                    className="why-ref-card"
                    variants={reasonCardVariants}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  >
                    {/* Circular Logo/Emoji Badge */}
                    <div className="why-ref-icon-circle" aria-hidden="true">
                      <span className="why-ref-emoji">{reason.emoji}</span>
                    </div>

                    {/* Editorial Serif Title */}
                    <h3 className="why-ref-card-title">
                      {reason.title}
                    </h3>

                    {/* Concise 13-14 Words Description */}
                    <p className="why-ref-card-description">
                      {reason.shortDescription}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Replay Intro Cue */}
              <div className="why-ref-replay-row">
                <button
                  type="button"
                  onClick={replayIntro}
                  className="why-ref-replay-btn"
                  aria-label="Replay intro animation"
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
