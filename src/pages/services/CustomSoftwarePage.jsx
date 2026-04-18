import React from 'react';
import ServicePageLayout from '../../components/Common/ServicePageLayout';

const CustomSoftwarePage = (props) => {
  const faqs = [
    { q: 'What is custom software?', a: 'Software built specifically for your business workflows, scaling as you grow.' },
    { q: 'How much does it cost?', a: 'Pricing is not fixed and is calculated based on project complexity. Approximately, simple tools start at ₹25,000, while business apps range from ₹50,000 to ₹1,00,000.' },
    { q: 'Who owns the source code?', a: 'You do. Full ownership is transferred to you upon final payment.' },
  ];

  const features = [
    { title: 'ERP Systems', desc: 'Manage inventory, procurement, and finance in one platform.' },
    { title: 'Internal Tools', desc: 'Replace spreadsheets with powerful internal apps.' },
    { title: 'B2B Portals', desc: 'Vendor and partner portals with role-based access.' },
    { title: 'API Development', desc: 'RESTful and GraphQL APIs that connect your systems.' },
  ];

  return (
    <ServicePageLayout
      {...props}
      seoTitle="Custom Software Development India | VSGRPS Technologies"
      seoDescription="Custom software development in Namakkal, India. Bespoke business apps, ERP, internal tools. NDA protected."
      canonical="https://vsgrps.com/services/custom-software"
      breadcrumb={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Custom Software' }
      ]}
      badge="Custom Software"
      heroTitle="Custom Software Development in India"
      heroSubtitle="Off-the-shelf tools rarely fit perfectly. VSGRPS builds tailored software — you own every line of code."
      ctaLabel="Discuss Your Requirements →"
      featuresTitle="What We Build"
      features={features}
      faqs={faqs}
      closingTitle="Start Your Custom Project"
      closingCta="Free Consultation"
    />
  );
};

export default CustomSoftwarePage;
