import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Breadcrumb from '../../components/Common/Breadcrumb';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: 'How much does web development cost in India?',
    a: 'Our web development projects start at ₹15,000 for landing pages, ₹30,000 for business websites, and ₹50,000+ for complex SaaS platforms. We offer transparent, milestone-based pricing.',
  },
  {
    q: 'How long does a typical web development project take?',
    a: 'A standard business website takes 4–6 weeks. Complex web applications and SaaS platforms take 3–6 months depending on scope and integrations.',
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Yes. All projects include 3 months of free bug-fix support. We also offer annual maintenance packages starting at ₹20,000/year.',
  },
  {
    q: 'What technologies do you use for web development?',
    a: 'We specialise in React, Next.js, Node.js, Python (FastAPI/Django), PostgreSQL, and MongoDB. We also build on Vite for blazing-fast front-end delivery.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Absolutely. We conduct a full UX audit first, then deliver a redesign proposal. Most redesign projects are completed in 6–8 weeks.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const WebDevelopmentPage = ({ theme, toggleTheme }) => (
  <>
    <Helmet>
      <title>Web Development Services India | VSGRPS Technologies Namakkal</title>
      <meta name="description" content="Professional web development services in Namakkal, India. React, Next.js, Node.js experts. Custom websites, SaaS platforms, and e-commerce solutions starting at ₹50,000. Free consultation." />
      <meta name="keywords" content="web development Namakkal, web development company India, React developer India, Next.js development, custom website India, VSGRPS" />
      <link rel="canonical" href="https://vsgrps.com/services/web-development" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>

    <Navbar theme={theme} toggleTheme={toggleTheme} />

    <main style={{ paddingTop: '80px' }}>
      <section className="section section--hero" style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <Breadcrumb crumbs={[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'Web Development' },
          ]} />
          <motion.h1
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Web Development Services in India
          </motion.h1>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '1rem 0 2rem' }}>
            From pixel-perfect landing pages to enterprise-grade SaaS platforms — VSGRPS Technologies
            delivers world-class web development services from Namakkal, Tamil Nadu, trusted by 50+ global clients.
          </p>
          <a
            href="/contact"
            className="btn-primary"
            style={{
              display: 'inline-block',
              background: 'var(--color-accent)',
              color: '#fff',
              padding: '0.9rem 2rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '600',
            }}
          >
            Get a Free Web Development Quote →
          </a>
        </div>
      </section>

      {/* What We Build */}
      <section className="section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
            What We Build
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '700px' }}>
            Our web development team in Namakkal has delivered 100+ projects across India and 15+ countries.
            We don't build cookie-cutter sites — every project is engineered for performance, SEO, and long-term scale.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Business Websites', desc: 'Professional, fast, and SEO-optimised websites that convert visitors into clients.' },
              { title: 'SaaS Platforms', desc: 'Multi-tenant SaaS apps with authentication, billing, dashboards, and role management.' },
              { title: 'E-commerce Stores', desc: 'Shopify, WooCommerce, or fully custom stores with payment gateway integration.' },
              { title: 'Web Applications', desc: 'Complex React/Next.js apps with real-time features, APIs, and cloud hosting.' },
              { title: 'Landing Pages', desc: 'High-conversion landing pages optimised for Google Ads and organic traffic.' },
              { title: 'Progressive Web Apps', desc: 'Offline-capable, installable PWAs that work like native apps on any device.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: 'var(--surface-card)',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  padding: '1.75rem',
                }}
              >
                <h3 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ padding: '4rem 0', background: 'var(--surface-section)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}>Our Development Process</h2>
          <ol style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
            {['Discovery & Planning', 'UI/UX Design', 'Development', 'Testing & QA', 'Launch', 'Support'].map((step, i) => (
              <li key={i} style={{ background: 'var(--surface-card)', borderRadius: '12px', padding: '1.5rem', border: '1px solid var(--border-color)' }}>
                <div style={{ color: 'var(--color-accent)', fontWeight: '800', fontSize: '1.5rem', marginBottom: '0.5rem' }}>0{i + 1}</div>
                <div style={{ fontWeight: '600' }}>{step}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Case Study */}
      <section className="section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Case Study: CertifyPro</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', lineHeight: '1.8' }}>
            We built <strong>CertifyPro</strong> — a batch certificate generation SaaS — from scratch.
            It handles 10,000+ certificates per session with zero data retention. Built with React, Node.js,
            and Cloudflare Pages. Now trusted by 200+ institutions across India.
            <br /><br />
            <a href="https://certifypro.vsgrps.com" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--color-accent)', fontWeight: '600' }}>
              View CertifyPro Live →
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ padding: '4rem 0', background: 'var(--surface-section)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px' }}>
            {faqs.map(({ q, a }, i) => (
              <div key={i} style={{ background: 'var(--surface-card)', borderRadius: '12px', border: '1px solid var(--border-color)', padding: '1.5rem' }}>
                <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', fontSize: '1rem' }}>{q}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.9rem' }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Ready to Build Your Website?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Join 50+ businesses that trust VSGRPS Technologies for web development in India.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--color-accent)', color: '#fff', padding: '1rem 2.5rem', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', fontSize: '1.05rem' }}>
            Start Your Project Today
          </a>
        </div>
      </section>
    </main>

    <Footer />
  </>
);

export default WebDevelopmentPage;
