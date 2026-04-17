import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Breadcrumb from '../../components/Common/Breadcrumb';
import { motion } from 'framer-motion';

const faqs = [
  { q: 'What is custom software development?', a: 'Custom software is built specifically for your business — unlike off-the-shelf tools, it fits your processes, scales as you grow, and gives you full ownership.' },
  { q: 'How much does custom software cost in India?', a: 'Simple tools start at ₹75,000. Mid-size applications range from ₹2,00,000 to ₹8,00,000. Enterprise platforms are quoted individually.' },
  { q: 'Who owns the source code?', a: 'You do. Full source code ownership is transferred to you upon final payment.' },
  { q: 'Do you sign an NDA?', a: 'Yes, always. We sign a mutual NDA before any discovery call to protect your business idea.' },
  { q: 'Can you maintain the software after launch?', a: 'Yes. We offer monthly retainer plans for ongoing maintenance, feature additions, and bug fixes.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };

const CustomSoftwarePage = ({ theme, toggleTheme }) => (
  <>
    <Helmet>
      <title>Custom Software Development India | VSGRPS Technologies Namakkal</title>
      <meta name="description" content="Custom software development in Namakkal, India. Bespoke business apps, ERP, internal tools. NDA protected. You own the code. Free consultation." />
      <meta name="keywords" content="custom software development India, bespoke software Namakkal, ERP development India, VSGRPS custom software" />
      <link rel="canonical" href="https://vsgrps.com/services/custom-software" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <main style={{ paddingTop: '80px' }}>
      <section className="section" style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'Custom Software' }]} />
          <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Custom Software Development in India</motion.h1>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '1rem 0 2rem' }}>
            Off-the-shelf tools rarely fit perfectly. VSGRPS builds tailored software — you own every line of code.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--color-accent)', color: '#fff', padding: '0.9rem 2rem', borderRadius: '10px', textDecoration: 'none', fontWeight: '600' }}>Discuss Your Requirements →</a>
        </div>
      </section>
      <section className="section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem' }}>What We Build</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {['ERP Systems', 'Internal Tools', 'B2B Portals', 'Data Processing', 'Industry-Specific Apps', 'API Development'].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ background: 'var(--surface-card)', borderRadius: '16px', border: '1px solid var(--border-color)', padding: '1.75rem' }}>
                <h3 style={{ fontWeight: '700' }}>{t}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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
      <section className="section" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Start Your Custom Project</h2>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--color-accent)', color: '#fff', padding: '1rem 2.5rem', borderRadius: '10px', textDecoration: 'none', fontWeight: '700' }}>Free Consultation</a>
        </div>
      </section>
    </main>
    <Footer />
  </>
);
export default CustomSoftwarePage;
