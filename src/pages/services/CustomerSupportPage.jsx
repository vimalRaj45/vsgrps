import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Breadcrumb from '../../components/Common/Breadcrumb';
import { motion } from 'framer-motion';

const faqs = [
  { q: 'What customer support services do you offer?', a: 'We provide chatbot development, ticketing system integration, live chat setup, WhatsApp support automation, and email helpdesk systems.' },
  { q: 'Can you build a WhatsApp support chatbot?', a: 'Yes. We build WhatsApp Business API chatbots that handle FAQs, order tracking, and escalation to human agents automatically.' },
  { q: 'Do you provide ongoing support retainers?', a: 'Yes. Monthly retainer plans include dedicated support hours, bug fixes, feature updates, and priority response times.' },
  { q: 'Can you integrate a chatbot with our existing CRM?', a: 'Yes. We integrate chatbots with Zoho, HubSpot, Freshdesk, and custom CRM systems to log all interactions automatically.' },
  { q: 'How long does it take to set up a support system?', a: 'Basic chatbot and helpdesk setups take 2–3 weeks. Complex multi-channel support systems take 4–8 weeks.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };

const CustomerSupportPage = ({ theme, toggleTheme }) => (
  <>
    <Helmet>
      <title>Customer Support Solutions India | Chatbots & Helpdesk | VSGRPS</title>
      <meta name="description" content="Customer support automation in Namakkal, India. WhatsApp chatbots, helpdesk systems, live chat integration. Reduce support costs by 60%. Free demo." />
      <meta name="keywords" content="customer support automation India, chatbot development Namakkal, WhatsApp bot India, helpdesk India, VSGRPS support" />
      <link rel="canonical" href="https://vsgrps.com/services/customer-support" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <main style={{ paddingTop: '80px' }}>
      <section className="section" style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <Breadcrumb crumbs={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'Customer Support' }]} />
          <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Customer Support Solutions</motion.h1>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '1rem 0 2rem' }}>
            Delight your customers 24/7 with intelligent chatbots, automated helpdesks, and WhatsApp support systems built by VSGRPS Technologies.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--color-accent)', color: '#fff', padding: '0.9rem 2rem', borderRadius: '10px', textDecoration: 'none', fontWeight: '600' }}>Get a Free Demo →</a>
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
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Build Your Support System</h2>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--color-accent)', color: '#fff', padding: '1rem 2.5rem', borderRadius: '10px', textDecoration: 'none', fontWeight: '700' }}>Book a Free Consultation</a>
        </div>
      </section>
    </main>
    <Footer />
  </>
);
export default CustomerSupportPage;
