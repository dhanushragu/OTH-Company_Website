import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, BookOpen, TrendingUp, Newspaper, Film } from 'lucide-react';
import './KnowledgeCenterSection.css';

const knowledgeItems = [
  {
    id: 'blogs',
    title: 'Blogs',
    category: 'ARTICLES & GUIDES',
    description: 'Expert guides, AI automation tutorials, and Zoho ecosystem insights from our certified consultants.',
    link: 'https://officehubtech.com/blogs/',
    actionLabel: 'Explore Blogs',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    alt: 'OfficeHub Tech Blogs and AI Tutorials',
    icon: BookOpen,
    year: '2026'
  },
  {
    id: 'case-studies',
    title: 'Case Studies',
    category: 'CLIENT SUCCESS',
    description: 'Real-world business transformations, custom Zoho implementations, and measurable client results.',
    link: 'https://officehubtech.com/case-study/',
    actionLabel: 'View Case Studies',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    alt: 'OfficeHub Tech Client Case Studies and Results',
    icon: TrendingUp,
    year: 'SUCCESS'
  },
  {
    id: 'press-releases',
    title: 'Press Releases',
    category: 'OFFICIAL NEWS',
    description: 'Official company announcements, strategic technology partnerships, and industry milestone updates.',
    link: 'https://officehubtech.com/press-release/',
    actionLabel: 'Read Press Releases',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
    alt: 'OfficeHub Tech Official Press Releases and News',
    icon: Newspaper,
    year: 'NEWS'
  },
  {
    id: 'videos',
    title: 'Videos',
    category: 'WATCH & LEARN',
    description: 'Video case studies, client testimonials, webinars, and step-by-step technical walkthroughs.',
    link: 'https://officehubtech.com/videos/',
    actionLabel: 'Watch Videos',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    alt: 'OfficeHub Tech Video Walkthroughs and Webinars',
    icon: Film,
    year: 'HD'
  }
];

export default function KnowledgeCenterSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section 
      id="knowledge-center" 
      className="kc-section"
      aria-label="Explore Our Knowledge Center"
    >
      {/* Ambient background glows */}
      <div className="kc-ambient-glow glow-top" aria-hidden="true" />
      <div className="kc-ambient-glow glow-bottom" aria-hidden="true" />
      <div className="kc-grid-mesh" aria-hidden="true" />

      <div className="kc-container">
        
        {/* Section Header */}
        <motion.div 
          className="kc-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="kc-eyebrow-pill">
            <Sparkles size={13} className="kc-sparkle" />
            <span>INSIGHTS &amp; RESOURCES</span>
          </div>

          <h2 className="kc-title">
            Explore Our <span className="kc-gold-gradient">Knowledge Center</span>
          </h2>

          <div className="kc-gold-divider" aria-hidden="true">
            <span className="kc-sparkle-gem" />
          </div>

          <p className="kc-subtitle">
            Comprehensive resources, client success stories, industry announcements, and video walkthroughs.
          </p>
        </motion.div>

        {/* 4 Notched Project Cards Grid (Fits in Single Page View) */}
        <div className="kc-cards-grid">
          {knowledgeItems.map((item, index) => {
            const isHovered = hoveredCard === item.id;
            const IconComponent = item.icon;

            return (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`kc-notched-card ${isHovered ? 'card-active' : ''}`}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ 
                  duration: 0.65, 
                  delay: index * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                aria-label={`${item.title} - ${item.actionLabel}`}
              >
                {/* Upper Notched Image Frame */}
                <div className="kc-image-frame-wrap">
                  {/* Outer Photo */}
                  <div className="kc-image-viewport">
                    <img 
                      src={item.image} 
                      alt={item.alt}
                      className="kc-card-photo"
                      loading="lazy"
                    />
                    <div className="kc-photo-scrim" />
                  </div>

                  {/* Top Category Badge */}
                  <div className="kc-category-pill">
                    <span>{item.category}</span>
                  </div>

                  {/* Top-Right Year / Indicator Pill */}
                  <div className="kc-year-pill">
                    <span>{item.year}</span>
                  </div>

                  {/* Circular Notched Cutout with Arrow Button at Bottom-Right */}
                  <div className="kc-notch-circle-wrapper" aria-hidden="true">
                    <div className="kc-notch-btn-bubble">
                      <ArrowUpRight size={20} className="kc-arrow-icon" />
                    </div>
                  </div>
                </div>

                {/* Card Lower Typography Content */}
                <div className="kc-card-content">
                  <div className="kc-title-row">
                    <h3 className="kc-card-title">{item.title}</h3>
                    <div className="kc-mini-icon-wrap" aria-hidden="true">
                      <IconComponent size={15} />
                    </div>
                  </div>

                  <p className="kc-card-desc">{item.description}</p>

                  <div className="kc-card-footer-action">
                    <span className="kc-action-text">{item.actionLabel}</span>
                    <ArrowUpRight size={14} className="kc-footer-arrow" />
                  </div>
                </div>

                {/* Subtle border shine & glow */}
                <div className="kc-card-glow-border" aria-hidden="true" />
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

