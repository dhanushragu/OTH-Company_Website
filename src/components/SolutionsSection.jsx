import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { CircularTestimonials } from './ui/circular-testimonials';
import './SolutionsSection.css';

// ERP Solutions transformed into the circular-testimonials interactive model
const erpSolutionsTestimonials = [
  {
    quote:
      "Engineered for utility solar developers, EPC contractors, and asset operators. Harmonize feasibility modeling, inverter IoT telemetry, PPA compliance billing, and automated subcontractor maintenance dispatch into a single unified cloud operating system.",
    name: "Solar Management ERP",
    designation: "Clean Energy & Grid Telemetry Architecture",
    src: "/erp%20solutions/solar%20erp.png",
  },
  {
    quote:
      "Purpose-built for pharmaceutical compounders and chemical synthesizers operating under strict FDA 21 CFR Part 11 and cGMP standards. Features electronic batch manufacturing records (e-BMR), dynamic potency adjustments, and automated multi-tier QA sign-offs.",
    name: "Chemical & Pharma ERP",
    designation: "Formulation & Regulatory cGMP System",
    src: "/erp%20solutions/chemical%20and%20pharmaceutical%20manufacturing%20ERP.jpg",
  },
  {
    quote:
      "An all-in-one synchronized operations engine for global recruitment agencies, staffing firms, and contingent workforce providers. Connects client pipelines, AI-driven candidate ranking, automated split-commission invoicing, and multi-state compliance dispatch.",
    name: "Staffing ERP 360",
    designation: "Workforce & Talent Intelligence Platform",
    src: "/erp%20solutions/staffing%20ERP%20360.jpg",
  },
];

export default function SolutionsSection() {
  return (
    <section className="solutions-section" id="solutions">
      {/* Background Atmosphere */}
      <div className="solutions-ambient-glow glow-gold-top" aria-hidden="true" />
      <div className="solutions-ambient-glow glow-gold-bottom" aria-hidden="true" />
      <div className="solutions-grid-mesh" aria-hidden="true" />

      <div className="solutions-container">
        {/* Editorial Section Introduction */}
        <motion.div
          className="solutions-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="solutions-eyebrow-pill">
            <Sparkles size={14} className="eyebrow-gold-sparkle" />
            <span>ENTERPRISE ARCHITECTURE</span>
          </div>

          <h2 className="solutions-main-title">
            <span className="title-lead">ERP Solutions</span>{' '}
            <span className="title-gold-gradient">Which We Provide</span>
          </h2>

          <div className="solutions-gold-line-divider" aria-hidden="true">
            <span className="divider-sparkle-gem" />
          </div>
        </motion.div>

        {/* Circular Testimonials Component Integration */}
        <div className="solutions-circular-wrap">
          <CircularTestimonials
            testimonials={erpSolutionsTestimonials}
            autoplay={true}
            colors={{
              name: "#FFFFFF",
              designation: "#FFD700",
              testimony: "#E2E8F0",
              arrowBackground: "#11141C",
              arrowForeground: "#FFFFFF",
              arrowHoverBackground: "#FFD700",
            }}
            fontSizes={{
              name: "clamp(1.5rem, 2.2vw, 2rem)",
              designation: "0.92rem",
              quote: "1.02rem",
            }}
          />
        </div>
      </div>
    </section>
  );
}
