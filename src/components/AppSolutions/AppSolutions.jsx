import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from 'primereact/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LottieIcon from '../Common/LottieIcon';
import './AppSolutions.css';

gsap.registerPlugin(ScrollTrigger);

import scoutApp from '../../assets/scout-app.png';

const AppSolutions = ({ onInstall, isInstalled }) => {
  const featuresRef = useRef(null);

  const features = [
    {
      icon: 'https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json',
      color: '#3B82F6',
      title: 'Instant Setup (No Stores)',
      desc: 'Skip complicated app store reviews. Users can install directly from browsers instantly, increasing conversion rates.'
    },
    {
      icon: 'https://assets2.lottiefiles.com/packages/lf20_touohxv0.json',
      color: '#8B5CF6',
      title: 'Highly Cost-Effective',
      desc: 'Avoid paying for expensive native mobile developers. You get a unified codebase with an app-like experience.'
    },
    {
      icon: 'https://assets2.lottiefiles.com/packages/lf20_3rwasyjy.json',
      color: '#F59E0B',
      title: 'Lightning Fast Performance',
      desc: 'Experience incredibly fast load times and perfectly smooth scrolling with modern service workers caching.'
    },
    {
      icon: 'https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json',
      color: '#10B981',
      title: 'Reliable Offline Access',
      desc: 'Advanced caching ensures that even if users lose internet, core pages and features continue to work flawlessly.'
    }
  ];

  useGSAP(() => {
    const cards = gsap.utils.toArray('.pro-feature-card');
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 85%",
      },
      y: 60,
      opacity: 0,
      scale: 0.95,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out"
    });

    cards.forEach(card => {
      const iconWrapper = card.querySelector('.pro-feature-icon-wrapper');
      const icon = card.querySelector('.pro-feature-icon');
      const glow = card.querySelector('.pro-feature-card-glow');
      
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - 100; // Center glow (200px width)
        const y = e.clientY - rect.top - 100;
        
        gsap.to(glow, {
          x,
          y,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      card.addEventListener('mousemove', handleMouseMove);
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -8, duration: 0.4, ease: "power2.out", borderColor: "rgba(59, 130, 246, 0.3)" });
        gsap.to(icon, { scale: 1.15, rotation: 12, duration: 0.4, ease: "back.out(2)" });
        
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        gsap.to(glow, { opacity: isDark ? 0.25 : 0.15, duration: 0.3 });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, duration: 0.4, ease: "power2.out", borderColor: "var(--color-border)" });
        gsap.to(iconWrapper, { scale: 1, duration: 0.4, ease: "power2.out" });
        gsap.to(icon, { rotation: 0, duration: 0.4, ease: "power2.out" });
        gsap.to(glow, { opacity: 0, duration: 0.4 });
      });
    });
  }, { scope: featuresRef });

  return (
    <section id="app-solutions" className="section app-solutions">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">
            <LottieIcon src="https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json" size="24px" />
            Smart App Solutions
          </span>
          <h2 className="section-title">App-Like Experience at Website Cost</h2>
          <p className="section-subtitle">
            We build smart web applications that look, feel, and work like native mobile apps. 
            <span className="font-bold text-accent block mt-2" style={{ fontSize: '1.15rem' }}>
               You get a Website + App BOTH.
            </span>
          </p>
        </motion.div>

        <div className="app-solutions__grid">
          {/* Visual Illustration Column */}
          <motion.div 
            className="app-solutions__visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="app-solutions__illustration-container">
              <img src={scoutApp} alt="Custom Web Application and Smart Business Solutions at VSGRPS" className="app-solutions__illustration" />
              <div className="app-solutions__illustration-bg"></div>
            </div>
          </motion.div>

          <div className="app-solutions__cards-stack">
            {/* Comparison Card 1: Traditional Mobile App */}
            <motion.div 
              className="app-solutions__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="app-solutions__card-header pb-4 border-bottom">
                <i className="pi pi-apple text-accent text-3xl mb-3 mr-2"></i>
                <i className="pi pi-android text-accent text-3xl mb-3"></i>
                <h3 className="text-xl font-bold">Traditional Mobile App</h3>
                <p className="text-secondary text-sm">Expensive and complex</p>
              </div>
              <ul className="app-solutions__list mt-4">
                <li>High development and maintenance cost</li>
                <li>Wait times for App Store approvals</li>
                <li>Users must download heavy files</li>
              </ul>
            </motion.div>

            {/* Comparison Card 2: VSGRPS Web App (THE SOLUTION) */}
            <motion.div 
              className="app-solutions__card app-solutions__card--highlighted"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="app-solutions__card-badge">SMART SOLUTION</div>
              <div className="app-solutions__card-header pb-4 border-bottom">
                <i className="pi pi-bolt text-3xl mb-3" style={{ color: '#F1C40F' }}></i>
                <h3 className="text-xl font-bold">VSGRPS Smart Web App</h3>
                <p className="text-color-secondary text-sm">App-like feel without the high cost</p>
              </div>
              <ul className="app-solutions__list mt-4">
                <li><span className="font-bold text-color">Get a Website + App BOTH</span></li>
                <li>Installs directly from your browser</li>
                <li>Fast loading and smooth performance</li>
                <li>Reliable offline access</li>
              </ul>
              <motion.button 
                className={`app-solutions__premium-cta mt-5 align-self-start md:align-self-center ${isInstalled ? 'installed-cta' : ''}`}
                onClick={!isInstalled ? onInstall : undefined}
                whileHover={!isInstalled ? { scale: 1.03, y: -2 } : {}}
                whileTap={!isInstalled ? { scale: 0.97 } : {}}
              >
                <div className="cta-inner flex align-items-center justify-content-center">
                  <i className={`pi ${isInstalled ? 'pi-check-circle' : 'pi-cloud-download'} text-2xl mr-3 cta-icon`}></i>
                  <div className="text-left flex flex-column">
                    <span className="font-bold text-white line-height-1" style={{ fontSize: '1rem' }}>
                      {isInstalled ? 'App Installed Already' : 'Install Demo App'}
                    </span>
                  </div>
                </div>
                {!isInstalled && <div className="cta-shimmer"></div>}
              </motion.button>
            </motion.div>
          </div>
        </div>


        {/* Pro Features Grid with GSAP */}
        <div className="mt-8 pt-5 pro-features-section" ref={featuresRef}>
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold" style={{ color: 'var(--color-heading)' }}>
              Why Choose a <span style={{ color: 'var(--color-accent)' }}>Smart App?</span>
            </h3>
            <p className="text-secondary mt-2 text-lg">Discover the superior advantages of modern web applications</p>
          </div>

          <div className="pro-features-grid mt-5">
            {features.map((feature, index) => (
              <div key={index} className="pro-feature-card">
                <div 
                  className="pro-feature-card-glow" 
                ></div>
                <div className="pro-feature-card-content flex flex-column h-full text-center">
                  <div className="pro-feature-icon">
                    <LottieIcon src={feature.icon} size="80px" />
                  </div>
                  <h4 className="pro-feature-title">{feature.title}</h4>
                  <p className="pro-feature-desc">{feature.desc}</p>
                </div>
                <div className="pro-feature-arrow">
                  <i className="pi pi-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSolutions;
