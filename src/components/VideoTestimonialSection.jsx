import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Sparkles, 
  Tv, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Volume2, 
  Award 
} from 'lucide-react';
import './VideoTestimonialSection.css';

export default function VideoTestimonialSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  // YouTube Video ID from https://www.youtube.com/watch?v=2i4m3VmT9Q8&t=2s
  const videoId = '2i4m3VmT9Q8';

  return (
    <section 
      id="video-testimonial" 
      className="video-testimonial-section" 
      aria-label="Video Testimonial - Perfect Form Case Study"
    >
      {/* Background Ambient Glows & Mesh Grid */}
      <div className="vt-ambient-glow glow-left" aria-hidden="true" />
      <div className="vt-ambient-glow glow-right" aria-hidden="true" />
      <div className="vt-grid-mesh" aria-hidden="true" />

      <div className="vt-container">
        <div className="vt-dual-grid">

          {/* =================================================================
              LEFT COLUMN: Title & Story arriving smoothly from the Left
              ================================================================= */}
          <motion.div 
            className="vt-left-content"
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Pill Eyebrow */}
            <div className="vt-eyebrow-pill">
              <Sparkles size={13} className="vt-sparkle-icon" />
              <span>CLIENT VIDEO SPOTLIGHT</span>
            </div>

            {/* Main Title */}
            <h2 className="vt-main-title">
              How <span className="vt-gold-highlight">Perfect Form</span> Streamlined Entity Management &amp; Compliance With <span className="vt-gold-gradient">Zoho Creator</span>
            </h2>

            {/* Divider */}
            <div className="vt-gold-divider" aria-hidden="true">
              <span className="vt-divider-sparkle" />
            </div>

            {/* Narrative / Context */}
            <p className="vt-lead-text">
              Discover how OfficeHub Tech partnered with <strong>Perfect Form</strong> to architect an automated, enterprise-grade compliance portal—eliminating friction in legal entity administration and workflow tracking.
            </p>

            {/* Quick Impact Bullet Points */}
            <div className="vt-benefits-list">
              <div className="vt-benefit-item">
                <div className="vt-check-circle">
                  <CheckCircle2 size={15} />
                </div>
                <span>Custom Client Self-Service Entity Portal</span>
              </div>
              <div className="vt-benefit-item">
                <div className="vt-check-circle">
                  <CheckCircle2 size={15} />
                </div>
                <span>Automated State Filings &amp; Statutory Compliance</span>
              </div>
              <div className="vt-benefit-item">
                <div className="vt-check-circle">
                  <CheckCircle2 size={15} />
                </div>
                <span>Full Zoho Creator &amp; Deluge Workflow Integration</span>
              </div>
            </div>

            {/* Client Citation Badge */}
            <div className="vt-client-badge-card">
              <div className="vt-client-avatar">
                <img 
                  src="/Testimonial Images/Paul Formella, CEO & Co-Founder of Perfect Form.png" 
                  alt="Paul Formella" 
                />
              </div>
              <div className="vt-client-info">
                <h4 className="vt-client-name">Paul Formella</h4>
                <p className="vt-client-role">CEO &amp; Co-Founder, Perfect Form</p>
              </div>
              <div className="vt-client-verified">
                <ShieldCheck size={16} className="vt-verified-icon" />
                <span>Verified Client</span>
              </div>
            </div>

            {/* External Watch link */}
            <div className="vt-actions-row">
              <a 
                href="https://www.youtube.com/watch?v=2i4m3VmT9Q8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="vt-external-btn"
              >
                <span>Watch on YouTube</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>

          {/* =================================================================
              RIGHT COLUMN: Television Display Frame for YouTube Video
              ================================================================= */}
          <motion.div 
            className="vt-right-tv-column"
            initial={{ opacity: 0, x: 70, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Television Device Enclosure */}
            <div className="vt-tv-wrapper">
              
              {/* TV Top Header / Status bar with subtle TV Brand & Speaker Grill */}
              <div className="vt-tv-top-bezel">
                <div className="vt-tv-brand-pill">
                  <Tv size={13} className="vt-tv-icon" />
                  <span>OHT CINEMA DISPLAY</span>
                </div>
                <div className="vt-tv-status-dots">
                  <span className="tv-dot tv-green" />
                  <span className="tv-dot tv-gold" />
                  <span className="tv-dot tv-red" />
                </div>
              </div>

              {/* TV Screen Outer Frame with Bezel and Glare effect */}
              <div className="vt-tv-screen-chassis">
                <div className="vt-tv-screen-glass">
                  {/* Subtle TV Screen scanlines overlay */}
                  <div className="vt-tv-scanlines" aria-hidden="true" />
                  <div className="vt-tv-vignette" aria-hidden="true" />

                  {!isPlaying ? (
                    /* Video Thumbnail Poster with TV Play Button Overlay */
                    <div className="vt-tv-poster" onClick={() => setIsPlaying(true)}>
                      <img 
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                        alt="Perfect Form Zoho Creator Video Case Study"
                        className="vt-poster-img"
                        onError={(e) => {
                          e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                        }}
                      />
                      <div className="vt-poster-overlay">
                        <motion.button 
                          type="button" 
                          className="vt-tv-play-btn"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Play Client Video"
                        >
                          <div className="vt-play-pulse" />
                          <Play size={28} className="vt-play-icon" />
                        </motion.button>
                        <div className="vt-poster-tag">
                          <Volume2 size={14} className="vt-sound-icon" />
                          <span>Click to Watch Case Study</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Embedded Interactive YouTube Video (Autoplays on click) */
                    <div className="vt-iframe-wrapper">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white`}
                        title="How Perfect Form streamlined entity management and compliance with Zoho Creator"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="vt-tv-iframe"
                      />
                    </div>
                  )}
                </div>

                {/* TV Lower Bezel with Power LED & Audio Mesh */}
                <div className="vt-tv-bottom-bezel">
                  <div className="vt-tv-speaker-mesh" aria-hidden="true">
                    <span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
                  </div>
                  <div className="vt-tv-power-led">
                    <span className="vt-led-dot active" />
                    <span className="vt-led-label">LIVE 4K</span>
                  </div>
                </div>
              </div>

              {/* TV Metallic Stand Base (Pedestal & Stem) */}
              <div className="vt-tv-stand-assembly" aria-hidden="true">
                <div className="vt-tv-stem" />
                <div className="vt-tv-base">
                  <div className="vt-base-reflection" />
                </div>
              </div>

              {/* Ambient Underglow */}
              <div className="vt-tv-underglow" aria-hidden="true" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

