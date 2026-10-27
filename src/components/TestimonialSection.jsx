import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Sparkles, Building2 } from 'lucide-react';
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
  return (
    <section className="testimonials-section" id="testimonials">
      {/* Ambient background glows */}
      <div className="testimonial-glow glow-top" aria-hidden="true" />
      <div className="testimonial-glow glow-bottom" aria-hidden="true" />
      <div className="testimonial-grid-pattern" aria-hidden="true" />

      <div className="testimonials-container">
        {/* Section Header with "Trusted by Business. Proven by Results" */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="testimonial-eyebrow-pill">
            <Sparkles size={14} className="eyebrow-gold-sparkle" />
            <span>CLIENT REPUTATION & SUCCESS</span>
          </div>

          <h2 className="testimonials-main-title">
            <span className="quote-text-primary">"Trusted by Business.</span>{' '}
            <span className="quote-gold-gradient">Proven by Results"</span>
          </h2>

          <p className="testimonials-subheading">
            Hear directly from industry leaders, founders, and executives who trust OfficeHub Tech to engineer their mission-critical business systems.
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

        {/* 6 Luxury Testimonial Cards Grid */}
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1
              }}
              whileHover={{ y: -6 }}
            >
              {/* Gold gradient top border accent */}
              <div className="card-gold-accent-line" />

              {/* Watermark Quote Icon */}
              <div className="card-watermark-quote" aria-hidden="true">
                <Quote size={84} />
              </div>

              {/* Card Header: Tag & Stars */}
              <div className="card-header-row">
                <span className="card-tag-badge">{item.tag}</span>
                <div className="card-stars-row" aria-label="5 out of 5 stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} className="star-icon-gold" fill="#fbbf24" />
                  ))}
                </div>
              </div>

              {/* Testimonial Quote Body */}
              <div className="card-quote-content">
                <p className="card-quote-text">"{item.quote}"</p>
              </div>

              {/* Card Footer: Client Info with Professional Avatar Portrait */}
              <div className="card-client-footer">
                <div className="client-avatar-wrapper">
                  <img
                    src={item.image}
                    alt={`${item.name} portrait`}
                    className="client-avatar-img"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to monogram if image fails to load
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
                  <h4 className="client-name">{item.name}</h4>
                  <p className="client-role">{item.role}</p>
                  <p className="client-company">
                    <Building2 size={12} className="company-icon" />
                    <span>{item.company}</span>
                  </p>
                </div>
              </div>

              {/* Card Corner Subtle Highlight */}
              <div className="card-corner-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
