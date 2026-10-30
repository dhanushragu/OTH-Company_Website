import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, X, Check, ArrowRight, ShieldCheck, PhoneCall, Mail, User, MessageSquare } from 'lucide-react';
import './ConsultationBannerSection.css';

export default function ConsultationBannerSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNumber: '',
    message: '',
    agreeSms: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        firstName: '',
        email: '',
        phoneNumber: '',
        message: '',
        agreeSms: false,
      });
    }, 2800);
  };

  return (
    <>
      {/* =================================================================
          MAIN BANNER SECTION (Inspired by Live Site & Premium Black & Gold Theme)
          ================================================================= */}
      <section 
        className="cb-banner-section" 
        id="consultation-banner"
        aria-label="Elevate Your Business Strategy with Zoho"
      >
        {/* Deep ambient backdrop with tech glow waves */}
        <div className="cb-tech-wave-glow" aria-hidden="true" />
        <div className="cb-grid-mesh" aria-hidden="true" />

        <div className="cb-container">
          <motion.div 
            className="cb-content-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow badge */}
            <div className="cb-eyebrow-pill">
              <Sparkles size={13} className="cb-sparkle" />
              <span>STRATEGIC ENTERPRISE ACCELERATION</span>
            </div>

            {/* Main Banner Heading */}
            <h2 className="cb-main-heading">
              Elevate Your Business Strategy <span className="cb-gold-gradient">with Zoho</span>
            </h2>

            <p className="cb-sub-lead">
              Transform workflows, automate compliance, and unlock unprecedented operational agility with custom-architected Zoho solutions.
            </p>

            {/* Free Consultation CTA Button */}
            <div className="cb-action-wrap">
              <motion.button
                type="button"
                className="cb-cta-btn"
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                aria-label="Open Schedule a Live Demo Consultation Form"
              >
                <Calendar size={17} className="cb-btn-calendar-icon" />
                <span>Free Consultation</span>
                <ArrowRight size={16} className="cb-btn-arrow" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =================================================================
          POPUP MODAL: Schedule a Live Demo (Exact match from Reference Image)
          ================================================================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="cb-modal-backdrop" onClick={() => setIsModalOpen(false)}>
            <motion.div
              className="cb-modal-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Modal Header */}
              <div className="cb-modal-header">
                <h3 id="modal-title" className="cb-modal-title">
                  Schedule a Live Demo
                </h3>
                <button
                  type="button"
                  className="cb-modal-close-btn"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Form Body or Success State */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="cb-modal-form">
                  {/* Row 1: First Name & Email Address */}
                  <div className="cb-form-row two-cols">
                    <div className="cb-input-group">
                      <div className="cb-field-icon"><User size={15} /></div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="cb-input-field"
                      />
                    </div>
                    <div className="cb-input-group">
                      <div className="cb-field-icon"><Mail size={15} /></div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="cb-input-field"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number */}
                  <div className="cb-input-group full-width">
                    <div className="cb-field-icon"><PhoneCall size={15} /></div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      required
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="cb-input-field"
                    />
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div className="cb-input-group full-width textarea-wrap">
                    <div className="cb-field-icon textarea-icon"><MessageSquare size={15} /></div>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="cb-textarea-field"
                    />
                  </div>

                  {/* Row 4: SMS Disclosure / Agreement Checkbox (as in reference image) */}
                  <label className="cb-checkbox-label">
                    <input
                      type="checkbox"
                      name="agreeSms"
                      checked={formData.agreeSms}
                      onChange={handleInputChange}
                      className="cb-native-checkbox"
                    />
                    <span className="cb-disclaimer-text">
                      You are agreeing to receive SMS customer care-related or one-on-one communication messages from Office Hub Tech. Message frequency may vary. Standard Message and Data Rates may apply. Reply STOP to opt out. Reply HELP for help. Privacy Policy Terms
                    </span>
                  </label>

                  {/* Submit Button */}
                  <button type="submit" className="cb-submit-btn">
                    <span>SUBMIT NOW</span>
                  </button>
                </form>
              ) : (
                /* Success Notification State */
                <div className="cb-success-state">
                  <div className="cb-success-check-circle">
                    <Check size={32} />
                  </div>
                  <h4 className="cb-success-title">Consultation Request Sent!</h4>
                  <p className="cb-success-msg">
                    Thank you, {formData.firstName || 'there'}. Our enterprise Zoho architect will contact you shortly to confirm your live session.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

