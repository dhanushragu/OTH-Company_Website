import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, ShieldCheck, Cpu } from 'lucide-react';
import './Hero.css';

// Centralized hero slides configuration
const heroSlides = [
  {
    id: 1,
    slideNumber: '01',
    categoryTag: 'APPLIED ARTIFICIAL INTELLIGENCE',
    titleLead: 'We Build',
    titleHighlight: 'Custom AI Models',
    titleSuffix: '',
    desc: 'Proprietary machine learning pipelines and neural agents engineered for enterprise scale, data privacy, and intelligent decision-making.',
    accent: 'gold',
    badgeText: 'Enterprise AI Architecture',
    badgeIcon: Cpu,
    image: '/images/hero%20section%20images/hero%20img%201.png',
    imageAlt: 'We Build Custom AI Models - Office Hub Tech Enterprise AI',
    objectPosition: 'center 40%',
    primaryCtaText: 'Explore AI Solutions',
    primaryCtaLink: '#our-solutions',
    secondaryCtaText: 'Schedule Consultation',
    secondaryCtaLink: '#contact-us',
    trustText: 'Certified Architecture • Enterprise AI Pipelines'
  },
  {
    id: 2,
    slideNumber: '02',
    categoryTag: 'UNIFIED CLOUD ARCHITECTURE',
    titleLead: 'Custom',
    titleHighlight: 'Zoho Solutions',
    titleSuffix: 'Tailored for You',
    desc: 'End-to-end CRM ecosystems, bespoke Zoho Creator applications, and zero-latency business process automation for modern enterprises.',
    accent: 'gold',
    badgeText: 'Certified Zoho Partner',
    badgeIcon: ShieldCheck,
    image: '/images/hero%20section%20images/hero%20img%202.jpg',
    imageAlt: 'Custom Zoho Solutions Tailored for You - Office Hub Tech',
    objectPosition: 'center center',
    primaryCtaText: 'Explore Zoho Services',
    primaryCtaLink: '#services',
    secondaryCtaText: 'Book Strategy Call',
    secondaryCtaLink: '#contact-us',
    trustText: 'Ranked #1 Globally • 100% Custom Engineering'
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Preload both images immediately to prevent any flicker during rotation
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Automatic slide rotation every 5.5 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleJump = (idx) => {
    setCurrentIndex(idx);
  };

  const currentSlide = heroSlides[currentIndex];
  const BadgeIcon = currentSlide.badgeIcon || Sparkles;

  // Smooth clockwise rotation animation for images:
  // Outgoing image rotates clockwise from 0° -> +18° while fading
  // Incoming image enters from -18° rotating clockwise -> 0°
  // Creating a seamless, elegant clock-sweep effect
  const imageClockVariants = {
    initial: {
      rotate: -18,
      scale: 1.08,
      opacity: 0,
    },
    animate: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.95,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      rotate: 18,
      scale: 0.96,
      opacity: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Synchronized text animation: incoming arrives from right (x: 50 -> 0), outgoing fades right (0 -> 30)
  const textContainerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: 30,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const textItemVariants = {
    initial: {
      opacity: 0,
      x: 50,
      filter: 'blur(6px)',
    },
    animate: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      className="hero-section" 
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Office Hub Tech Hero Showcase"
    >
      {/* Ambient background glows & fine mesh */}
      <div className="hero-ambient-glow glow-top-left" aria-hidden="true" />
      <div className="hero-ambient-glow glow-bottom-right" aria-hidden="true" />
      <div className="hero-grid-mesh" aria-hidden="true" />

      {/* SVG Clip Path Definition for the Curved Arc Boundary */}
      <svg className="hero-svg-defs" width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="heroCurvedArcClip" clipPathUnits="objectBoundingBox">
            {/* 
              Smooth, oversized clock-like convex arc on the right:
              Starts at (0,0), spans to (0.86, 0), curves smoothly out to (1.0, 0.5) at the center,
              and returns to (0.86, 1) at the bottom, then back to (0,1).
            */}
            <path d="M 0,0 L 0.86,0 C 0.96,0.18 1.0,0.36 1.0,0.5 C 1.0,0.64 0.96,0.82 0.86,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="hero-wrapper">
        <div className="hero-split-grid">

          {/* =================================================================
              LEFT SIDE: LARGE CURVED IMAGE CAROUSEL (55–60% WIDTH)
              Clock-like rotation animation + oversized curved arc mask
              ================================================================= */}
          <div className="hero-image-stage">
            <div className="hero-curved-frame-mask">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`hero-img-${currentSlide.id}`}
                  className="hero-rotating-image-canvas"
                  variants={imageClockVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.imageAlt}
                    className="hero-covered-image"
                    style={{ objectPosition: currentSlide.objectPosition }}
                    loading="eager"
                  />
                  {/* Subtle black vignette overlay blending image seamlessly into dark canvas */}
                  <div className="hero-image-cinematic-scrim" />
                </motion.div>
              </AnimatePresence>

              {/* Decorative Clock-Like Curved Arc Ring & Dial Accents */}
              <div className="hero-clock-arc-border" aria-hidden="true">
                <div className="hero-arc-glow-stroke" />
                {/* Clock Dial Tick Markers */}
                <div className="hero-clock-ticks-group">
                  <span className="clock-tick tick-1" />
                  <span className="clock-tick tick-2" />
                  <span className="clock-tick tick-3" />
                  <span className="clock-tick tick-4" />
                  <span className="clock-tick tick-5" />
                </div>
              </div>

              {/* Floating Luxury Status Badge on the Image */}
              <div className="hero-floating-badge-wrap">
                <div className="hero-floating-glass-badge">
                  <BadgeIcon size={15} className="hero-badge-icon" />
                  <span>{currentSlide.badgeText}</span>
                </div>
              </div>

              {/* Slide Number Monogram Watermark on Image Side */}
              <div className="hero-watermark-number" aria-hidden="true">
                {currentSlide.slideNumber}
              </div>
            </div>
          </div>

          {/* =================================================================
              RIGHT SIDE: TEXT CONTENT (40–45% WIDTH)
              Synchronized right-to-left entrance, pure black & gold brand styling
              ================================================================= */}
          <div className="hero-content-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={`hero-text-${currentSlide.id}`}
                className="hero-text-flow"
                variants={textContainerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Eyebrow Pill Tag */}
                <motion.div variants={textItemVariants} className="hero-eyebrow-pill">
                  <span className="hero-pill-bullet" />
                  <span className="hero-pill-label">{currentSlide.categoryTag}</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1 variants={textItemVariants} className="hero-main-heading">
                  <span className="hero-heading-lead">{currentSlide.titleLead}</span>{' '}
                  <span className="hero-heading-gold">{currentSlide.titleHighlight}</span>
                  {currentSlide.titleSuffix && (
                    <span className="hero-heading-suffix"> {currentSlide.titleSuffix}</span>
                  )}
                </motion.h1>

                {/* Sub-description */}
                <motion.p variants={textItemVariants} className="hero-supporting-desc">
                  {currentSlide.desc}
                </motion.p>

                {/* CTA Action Buttons */}
                <motion.div variants={textItemVariants} className="hero-actions-cluster">
                  <a href={currentSlide.primaryCtaLink} className="hero-cta-gold-btn">
                    <span>{currentSlide.primaryCtaText}</span>
                    <ArrowUpRight size={17} className="cta-arrow" />
                  </a>

                  <a href={currentSlide.secondaryCtaLink} className="hero-cta-outline-btn">
                    <span>{currentSlide.secondaryCtaText}</span>
                    <ArrowRight size={15} />
                  </a>
                </motion.div>

                {/* Trust Verification Tag */}
                <motion.div variants={textItemVariants} className="hero-trust-badge-row">
                  <Sparkles size={14} className="hero-trust-sparkle" />
                  <span>{currentSlide.trustText}</span>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Controls Bar: Clock Stepper & Navigation Arrows */}
            <div className="hero-stepper-control-row">
              <div className="hero-stepper-bars">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`hero-stepper-pill ${currentIndex === idx ? 'active' : ''}`}
                    onClick={() => handleJump(idx)}
                    aria-label={`Jump to slide ${idx + 1}`}
                  >
                    <span className="stepper-fill" />
                  </button>
                ))}
                <span className="hero-stepper-counter">
                  0{currentIndex + 1} <span className="counter-slash">/</span> 0{heroSlides.length}
                </span>
              </div>

              <div className="hero-nav-arrow-btns">
                <button
                  type="button"
                  className="hero-arrow-circle-btn"
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className="hero-arrow-circle-btn"
                  onClick={handleNext}
                  aria-label="Next Slide"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
