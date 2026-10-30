import React, { useState } from 'react';
import { 
  Send, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  Headphones,
  Award
} from 'lucide-react';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
    agreed: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section className="contact-section" id="contact-us" aria-label="Get in touch with us">
      {/* Ambient background glows */}
      <div className="contact-ambient-glow glow-top-left" aria-hidden="true" />
      <div className="contact-ambient-glow glow-bottom-right" aria-hidden="true" />
      <div className="contact-grid-pattern" aria-hidden="true" />

      <div className="contact-container">
        {/* Section Header */}
        <header className="contact-header">
          <div className="contact-eyebrow-pill">
            <Sparkles size={13} className="eyebrow-gold-sparkle" />
            <span>CONNECT WITH SPECIALISTS</span>
          </div>

          <h2 className="contact-main-title">
            Get in touch <span className="title-gold-gradient">with us</span>
          </h2>

          <div className="contact-gold-divider" aria-hidden="true">
            <span className="divider-sparkle" />
          </div>

          <p className="contact-subtitle">
            Have questions about Zoho implementation, bespoke AI models, or enterprise automation? Leave a message and our lead consultants will respond promptly.
          </p>
        </header>

        {/* SINGLE UNIFIED FRAME ENCLOSING IMAGE AND FORM */}
        <div className="contact-unified-master-frame">
          {/* Subtle Ambient Frame Glow */}
          <div className="master-frame-halo" aria-hidden="true" />

          {/* Left Sub-Pane: Embedded Image */}
          <div className="unified-image-pane">
            <div className="unified-image-container">
              <img
                src="/images/Get%20In%20Touch.jpg"
                alt="Get in Touch with Office Hub Tech"
                className="unified-showcase-img"
                loading="lazy"
              />

              {/* Cinematic Vignette */}
              <div className="unified-img-scrim" />

              {/* Floating Badges on Image */}
              <div className="unified-floating-pill pill-top">
                <div className="pill-pulse-dot" />
                <Headphones size={13} className="pill-gold-icon" />
                <span>24/7 Enterprise Support</span>
              </div>

              <div className="unified-floating-pill pill-bottom">
                <Award size={13} className="pill-gold-icon" />
                <span>Ranked #1 Global Zoho Partner</span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="unified-image-caption">
                <span className="caption-tag">SEAMLESS COLLABORATION</span>
                <h3 className="caption-title">Transforming Enterprise Operations</h3>
              </div>
            </div>
          </div>

          {/* Right Sub-Pane: Clean Form (NO Separate Box Background) */}
          <div className="unified-form-pane">
            <div className="form-card-top-bar">
              <div className="form-heading-group">
                <span className="form-card-badge">DIRECT INQUIRY</span>
                <h3 className="form-card-title">Leave a message</h3>
              </div>
              <span className="form-step-indicator">Step 01 / 01</span>
            </div>

            {isSubmitted ? (
              <div className="form-success-state" role="alert">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="success-title">Message Sent Successfully</h4>
                <p className="success-desc">
                  Thank you, <span className="highlight-name">{formData.name || 'Valued Client'}</span>. Our technical architecture team will review your requirements and reach out within 24 hours.
                </p>
                <button
                  type="button"
                  className="send-another-btn"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      company: '',
                      message: '',
                      agreed: false
                    });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-actual-form" onSubmit={handleSubmit}>
                {/* Row 1: Your Name & Phone Number */}
                <div className="form-dual-row">
                  <div className="form-field-group">
                    <label htmlFor="contact-name" className="field-label">
                      Your Name <span className="required-star">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="field-input"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="contact-phone" className="field-label">
                      Phone Number <span className="required-star">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="field-input"
                    />
                  </div>
                </div>

                {/* Row 2: Email Address & Company Name */}
                <div className="form-dual-row">
                  <div className="form-field-group">
                    <label htmlFor="contact-email" className="field-label">
                      Email Address <span className="required-star">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="field-input"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="contact-company" className="field-label">
                      Company Name <span className="required-star">*</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="field-input"
                    />
                  </div>
                </div>

                {/* Row 3: Write a Message */}
                <div className="form-field-group">
                  <label htmlFor="contact-message" className="field-label">
                    Write a Message <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your current challenges, Zoho goals, or custom app needs..."
                    className="field-textarea"
                  />
                </div>

                {/* SMS Customer Care & Legal Disclaimer */}
                <div className="form-consent-box">
                  <label className="consent-checkbox-label">
                    <input
                      type="checkbox"
                      name="agreed"
                      required
                      checked={formData.agreed}
                      onChange={handleChange}
                      className="consent-checkbox"
                    />
                    <span className="consent-checkbox-custom" aria-hidden="true" />
                    <span className="consent-text">
                      You are agreeing to receive SMS customer care-related or one-on-one communication messages from Office Hub Tech. Message frequency may vary. Standard Message and Data Rates may apply. Reply STOP to opt out. Reply HELP for help.{' '}
                      <a
                        href="http://officehubtech.com/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="consent-link"
                      >
                        Privacy Policy
                      </a>{' '}
                      <a
                        href="http://officehubtech.com/terms-and-conditions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="consent-link"
                      >
                        Terms
                      </a>
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="form-action-row">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`submit-message-gold-btn ${isSubmitting ? 'submitting' : ''}`}
                  >
                    <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message'}</span>
                    <Send size={16} className="btn-send-icon" />
                  </button>

                  <div className="form-security-note">
                    <ShieldCheck size={14} className="sec-icon" />
                    <span>End-to-End SSL Encrypted</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
