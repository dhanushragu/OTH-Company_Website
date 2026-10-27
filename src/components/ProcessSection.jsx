import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FileText, PhoneCall, FileSpreadsheet, Code2, GraduationCap, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import './ProcessSection.css';

const processSteps = [
  {
    step: '01',
    title: 'Customer Gives Information',
    tag: 'INITIAL CONSULT',
    shortDesc: 'You share your core business challenges, current workflow bottlenecks, and specific software goals.',
    details: ['Goal Assessment', 'System Auditing', 'Requirements Sheet'],
    icon: FileText,
    accent: '#fbbf24',
    image: '/images/six stage/customer gives information.png',
    imageAlt: 'Customer giving information and project requirements',
  },
  {
    step: '02',
    title: 'Discovery Call',
    tag: 'DEEP DIVE STRATEGY',
    shortDesc: 'A 1-on-1 strategic session with our certified Zoho & AI architects to define exact project scope.',
    details: ['Architecture Roadmap', 'Feasibility Check', 'Timeline Blueprint'],
    icon: PhoneCall,
    accent: '#38bdf8',
    image: '/images/six stage/discovery call.png',
    imageAlt: 'Discovery consultation call with technical architects',
  },
  {
    step: '03',
    title: 'Proposal',
    tag: 'CUSTOM BLUEPRINT',
    shortDesc: 'A transparent, milestone-based proposal outlining exact deliverables, integrations, and fixed pricing.',
    details: ['Scope of Work', 'Milestone Timelines', 'Transparent ROI'],
    icon: FileSpreadsheet,
    accent: '#c084fc',
    image: '/images/six stage/propasal.png',
    imageAlt: 'Milestone project proposal and blueprint review',
  },
  {
    step: '04',
    title: 'Development',
    tag: 'AGILE ENGINEERING',
    shortDesc: 'Rapid engineering of custom Zoho workflows, bespoke AI model training, and seamless API integrations.',
    details: ['Custom Zoho Apps', 'Private AI Training', 'Rigorous QA Testing'],
    icon: Code2,
    accent: '#34d399',
    image: '/images/six stage/development.png',
    imageAlt: 'Agile development and custom software engineering',
  },
  {
    step: '05',
    title: 'Training',
    tag: 'EMPOWERMENT & GO-LIVE',
    shortDesc: 'Hands-on training sessions and documented playbooks ensuring your team masters every tool effortlessly.',
    details: ['Interactive Workshops', 'Video Documentation', 'Ongoing Support SLA'],
    icon: GraduationCap,
    accent: '#f472b6',
    image: '/images/six stage/training.png',
    imageAlt: 'Hands-on team training and onboarding workshops',
  },
  {
    step: '06',
    title: 'Happy Customer',
    tag: 'SUCCESS & LONG-TERM VALUE',
    shortDesc: 'Guaranteed satisfaction with streamlined automated operations, ongoing optimization, and dedicated post-launch care.',
    details: ['99.8% Client Satisfaction', 'Quarterly Health Checks', 'Dedicated Growth Partner'],
    icon: HeartHandshake,
    accent: '#fbbf24',
    image: '/images/six stage/happy customer.png',
    imageAlt: 'Happy customer celebrating project success and long-term results',
  },
];

// Stagger word animation component
const AnimatedWords = ({ text, className = '' }) => {
  const words = text.split(' ');
  return (
    <span className={`animated-words-wrapper ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="word-clip">
          <motion.span
            className="word-inline"
            initial={{ y: '100%', opacity: 0, rotateZ: 3 }}
            whileInView={{ y: 0, opacity: 1, rotateZ: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.045,
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default function ProcessSection() {
  const listRef = useRef(null);
  const cardRefs = useRef([]);

  // Precise scroll tracking: 'start 65%' starts line when Stage 1 enters comfortable view,
  // 'end 82%' ensures line hits 100% full length right as Stage 6 enters viewport center!
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 65%', 'end 82%'],
  });

  // Direct progressive curve ensuring stages 4, 5, and 6 connect without lag
  const mappedProgress = useTransform(scrollYProgress, (val) => {
    // Slight curve to ensure the line accelerates into stage 5 & 6 ahead of scrolling past
    return Math.min(1, Math.max(0, val));
  });

  // Responsive spring with high stiffness for instant, lag-free response
  const smoothProgress = useSpring(mappedProgress, {
    stiffness: 180,
    damping: 19,
    restDelta: 0.0005,
  });

  // Dynamic SVG path connecting all 6 card badges
  const [svgPath, setSvgPath] = useState('');
  const [svgViewBox, setSvgViewBox] = useState('0 0 1200 2000');

  const updateConnectorPath = () => {
    const listEl = listRef.current;
    if (!listEl) return;

    const listRect = listEl.getBoundingClientRect();
    const points = [];

    cardRefs.current.forEach((badgeEl) => {
      if (badgeEl) {
        const badgeRect = badgeEl.getBoundingClientRect();
        const x = badgeRect.left + badgeRect.width / 2 - listRect.left;
        const y = badgeRect.top + badgeRect.height / 2 - listRect.top;
        points.push({ x, y });
      }
    });

    if (points.length < 2) return;

    // Build curved smooth S-curve connecting paths between alternating stages
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      const dy = p2.y - p1.y;
      const cp1x = p1.x;
      const cp1y = p1.y + dy * 0.55;
      const cp2x = p2.x;
      const cp2y = p2.y - dy * 0.55;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }

    setSvgPath(d);
    setSvgViewBox(`0 0 ${listRect.width} ${listRect.height}`);
  };

  useEffect(() => {
    updateConnectorPath();
    const handleResize = () => updateConnectorPath();
    window.addEventListener('resize', handleResize);
    const timer = setTimeout(updateConnectorPath, 500);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="process-section" id="services">
      {/* Background ambient lighting */}
      <div className="process-ambient-glow" aria-hidden="true" />

      <div className="process-container">
        {/* Section Header */}
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            className="process-eyebrow"
            initial={{ opacity: 0, scale: 0.9, letterSpacing: '0.2em' }}
            whileInView={{ opacity: 1, scale: 1, letterSpacing: '0.1em' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="eyebrow-sparkle">✦</span> HOW WE DELIVER SUCCESS
          </motion.span>

          <h2 className="process-main-title">
            <span className="title-reveal-line">
              Our 6-Step{' '}
              <span className="title-gold-gradient animated-gradient-text">
                Execution Journey
              </span>
            </span>
          </h2>

          <motion.p 
            className="process-subheading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            From initial consultation to your ultimate satisfaction, every stage is crafted with precision, transparency, and lasting value.
          </motion.p>
        </motion.div>

        {/* 6-Step Process Timeline / Cards with Animated Gold Connecting Track */}
        <div className="process-steps-list" ref={listRef}>
          {/* =================================================================
              CONTINUOUS GOLD CONNECTOR SVG TRACK (BEHIND THE IMAGES, Z-INDEX: 0)
              Draws down stage by stage synchronously as you scroll
              ================================================================= */}
          {svgPath && (
            <svg
              className="process-connector-svg"
              viewBox={svgViewBox}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="goldConnectorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
                  <stop offset="35%" stopColor="#fbbf24" stopOpacity="1" />
                  <stop offset="70%" stopColor="#f59e0b" stopOpacity="1" />
                  <stop offset="100%" stopColor="#d97706" stopOpacity="0.95" />
                </linearGradient>

                <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Faint subtle background guide rail */}
              <path
                d={svgPath}
                className="connector-path-guide"
                fill="none"
                stroke="rgba(251, 191, 36, 0.08)"
                strokeWidth="2"
                strokeDasharray="6 8"
              />

              {/* Glowing Outer Light Tube */}
              <motion.path
                d={svgPath}
                fill="none"
                stroke="rgba(251, 191, 36, 0.35)"
                strokeWidth="8"
                strokeLinecap="round"
                filter="url(#goldGlow)"
                style={{ pathLength: smoothProgress }}
              />

              {/* Sharp Vibrant Gold Foreground Track */}
              <motion.path
                d={svgPath}
                fill="none"
                stroke="url(#goldConnectorGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                style={{ pathLength: smoothProgress }}
              />
            </svg>
          )}

          {processSteps.map((item, index) => {
            const IconComponent = item.icon;
            const isEven = index % 2 === 1;

            return (
              <motion.article
                key={item.step}
                className={`process-step-row ${isEven ? 'row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ 
                  duration: 0.85, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.05 
                }}
              >
                {/* Visual Portrait Image Card (Elevated z-index: 5 so it stays ON TOP of the gold line) */}
                <motion.div 
                  className="step-image-column"
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                >
                  <div className="portrait-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="portrait-step-image"
                      loading="lazy"
                    />
                    <div className="image-gold-border" />
                    
                    {/* Floating Step Number Badge (Anchor point for connecting gold line) */}
                    <div 
                      className="step-floating-badge" 
                      style={{ borderColor: item.accent }}
                      ref={(el) => (cardRefs.current[index] = el)}
                    >
                      <span className="step-num-text">{item.step}</span>
                      <div className="badge-glow-ring" />
                    </div>

                    {/* Gradient Overlay for luxury feel */}
                    <div className="portrait-overlay" />
                  </div>
                </motion.div>

                {/* Step Content & Description */}
                <motion.div 
                  className="step-content-column"
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                  {/* Subtle kinetic tag pill */}
                  <motion.div 
                    className="step-tag-pill" 
                    style={{ color: item.accent, borderColor: `${item.accent}44` }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <IconComponent size={14} />
                    <span className="tracking-animated">{item.tag}</span>
                  </motion.div>

                  {/* Staggered Kinetic Typography for Step Title */}
                  <h3 className="step-title">
                    <span className="step-order-number">{item.step}.</span>{' '}
                    <AnimatedWords text={item.title} />
                  </h3>

                  {/* Character/word fade slide for description */}
                  <motion.p 
                    className="step-description"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {item.shortDesc}
                  </motion.p>

                  {/* Highlights Bullet Tags */}
                  <ul className="step-checklist">
                    {item.details.map((detail, idx) => (
                      <motion.li 
                        key={idx} 
                        className="checklist-item"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.28 + idx * 0.08 }}
                      >
                        <CheckCircle2 size={15} className="check-icon" style={{ color: item.accent }} />
                        <span className="checklist-text">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Micro Interaction Link */}
                  <motion.div 
                    className="step-action-row"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                  >
                    <a href="#consultation" className="step-learn-link">
                      <span className="link-hover-reveal">Learn about Step {item.step}</span>
                      <ArrowRight size={14} className="arrow-hover" />
                    </a>
                  </motion.div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
