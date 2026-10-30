import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Handshake, HeartHandshake } from 'lucide-react';
import './PartnersSponsorsSection.css';

const PARTNERS = [
  { id: 'partner-1', src: '/images/proud partners and sponsors/proud_partners_1.jpeg', alt: 'Proud Partner 1' },
  { id: 'partner-2', src: '/images/proud partners and sponsors/proud_partners_2.jpeg', alt: 'Proud Partner 2' },
  { id: 'partner-3', src: '/images/proud partners and sponsors/proud_partners_3.jpeg', alt: 'Proud Partner 3' },
  { id: 'partner-4', src: '/images/proud partners and sponsors/proud_partners_4.jpeg', alt: 'Proud Partner 4' },
  { id: 'partner-5', src: '/images/proud partners and sponsors/proud_partners_5.jpeg', alt: 'Proud Partner 5' },
  { id: 'partner-6', src: '/images/proud partners and sponsors/proud_partners_6.jpeg', alt: 'Proud Partner 6' },
];

const SPONSORS = [
  { id: 'sponsor-1', src: '/images/proud partners and sponsors/proud_sponsors_1.png', alt: 'Proud Sponsor 1' },
  { id: 'sponsor-2', src: '/images/proud partners and sponsors/proud_sponsors_2.png', alt: 'Proud Sponsor 2' },
  { id: 'sponsor-3', src: '/images/proud partners and sponsors/proud_sponsors_3.png', alt: 'Proud Sponsor 3' },
  { id: 'sponsor-4', src: '/images/proud partners and sponsors/proud_sponsors_4.png', alt: 'Proud Sponsor 4' },
  { id: 'sponsor-5', src: '/images/proud partners and sponsors/proud_sponsors_5.png', alt: 'Proud Sponsor 5' },
];

export default function PartnersSponsorsSection() {
  return (
    <section 
      id="partners-sponsors" 
      className="ps-master-section"
      aria-label="Empowering Digital Excellence with Expert Partners & Sponsors"
    >
      {/* Background Ambient Glows & Grid Mesh */}
      <div className="ps-ambient-glow glow-top" aria-hidden="true" />
      <div className="ps-ambient-glow glow-bottom" aria-hidden="true" />
      <div className="ps-grid-mesh" aria-hidden="true" />

      <div className="ps-container">
        
        {/* Section Header */}
        <motion.div 
          className="ps-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="ps-eyebrow-pill">
            <Sparkles size={13} className="ps-sparkle-icon" />
            <span>COLLABORATIVE ECOSYSTEM</span>
          </div>

          <h2 className="ps-main-title">
            Empowering Digital Excellence <span className="ps-gold-gradient">with Experts</span>
          </h2>

          <div className="ps-gold-divider" aria-hidden="true">
            <span className="ps-divider-sparkle" />
          </div>
        </motion.div>

        {/* 1. PROUD PARTNERS GROUP */}
        <div className="ps-group-wrapper">
          <div className="ps-group-header">
            <div className="ps-group-title-pill">
              <Handshake size={15} className="ps-group-icon" />
              <span>Proud Partners Of</span>
            </div>
          </div>

          {/* Clean Logo Grid - No borders, pure logo cards */}
          <div className="ps-logos-grid ps-partners-grid">
            {PARTNERS.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="ps-logo-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="ps-logo-inner">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="ps-logo-img"
                    loading="lazy"
                  />
                </div>
                <div className="ps-logo-glow" aria-hidden="true" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subtle Section Internal Separator */}
        <div className="ps-internal-divider" aria-hidden="true">
          <span className="ps-divider-line" />
          <span className="ps-divider-gem">✦</span>
          <span className="ps-divider-line" />
        </div>

        {/* 2. PROUD SPONSORS GROUP */}
        <div className="ps-group-wrapper">
          <div className="ps-group-header">
            <div className="ps-group-title-pill">
              <HeartHandshake size={15} className="ps-group-icon" />
              <span>Proud Sponsors</span>
            </div>
          </div>

          {/* Clean Logo Grid - No borders, pure logo cards */}
          <div className="ps-logos-grid ps-sponsors-grid">
            {SPONSORS.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                className="ps-logo-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="ps-logo-inner">
                  <img
                    src={sponsor.src}
                    alt={sponsor.alt}
                    className="ps-logo-img"
                    loading="lazy"
                  />
                </div>
                <div className="ps-logo-glow" aria-hidden="true" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

