import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  MessageSquareHeart, 
  ShieldCheck, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import './Footer.css';

const QUICK_LINKS = [
  { name: 'About', href: 'https://officehubtech.com/about/' },
  { name: 'Contact Us', href: 'https://officehubtech.com/contact/' },
  { name: 'Recommended Tools', href: 'https://officehubtech.com/recommended-tools/' },
  { name: 'Blogs', href: 'https://officehubtech.com/blogs/' },
  { name: 'Zoholics Austin 2024', href: 'https://officehubtech.com/our-events/zoholics-austin-2024/' },
  { name: 'CEDIA Expo 2024', href: 'https://officehubtech.com/our-events/cedia-expo-2024/' },
  { name: 'Sitemap', href: 'https://officehubtech.com/sitemap.html' },
  { name: 'Career', href: 'https://careers.officehubtech.com/' },
];

const SERVICES_LINKS = [
  { name: 'Zoho Implementation', href: 'https://officehubtech.com/services/zoho-implementation/' },
  { name: '3rd Party Integrations', href: 'https://officehubtech.com/services/3rd-party-integrations/' },
  { name: 'Data Migration', href: 'https://officehubtech.com/services/data-migration/' },
  { name: 'Custom App Development', href: 'https://officehubtech.com/services/custom-app-development/' },
  { name: 'Roadmap & Business Analysis', href: 'https://officehubtech.com/services/roadmap-business-analysis/' },
];

const SOLUTIONS_LINKS = [
  { name: 'D-tools – Zoho One', href: 'https://officehubtech.com/our-products/dtool-zoho-one/' },
  { name: 'Equipment Rental Management', href: 'https://officehubtech.com/equipment-rental-management/' },
  { name: 'Warranty Management', href: 'https://officehubtech.com/warranty-management/' },
  { name: 'Debt Collection Defense Lawyers CRM', href: 'https://officehubtech.com/debt-collection-defense-lawyers-crm/' },
  { name: 'Solar Management', href: 'https://officehubtech.com/erp-solutions/solar-management/' },
  { name: 'Chemical & Pharmaceutical Manufacturing', href: 'https://officehubtech.com/erp-solutions/chemical-pharmaceutical-manufacturing-erp/' },
  { name: 'ERP Staffing ERP 360', href: 'https://officehubtech.com/erp-solutions/staffing-erp-360/' },
];

const RECOGNITION_BADGES = [
  {
    id: 'badge-1',
    src: '/images/Footer/1st image.svg',
    alt: 'GoodFirms Top RPA Company Badge',
    title: 'Top RPA Company'
  },
  {
    id: 'badge-2',
    src: '/images/Footer/2nd image.png',
    alt: 'Software Suggest Highly Recommended Winter 2024',
    title: 'Highly Recommended 2024'
  },
  {
    id: 'badge-3',
    src: '/images/Footer/3rd image.svg',
    alt: 'Clutch Top Software Developers Deltona 2025',
    title: 'Clutch Top Developers 2025'
  },
  {
    id: 'badge-4',
    src: '/images/Footer/4th image.png',
    alt: 'G2 Read Our Reviews on G2',
    title: 'Read Reviews on G2'
  }
];

export default function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 4000);
      setEmailInput('');
    }
  };

  return (
    <footer className="footer-master-root" aria-label="Site Footer">
      {/* Background ambient lighting */}
      <div className="footer-ambient-glow glow-gold-top" aria-hidden="true" />
      <div className="footer-ambient-glow glow-gold-bottom" aria-hidden="true" />
      <div className="footer-grid-overlay" aria-hidden="true" />

      <div className="footer-main-container">
        
        {/* =================================================================
            1. TOP HERO BANNER: Brand Logo, Mission & Newsletter
            ================================================================= */}
        <div className="footer-top-hero-card">
          {/* Company Logo Badge */}
          <div className="footer-brand-logo-wrap">
            <a href="#home" className="footer-logo-link" aria-label="OfficeHub Tech Home">
              <img
                src="/images/OHTLOGO.png"
                alt="OfficeHub Tech - Authorized Zoho Partner Logo"
                className="footer-brand-logo-img"
              />
            </a>
          </div>

          {/* Central Strategic Heading & Subtitle */}
          <div className="footer-hero-center-content">
            <div className="footer-eyebrow-chip">
              <Sparkles size={13} className="chip-sparkle" />
              <span>OFFICIAL ZOHO PARTNER</span>
            </div>
            <h2 className="footer-hero-heading">
              Streamline Your Business <span className="gold-highlight-text">Process With Zoho</span>
            </h2>
            <p className="footer-hero-subtext">
              Elevate your operational excellence and customer satisfaction with Office Hub Tech’s Zoho expertise.
            </p>
          </div>

          {/* Newsletter / Subscription Box */}
          <div className="footer-newsletter-wrap">
            <form onSubmit={handleSubscribe} className="footer-newsletter-form">
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Subscribe for Latest News & Updates..."
                className="footer-email-input"
                required
                aria-label="Email Address for Newsletter"
              />
              <button 
                type="submit" 
                className="footer-newsletter-btn"
                aria-label="Subscribe to newsletter"
              >
                <span>{isSubscribed ? 'Subscribed!' : 'GO'}</span>
                {!isSubscribed && <ArrowRight size={15} />}
              </button>
            </form>
            {isSubscribed && (
              <span className="newsletter-success-note">
                ✓ Thank you for subscribing to Office Hub Tech updates!
              </span>
            )}
          </div>
        </div>

        {/* =================================================================
            2. FOUR-COLUMN NAVIGATION MATRIX
            ================================================================= */}
        <div className="footer-columns-matrix">
          
          {/* Column 1: Quick Links */}
          <div className="footer-nav-col">
            <h3 className="footer-col-title">
              <span className="title-bullet">✦</span> Quick Links
            </h3>
            <ul className="footer-links-list">
              {QUICK_LINKS.map((item, index) => (
                <li key={index} className="footer-link-item">
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-anchor"
                  >
                    <span className="hover-chevron">›</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="footer-nav-col">
            <h3 className="footer-col-title">
              <span className="title-bullet">✦</span> Services
            </h3>
            <ul className="footer-links-list">
              {SERVICES_LINKS.map((item, index) => (
                <li key={index} className="footer-link-item">
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-anchor"
                  >
                    <span className="hover-chevron">›</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Solutions */}
          <div className="footer-nav-col">
            <h3 className="footer-col-title">
              <span className="title-bullet">✦</span> Our Solutions
            </h3>
            <ul className="footer-links-list">
              {SOLUTIONS_LINKS.map((item, index) => (
                <li key={index} className="footer-link-item">
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-anchor"
                  >
                    <span className="hover-chevron">›</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social Presence */}
          <div className="footer-nav-col footer-contact-col">
            <h3 className="footer-col-title">
              <span className="title-bullet">✦</span> Contact
            </h3>
            
            <div className="footer-contact-details">
              
              {/* Phone */}
              <div className="footer-contact-card">
                <div className="contact-icon-bubble" aria-hidden="true">
                  <Phone size={16} />
                </div>
                <div className="contact-meta">
                  <span className="contact-label">Contact Number</span>
                  <a href="tel:4077434854" className="contact-value">
                    (407) 743-4854
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="footer-contact-card">
                <div className="contact-icon-bubble" aria-hidden="true">
                  <Mail size={16} />
                </div>
                <div className="contact-meta">
                  <span className="contact-label">Email Address</span>
                  <a href="mailto:sam@officehubtech.com" className="contact-value email-value">
                    sam@officehubtech.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="footer-contact-card">
                <div className="contact-icon-bubble" aria-hidden="true">
                  <MapPin size={16} />
                </div>
                <div className="contact-meta">
                  <span className="contact-label">Headquarters Location</span>
                  <a 
                    href="https://maps.app.goo.gl/C9M1UNxnVHMn2r5x5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value location-link"
                  >
                    2480 Cherry Laurel Dr, STE# 179, Sanford, FL-32771
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="footer-social-row">
                <span className="social-lead-label">Connect with Us:</span>
                <div className="social-icons-group">
                  <a 
                    href="https://facebook.com/officehubtech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon-btn" 
                    aria-label="OfficeHub Tech Facebook"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://x.com/officehubtech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon-btn" 
                    aria-label="OfficeHub Tech X (Twitter)"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com/officehubtech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon-btn" 
                    aria-label="OfficeHub Tech Instagram"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/company/officehubtech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon-btn" 
                    aria-label="OfficeHub Tech LinkedIn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com/@officehubtech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon-btn" 
                    aria-label="OfficeHub Tech YouTube"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* =================================================================
            3. RECOGNITION & INDUSTRY AWARDS BADGES (With Gentle Floating Animation)
            ================================================================= */}
        <div className="footer-badges-showcase-row">
          <div className="badges-header-badge">
            <ShieldCheck size={14} className="badge-shield-icon" />
            <span>INDUSTRY RECOGNITION & TRUSTED ACCREDITATIONS</span>
          </div>

          <div className="footer-badges-grid">
            {RECOGNITION_BADGES.map((badge) => (
              <div 
                key={badge.id}
                className="footer-badge-card"
                title={badge.title}
              >
                <div className="badge-glow-ambient" aria-hidden="true" />
                <img
                  src={badge.src}
                  alt={badge.alt}
                  className="badge-image-graphic"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* =================================================================
            4. LEGAL LINKS, ASSISTANCE & FEEDBACK BAR
            ================================================================= */}
        <div className="footer-bottom-legal-bar">
          
          {/* Quick Legal Policies */}
          <nav className="footer-legal-links-row" aria-label="Legal and Policy Links">
            <a href="https://officehubtech.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="legal-anchor">
              Privacy Policy
            </a>
            <span className="legal-dot">•</span>
            <a href="https://officehubtech.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="legal-anchor">
              Terms & Condition
            </a>
            <span className="legal-dot">•</span>
            <a href="https://officehubtech.com/sitemap.html" target="_blank" rel="noopener noreferrer" className="legal-anchor">
              Sitemap
            </a>
            <span className="legal-dot">•</span>
            <a href="https://officehubtech.com/gallery" target="_blank" rel="noopener noreferrer" className="legal-anchor">
              Gallery
            </a>
            <span className="legal-dot">•</span>
            <a href="https://zfrmz.com/oIuy982vqgB6eCQXwGjn" target="_blank" rel="noopener noreferrer" className="legal-anchor feedback-anchor">
              <MessageSquareHeart size={14} />
              <span>FEEDBACK</span>
              <ExternalLink size={11} />
            </a>
          </nav>

          {/* Need Help Direct Support Callout */}
          <div className="footer-help-callout">
            <span className="help-prefix">Need Help with purchase?</span>
            <span className="help-call-text">Call us :</span>
            <a href="tel:4077434854" className="help-phone-link">
              (407) 743-4854
            </a>
          </div>

        </div>

        {/* =================================================================
            5. FINAL COPYRIGHT STATEMENT
            ================================================================= */}
        <div className="footer-final-copyright-row">
          <p className="copyright-text">
            © 2026 Copyright by <strong className="gold-author-link">Office Hub Tech</strong> – A Leading Zoho AI Implementation Company. All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}

