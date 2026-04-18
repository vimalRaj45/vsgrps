import React from 'react';
import ServicePageLayout from '../../components/Common/ServicePageLayout';

const WebDevelopmentPage = (props) => {
  const faqs = [
    { q: 'How much does web development cost in India?', a: 'Pricing is not fixed and depends on your specific requirements. Typically, projects start at an approximate range of ₹3,000 for landing pages and ₹15,000 for business websites.' },
    { q: 'How long does a typical project take?', a: 'A standard business website takes 4–6 weeks. Complex SaaS platforms take 3–6 months.' },
    { q: 'Do you provide post-launch support?', a: 'Yes. All projects include 3 months of free bug-fix support.' },
  ];

  const features = [
    { title: 'Business Websites', desc: 'Professional, fast, and SEO-optimised websites that convert visitors into clients.' },
    { title: 'SaaS Platforms', desc: 'Multi-tenant SaaS apps with authentication, billing, and dashboards.' },
    { title: 'E-commerce Stores', desc: 'Shopify, WooCommerce, or fully custom stores with payment integration.' },
    { title: 'Web Applications', desc: 'Complex React/Next.js apps with real-time features and cloud hosting.' },
    { title: 'Landing Pages', desc: 'High-conversion landing pages optimised for Google Ads.' },
    { title: 'Progressive Web Apps', desc: 'Offline-capable, installable PWAs that work like native apps.' },
  ];

  return (
    <ServicePageLayout
      {...props}
      seoTitle="Web Development Services India | VSGRPS Technologies Namakkal"
      seoDescription="Professional web development services in Namakkal, India. React, Next.js, Node.js experts. Custom websites, SaaS platforms, and e-commerce solutions."
      canonical="https://vsgrps.com/services/web-development"
      breadcrumb={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Web Development' }
      ]}
      badge="Web Development"
      heroTitle="Web Development Services in India"
      heroSubtitle="From pixel-perfect landing pages to enterprise-grade SaaS platforms — VSGRPS Technologies delivers world-class web development."
      ctaLabel="Get a Free Web Development Quote →"
      featuresTitle="What We Build"
      features={features}
      faqs={faqs}
      closingTitle="Ready to Build Your Website?"
      closingCta="Start Your Project Today"
    />
  );
};

export default WebDevelopmentPage;
