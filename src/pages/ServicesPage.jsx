import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion';
import LottieIcon from '../components/Common/LottieIcon';

const services = [
  {
    title: 'Web Development',
    keyword: 'Web development for startups India',
    icon: 'https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json',
    description: 'We build high-performance, responsive websites tailored for the modern Indian market. Our web development for startups in India focuses on speed, security, and conversion.',
    benefits: ['Responsive Design', 'SEO Optimized', 'Scalable Backend'],
    cta: 'Build your web presence today'
  },
  {
    title: 'App Development',
    keyword: 'App development startup India',
    icon: 'https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json',
    description: 'Turn your startup idea into a mobile reality. Our app development for startups in India delivers seamless iOS and Android experiences with cutting-edge tech.',
    benefits: ['Native Performance', 'Intuitive UI/UX', 'Cloud Integration'],
    cta: 'Launch your mobile app'
  },
  {
    title: 'Digital Marketing',
    keyword: 'Digital marketing for small business India',
    icon: 'https://assets2.lottiefiles.com/packages/lf20_jbrw3hcz.json',
    description: 'Grow your brand with data-driven strategies. Our digital marketing for small businesses in India ensures you reach the right audience at the right time.',
    benefits: ['Targeted Campaigns', 'Social Media Growth', 'ROI Tracking'],
    cta: 'Start growing your brand'
  },
  {
    title: 'SaaS Development',
    keyword: 'SaaS product development India',
    icon: 'https://assets2.lottiefiles.com/packages/lf20_kyu7xb1v.json',
    description: 'Build the next big SaaS product with VSGRPS. Our SaaS product development in India covers everything from MVP to full-scale enterprise solutions.',
    benefits: ['Multi-tenant Architecture', 'Subscription Management', 'Zero-Downtime Updates'],
    cta: 'Develop your SaaS product'
  }
];

const ServicesPage = ({ theme, toggleTheme }) => {
  return (
    <>
      <Helmet>
        <title>Services | VSGRPS Technologies - Digital Solutions Company India</title>
        <meta name="description" content="Explore our premium services: web development for startups India, app development startup India, and digital marketing for small business India. Based in Namakkal." />
        <link rel="canonical" href="https://vsgrps.com/services" />
      </Helmet>
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="services-page">
        <section className="section section--hero">
          <div className="container">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-title text-center"
            >
              Our Premium Digital Services
            </motion.h1>
            <p className="section-subtitle text-center">
              Confident, client-focused solutions for startups and small businesses in Namakkal and across India.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="service-card p-5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ background: 'var(--surface-card)', borderRadius: '24px', border: '1px solid var(--border-color)' }}
                >
                  <div style={{ width: '80px', height: '80px', marginBottom: '24px' }}>
                    <LottieIcon src={service.icon} size="80px" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                  <p className="text-secondary mb-4" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                  <ul className="mb-5" style={{ listStyle: 'none', padding: 0 }}>
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="mb-2">
                        <i className="pi pi-check-circle mr-2" style={{ color: 'var(--color-accent)' }}></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="font-bold" style={{ color: 'var(--color-accent)' }}>
                    {service.cta} →
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ServicesPage;
