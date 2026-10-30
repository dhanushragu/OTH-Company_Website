import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Workflow, 
  Cpu, 
  Headphones, 
  TrendingUp 
} from 'lucide-react';
import './BenefitsSection.css';

// 4 Centralized Benefits & Solutions points with images and descriptions
const benefitsData = [
  {
    id: 1,
    stepNum: '01',
    title: 'STREAMLINED OPERATIONS',
    shortTitle: 'STREAMLINED OPERATIONS',
    tag: 'EFFICIENCY & AUTOMATION',
    desc: 'Optimize complex enterprise workflows, eliminate bottlenecks, and automate routine tasks to maximize operational efficiency.',
    image: '/benefits%20&%20solutions%20img/Streamlined%20Operations.jpg',
    imageAlt: 'Streamlined Operations with Zoho Solutions - Office Hub Tech',
    badge: 'Zero-Latency Workflows',
    badgeIcon: Workflow,
    objectPosition: 'center center',
  },
  {
    id: 2,
    stepNum: '02',
    title: 'CUSTOMIZED SOLUTIONS',
    shortTitle: 'CUSTOMIZED SOLUTIONS',
    tag: 'BESPOKE ENGINEERING',
    desc: 'Bespoke Zoho architectures engineered precisely around your unique business models, daily processes, and industry requirements.',
    image: '/benefits%20&%20solutions%20img/Customized%20Solutions.jpg',
    imageAlt: 'Customized Zoho Solutions - Office Hub Tech',
    badge: '100% Tailored Architecture',
    badgeIcon: Cpu,
    objectPosition: 'center center',
  },
  {
    id: 3,
    stepNum: '03',
    title: 'EXPERT SUPPORT & TRAINING',
    shortTitle: 'EXPERT SUPPORT',
    tag: 'ENTERPRISE ENABLEMENT',
    desc: 'Comprehensive hands-on team enablement and dedicated certified technical specialists ensuring seamless, uninterrupted enterprise software adoption.',
    image: '/benefits%20&%20solutions%20img/Expert%20Support%20and%20Training.jpg',
    imageAlt: 'Expert Support and Training - Office Hub Tech',
    badge: 'Certified Zoho Specialists',
    badgeIcon: Headphones,
    objectPosition: 'center center',
  },
  {
    id: 4,
    stepNum: '04',
    title: 'SCALABLE GROWTH',
    shortTitle: 'SCALABLE GROWTH',
    tag: 'FUTURE-PROOF EXPANSION',
    desc: 'Robust cloud infrastructure designed to scale effortlessly as your enterprise expands and revenue rapidly multiplies.',
    image: '/benefits%20&%20solutions%20img/Scalable%20Growth.jpg',
    imageAlt: 'Scalable Business Growth with Zoho - Office Hub Tech',
    badge: 'High-Velocity Scalability',
    badgeIcon: TrendingUp,
    objectPosition: 'center center',
  },
];

export default function BenefitsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section 
      className="benefits-section" 
      id="benefits"
      aria-label="Company Benefits & Solutions"
    >
      {/* Background Atmosphere */}
      <div className="benefits-ambient-glow glow-benefits-left" aria-hidden="true" />
      <div className="benefits-ambient-glow glow-benefits-right" aria-hidden="true" />
      <div className="benefits-grid-mesh" aria-hidden="true" />

      <div className="benefits-container">
        
        {/* Section Header */}
        <div className="benefits-header">
          <div className="benefits-eyebrow-pill">
            <span className="benefits-pill-dot" />
            <span>COMPANY BENEFITS & SOLUTIONS</span>
          </div>

          <h2 className="benefits-main-title">
            <span className="title-lead">Empowering Your Business Growth with</span>{' '}
            <span className="title-gold-gradient">Tailored Zoho Solutions</span>
          </h2>
        </div>

        {/* =================================================================
            ACCORDION EXPANDABLE COLUMNS TRACK (Hover Expand, others shrink)
            Matches reference style with vertical titles and expanded details
            ================================================================= */}
        <div className="benefits-accordion-track">
          {benefitsData.map((item, index) => {
            const isExpanded = hoveredIndex === index;
            const BadgeIcon = item.badgeIcon;

            return (
              <div
                key={item.id}
                className={`benefits-accordion-panel ${isExpanded ? 'panel-expanded' : 'panel-shrinked'}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
              >
                {/* Background Full Cover Image */}
                <div className="panel-bg-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="panel-bg-image"
                    style={{ objectPosition: item.objectPosition }}
                    loading="eager"
                  />
                  <div className="panel-overlay-gradient" />
                </div>

                {/* Collapsed / Shrinked View: Vertical Brand Title */}
                <div className="panel-collapsed-view">
                  <span className="panel-vertical-title">{item.shortTitle}</span>
                </div>

                {/* Expanded View: Pill, Headline, Description, Action CTA */}
                <div className="panel-expanded-content">
                  <div className="panel-expanded-top">
                    <div className="panel-tag-pill">
                      <span className="panel-tag-dot" />
                      <span>{item.tag}</span>
                    </div>

                    <div className="panel-badge-pill">
                      <BadgeIcon size={13} className="panel-badge-icon" />
                      <span>{item.badge}</span>
                    </div>
                  </div>

                  <div className="panel-expanded-bottom">
                    <h3 className="panel-expanded-title">
                      {item.title}
                    </h3>

                    <p className="panel-expanded-desc">
                      {item.desc}
                    </p>

                    <a 
                      href="#contact-us" 
                      className="panel-expanded-link"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight size={15} className="link-arrow" />
                    </a>
                  </div>
                </div>

                {/* Glossy Border Glow */}
                <div className="panel-border-glow" aria-hidden="true" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
