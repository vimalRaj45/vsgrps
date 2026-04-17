import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Breadcrumb from '../../components/Common/Breadcrumb';
import { motion } from 'framer-motion';

const faqs = [
  { q: 'What is a CRM dashboard?', a: 'A CRM (Customer Relationship Management) dashboard is a centralised interface that shows your team all customer data, deals, interactions, and sales pipeline in real time.' },
  { q: 'Do you build custom CRM or integrate with existing ones?', a: 'Both. We build fully custom CRMs from scratch and also create custom dashboards for Zoho CRM, HubSpot, Salesforce, and Freshdesk.' },
  { q: 'How much does a custom CRM cost?', a: 'Simple CRM systems start at ₹1,50,000. Full-featured platforms with automation, reporting, and integrations range from ₹3,00,000 to ₹10,00,000+.' },
  { q: 'Can the CRM be accessed on mobile?', a: 'Yes. All our CRM dashboards are fully responsive and can be packaged as a PWA for mobile access without an app store.' },
  { q: 'Do you provide CRM training and support?', a: 'Yes. Every CRM project includes team training sessions and 3 months of post-launch support.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const CRMPage = ({ theme, toggleTheme }) => (
  <>
    <Helmet>
      <title>Custom CRM Dashboard Development India | VSGRPS Technologies</title>
      <meta name="description" content="Custom CRM and dashboard development in Namakkal, India. Real-time analytics, sales pipeline, customer management. Starting at ₹1,50,000. Free demo available." />
      <meta name="keywords" content="CRM development India, custom CRM Namakkal, dashboard development Tamil Nadu, sales dashboard India, VSGRPS CRM" />
      <link rel="canonical" href="https://vsgrps.com/services/crm-dashboards" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <main style={{ paddingTop: '80px' }}>
      <section className="section" style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'CRM & Dashboards' }]} />
          <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Custom CRM & Dashboard Development in India
          </motion.h1>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '1rem 0 2rem' }}>
            Visualise your entire business in one place. VSGRPS Technologies builds powerful, real-time CRM dashboards and analytics platforms tailored to your exact workflow — from Namakkal, trusted by 50+ businesses.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--color-accent)', color: '#fff', padding: '0.9rem 2rem', borderRadius: '10px', textDecoration: 'none', fontWeight: '600' }}>
            Request a Free CRM Demo →
          </a>
        </div>
      </section>

      <section className="section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem' }}>CRM & Dashboard Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Sales Pipeline', desc: 'Visualise deals at every stage. Drag-and-drop Kanban boards for your sales team.' },
              { title: 'Customer 360° View', desc: 'See all interactions, purchases, support tickets, and notes for every customer.' },
              { title: 'Real-Time Analytics', desc: 'Live charts and KPIs that update instantly — no page refresh needed.' },
              { title: 'Role-Based Access', desc: 'Control who sees what. Admin, manager, and team member permission levels.' },
              { title: 'Automated Reports', desc: 'Daily, weekly, or monthly reports delivered to your email automatically.' },
              { title: 'Third-Party Integrations', desc: 'Connect with Zoho, HubSpot, WhatsApp, Tally, Google Sheets, and more.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ background: 'var(--surface-card)', borderRadius: '16px', border: '1px solid var(--border-color)', padding: '1.75rem' }}>
                <h3 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
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
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Build Your Custom CRM Today</h2>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--color-accent)', color: '#fff', padding: '1rem 2.5rem', borderRadius: '10px', textDecoration: 'none', fontWeight: '700' }}>
            Get a Free Quote
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </>
);
export default CRMPage;
