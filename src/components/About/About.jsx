import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './About.css';

import scoutAbout from '../../assets/scout-about.png';

const counters = [
  { end: 4, suffix: '+', label: 'Projects Completed' },
  { end: 1, suffix: '', label: 'Ongoing Project' },
  { end: 100, suffix: '%', label: 'Client Satisfaction' },
  { end: 3, suffix: '+', label: 'Years of Experience' },
];

const AnimatedCounter = ({ end, suffix, label, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div className="about__counter">
      <span className="about__counter-number">
        {count}{suffix}
      </span>
      <span className="about__counter-label">{label}</span>
    </div>
  );
};

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="about" className="section section-alt about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.0, 0.0, 0.2, 1] }}
        >
          <span className="section-badge">
            <i className="pi pi-info-circle"></i>
            About Us
          </span>
          <h2 className="section-title">Beyond Software — We Create Impact</h2>
          <p className="section-subtitle">
            Vision Solution Groups (VSGRPS) is a technology-driven digital solutions provider 
            focused on delivering Results and Performance through efficient, scalable systems.
          </p>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.0, 0.0, 0.2, 1] }}
          >
            <div className="about__illustration-wrapper">
              <img src={scoutAbout} alt="VSGRPS Professional Software Development and Digital Transformation Illustration" className="about__illustration" />
              <div className="about__illustration-glow"></div>
            </div>
          </motion.div>

          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.0, 0.0, 0.2, 1] }}
          >
            <h3 className="about__heading">
              Our Goal is to <span className="text-accent">Simplify Growth</span>
            </h3>
            <p className="about__description">
              We combine development expertise with practical business understanding to deliver 
              solutions that create real impact. Our approach is simple — we don’t just build software, 
              we create systems that simplify processes, improve productivity, and support long-term growth.
            </p>
            
            <div className="about__highlights">
              <div className="about__highlight">
                <i className="pi pi-check-circle"></i>
                <span>Practical & Reliable Systems</span>
              </div>
              <div className="about__highlight">
                <i className="pi pi-check-circle"></i>
                <span>Clean & Scalable Codebase</span>
              </div>
              <div className="about__highlight">
                <i className="pi pi-check-circle"></i>
                <span>User-Focused Design Flow</span>
              </div>
            </div>

            <div className="about__counters mt-6">
              {counters.slice(0, 2).map((counter, index) => (
                <AnimatedCounter
                  key={index}
                  end={counter.end}
                  suffix={counter.suffix}
                  label={counter.label}
                  inView={inView}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
