import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  ShoppingBag, 
  Sparkles, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  Briefcase, 
  GraduationCap, 
  Globe2, 
  Layers
} from 'lucide-react';
import './BookSection.css';

const bookSlides = [
  {
    id: 'cover',
    title: 'A Complete Zoho One Implementation Guide',
    subtitle: 'For Enterprises & Consultants: A Step-by-Step Approach',
    src: '/CeoBookSection/zoho one book-DhuM8Xxx.jpg',
    tag: 'OFFICIAL PUBLICATION',
    badge: 'Authoritative Guide',
    caption: 'Official Guide Cover Authored by Sam. K'
  },
  {
    id: 'summit',
    title: 'Zoho Leadership Exchange & Summit',
    subtitle: 'Sam. K with Sridhar Vembu (Zoho Founder & CEO)',
    src: '/CeoBookSection/samXvembu-BwCYUu_7.jpg',
    tag: 'EXECUTIVE COLLABORATION',
    badge: 'Industry Recognition',
    caption: 'Sam. K presenting the implementation guide with Zoho Founder Sridhar Vembu'
  }
];

export default function BookSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide-show timer (5.5s per slide)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bookSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bookSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bookSlides.length) % bookSlides.length);
  };

  return (
    <section className="book-section" id="resources">
      {/* Ambient background glows */}
      <div className="book-ambient-glow glow-gold" aria-hidden="true" />
      <div className="book-ambient-glow glow-cyan" aria-hidden="true" />
      <div className="book-ambient-glow glow-center" aria-hidden="true" />
      <div className="book-grid-pattern" aria-hidden="true" />

      <div className="book-container">
        {/* Section Header */}
        <div className="book-header">
          <div className="book-eyebrow-pill">
            <Sparkles size={14} className="eyebrow-gold-sparkle" />
            <span>EXECUTIVE THOUGHT LEADERSHIP</span>
          </div>

          <h2 className="book-main-title">
            Read Expert Insight on{' '}
            <span className="title-gold-gradient">Zoho One Implementation</span>
          </h2>

          <p className="book-author-lead">
            Authored by our CEO, <strong className="ceo-name-highlight">Sam. K (Kuzhalan Vasuki Samydurai)</strong>
          </p>
        </div>

        {/* 1. TOP PART: Balanced 2-Column Showcase (Slideshow Left, Book Description Right) */}
        <div className="book-showcase-row">
          {/* Left: Slideshow Stage Card */}
          <div 
            className="slideshow-stage-card"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Top Accent Ribbon */}
            <div className="slideshow-top-bar">
              <div className="slideshow-badge">
                <Award size={13} className="slide-badge-icon" />
                <span>{bookSlides[currentSlide].badge}</span>
              </div>
              <div className="slideshow-counter">
                <span>0{currentSlide + 1}</span>
                <span className="counter-divider">/</span>
                <span className="counter-total">0{bookSlides.length}</span>
              </div>
            </div>

            {/* Slide Display Area */}
            <div className="slideshow-viewport">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="slide-content-frame"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="slide-img-container">
                    <img
                      src={bookSlides[currentSlide].src}
                      alt={bookSlides[currentSlide].title}
                      className={`slide-img ${bookSlides[currentSlide].id === 'cover' ? 'cover-fit' : 'summit-fit'}`}
                      loading="lazy"
                    />
                    <div className="slide-img-overlay" />
                  </div>

                  <div className="slide-caption-bar">
                    <span className="slide-tag-pill">{bookSlides[currentSlide].tag}</span>
                    <p className="slide-caption-text">{bookSlides[currentSlide].caption}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slideshow Arrow Controls */}
              <button
                type="button"
                className="slide-nav-btn prev-btn"
                onClick={prevSlide}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="slide-nav-btn next-btn"
                onClick={nextSlide}
                aria-label="Next Slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Bottom Dots & Quick Switch Thumbnails */}
            <div className="slideshow-bottom-bar">
              <div className="slideshow-dots-row">
                {bookSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`slide-dot ${idx === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <span className="dot-progress-fill" />
                  </button>
                ))}
              </div>

              <div className="slideshow-thumbnails-mini">
                {bookSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`mini-thumb-btn ${idx === currentSlide ? 'active-thumb' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                  >
                    <img src={slide.src} alt={slide.title} />
                    <span>{idx === 0 ? 'Book Cover' : 'Summit Event'}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Book Description & Impact */}
          <div className="book-overview-card">
            <div className="book-title-quote-badge">
              <BookOpen size={17} className="quote-badge-icon" />
              <span>THE AUTHORITATIVE BLUEPRINT</span>
            </div>

            <h3 className="editorial-book-heading">
              “A Complete Zoho One Implementation Guide for Enterprises & Consultants: A Step-by-Step Approach”
            </h3>

            <p className="editorial-lead-para">
              <strong>“A Complete Zoho One Implementation Guide for Enterprises & Consultants: A Step-by-Step Approach”</strong> is essential for mastering Zoho One implementation. This guide covers every stage, from setup to customization and integration, offering practical insights and detailed instructions to fully leverage Zoho One. Ideal for enterprise leaders, business owners, IT professionals, and consultants, it equips you with the tools and knowledge for a successful implementation and business transformation.
            </p>

            {/* Real-World Ecosystem Impact Callout Box */}
            <div className="event-impact-callout">
              <div className="callout-gold-line" />
              <div className="callout-header">
                <span className="callout-title">The Real-World Impact</span>
              </div>
              <p className="callout-body">
                This moment captured in the image reflects the real-world value and impact of the book. It shows two professionals at a tech event, proudly presenting the guide a symbol of collaboration, innovation, and shared learning within the Zoho ecosystem. The setting highlights how this book is not just a technical manual but a bridge between thought leaders, practitioners, and organizations striving to optimize their digital operations. The exchange signifies recognition of the book’s practical relevance and its role in helping businesses streamline processes, enhance productivity, and unlock the full potential of Zoho One.
              </p>
            </div>
          </div>
        </div>

        {/* 2. RECTANGULAR FULL-WIDTH EXECUTIVE CEO CARD (Solves Empty Left Space Completely) */}
        <div className="ceo-bio-rectangular-card">
          <div className="bio-rect-glow-accent" aria-hidden="true" />

          {/* Rectangular Header Row */}
          <div className="bio-rect-header">
            <div className="bio-rect-identity">
              <div className="ceo-avatar-badge">
                <span>SK</span>
              </div>
              <div>
                <h3 className="ceo-name-title">CEO, Sam. K (Kuzhalan Vasuki Samydurai)</h3>
                <span className="ceo-experience-pill">22+ Years Enterprise IT & Consulting</span>
              </div>
            </div>

            {/* Credentials Badges in Top Header Bar */}
            <div className="ceo-credentials-bar">
              <div className="cred-chip">
                <GraduationCap size={15} className="cred-icon" />
                <span>ECE & MBA Degrees</span>
              </div>
              <div className="cred-chip">
                <Briefcase size={15} className="cred-icon" />
                <span>Ex-Accenture & Cognizant</span>
              </div>
              <div className="cred-chip">
                <Layers size={15} className="cred-icon" />
                <span>SAP, Zoho & Cloud Architect</span>
              </div>
              <div className="cred-chip">
                <Globe2 size={15} className="cred-icon" />
                <span>Global Tech Transformation</span>
              </div>
            </div>
          </div>

          {/* Rectangular Bio Content Body */}
          <div className="bio-rect-body">
            <p>
              Sam K (Kuzhalan Vasuki Samydurai) is a seasoned business consultant and IT advisor with more than 22 years of experience in the technology and enterprise transformation space. Holding degrees in Electronics and Communication Engineering as well as Business Administration, he brings together a rare blend of technical expertise and strategic acumen.
            </p>
            <p>
              Throughout his career, Sam has contributed to several high-impact global IT initiatives, working with leading organizations such as <strong>Accenture</strong> and <strong>Cognizant</strong>. His hands-on experience spans enterprise platforms including <strong>SAP, Zoho</strong>, and various cloud ecosystems, giving him a holistic understanding of business process automation, system integration, and digital transformation at scale.
            </p>
            <p>
              Driven by the mission to make advanced IT solutions accessible to growing businesses, Sam founded <strong>Officehub Tech</strong>, where he empowers mid-size companies in the USA and around the world with enterprise-grade technology capabilities. His focus is on designing scalable, sustainable systems that help organizations operate more efficiently while staying aligned with the fast-evolving digital landscape.
            </p>
            <p className="bio-closing-line">
              A lifelong learner, avid reader, and enthusiastic traveler, Sam draws inspiration from diverse cultures and global business environments. His commitment to sustainable development and environmental initiatives reflects his broader vision for a tech-powered yet responsible future.
            </p>
          </div>

          {/* Rectangular Card Footer / Call to Action */}
          <div className="bio-rect-footer">
            <a
              href="https://officehubtech.com/books"
              target="_blank"
              rel="noopener noreferrer"
              className="buy-now-glow-btn"
              aria-label="Buy Now on OfficeHub Tech Books"
            >
              <ShoppingBag size={18} className="btn-cart-icon" />
              <span>🛒 Buy Now</span>
              <ArrowUpRight size={17} className="btn-arrow-icon" />
            </a>

            <span className="cta-assurance-note">
              ✨ Direct Access to Enterprise Implementation Blueprints
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
