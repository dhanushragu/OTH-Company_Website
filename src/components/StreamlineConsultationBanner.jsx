import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import './StreamlineConsultationBanner.css';

export default function StreamlineConsultationBanner() {
  return (
    <section 
      className="scb-master-section" 
      id="zoho-consultation-call"
      aria-label="Streamline Your Business Process With Our Zoho Consultation"
    >
      {/* Background ambient lighting & fine grid */}
      <div className="scb-ambient-glow glow-top" aria-hidden="true" />
      <div className="scb-ambient-glow glow-bottom" aria-hidden="true" />
      <div className="scb-grid-mesh" aria-hidden="true" />

      {/* Decorative cyber tech waves and circular particle nodes */}
      <div className="scb-wave-line wave-1" aria-hidden="true" />
      <div className="scb-wave-line wave-2" aria-hidden="true" />
      <div className="scb-node node-left" aria-hidden="true" />
      <div className="scb-node node-right" aria-hidden="true" />

      <div className="scb-container">
        <motion.div 
          className="scb-content-stage"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow Pill */}
          <div className="scb-eyebrow-pill">
            <Sparkles size={13} className="scb-sparkle" />
            <span>DIRECT ADVISORY SESSION</span>
          </div>

          {/* Main Headline */}
          <h2 className="scb-headline">
            Streamline Your Business Process <span className="scb-gold-gradient">With Our Zoho Consultation</span>
          </h2>

          <div className="scb-gold-divider" aria-hidden="true">
            <span className="scb-sparkle-gem" />
          </div>

          <p className="scb-subtext">
            Schedule a 1-on-1 strategy call with our certified Zoho Enterprise Architects to evaluate your workflows, optimize app licensing, and map high-ROI automation pipelines.
          </p>

          {/* Free Consultation Calendly CTA Button */}
          <div className="scb-action-row">
            <motion.a
              href="https://calendly.com/officehubtech"
              target="_blank"
              rel="noopener noreferrer"
              className="scb-consultation-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Schedule a Free Consultation on Calendly"
            >
              <CalendarCheck size={18} className="scb-calendar-icon" />
              <span>FREE CONSULTATION</span>
              <ArrowRight size={16} className="scb-arrow-icon" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

