import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, Sparkles, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialSection.css';

const testimonials = [
  {
    id: 1,
    name: 'Mark Del Rosario',
    role: 'Chief Financial Officer',
    company: 'ACS Group LLC',
    quote:
      'OfficeHub Tech optimized our Zoho system with custom workflows that improved efficiency and visibility. Their responsiveness and flexibility make them a trusted technology partner.',
    rating: 5,
    tag: 'ZOHO WORKFLOW OPTIMIZATION',
    image: '/Testimonial Images/Mark Del Rosario, CFO, ACS Group LLC.png',
    initials: 'MD'
  },
  {
    id: 2,
    name: 'Todd Hill',
    role: 'President',
    company: "Marianna’s Fundraisers",
    quote:
      'Having everything centralized—from scheduling to routing and fleet capacity—has completely changed how we operate. What used to take multiple steps and constant cross-checking is now clear, structured, and much easier to manage. The system was built around how we actually work, and that made all the difference for our team.',
    rating: 5,
    tag: 'FLEET & CAPACITY PLATFORM',
    image: '/Testimonial Images/todd-hill.jpeg',
    initials: 'TH'
  },
  {
    id: 3,
    name: 'Christine Reyes',
    role: 'Director of Operations',
    company: 'Mortgage Closings, Inc.',
    quote:
      'OfficeHub Tech has been key in turning our vision into a solution we use every day. Their deep knowledge of Zoho Creator, responsiveness, and proactive communication have helped us get the maximum value from the platform.',
    rating: 5,
    tag: 'ZOHO CREATOR ARCHITECTURE',
    image: '/Testimonial Images/Christine Reyes, Mortgage Closings, Inc.png',
    initials: 'CR'
  },
  {
    id: 4,
    name: 'Paul Formella',
    role: 'CEO & Co-Founder',
    company: 'Perfect Form',
    quote:
      'OfficeHub Tech delivered a powerful client portal and adapted seamlessly as our requirements evolved. Their commitment and collaborative approach made the project a success.',
    rating: 5,
    tag: 'CLIENT PORTAL ENGINEERING',
    image: '/Testimonial Images/Paul Formella, CEO & Co-Founder of Perfect Form.png',
    initials: 'PF'
  },
  {
    id: 5,
    name: 'Allison Reardon, MBA',
    role: 'Founder / Vice President',
    company: 'Above the Rest Building Services',
    quote:
      'OfficeHub Tech transformed our operations with a tailored Zoho implementation that improved clarity and efficiency. Their professionalism and attention to detail made the process seamless.',
    rating: 5,
    tag: 'TAILORED ZOHO IMPLEMENTATION',
    image: '/Testimonial Images/Allison Reardon, MBA, Above the Rest Building Services.png',
    initials: 'AR'
  },
  {
    id: 6,
    name: 'Edward Katona',
    role: 'Investigations Lead',
    company: 'RSB Investigations',
    quote:
      'OfficeHub Tech streamlined our operations with Zoho customizations that reduced manual work and improved efficiency. Their team is responsive, professional, and genuinely committed to client success.',
    rating: 5,
    tag: 'PROCESS AUTOMATION',
    image: '/Testimonial Images/Edward Katona INVESTIGATIONS LEAD RSB.png',
    initials: 'EK'
  }
];

export default function TestimonialSection() {
  const [mobileIndex, setMobileIndex] = useState(0);

  const prevMobileCard = () => {
    setMobileIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextMobileCard = () => {
    setMobileIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      {/* Ambient lighting & backdrop */}
      <div className="testimonial-ambient-glow glow-emerald-top" aria-hidden="true" />
      <div className="testimonial-ambient-glow glow-gold-center" aria-hidden="true" />
      <div className="testimonial-ambient-glow glow-emerald-bottom" aria-hidden="true" />
      <div className="testimonial-subtle-mesh" aria-hidden="true" />

      <div className="testimonials-container">
        {/* Editorial Section Header */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="testimonial-eyebrow-pill">
            <Sparkles size={13} className="eyebrow-gold-sparkle" />
            <span>CLIENT REPUTATION & PROVEN IMPACT</span>
          </div>

          <h2 className="testimonials-main-title">
            <span className="quote-text-primary">Trusted by Industry Leaders.</span>{' '}
            <span className="quote-gold-gradient">Proven by Results.</span>
          </h2>

          <p className="testimonials-subheading">
            Direct perspectives from executives and founders who trust OfficeHub Tech to engineer scalable, mission-critical business platforms.
          </p>

          {/* Social Proof Metric Bar */}
          <div className="testimonial-metrics-strip">
            <div className="metric-item">
              <span className="metric-number">99.8%</span>
              <span className="metric-label">Client Satisfaction</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-item">
              <span className="metric-number">5.0 ★</span>
              <span className="metric-label">Average Partner Rating</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-item">
              <span className="metric-number">100%</span>
              <span className="metric-label">Delivered on Scope</span>
            </div>
          </div>
        </motion.div>

        {/* Desktop & Tablet 3-Column Editorial Grid */}
        <div className="testimonials-grid-wrapper">
          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.08
                }}
              >
                {/* Champagne Gold & Emerald Card Accent Line */}
                <div className="card-top-accent-line" />

                {/* Subtle Editorial Watermark Quote Motif */}
                <div className="card-watermark-quote" aria-hidden="true">
                  <Quote size={68} />
                </div>

                {/* Card Top: Category Badge & Gold Star Rating */}
                <div className="card-header-row">
                  <span className="card-tag-badge">{item.tag}</span>
                  <div className="card-stars-row" aria-label={`${item.rating} out of 5 stars`}>
                    {[...Array(item.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="star-wrapper"
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.2 + i * 0.05 }}
                      >
                        <Star size={13} className="star-icon-gold" fill="#D6B36A" />
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Testimonial Quotation */}
                <div className="card-quote-content">
                  <blockquote className="card-quote-text">
                    "{item.quote}"
                  </blockquote>
                </div>

                {/* Bottom Profile Row */}
                <div className="card-client-footer">
                  <div className="client-avatar-wrapper">
                    <img
                      src={item.image}
                      alt={`${item.name}, ${item.role} at ${item.company}`}
                      className="client-avatar-img"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden-fallback');
                      }}
                    />
                    <div className="client-avatar-fallback hidden-fallback" aria-hidden="true">
                      <span>{item.initials}</span>
                    </div>
                    <div className="avatar-ring-glow" />
                  </div>

                  <div className="client-details">
                    <h3 className="client-name">{item.name}</h3>
                    <p className="client-role">{item.role}</p>
                    <p className="client-company">
                      <Building2 size={12} className="company-icon" />
                      <span>{item.company}</span>
                    </p>
                  </div>
                </div>

                {/* Subtle Corner Glow on Hover */}
                <div className="card-corner-glow" />
              </motion.article>
            ))}
          </div>
        </div>

        {/* Mobile Accessible Carousel Mode */}
        <div className="testimonials-mobile-carousel">
          <div className="carousel-stage">
            <AnimatePresence mode="wait">
              <motion.article
                key={testimonials[mobileIndex].id}
                className="testimonial-card mobile-card"
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="card-top-accent-line" />
                <div className="card-watermark-quote" aria-hidden="true">
                  <Quote size={56} />
                </div>

                <div className="card-header-row">
                  <span className="card-tag-badge">{testimonials[mobileIndex].tag}</span>
                  <div className="card-stars-row" aria-label={`${testimonials[mobileIndex].rating} out of 5 stars`}>
                    {[...Array(testimonials[mobileIndex].rating)].map((_, i) => (
                      <Star key={i} size={13} className="star-icon-gold" fill="#D6B36A" />
                    ))}
                  </div>
                </div>

                <div className="card-quote-content">
                  <blockquote className="card-quote-text">
                    "{testimonials[mobileIndex].quote}"
                  </blockquote>
                </div>

                <div className="card-client-footer">
                  <div className="client-avatar-wrapper">
                    <img
                      src={testimonials[mobileIndex].image}
                      alt={`${testimonials[mobileIndex].name}, ${testimonials[mobileIndex].role} at ${testimonials[mobileIndex].company}`}
                      className="client-avatar-img"
                      loading="lazy"
                    />
                    <div className="avatar-ring-glow" />
                  </div>

                  <div className="client-details">
                    <h3 className="client-name">{testimonials[mobileIndex].name}</h3>
                    <p className="client-role">{testimonials[mobileIndex].role}</p>
                    <p className="client-company">
                      <Building2 size={12} className="company-icon" />
                      <span>{testimonials[mobileIndex].company}</span>
                    </p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Mobile Controls */}
          <div className="mobile-carousel-controls">
            <button
              type="button"
              className="carousel-btn prev-btn"
              onClick={prevMobileCard}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="carousel-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`carousel-dot ${i === mobileIndex ? 'active-dot' : ''}`}
                  onClick={() => setMobileIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-btn next-btn"
              onClick={nextMobileCard}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
