import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Breadcrumb from '../../components/Common/Breadcrumb';
import { motion } from 'framer-motion';

const faqs = [
  { q: 'What hosting services do you provide?', a: 'We manage deployments on Cloudflare Pages, AWS, DigitalOcean, and Vercel. We handle domain setup, SSL, CDN, and ongoing server management.' },
  { q: 'Do you offer managed cloud hosting?', a: 'Yes. Our managed hosting plans cover monitoring, security patches, backups, and uptime alerts starting at ₹3,000/month.' },
  { q: 'Can you migrate my existing website to a faster host?', a: 'Yes. We migrate websites and applications with zero downtime. We handle DNS, SSL, and database migration end-to-end.' },
  { q: 'What is your average uptime guarantee?', a: 'We target 99.9% uptime on all managed hosting plans, backed by monitoring alerts and rapid incident response.' },
  { q: 'Do you provide backup services?', a: 'Yes. Daily automated backups with 30-day retention are included in all managed plans.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };

const HostingPage = ({ theme, toggleTheme }) => (
  <>
    <Helmet>
      <title>Cloud Hosting & DevOps Services India | VSGRPS Technologies</title>
      <meta name="description" content="Managed cloud hosting and DevOps services in Namakkal, India. Cloudflare, AWS, DigitalOcean. 99.9% uptime. SSL, CDN, backups included. Starting ₹3,000/month." />
      <meta name="keywords" content="cloud hosting India, managed hosting Namakkal, DevOps India, Cloudflare Pages India, VSGRPS hosting" />
      <link rel="canonical" href="https://vsgrps.com/services/hosting-cloud" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <main style={{ paddingTop: '80px' }}>
      <section className="section" style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'Hosting & Cloud' }]} />
          <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Cloud Hosting & DevOps Services</motion.h1>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '1rem 0 2rem' }}>
            Fast, secure, and reliable cloud infrastructure. VSGRPS manages your entire hosting stack so you can focus on your product.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--color-accent)', color: '#fff', padding: '0.9rem 2rem', borderRadius: '10px', textDecoration: 'none', fontWeight: '600' }}>Get Hosting Quote →</a>
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
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Ready for Managed Cloud?</h2>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--color-accent)', color: '#fff', padding: '1rem 2.5rem', borderRadius: '10px', textDecoration: 'none', fontWeight: '700' }}>Start Free Migration</a>
        </div>
      </section>
    </main>
    <Footer />
  </>
);
export default HostingPage;
