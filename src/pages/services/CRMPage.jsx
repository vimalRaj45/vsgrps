import React from 'react';
import ServicePageLayout from '../../components/Common/ServicePageLayout';

const CRMPage = (props) => {
  const faqs = [
    { q: 'What is a CRM dashboard?', a: 'A centralized interface that shows all customer data, deals, and sales pipeline in real time.' },
    { q: 'Do you build custom CRM?', a: 'Yes. We build fully custom CRMs and also integrate with Zoho, HubSpot, and Salesforce.' },
    { q: 'How much does a custom CRM cost?', a: 'Final pricing is calculated based on your workflow needs. As an approximation, simple systems start at ₹20,000, while enterprise solutions can range up to ₹1,00,000+.' },
  ];

  const features = [
    { title: 'Sales Pipeline', desc: 'Visualise deals at every stage with Kanban boards.' },
    { title: 'Customer 360° View', desc: 'See all interactions and notes for every customer.' },
    { title: 'Real-Time Analytics', desc: 'Live charts and KPIs that update instantly.' },
    { title: 'Role-Based Access', desc: 'Control who sees what with permission levels.' },
    { title: 'Automated Reports', desc: 'Daily, weekly reports delivered to your email.' },
    { title: 'Third-Party Integrations', desc: 'Connect with Zoho, HubSpot, WhatsApp, and more.' },
  ];

  return (
    <ServicePageLayout
      {...props}
      seoTitle="Custom CRM Dashboard Development India | VSGRPS Technologies"
      seoDescription="Custom CRM and dashboard development in Namakkal, India. Real-time analytics, sales pipeline, customer management."
      canonical="https://vsgrps.com/services/crm-dashboards"
      breadcrumb={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'CRM & Dashboards' }
      ]}
      badge="CRM & Dashboards"
      heroTitle="Custom CRM & Dashboard Development in India"
      heroSubtitle="Visualise your entire business in one place. We build powerful, real-time CRM dashboards tailored to your exact workflow."
      ctaLabel="Request a Free CRM Demo →"
      featuresTitle="CRM & Dashboard Features"
      features={features}
      faqs={faqs}
      closingTitle="Build Your Custom CRM Today"
      closingCta="Get a Free Quote"
    />
  );
};

export default CRMPage;
