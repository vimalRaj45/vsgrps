import React from 'react';
import ServicePageLayout from '../../components/Common/ServicePageLayout';

const HostingPage = (props) => {
  const faqs = [
    { q: 'What hosting do you provide?', a: 'We manage deployments on Cloudflare, AWS, and DigitalOcean.' },
    { q: 'What is the uptime?', a: 'We target 99.9% uptime on all managed hosting plans.' },
    { q: 'Do you provide backups?', a: 'Yes. Daily automated backups are included in all plans.' },
  ];

  const features = [
    { title: 'Managed Hosting', desc: 'Monitoring, security patches, and backups included.' },
    { title: 'Cloud Migrations', desc: 'Zero-downtime migrations from your current host.' },
    { title: 'SSL & CDN', desc: 'Security and speed optimization for every site.' },
  ];

  return (
    <ServicePageLayout
      {...props}
      seoTitle="Cloud Hosting & DevOps India | VSGRPS Technologies"
      seoDescription="Managed cloud hosting and DevOps in Namakkal, India. Cloudflare, AWS, DigitalOcean. 99.9% uptime."
      canonical="https://vsgrps.com/services/hosting-cloud"
      breadcrumb={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Hosting & Cloud' }
      ]}
      badge="Hosting & Cloud"
      heroTitle="Cloud Hosting & DevOps Services"
      heroSubtitle="Fast, secure, and reliable cloud infrastructure managed by experts."
      ctaLabel="Get Hosting Quote →"
      features={features}
      faqs={faqs}
      closingTitle="Ready for Managed Cloud?"
      closingCta="Start Free Migration"
    />
  );
};

export default HostingPage;
