import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  ShoppingBag, 
  ArrowUpRight 
} from 'lucide-react';
import './BookSection.css';

const bookSlides = [
  {
    id: 'guide',
    eyebrow: 'EXECUTIVE THOUGHT LEADERSHIP',
    title: 'A Complete Zoho One Implementation Guide',
    lead: 'Authored by our CEO, Sam. K (Kuzhalan Vasuki Samydurai), this authoritative blueprint is essential for mastering Zoho One implementations across modern enterprises and consultancies.',
    features: [
      'Turnkey Enterprise Deployment',
      'Multi-App Workflow Integration',
      'Custom Deluge Scripting Rules',
      'Scalable Architecture Blueprint'
    ],
    stats: [
      { value: '500+', label: 'Pages of Insight' },
      { value: '45+', label: 'Zoho Apps Covered' },
      { value: '100%', label: 'Implementation Focus' },
      { value: 'Step-by-Step', label: 'Practical Methods' }
    ]
  },
  {
    id: 'summit',
    eyebrow: 'INDUSTRY RECOGNITION & IMPACT',
    title: 'Collaboration with Zoho Founder Sridhar Vembu',
    lead: 'A defining milestone in the Zoho ecosystem: Sam. K presenting the complete implementation guide directly with Zoho Founder & CEO Sridhar Vembu at the global leadership exchange.',
    features: [
      'CEO Leadership Recognition',
      'Global Ecosystem Validation',
      'Bridge for Tech Practitioners',
      'Real-World Proven Framework'
    ],
    stats: [
      { value: '1st', label: 'Complete Guide' },
      { value: 'Zoho CEO', label: 'Exchange & Endorsement' },
      { value: 'Global', label: 'Ecosystem Impact' },
      { value: 'USA & Global', label: 'Enterprise Reach' }
    ]
  },
  {
    id: 'author',
    eyebrow: 'ABOUT THE AUTHOR & FOUNDER',
    title: 'Executive Vision from CEO Sam. K',
    lead: 'Kuzhalan Vasuki Samydurai brings more than 22 years of enterprise technology and business advisory expertise, having led high-impact transformations for global organizations including Accenture and Cognizant.',
    features: [
      '22+ Years Enterprise IT Advisory',
      'Former Accenture & Cognizant',
      'ECE & MBA Dual Qualifications',
      'SAP, Zoho & Cloud Architect'
    ],
    stats: [
      { value: '22+', label: 'Years Experience' },
      { value: 'Global', label: 'Enterprise Clients' },
      { value: 'Dual', label: 'Engineering & MBA' },
      { value: 'Founder', label: 'Office Hub Tech' }
    ]
  }
];

export default function BookSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slideshow timer (6.5s per slide)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bookSlides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bookSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bookSlides.length) % bookSlides.length);
  };

  const slide = bookSlides[currentSlide];

  return (
    <section 
      className="book-section" 
      id="resources"
      aria-label="Executive Thought Leadership Book Section"
    >
      {/* Background ambient lighting */}
      <div className="book-ambient-gold-glow" aria-hidden="true" />
      <div className="book-grid-mesh" aria-hidden="true" />

      <div 
        className="book-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="book-dual-column-layout">
          
          {/* =================================================================
              LEFT COLUMN: Overlapping Dual-Image Showcase (STICKY / STATIC)
              No slideshow effect for the images as requested
              ================================================================= */}
          <div className="book-visual-column">
            <div className="book-images-frame">
              <div className="image-pair-wrapper">
                {/* Primary Main Image: Zoho One Guide Book Cover */}
                <div className="primary-image-card">
                  <img
                    src="/CeoBookSection/zoho one book-DhuM8Xxx.jpg"
                    alt="A Complete Zoho One Implementation Guide Book Cover by Sam. K"
                    className="primary-img"
                    loading="eager"
                  />
                </div>

                {/* Secondary Overlapping Inset Image: Sam. K with Sridhar Vembu */}
                <div className="secondary-image-card">
                  <img
                    src="/CeoBookSection/samXvembu-BwCYUu_7.jpg"
                    alt="Sam. K with Sridhar Vembu (Zoho Founder & CEO)"
                    className="secondary-img"
                    loading="eager"
                  />
                  <div className="secondary-img-border" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>

          {/* =================================================================
              RIGHT COLUMN: Split Slide Content (Showing One Part at a Time)
              Animated arrival from the right side
              ================================================================= */}
          <div className="book-content-column">
            
            {/* Top Navigation Bar: Slide count + Arrows */}
            <div className="book-nav-top-row">
              <div className="book-slide-counter">
                <span className="counter-current">0{currentSlide + 1}</span>
                <span className="counter-sep">/</span>
                <span className="counter-total">0{bookSlides.length}</span>
              </div>

              <div className="book-nav-buttons">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="book-arrow-btn"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="book-arrow-btn"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Slide Text Content Viewport with right-to-left entrance */}
            <div className="book-slide-viewport">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-content-${currentSlide}`}
                  className="book-text-slide"
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Eyebrow in pure bright gold */}
                  <span className="book-eyebrow">{slide.eyebrow}</span>

                  {/* Main Heading in Editorial Serif */}
                  <h2 className="book-heading">{slide.title}</h2>

                  {/* Subtitle / Lead Paragraph */}
                  <p className="book-lead-text">{slide.lead}</p>

                  {/* 2x2 Feature Highlights with Gold Checkmarks */}
                  <div className="book-features-grid">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="book-feature-item">
                        <div className="gold-check-circle" aria-hidden="true">
                          <Check size={14} className="check-mark-icon" />
                        </div>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Stats Row separated by thin vertical dividers */}
                  <div className="book-stats-row">
                    {slide.stats.map((item, idx) => (
                      <div key={idx} className="book-stat-box">
                        <span className="stat-number">{item.value}</span>
                        <span className="stat-label">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom CTA Row */}
                  <div className="book-cta-action-row">
                    <a
                      href="https://officehubtech.com/books"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="book-gold-buy-btn"
                      aria-label="Buy Now on OfficeHub Tech Books"
                    >
                      <ShoppingBag size={17} />
                      <span>Buy Now</span>
                      <ArrowUpRight size={16} />
                    </a>

                    {/* Pagination Dots */}
                    <div className="book-dots-nav">
                      {bookSlides.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setCurrentSlide(idx)}
                          className={`book-dot-item ${idx === currentSlide ? 'active' : ''}`}
                          aria-label={`Jump to slide ${idx + 1}`}
                        >
                          <span className="dot-fill" />
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
