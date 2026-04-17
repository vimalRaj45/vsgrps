import React from 'react';
import { motion } from 'framer-motion';
import './TechStack.css';

const technologies = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Razorpay', icon: 'https://cdn.simpleicons.org/razorpay' },
  { name: 'Google Sheets', icon: 'https://cdn.simpleicons.org/googlesheets' },
  { name: 'Apps Script', icon: 'https://cdn.simpleicons.org/googleappsscript' },
  { name: 'EmailJS', icon: 'https://cdn.simpleicons.org/maildotru' },
  { name: 'Brevo', icon: 'https://cdn.simpleicons.org/brevo' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Render', icon: 'https://cdn.simpleicons.org/render' },
  { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase' },
  { name: 'Neon DB', icon: "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M39.3458%200.0111238V40L23.9933%2026.4169V39.7363H0V0L39.3458%200.0111238ZM4.82299%2034.9133H19.1703V15.8337L34.5231%2029.4166V4.8327L4.82299%204.82418V34.9133Z'%20fill='%2334D59A'/%3e%3c/svg%3e" },
];

const TechStack = () => {
  // Duplicate array for seamless marquee
  const marqueeItems = [...technologies, ...technologies];

  return (
    <section id="tech-stack" className="section tech-stack">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">
            <i className="pi pi-wrench"></i>
            Tech Stack
          </span>
          <h2 className="section-title">Technologies We Use</h2>
          <p className="section-subtitle">
            We work with the best tools in the industry to deliver outstanding results.
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="tech-stack__marquee">
        <div className="tech-stack__track">
          {marqueeItems.map((tech, index) => (
            <div key={`row1-${index}`} className="tech-stack__item">
              <img src={tech.icon} alt={tech.name} width="40" height="40" loading="lazy" className="tech-stack__icon" />
              <span className="tech-stack__name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (reversed) */}
      <div className="tech-stack__marquee tech-stack__marquee--reverse">
        <div className="tech-stack__track">
          {[...marqueeItems].reverse().map((tech, index) => (
            <div key={`row2-${index}`} className="tech-stack__item">
              <img src={tech.icon} alt={tech.name} width="40" height="40" loading="lazy" className="tech-stack__icon" />
              <span className="tech-stack__name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
