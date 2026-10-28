import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const TOTAL_FRAMES = 200;

// Format frame number to 4 digits: e.g. 1 -> "0001"
const getFrameUrl = (frameIndex) => {
  const paddedIndex = String(Math.min(TOTAL_FRAMES, Math.max(1, frameIndex))).padStart(4, '0');
  return `/images/herosection-frames/frame_${paddedIndex}.png`;
};

// Slideshow titles data
const heroSlides = [
  {
    id: 1,
    tag: 'APPLIED ARTIFICIAL INTELLIGENCE',
    titleLead: 'We build',
    titleHighlight: 'custom AI Models',
    titleSuffix: '',
    desc: 'Proprietary machine learning pipelines & neural agents engineered for enterprise scale.',
    accent: 'cyan'
  },
  {
    id: 2,
    tag: 'UNIFIED CLOUD ARCHITECTURE',
    titleLead: 'Custom',
    titleHighlight: 'Zoho solutions',
    titleSuffix: 'Tailored for you',
    desc: 'Bespoke CRM ecosystems, Creator workflows, and zero-latency business automation.',
    accent: 'gold'
  }
];

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef(new Array(TOTAL_FRAMES + 1));
  const currentFrameRef = useRef(1);
  const targetFrameRef = useRef(1);
  const animFrameIdRef = useRef(null);
  const isReadyRef = useRef(false);
  const [isReady, setIsReady] = useState(false);

  // Active slide index (0 or 1) - driven by both timer and scroll position
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [showJumpPrompt, setShowJumpPrompt] = useState(false);
  const [portalScale, setPortalScale] = useState(1);
  const hasAutoJumpedRef = useRef(false);
  const lastScrollYRef = useRef(0);

  // Auto slideshow interval (every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5200);
    return () => clearInterval(timer);
  }, []);

  // Smooth jump to the clients section below hero
  const jumpToNextSection = () => {
    const target = document.getElementById('clients') || document.getElementById('services');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render a specific image on 100% fullscreen canvas with high-DPI and bicubic 'high' smoothing
  const renderFrame = (img) => {
    const canvas = canvasRef.current;
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    const targetWidth = Math.round(displayWidth * dpr);
    const targetHeight = Math.round(displayHeight * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Full 100% cover math: preserve aspect ratio, center image perfectly
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const scale = Math.max(displayWidth / imgWidth, displayHeight / imgHeight);
    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const offsetX = (displayWidth - drawWidth) / 2;
    const offsetY = (displayHeight - drawHeight) / 2;

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  };

  // Find closest available loaded image if target frame is still loading
  const getRenderableImage = (targetIndex) => {
    const images = imagesRef.current;
    const rounded = Math.round(targetIndex);
    if (images[rounded] && images[rounded].complete) {
      return images[rounded];
    }
    for (let i = rounded - 1; i >= 1; i--) {
      if (images[i] && images[i].complete) return images[i];
    }
    for (let i = rounded + 1; i <= TOTAL_FRAMES; i++) {
      if (images[i] && images[i].complete) return images[i];
    }
    return null;
  };

  // Preload and decode all 200 frames asynchronously
  useEffect(() => {
    let isMounted = true;

    const loadAndDecodeFrame = async (index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = getFrameUrl(index);
        
        img.onload = async () => {
          if (!isMounted) return resolve(null);
          if ('decode' in img) {
            try {
              await img.decode();
            } catch {}
          }
          if (isMounted) {
            imagesRef.current[index] = img;
          }
          resolve(img);
        };

        img.onerror = () => resolve(null);
      });
    };

    const preloadPipeline = async () => {
      const frame1 = await loadAndDecodeFrame(1);
      if (!isMounted) return;
      if (frame1) {
        renderFrame(frame1);
      }

      const initialBatch = [];
      for (let i = 2; i <= 25; i++) {
        initialBatch.push(loadAndDecodeFrame(i));
      }
      await Promise.all(initialBatch);
      if (!isMounted) return;

      isReadyRef.current = true;
      setIsReady(true);

      const CHUNK_SIZE = 12;
      for (let i = 26; i <= TOTAL_FRAMES; i += CHUNK_SIZE) {
        if (!isMounted) break;
        const chunk = [];
        for (let j = i; j < i + CHUNK_SIZE && j <= TOTAL_FRAMES; j++) {
          chunk.push(loadAndDecodeFrame(j));
        }
        await Promise.all(chunk);
      }
    };

    preloadPipeline();

    return () => {
      isMounted = false;
    };
  }, []);

  // High-frequency scroll listener tracking progress, slide sync & auto-jump
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollDistance = container.offsetHeight - window.innerHeight;
      
      if (scrollDistance <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / scrollDistance));
      const target = 1 + progress * (TOTAL_FRAMES - 1);
      targetFrameRef.current = target;

      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      // Sync slideshow state based on scroll section
      if (progress < 0.45) {
        setActiveSlideIndex(0);
      } else if (progress >= 0.45 && progress < 0.88) {
        setActiveSlideIndex(1);
      }

      // Show jump prompt when nearing the end (progress >= 0.88)
      if (progress >= 0.88) {
        setShowJumpPrompt(true);
      } else {
        setShowJumpPrompt(false);
      }

      // Portal zoom warp animation (progress 0.90 -> 1.0)
      if (progress > 0.90) {
        const factor = (progress - 0.90) / 0.10;
        setPortalScale(1 + factor * 0.08);
      } else {
        setPortalScale(1);
      }

      // Auto-jump to the next section at the very end (progress >= 0.985)
      if (progress >= 0.985 && !hasAutoJumpedRef.current && isScrollingDown) {
        hasAutoJumpedRef.current = true;
        jumpToNextSection();
      }

      // Reset auto-jump flag when user scrolls back up
      if (progress < 0.82) {
        hasAutoJumpedRef.current = false;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      const img = getRenderableImage(currentFrameRef.current);
      if (img) renderFrame(img);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 60fps / 120fps continuous animation loop
  useEffect(() => {
    let lastRenderedFrame = -1;

    const tick = () => {
      const target = targetFrameRef.current;
      const current = currentFrameRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.005) {
        currentFrameRef.current += diff * 0.12;
        const activeFrame = Math.round(currentFrameRef.current);

        if (activeFrame !== lastRenderedFrame) {
          const img = getRenderableImage(activeFrame);
          if (img) {
            renderFrame(img);
            lastRenderedFrame = activeFrame;
          }
        }
      }

      animFrameIdRef.current = requestAnimationFrame(tick);
    };

    animFrameIdRef.current = requestAnimationFrame(tick);
    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  const currentSlide = heroSlides[activeSlideIndex];

  return (
    <section className="hero-scroll-track" ref={containerRef} id="home">
      {/* 100% Fullscreen Sticky Viewport */}
      <div className="hero-sticky-viewport">
        {/* =================================================================
            100% FULLSCREEN CANVAS (VIDEOS/FRAMES FILL 100% OF THE SPACE)
            ================================================================= */}
        <div 
          className="hero-canvas-portal-wrapper"
          style={{ transform: `scale(${portalScale})` }}
        >
          <canvas ref={canvasRef} className="hero-frame-canvas" />
        </div>

        {/* =================================================================
            LEFT-ALIGNED TRANSPARENT SLIDESHOW TITLES (NO BACKGROUND)
            Rendered DIRECTLY on top of the scrolling video frames
            ================================================================= */}
        <div className={`hero-overlay-slideshow-container ${showJumpPrompt ? 'fade-for-jump' : ''}`}>
          {/* Slide Navigation Stepper Indicator */}
          <div className="hero-slide-stepper">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                className={`slide-step-bar ${activeSlideIndex === idx ? 'active' : ''} bar-${slide.accent}`}
                onClick={() => setActiveSlideIndex(idx)}
              />
            ))}
            <span className="slide-counter-badge">
              0{activeSlideIndex + 1} / 0{heroSlides.length}
            </span>
          </div>

          {/* Slideshow Title Content (Completely Transparent, No Card/Box) */}
          <div key={currentSlide.id} className="hero-slide-content slide-fade-in">
            <div className="slide-category-pill">
              <span className={`slide-dot dot-${currentSlide.accent}`} />
              <span>{currentSlide.tag}</span>
            </div>

            <h1 className="hero-left-title">
              {currentSlide.titleLead}{' '}
              <span className={`stylish-highlight highlight-${currentSlide.accent}`}>
                {currentSlide.titleHighlight}
              </span>{' '}
              {currentSlide.titleSuffix && (
                <span className="stylish-script-suffix">
                  {currentSlide.titleSuffix}
                </span>
              )}
            </h1>

            <p className="hero-left-desc">{currentSlide.desc}</p>
          </div>
        </div>

        {/* Ambient bottom gradient so jump prompt pops out */}
        <div className={`hero-portal-vignette ${showJumpPrompt ? 'active' : ''}`} aria-hidden="true" />

        {/* JUMP ANIMATION CARD (Triggered at end of animation) */}
        <div 
          className={`hero-jump-portal ${showJumpPrompt ? 'visible' : ''}`}
          onClick={jumpToNextSection}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') jumpToNextSection(); }}
          aria-label="Jump to Our Clients Section"
        >
          <div className="hero-jump-pill">
            <span className="jump-pulse-sparkle">✦</span>
            <span>TRUSTED ENTERPRISE NETWORK</span>
            <span className="jump-pulse-ring" />
          </div>

          <div className="hero-jump-cta">
            <span className="jump-cta-text">Explore Our Clients</span>
            <div className="jump-arrow-circle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Minimal loading indicator while initial frames buffer */}
        {!isReady && (
          <div className="hero-loading-pill">
            <span className="pill-spinner" />
            <span>Buffering HD Motion...</span>
          </div>
        )}
      </div>
    </section>
  );
}