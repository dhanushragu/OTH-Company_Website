import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'consultation', label: 'Consultation', href: '#consultation' },
  { id: 'our-solutions', label: 'Our Solutions', href: '#our-solutions' },
  { id: 'resources', label: 'Resources', href: '#resources' },
  { id: 'extensions', label: 'Extensions', href: '#extensions' },
  { id: 'contact-us', label: 'Contact Us', href: '#contact-us' },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveItem(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Company Logo */}
        <a href="#home" className="navbar-brand" onClick={() => handleNavClick('home')} aria-label="OfficeHub Tech Home">
          <img
            src="/images/OHTLOGO.png"
            alt="OfficeHub Tech Logo"
            className="brand-logo-img"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${activeItem === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  <span className="nav-link-text">{item.label}</span>
                  {activeItem === item.id && <span className="nav-indicator" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button: Let's Talk */}
        <div className="navbar-action">
          <button
            type="button"
            className="lets-talk-btn"
            onClick={() => alert("Let's Talk clicked!")}
          >
            <span>Let's Talk</span>
            <svg
              className="btn-arrow"
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`mobile-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.id} className="mobile-nav-item">
              <a
                href={item.href}
                className={`mobile-nav-link ${activeItem === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                <span>{item.label}</span>
                {activeItem === item.id && <span className="mobile-indicator-dot"></span>}
              </a>
            </li>
          ))}
          <li className="mobile-nav-action">
            <button
              type="button"
              className="mobile-talk-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                alert("Let's Talk clicked!");
              }}
            >
              <span>Let's Talk</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
