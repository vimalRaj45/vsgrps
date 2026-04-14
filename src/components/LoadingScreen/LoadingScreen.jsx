import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase('reveal'), 400);
          setTimeout(() => {
            setPhase('done');
            onComplete();
          }, 1400);
          return 100;
        }
        const increment = prev < 40 ? 4 : prev < 75 ? 3 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 35);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Animated Matrix-like Grid Background */}
          <div className="loading-screen__grid"></div>
          
          <div className="loading-screen__content">
            {/* Branded Vision Logo */}
            <motion.div
              className="loading-screen__logo-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="loading-screen__v-shield">
                <motion.div 
                  className="loading-screen__v-scanner"
                  animate={{ top: ['-10%', '110%', '-10%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <span className="loading-screen__v-text">V</span>
              </div>
              
              {/* Spinning Ring */}
              <motion.div 
                className="loading-screen__ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Typography */}
            <div className="loading-screen__brand">
              <div className="loading-screen__title-wrapper">
                {['V', 'S', 'G', 'R', 'P', 'S'].map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.05), duration: 0.4 }}
                    className="loading-screen__title-char"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <motion.p
                className="loading-screen__vision-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Vision Solution Groups
              </motion.p>
              <motion.div 
                className="loading-screen__values"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <span className="loading-screen__value">Results</span>
                <span className="loading-screen__divider">·</span>
                <span className="loading-screen__value">Performance</span>
              </motion.div>
            </div>

            {/* Progress Area */}
            <div className="loading-screen__progress-section">
              <div className="loading-screen__bar-container">
                <motion.div 
                  className="loading-screen__bar-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="loading-screen__status">
                <span className="loading-screen__status-msg">
                  {progress < 30 ? 'Initializing Matrix...' : progress < 70 ? 'Calibrating Vision...' : 'Launching Excellence...'}
                </span>
                <span className="loading-screen__percent">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
