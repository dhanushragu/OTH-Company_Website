import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowUpRight } from 'lucide-react';
import './ProductExpertiseSection.css';

const products = [
  {
    num: '01',
    name: 'Zoho Creator',
    tag: 'Low-Code Apps',
    desc: 'Build custom business applications that automate workflows and improve operational efficiency.',
    icon: '/zoho-official-svgs/creator.svg',
    accent: '#FFD700',
  },
  {
    num: '02',
    name: 'Zoho CRM',
    tag: 'Sales & Pipeline',
    desc: 'Manage customer relationships, streamline sales pipelines, and improve conversion rates.',
    icon: '/zoho-official-svgs/crm.svg',
    accent: '#FFA500',
  },
  {
    num: '03',
    name: 'Zoho HRMS',
    tag: 'People & Payroll',
    desc: 'Simplify employee management, attendance tracking, payroll, and human resource operations.',
    icon: '/zoho-official-svgs/people.svg',
    accent: '#FFD700',
  },
  {
    num: '04',
    name: 'Zoho Inventory',
    tag: 'Multi-Channel Stock',
    desc: 'Track stock, manage orders, and optimize inventory across multiple sales channels.',
    icon: '/zoho-official-svgs/inventory.svg',
    accent: '#EAB308',
  },
  {
    num: '05',
    name: 'ERP Transformation',
    tag: 'Enterprise Integration',
    desc: 'Integrate business processes, centralize data, and improve enterprise-wide operational visibility.',
    icon: '/zoho-official-svgs/one.svg',
    accent: '#D4AF37',
  },
  {
    num: '06',
    name: 'RCM CRM',
    tag: 'Revenue Cycles',
    desc: 'Improve revenue cycle management, automate workflows, and strengthen customer relationship processes.',
    icon: '/zoho-official-svgs/analytics.svg',
    accent: '#F59E0B',
  },
  {
    num: '07',
    name: 'Zoho RPA',
    tag: 'Robotic Automation',
    desc: 'Automate repetitive tasks, reduce manual effort, and accelerate business workflows.',
    icon: '/zoho-official-svgs/flow.svg',
    accent: '#FFD700',
  },
];

export default function ProductExpertiseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimerRef = useRef(null);

  const total = products.length;

  // Automatic slideshow transition every 2.0s
  useEffect(() => {
    if (isPaused) return;

    autoplayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 2000);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isPaused, total]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // 3D Perspective Coverflow positioning calculation
  const getCardStyle = (index) => {
    let offset = index - activeIndex;

    // Handle circular wrapping so shortest path is taken
    if (offset > Math.floor(total / 2)) {
      offset -= total;
    } else if (offset < -Math.floor(total / 2)) {
      offset += total;
    }

    const absOffset = Math.abs(offset);

    // If card is far off to the sides, hide it
    if (absOffset > 3) {
      return {
        opacity: 0,
        pointerEvents: 'none',
        transform: `translateX(${offset * 140}px) scale(0.6)`,
        zIndex: 0,
      };
    }

    // Active center card
    if (offset === 0) {
      return {
        opacity: 1,
        transform: 'translateX(0px) scale(1.08) translateZ(0px) rotateY(0deg)',
        zIndex: 20,
      };
    }

    // Side cards: rotated toward center, scaled down, overlapping like coverflow
    const direction = offset > 0 ? 1 : -1;
    const translateX = direction * (185 + (absOffset - 1) * 135);
    const scale = Math.max(0.74, 1 - absOffset * 0.13);
    const rotateY = -direction * (28 + absOffset * 5);
    const zIndex = 20 - absOffset * 5;

    return {
      opacity: 1, // Completely solid, non-transparent cards
      transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      zIndex,
    };
  };

  const activeProduct = products[activeIndex];

  return (
    <section
      id="expertise"
      className="products-expertise-section"
      aria-label="Our Products Expertise"
    >
      {/* Background Atmosphere */}
      <div className="expertise-ambient-glow glow-top" aria-hidden="true" />
      <div className="expertise-ambient-glow glow-bottom" aria-hidden="true" />
      <div className="expertise-grid-mesh" aria-hidden="true" />

      <div className="expertise-content-wrapper">
        {/* Section Header */}
        <header className="expertise-header">
          <div className="expertise-eyebrow-pill">
            <Sparkles size={13} className="eyebrow-sparkle" />
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

        {/* 3D Coverflow Typography Card Carousel (No Landscape Photos) */}
        <div className="expertise-coverflow-viewport">
          <div className="expertise-coverflow-stage">
            {products.map((item, index) => {
              const style = getCardStyle(index);
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.num}
                  className={`coverflow-card ${isActive ? 'card-active' : ''}`}
                  style={style}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => {
                    if (isActive) setIsPaused(true);
                  }}
                  onMouseLeave={() => {
                    if (isActive) setIsPaused(false);
                  }}
                  title={`${item.name} - ${item.tag}`}
                >
                  {/* Subtle Card Ambient Aura */}
                  <div className="card-ambient-aura" aria-hidden="true" />
                  <div className="card-mesh-pattern" aria-hidden="true" />

                  {/* Card Center: Official Zoho Product SVG Logo (Clean & Visibly centered) */}
                  <div className="card-center-body">
                    <div className="card-icon-emblem">
                      <img 
                        src={item.icon} 
                        alt={item.name} 
                        className="card-svg-icon"
                      />
                    </div>
                  </div>

                  {/* Active Gold Rim Border */}
                  {isActive && <div className="coverflow-card-rim" aria-hidden="true" />}
                </div>
              );
            })}
          </div>

          {/* Controls: Left & Right Nav Buttons */}
          <button
            type="button"
            className="coverflow-nav-btn btn-prev"
            onClick={handlePrev}
            aria-label="Previous product"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            className="coverflow-nav-btn btn-next"
            onClick={handleNext}
            aria-label="Next product"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Slideshow Progress Dots */}
        <div className="coverflow-pagination-dots">
          {products.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`pagination-dot ${idx === activeIndex ? 'dot-active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
