import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import { motion } from 'framer-motion';
import LottieIcon from '../components/Common/LottieIcon';

const services = [
  {
    title: 'Web Development',
    slug: '/services/web-development',
    icon: 'https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json',
    description: 'High-performance, SEO-optimised websites and SaaS platforms built with React, Next.js, and Node.js.',
    benefits: ['Responsive Design', 'SEO Optimized', 'Scalable Backend'],
    cta: 'Learn more →',
  },
  {
    title: 'Automation Solutions',
    slug: '/services/automation-solutions',
    icon: 'https://assets2.lottiefiles.com/packages/lf20_jbrw3hcz.json',
    description: 'Automate invoicing, emails, workflows, and reporting — save 20+ hours per week.',
    benefits: ['WhatsApp Integration', 'Report Automation', 'Lead Management'],
    cta: 'Learn more →',
  },
  {
    title: 'CRM & Dashboards',
    slug: '/services/crm-dashboards',
    icon: 'https://assets2.lottiefiles.com/packages/lf20_kyu7xb1v.json',
    description: 'Real-time CRM dashboards with sales pipeline, customer 360° views, and automated reporting.',
    benefits: ['Real-Time Analytics', 'Role-Based Access', 'Third-Party Integrations'],
    cta: 'Learn more →',
  },
  {
    title: 'Custom Software',
    slug: '/services/custom-software',
    icon: 'https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json',
    description: 'Bespoke ERP systems, internal tools, and B2B portals — you own 100% of the source code.',
    benefits: ['Full Code Ownership', 'NDA Protected', 'Ongoing Support'],
    cta: 'Learn more →',
  },
  {
    title: 'Hosting & Cloud',
    slug: '/services/hosting-cloud',
    icon: 'https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json',
    description: 'Managed cloud hosting on Cloudflare, AWS, and DigitalOcean — 99.9% uptime guaranteed.',
    benefits: ['SSL & CDN Included', 'Daily Backups', 'Zero-Downtime Migration'],
    cta: 'Learn more →',
  },
  {
    title: 'Customer Support',
    slug: '/services/customer-support',
    icon: 'https://assets2.lottiefiles.com/packages/lf20_jbrw3hcz.json',
    description: 'WhatsApp chatbots, helpdesk systems, and live chat integration — support your customers 24/7.',
    benefits: ['WhatsApp Bot', 'Helpdesk Integration', 'CRM Connected'],
    cta: 'Learn more →',
  },
];

const ServicesPage = ({ theme, toggleTheme }) => {
  return (
    <>
      <Helmet>
        <title>Services | VSGRPS Technologies - Digital Solutions India</title>
        <meta name="description" content="Web development, automation, CRM dashboards, custom software, cloud hosting, and customer support services in Namakkal, India. Trusted by 50+ global clients." />
        <link rel="canonical" href="https://vsgrps.com/services" />
      </Helmet>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="services-page" style={{ paddingTop: '80px' }}>
        <section className="section section--hero" style={{ padding: '4rem 0 2rem' }}>
          <div className="container">
            <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'Services' }]} />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-title"
            >
              Our Digital Services
            </motion.h1>
            <p className="section-subtitle" style={{ maxWidth: '600px', margin: '1rem 0 0' }}>
              End-to-end digital solutions for startups and businesses in Namakkal and across India.
            </p>
          </div>
        </section>

        <section className="section" style={{ padding: '3rem 0 5rem' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '28px',
              }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  style={{
                    background: 'var(--surface-card)',
                    borderRadius: '20px',
                    border: '1px solid var(--border-color)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div style={{ width: '72px', height: '72px', marginBottom: '20px' }}>
                    <LottieIcon src={service.icon} size="72px" />
                  </div>

                  <h2 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.6rem' }}>
                    {service.title}
                  </h2>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '1.25rem', flex: 1 }}>
                    {service.description}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                    {service.benefits.map((b, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', fontSize: '0.875rem' }}>
                        <i className="pi pi-check-circle" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Clickable link to the dedicated service page */}
                  <Link
                    to={service.slug}
                    style={{
                      color: 'var(--color-accent)',
                      fontWeight: '700',
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    {service.cta}
                  </Link>
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
