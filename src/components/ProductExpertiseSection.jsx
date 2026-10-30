import React, { useState } from 'react';
import './ProductExpertiseSection.css';

const products = [
  {
    num: '01',
    name: 'Zoho Creator',
    desc: 'Build custom business applications that automate workflows and improve operational efficiency.',
    tag: 'Low-Code Apps',
  },
  {
    num: '02',
    name: 'Zoho CRM',
    desc: 'Manage customer relationships, streamline sales pipelines, and improve conversion rates.',
    tag: 'Sales & Pipeline',
  },
  {
    num: '03',
    name: 'Zoho HRMS',
    desc: 'Simplify employee management, attendance tracking, payroll, and human resource operations.',
    tag: 'People & Payroll',
  },
  {
    num: '04',
    name: 'Zoho Inventory',
    desc: 'Track stock, manage orders, and optimize inventory across multiple sales channels.',
    tag: 'Multi-Channel Stock',
  },
  {
    num: '05',
    name: 'ERP Transformation',
    desc: 'Integrate business processes, centralize data, and improve enterprise-wide operational visibility.',
    tag: 'Enterprise Integration',
  },
  {
    num: '06',
    name: 'RCM CRM',
    desc: 'Improve revenue cycle management, automate workflows, and strengthen customer relationship processes.',
    tag: 'Revenue Cycles',
  },
  {
    num: '07',
    name: 'Zoho RPA',
    desc: 'Automate repetitive tasks, reduce manual effort, and accelerate business workflows.',
    tag: 'Robotic Automation',
  },
];

// Duplicate list for a seamless, continuous infinite looping ticker (train effect)
const duplicatedProducts = [...products, ...products];

export default function ProductExpertiseSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section
      id="expertise"
      className="products-expertise-section"
      aria-label="Our Products Expertise"
    >
      {/* Subtle Background Atmosphere */}
      <div className="expertise-ambient-glow glow-top" aria-hidden="true" />
      <div className="expertise-ambient-glow glow-bottom" aria-hidden="true" />
      <div className="expertise-grid-mesh" aria-hidden="true" />

      <div className="expertise-content-wrapper">
        {/* Section Header */}
        <header className="expertise-header">
          <div className="expertise-eyebrow-pill">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            <span>OUR EXPERTISE</span>
          </div>

          <h2 className="expertise-main-title">
            Our <span className="title-gold-gradient">Products Expertise</span>
          </h2>

          <div className="expertise-gold-divider" aria-hidden="true">
            <span className="divider-sparkle" />
          </div>

          <p className="expertise-subtitle">
            Powering smarter business operations with intelligent Zoho solutions.
          </p>
        </header>

        {/* Looping Horizontal Train Track */}
        <div
          className="expertise-train-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredIdx(null);
          }}
          aria-label="Horizontal scrolling products carousel"
        >
          {/* Subtle Side Fade Edges for Infinite Track Blend */}
          <div className="train-fade-edge fade-left" aria-hidden="true" />
          <div className="train-fade-edge fade-right" aria-hidden="true" />

          {/* Continuous Running Train Track */}
          <div className={`expertise-train-track ${isPaused ? 'train-paused' : ''}`}>
            {duplicatedProducts.map((item, index) => {
              const originalIdx = index % products.length;
              const isHovered = hoveredIdx === index;

              return (
                <article
                  key={`${item.num}-${index}`}
                  className={`expertise-train-card ${isHovered ? 'card-hovered' : ''}`}
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  role="group"
                  aria-label={`${item.num} - ${item.name}`}
                >
                  {/* Left Gold Accent Line */}
                  <div className="train-card-left-bar" aria-hidden="true" />

                  {/* Card Header: Number & Tag */}
                  <div className="train-card-header">
                    <span className="train-card-number">{item.num}</span>
                    <span className="train-card-tag">{item.tag}</span>
                  </div>

                  {/* Card Body */}
                  <div className="train-card-body">
                    <h3 className="train-card-title">{item.name}</h3>
                    <p className="train-card-desc">{item.desc}</p>
                  </div>

                  {/* Bottom Gold Indicator */}
                  <div className="train-card-bottom-accent" aria-hidden="true">
                    <span className="bottom-accent-glow" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Train Navigation / Status Cue */}
        <div className="train-footer-cue">
          <span className="cue-dot-pulse" aria-hidden="true" />
          <span className="cue-text">HOVER TO PAUSE &amp; EXPLORE MODULES</span>
        </div>
      </div>
    </section>
  );
}
