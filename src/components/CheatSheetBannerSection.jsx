import React from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, FileText, ArrowRight } from 'lucide-react';
import './CheatSheetBannerSection.css';

export default function CheatSheetBannerSection() {
  return (
    <section 
      className="csb-master-section" 
      id="cheatsheet"
      aria-label="Simplify your workflow with our Zoho Cheat Sheet"
    >
      {/* Ambient background glows & concentric tech curves */}
      <div className="csb-ambient-glow glow-left" aria-hidden="true" />
      <div className="csb-ambient-glow glow-right" aria-hidden="true" />
      <div className="csb-grid-mesh" aria-hidden="true" />

      {/* Decorative concentric digital tech arcs on left & right matching reference */}
      <div className="csb-tech-arc arc-left" aria-hidden="true">
        <span className="arc-ring ring-1" />
        <span className="arc-ring ring-2" />
        <span className="arc-ring ring-3" />
      </div>
      <div className="csb-tech-arc arc-right" aria-hidden="true">
        <span className="arc-ring ring-1" />
        <span className="arc-ring ring-2" />
        <span className="arc-ring ring-3" />
      </div>

      {/* Floating subtle square and pill tech accents */}
      <div className="csb-tech-node node-1" aria-hidden="true" />
      <div className="csb-tech-node node-2" aria-hidden="true" />
      <div className="csb-tech-node node-3" aria-hidden="true" />
      <div className="csb-tech-node node-pill" aria-hidden="true" />

      <div className="csb-container">
        <motion.div 
          className="csb-inner-row"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left Text Group */}
          <div className="csb-text-column">
            <div className="csb-eyebrow-pill">
              <Sparkles size={13} className="csb-sparkle" />
              <span>FREE DEVELOPER RESOURCE</span>
            </div>

            <h2 className="csb-headline">
              Simplify your workflow with our{' '}
              <span className="csb-gold-gradient">Zoho Cheat Sheet</span>
            </h2>

            <p className="csb-subtext">
              Essential Deluge formulas, multi-app API triggers, and enterprise architecture shortcuts in one quick-reference blueprint.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="csb-action-column">
            <motion.a
              href="https://officehubtech.com/cheatsheet/"
              target="_blank"
              rel="noopener noreferrer"
              className="csb-download-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Download Zoho Cheat Sheet"
            >
              <Download size={18} className="csb-download-icon" />
              <span>DOWNLOAD NOW</span>
              <ArrowRight size={15} className="csb-arrow-icon" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

