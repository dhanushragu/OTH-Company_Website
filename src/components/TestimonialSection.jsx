import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
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
    image: '/Testimonial Images/Mark Del Rosario, CFO, ACS Group LLC.png',
    objectPosition: 'center 20%',
  },
  {
    id: 2,
    name: 'Todd Hill',
    role: 'President',
    company: "Marianna’s Fundraisers",
    quote:
      'Having everything centralized—from scheduling to routing and fleet capacity—has completely changed how we operate. What used to take multiple steps and constant cross-checking is now clear, structured, and much easier to manage. The system was built around how we actually work, and that made all the difference for our team.',
    rating: 5,
    image: '/Testimonial Images/todd-hill.jpeg',
    objectPosition: 'center 20%',
  },
  {
    id: 3,
    name: 'Christine Reyes',
    role: 'Director of Operations',
    company: 'Mortgage Closings, Inc.',
    quote:
      'OfficeHub Tech has been key in turning our vision into a solution we use every day. Their deep knowledge of Zoho Creator, responsiveness, and proactive communication have helped us get the maximum value from the platform.',
    rating: 5,
    image: '/Testimonial Images/Christine Reyes, Mortgage Closings, Inc.png',
    objectPosition: 'center 18%',
  },
  {
    id: 4,
    name: 'Paul Formella',
    role: 'CEO & Co-Founder',
    company: 'Perfect Form',
    quote:
      'OfficeHub Tech delivered a powerful client portal and adapted seamlessly as our requirements evolved. Their commitment and collaborative approach made the project a success.',
    rating: 5,
    image: '/Testimonial Images/Paul Formella, CEO & Co-Founder of Perfect Form.png',
    objectPosition: 'center 20%',
  },
  {
    id: 5,
    name: 'Allison Reardon, MBA',
    role: 'Founder / Vice President',
    company: 'Above the Rest Building Services',
    quote:
      'OfficeHub Tech transformed our operations with a tailored Zoho implementation that improved clarity and efficiency. Their professionalism and attention to detail made the process seamless.',
    rating: 5,
    image: '/Testimonial Images/Allison Reardon, MBA, Above the Rest Building Services.png',
    objectPosition: 'center 15%',
  },
  {
    id: 6,
    name: 'Edward Katona',
    role: 'Investigations Lead',
    company: 'RSB Investigations',
    quote:
      'OfficeHub Tech streamlined our operations with Zoho customizations that reduced manual work and improved efficiency. Their team is responsive, professional, and genuinely committed to client success.',
    rating: 5,
    image: '/Testimonial Images/Edward Katona INVESTIGATIONS LEAD RSB.png',
    objectPosition: 'center 22%',
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play slideshow every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      className="testimonials-single-view-section"
      id="testimonials"
      aria-label="What Our Clients Say"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="testimonial-single-frame">
        {/* Eyebrow Label matching reference image */}
        <span className="testimonial-ref-eyebrow">TESTIMONIALS</span>

        {/* Main Headline in Serif style matching reference */}
        <h2 className="testimonial-ref-heading">What Our Clients Say</h2>

        {/* Central Slide Content with Smooth Transition */}
        <div className="testimonial-slideshow-viewport">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="testimonial-slide-body"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Circular Client Avatar with Gold Ring Border */}
              <div className="client-avatar-gold-ring">
                <img
                  src={current.image}
                  alt={current.name}
                  className="client-avatar-img"
                  style={{ objectPosition: current.objectPosition || 'center center' }}
                  loading="lazy"
                />
              </div>

              {/* Client Name in Elegant Serif */}
              <h3 className="client-ref-name">{current.name}</h3>

              {/* Sub-role and company */}
              <span className="client-ref-role">
                {current.role} &bull; {current.company}
              </span>

              {/* 5 Golden Stars */}
              <div className="client-ref-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="star-filled-gold" fill="#D4AF37" />
                ))}
              </div>

              {/* Quote Description */}
              <p className="client-ref-quote">
                &ldquo;{current.quote}&rdquo;
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots matching reference */}
        <div className="testimonial-ref-dots" role="tablist" aria-label="Testimonial slides">
          {testimonials.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={currentIndex === idx}
              className={`ref-dot-btn ${currentIndex === idx ? 'dot-active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Arrow Controls for smooth manual browsing */}
        <div className="testimonial-ref-nav-arrows">
          <button
            type="button"
            className="ref-arrow-btn"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="ref-arrow-btn"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
