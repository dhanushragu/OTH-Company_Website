import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PageLoader.css';

export default function PageLoader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Progress counter simulation that finishes smoothly in ~1.8 - 2.2s
    const startTime = Date.now();
    const duration = 1800; // 1.8 seconds

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          if (onLoadingComplete) onLoadingComplete();
        }, 350);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="page-loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -25,
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
          }}
        >
          {/* Subtle Ambient Golden Gradients */}
          <div className="loader-ambient-glow" aria-hidden="true" />
          <div className="loader-ambient-mesh" aria-hidden="true" />

          <div className="loader-center-box">
            {/* Logo Badge Container */}
            <motion.div
              className="loader-logo-wrapper"
              initial={{ scale: 0.85, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="logo-card-glow" aria-hidden="true" />
              <img
                src="/images/OHTLOGO.png"
                alt="OfficeHub Tech Logo"
                className="loader-brand-logo"
              />
            </motion.div>

            {/* Premium Typographic Brand Mark */}
            <motion.div 
              className="loader-text-group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="loader-brand-eyebrow">
                <span className="eyebrow-diamond">✦</span>
                <span>ZOHO ADVANCED PARTNER</span>
                <span className="eyebrow-diamond">✦</span>
              </div>

              <h1 className="loader-company-name">
                <span className="name-office">OfficeHub</span>{' '}
                <span className="name-tech">Tech</span>{' '}
                <span className="name-llp">LLP</span>
              </h1>

              <p className="loader-tagline">
                Engineering Enterprise AI &amp; Cloud Transformations
              </p>
            </motion.div>

            {/* Sleek Golden Progress Meter */}
            <div className="loader-progress-track">
              <motion.div
                className="loader-progress-fill"
                style={{ width: `${progress}%` }}
              />
              <div className="loader-progress-spark" style={{ left: `${progress}%` }} />
            </div>

            {/* Percentage & Loading Status */}
            <div className="loader-status-row">
              <span className="loader-status-label">INITIALIZING WORKSPACE</span>
              <span className="loader-pct">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

