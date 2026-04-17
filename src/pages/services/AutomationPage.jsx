import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Breadcrumb from '../../components/Common/Breadcrumb';
import { motion } from 'framer-motion';

const faqs = [
  { q: 'What business processes can you automate?', a: 'We automate invoice generation, email workflows, lead management, report creation, data synchronisation, WhatsApp notifications, and more. If you do it manually on a computer, we can likely automate it.' },
  { q: 'Do I need coding knowledge to use your automation systems?', a: 'No. We build dashboards with simple interfaces so your team can manage automations without any technical knowledge.' },
  { q: 'What is the ROI of automation?', a: 'Our clients typically recover their investment within 3–6 months. Most report saving 15–30 hours per week per employee after deployment.' },
  { q: 'Which tools do you integrate with?', a: 'We integrate with WhatsApp Business API, Google Sheets, Zoho, HubSpot, Tally, Notion, Slack, and most REST APIs.' },
  { q: 'Can you automate my HR or payroll processes?', a: 'Yes. We have built payroll automation, attendance tracking, and leave management systems for SMEs across India.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const AutomationPage = ({ theme, toggleTheme }) => (
  <>
    <Helmet>
      <title>Business Automation Solutions India | VSGRPS Technologies Namakkal</title>
      <meta name="description" content="Custom business automation solutions in Namakkal, India. Automate invoicing, emails, workflows, and reporting. Save 20+ hours/week. Trusted by 50+ businesses. Free consultation." />
      <meta name="keywords" content="business automation India, workflow automation Namakkal, process automation Tamil Nadu, RPA India, VSGRPS automation" />
      <link rel="canonical" href="https://vsgrps.com/services/automation-solutions" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <main style={{ paddingTop: '80px' }}>
      <section className="section" style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'Automation Solutions' }]} />
          <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Business Automation Solutions in India
          </motion.h1>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '1rem 0 2rem' }}>
            Stop doing repetitive tasks manually. VSGRPS Technologies builds intelligent automation systems that save your team 20–30 hours every week — from Namakkal, serving businesses across India and worldwide.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--color-accent)', color: '#fff', padding: '0.9rem 2rem', borderRadius: '10px', textDecoration: 'none', fontWeight: '600' }}>
            Get a Free Automation Audit →
          </a>
        </div>
      </section>

      <section className="section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem' }}>What We Automate</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Invoice & Billing', desc: 'Auto-generate invoices, send payment reminders, and sync with your accounting software.' },
              { title: 'Email & WhatsApp Campaigns', desc: 'Trigger personalised emails and WhatsApp messages based on customer actions.' },
              { title: 'Lead Management', desc: 'Capture leads from forms, WhatsApp, and ads. Route them to the right salesperson automatically.' },
              { title: 'Report Generation', desc: 'Daily/weekly business reports delivered to your inbox or WhatsApp — zero manual work.' },
              { title: 'Data Sync', desc: 'Keep your CRM, ERP, and spreadsheets in perfect sync across all platforms.' },
              { title: 'Attendance & HR', desc: 'Automate attendance tracking, leave approvals, and payroll calculations.' },
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
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Ready to Automate Your Business?</h2>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--color-accent)', color: '#fff', padding: '1rem 2.5rem', borderRadius: '10px', textDecoration: 'none', fontWeight: '700' }}>
            Book a Free Automation Audit
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </>
);
export default AutomationPage;
