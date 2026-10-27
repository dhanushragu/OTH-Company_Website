import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck } from 'lucide-react';
import './ClientsSection.css';

// Set 1 (8 Images) - Moving Right to Left
const clientsRow1 = [
  { name: 'ACS', logo: '/clients/ACS.jpg' },
  { name: 'Array Networks, Inc', logo: '/clients/ARRAY NETWORKS_ INC-VCU0iC8s.png' },
  { name: 'brightfin', logo: '/clients/brightfin.webp' },
  { name: 'Chemject International, Inc', logo: '/clients/Chemject International_ Inc.-CVwEhmaQ.png' },
  { name: 'DigitalShipper', logo: '/clients/DigitalShipper-zKXnAqi3.png' },
  { name: 'drcfo', logo: '/clients/drcfo-D5YNC3fg.png' },
  { name: 'Inther Group', logo: '/clients/Inther Group-BcJj8Ool.png' },
  { name: 'Learnsoft Enterprise Training', logo: '/clients/Learnsoft Enterprise Training-BvF3RY1H.png' },
];

// Set 2 (8 Images) - Moving Left to Right
const clientsRow2 = [
  { name: 'Meshines Hydraulics - Manufacturing', logo: '/clients/Meshines Hydraulics - Manufacturing.png' },
  { name: 'perfectform', logo: '/clients/perfectform.webp' },
  { name: 'reliable-clean', logo: '/clients/reliable-clean.webp' },
  { name: 'RX Development', logo: '/clients/RX Development.png' },
  { name: 'samash', logo: '/clients/samash.webp' },
  { name: 'Sarasota Box Office', logo: '/clients/sarasotaboxoffice.png' },
  { name: 'SGS Technologies', logo: '/clients/SGS Technologies-_rpZB_kh.png' },
  { name: 'Solar Data Systems', logo: '/clients/Solar Data Systems.webp' },
];

export default function ClientsSection() {
  return (
    <section className="clients-section" id="clients">
      {/* Background ambient lighting */}
      <div className="clients-ambient-glow" aria-hidden="true" />
      <div className="clients-grid-overlay" aria-hidden="true" />

      <div className="clients-container">
        {/* Section Header */}
        <motion.div
          className="clients-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="clients-eyebrow-pill">
            <Sparkles size={13} className="eyebrow-sparkle" />
            <span>GLOBAL ENTERPRISE ECOSYSTEM</span>
          </div>

          <h2 className="clients-title">
            Our <span className="title-gold-gradient">Clients</span>
          </h2>

          <p className="clients-subtitle">
            Empowering forward-thinking companies with scalable Zoho architectures and bespoke AI solutions.
          </p>
        </motion.div>

        {/* Set 1: Train Track moving Right to Left (No Background Cards) */}
        <div className="marquee-wrapper">
          <div className="marquee-fade-left" aria-hidden="true" />
          <div className="marquee-fade-right" aria-hidden="true" />

          <div className="marquee-track marquee-scroll-left">
            {[...clientsRow1, ...clientsRow1, ...clientsRow1].map((client, index) => (
              <div key={`row1-${index}`} className="client-logo-item">
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="client-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Set 2: Train Track moving Left to Right (No Background Cards) */}
        <div className="marquee-wrapper marquee-wrapper-offset">
          <div className="marquee-fade-left" aria-hidden="true" />
          <div className="marquee-fade-right" aria-hidden="true" />

          <div className="marquee-track marquee-scroll-right">
            {[...clientsRow2, ...clientsRow2, ...clientsRow2].map((client, index) => (
              <div key={`row2-${index}`} className="client-logo-item">
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="client-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge Footer */}
        <motion.div
          className="clients-trust-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="trust-item">
            <ShieldCheck size={16} className="trust-icon" />
            <span>Enterprise-Grade Security & SLA Guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
