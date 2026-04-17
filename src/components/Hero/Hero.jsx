import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const TypingChar = ({ char, index, delay, isAccent }) => {
  return (
    <motion.span
      className={isAccent ? "hero__char-accent" : ""}
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ 
        opacity: 1, 
        y: [10, -8, 0], // Jumping effect: up-down-settle
        scale: [0.9, 1.1, 1], // Scale bounce
      }}
      transition={{ 
        duration: 0.45,
        times: [0, 0.4, 1], 
        ease: "easeOut",
        delay: delay + (index * 0.07),
      }}
      style={{ 
        display: 'inline-block', 
        whiteSpace: 'pre',
        transformOrigin: 'bottom'
      }}
    >
      {char}
    </motion.span>
  );
};

const TypingText = ({ text, delay, hideCursor = false, cursorDelay = 0, isAccent = false }) => {
  const characters = text.split("");
  
  return (
    <span className={`hero__typing-text ${isAccent ? 'hero__typing-text--accent' : ''}`} style={{ position: 'relative' }}>
      {characters.map((char, index) => (
        <TypingChar 
          key={index} 
          char={char} 
          index={index} 
          delay={delay} 
          isAccent={isAccent}
        />
      ))}
      <motion.span
        className="hero__cursor"
        initial={{ opacity: 0 }}
        animate={hideCursor ? { opacity: 0 } : { opacity: [0, 1, 0] }}
        transition={hideCursor ? { delay: cursorDelay } : { 
          duration: 0.8, 
          repeat: Infinity,
          delay: delay,
          ease: "linear"
        }}
        style={{ 
          display: 'inline-block', 
          width: '3.5px', 
          height: '0.85em',
          background: isAccent ? '#00d2ff' : 'currentColor',
          boxShadow: isAccent ? '0 0 10px #00d2ff' : 'none',
          marginLeft: '4px',
          verticalAlign: 'baseline',
          borderRadius: '2px'
        }}
      />
    </span>
  );
};

const accentPhrases = [
  "Grow Digitally.",
  "Automate.",
  "Drive Results.",
  "Deliver Quality."
];

const Hero = () => {
  const [accentIndex, setAccentIndex] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const mx = ((clientX / innerWidth) - 0.5) * 20;
      const my = ((clientY / innerHeight) - 0.5) * 15;
      if (heroRef.current) {
        heroRef.current.style.setProperty('--parallax-x', `${mx}px`);
        heroRef.current.style.setProperty('--parallax-y', `${my}px`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let interval;
    const initialDelay = setTimeout(() => {
      interval = setInterval(() => {
        setAccentIndex((prev) => (prev + 1) % accentPhrases.length);
      }, 3500);
    }, 3500);

    return () => {
      clearTimeout(initialDelay);
      if (interval) clearInterval(interval);
    };
  }, []);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" style={{ transform: 'translate(var(--parallax-x, 0), var(--parallax-y, 0))' }}></div>
        <div className="hero__orb hero__orb--2" style={{ transform: 'translate(calc(var(--parallax-x, 0) * -0.6), calc(var(--parallax-y, 0) * -0.6))' }}></div>
        <div className="hero__grid-pattern"></div>
        
        <div className="hero__scanlines">
          <div className="hero__scanline hero__scanline--1"></div>
          <div className="hero__scanline hero__scanline--2"></div>
        </div>
      </div>

      <div className="hero__inner container">
        <div className="hero__content">
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="hero__badge-dot"></span>
            Trusted by 50+ Global Clients
            <div className="hero__badge-glitch"></div>
          </motion.div>

          {/* Floating Tech Symbols */}
          <div className="hero__symbols">
            <div className="hero__symbol hero__symbol--1">&lt;/&gt;</div>
            <div className="hero__symbol hero__symbol--2">{`{ }`}</div>
          </div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero__line">
              <TypingText text="Build Smarter." delay={0.4} hideCursor cursorDelay={1.5} />
            </div>
            <div className="hero__line">
              <TypingText text="Scale Faster." delay={1.5} hideCursor cursorDelay={2.7} />
            </div>
            <div className="hero__line">
              <AnimatePresence mode="wait">
                <motion.div
                  key={accentPhrases[accentIndex]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <TypingText 
                    text={accentPhrases[accentIndex]} 
                    delay={0} 
                    isAccent={true} 
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            We transform complex business ideas into 
            <strong> Premium Digital Solutions</strong>. From intelligent automation 
            to high-performance web apps, we build the future of your business.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a href="#projects" className="btn btn-primary hero__btn hero__btn--cta">
              Get Started Now
              <i className="pi pi-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-outline hero__btn">
              Book a Free Audit
            </a>
          </motion.div>

          <motion.div
            className="hero__trust-bar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className="trust-text">SECURE • SCALABLE • FUTURE-READY</span>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="hero__visual-main">
            <div className="hero__lottie-primary">
              <div className="hero__lottie-container">
                {isClient && (
                  <dotlottie-wc 
                    src="https://lottie.host/53f42021-31ae-493c-b1b2-48e90284a730/CGvBx5r6P0.lottie" 
                    style={{ width: '110%', height: '105%' }} 
                    autoplay 
                    loop
                  ></dotlottie-wc>
                )}
              </div>
              <div className="hero__lottie-glow"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
