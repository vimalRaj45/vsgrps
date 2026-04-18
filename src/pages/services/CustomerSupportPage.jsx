import React from 'react';
import ServicePageLayout from '../../components/Common/ServicePageLayout';

const CustomerSupportPage = (props) => {
  const faqs = [
    { q: 'What support tools do you build?', a: 'Chatbots, ticketing systems, and WhatsApp automation.' },
    { q: 'Can you build a WhatsApp bot?', a: 'Yes. We use the WhatsApp Business API for automated support.' },
    { q: 'Who owns the data?', a: 'You do. All customer interaction data is stored in your private database.' },
  ];

  const features = [
    { title: 'WhatsApp Chatbots', desc: 'Handle FAQs and order tracking automatically.' },
    { title: 'Helpdesk Systems', desc: 'Centralized ticketing for your support team.' },
    { title: 'Live Chat Integration', desc: 'Real-time support directly on your website.' },
  ];

  return (
    <ServicePageLayout
      {...props}
      seoTitle="Customer Support Solutions India | VSGRPS Technologies"
      seoDescription="Customer support automation in Namakkal, India. WhatsApp chatbots, helpdesk systems, live chat."
      canonical="https://vsgrps.com/services/customer-support"
      breadcrumb={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Customer Support' }
      ]}
      badge="Customer Support"
      heroTitle="Customer Support Solutions"
      heroSubtitle="Delight your customers 24/7 with automated support systems."
      ctaLabel="Get a Free Demo →"
      features={features}
      faqs={faqs}
      closingTitle="Build Your Support System"
      closingCta="Book a Free Consultation"
    />
  );
};

export default CustomerSupportPage;
