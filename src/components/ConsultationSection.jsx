import React, { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import './ConsultationSection.css';

const consultationCards = [
  {
    id: 'zoho-consulting',
    number: '01',
    suit: '◆',
    title: 'Zoho Consulting',
    description: "OfficeHub Tech's Zoho expansion service optimizes CRM use for growth and efficiency.",
    link: 'https://officehubtech.com/consultation/zoho-consulting/',
    image: '/consultation%20services/Zoho%20Consulting.png',
    // Stack offsets relative to deck center
    stackX: -18,
    stackY: 8,
    stackRotate: -8,
    zIndex: 1
  },
  {
    id: 'support-plans',
    number: '02',
    suit: '✦',
    title: 'Support Plans',
    description: 'Custom Zoho support plans for your business, ensuring smooth CRM operations and growth.',
    link: 'https://officehubtech.com/consultation/support-plans/',
    image: '/consultation%20services/Support%20Plans.png',
    stackX: -6,
    stackY: 4,
    stackRotate: -3.5,
    zIndex: 2
  },
  {
    id: 'zoho-solution-training',
    number: '03',
    suit: '✧',
    title: 'Zoho Solution Training',
    description: 'Empower your team with Zoho CRM training for success and enhanced tool usage.',
    link: 'https://officehubtech.com/consultation/zoho-solution-training/',
    image: '/consultation%20services/Zoho%20solution%20Training.png',
    stackX: 6,
    stackY: -4,
    stackRotate: 4,
    zIndex: 3
  },
  {
    id: 'sales-automation-deployment',
    number: '04',
    suit: '❖',
    title: 'Sales Automation deployment',
    description: 'OfficeHub Tech specializes in Zoho CRM sales automation, ensuring optimal use and ROI.',
    link: 'https://officehubtech.com/consultation/sales-automation-deployment/',
    image: '/consultation%20services/Sales%20Automation.png',
    stackX: 18,
    stackY: -8,
    stackRotate: 1.5,
    zIndex: 4
  }
];

export default function ConsultationSection() {
  const stageRef = useRef(null);
  const gridRef = useRef(null);
  const cardRefs = useRef([]);
  const shouldReduceMotion = useReducedMotion();

  // One-time deal trigger state
  const [hasDealt, setHasDealt] = useState(false);
  const [hasFlipped, setHasFlipped] = useState(false);
  const hasTriggeredRef = useRef(false);

  // Exact pixel translation from deck stage center to each card slot
  const [offsets, setOffsets] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);

  // Measure delta from grid center to each card
  const calculateOffsets = () => {
    if (!gridRef.current) return;
    const gridRect = gridRef.current.getBoundingClientRect();
    const centerX = gridRect.left + gridRect.width / 2;
    const centerY = gridRect.top + gridRect.height / 2;

    const newOffsets = cardRefs.current.map((el) => {
      if (!el) return { x: 0, y: 0 };
      const cardRect = el.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      return {
        x: centerX - cardCenterX,
        y: centerY - cardCenterY
      };
    });

    setOffsets(newOffsets);
  };

  useEffect(() => {
    calculateOffsets();
    window.addEventListener('resize', calculateOffsets);
    return () => window.removeEventListener('resize', calculateOffsets);
  }, []);

  // Dedicated IntersectionObserver on the card stage itself
  // Triggers ONLY when 25% of the card deck enters the visible viewport
  useEffect(() => {
    if (hasTriggeredRef.current) return;
    const stageElement = stageRef.current;
    if (!stageElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          hasTriggeredRef.current = true;
          calculateOffsets();
          
          // Initial pause so the viewer clearly witnesses the stacked image cards
          setTimeout(() => {
            setHasDealt(true);

            // TIMING CALCULATION FOR FLIP:
            // Card 04 starts dealing at 1050ms and travels for 820ms -> settles at 1870ms.
            // Wait 200ms after final card settles: 1870ms + 200ms = ~2070ms to trigger the 3D flip.
            setTimeout(() => {
              setHasFlipped(true);
            }, 2100);
          }, 260);

          observer.disconnect();
        }
      },
      {
        threshold: [0, 0.25, 0.5],
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(stageElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="consultation-section" id="consultation">
      {/* Background Atmosphere */}
      <div className="consult-ambient-glow glow-gold-top" aria-hidden="true" />
      <div className="consult-ambient-glow glow-gold-bottom" aria-hidden="true" />
      <div className="consult-ambient-glow glow-center" aria-hidden="true" />
      <div className="consult-subtle-mesh" aria-hidden="true" />

      <div className="consultation-container">
        {/* Section Introduction */}
        <motion.div
          className="consultation-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="consultation-eyebrow-pill">
            <Sparkles size={13} className="eyebrow-gold-sparkle" />
            <span>PERSONALIZED EXPERTISE</span>
          </div>

          <h2 className="consultation-main-title">
            <span className="title-lead">Our</span>{' '}
            <span className="title-gold-gradient">Consultation Services</span>
          </h2>

          <p className="consultation-subheading">
            Expert guidance to help you optimize, support, and scale your business with Zoho.
          </p>

          <div className="consultation-gold-line-divider" aria-hidden="true" />
        </motion.div>

        {/* 
          CONSULTATION PLAYING-CARD DECK STAGE:
          1. Starts stacked with the 4 local images visible.
          2. Deals one by one into the 4 columns.
          3. Once card 4 settles (+200ms pause), all cards execute a 3D flip to reveal text faces.
        */}
        <div className="consultation-deck-stage" ref={stageRef}>
          <div className="consultation-cards-grid" ref={gridRef}>
            {consultationCards.map((card, index) => {
              const offset = offsets[index] || { x: 0, y: 0 };

              // Initial stacked coordinates (cards start stacked together around center)
              const startX = offset.x + card.stackX;
              const startY = offset.y + card.stackY;
              const startRotate = card.stackRotate;

              // If reduced motion is requested, render straight in final position
              const animateX = shouldReduceMotion || hasDealt ? 0 : startX;
              const animateY = shouldReduceMotion || hasDealt ? 0 : startY;
              const animateRotate = shouldReduceMotion || hasDealt ? 0 : startRotate;
              const animateScale = shouldReduceMotion || hasDealt ? 1 : 0.96;

              // Staggered dealing schedule:
              // Card 01: 0ms
              // Card 02: 350ms
              // Card 03: 700ms
              // Card 04: 1050ms
              const cardDelay = index * 0.35;

              // Flip rotation: 0deg when showing image, 180deg when flipped to text
              // Subtle 70ms stagger for the card flip
              const isFlipped = shouldReduceMotion || hasFlipped;

              return (
                <div
                  key={card.id}
                  className="card-slot-anchor"
                  ref={(el) => (cardRefs.current[index] = el)}
                >
                  {/* Outer Motion Wrapper: Handles translation & movement from stack to grid */}
                  <motion.div
                    className="luxury-playing-card-outer"
                    style={{ zIndex: card.zIndex }}
                    initial={{
                      x: startX,
                      y: startY,
                      rotate: startRotate,
                      scale: 0.95,
                      opacity: 1
                    }}
                    animate={{
                      x: animateX,
                      y: animateY,
                      rotate: animateRotate,
                      scale: animateScale,
                      opacity: 1
                    }}
                    transition={{
                      duration: 0.82,
                      delay: cardDelay,
                      ease: [0.16, 1, 0.3, 1] // Luxury dealing curve
                    }}
                    whileHover={
                      hasFlipped
                        ? {
                            y: -6,
                            scale: 1.02,
                            transition: { duration: 0.3, ease: 'easeOut' }
                          }
                        : {}
                    }
                  >
                    {/* Inner 3D Flipping Element: Handles 180deg flip around vertical axis */}
                    <motion.div
                      className="card-3d-flipper"
                      initial={{ rotateY: 0 }}
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0.01 : 0.75,
                        delay: shouldReduceMotion ? 0 : index * 0.07, // Subtle coordinated 70ms flip stagger
                        ease: [0.25, 1, 0.35, 1]
                      }}
                    >
                      {/* FRONT FACE: LOCAL IMAGE (Visible initially during stack & deal) */}
                      <div className="card-face card-face-front">
                        <div className="card-outer-gold-border" />
                        <div className="image-wrapper">
                          <img
                            src={card.image}
                            alt={`${card.title} Consultation Visual`}
                            className="card-front-img"
                            loading="lazy"
                          />
                          <div className="image-subtle-overlay" />
                        </div>
                        {/* Corner Gold Pip on image face */}
                        <span className="card-corner-pip top-left image-pip">{card.suit}</span>
                        <span className="card-corner-pip bottom-right image-pip">{card.number}</span>
                      </div>

                      {/* BACK FACE: TEXT & CONSULTATION DETAILS (Revealed after flip) */}
                      <div className="card-face card-face-back">
                        <a
                          href={card.link}
                          className="card-surface-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Explore ${card.title}`}
                          tabIndex={isFlipped ? 0 : -1}
                        >
                          {/* Metallic Champagne-Gold Outer Border */}
                          <div className="card-outer-gold-border" />

                          {/* Secondary Inner Border with Engraved Corner Detailing */}
                          <div className="card-inner-ornate-border">
                            {/* 4 Corner Pips / Suits */}
                            <span className="card-corner-pip top-left">{card.suit}</span>
                            <span className="card-corner-pip top-right">{card.number}</span>
                            <span className="card-corner-pip bottom-left">{card.number}</span>
                            <span className="card-corner-pip bottom-right">{card.suit}</span>

                            {/* Top Index Badge */}
                            <div className="card-head-row">
                              <span className="card-index-pill">{card.number} / CONSULTATION</span>
                              <span className="card-suit-icon">{card.suit}</span>
                            </div>

                            {/* Center Ornamental Geometry */}
                            <div className="card-center-geometry" aria-hidden="true">
                              <div className="geometry-diamond" />
                              <div className="geometry-circle" />
                              <div className="geometry-axis horizontal" />
                              <div className="geometry-axis vertical" />
                            </div>

                            {/* Card Core Content */}
                            <div className="card-content-body">
                              <h3 className="card-service-title">{card.title}</h3>
                              <p className="card-service-desc">{card.description}</p>
                            </div>

                            {/* Card Footer: Minimal Arrow Link */}
                            <div className="card-footer-cue">
                              <span className="cue-label">Explore Consultation</span>
                              <div className="cue-arrow-badge">
                                <ArrowUpRight size={15} className="cue-arrow" />
                              </div>
                            </div>

                            {/* Gold Ambient Lighting Accent */}
                            <div className="card-gold-ambient" />
                          </div>
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
