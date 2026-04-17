import React from 'react';
import ServicePageLayout from '../../components/Common/ServicePageLayout';

const AutomationPage = (props) => {
  const faqs = [
    { q: 'What business processes can you automate?', a: 'We automate invoice generation, email workflows, lead management, report creation, data synchronisation, WhatsApp notifications, and more.' },
    { q: 'Do I need coding knowledge to use your automation systems?', a: 'No. We build dashboards with simple interfaces so your team can manage automations without any technical knowledge.' },
    { q: 'What is the ROI of automation?', a: 'Our clients typically recover their investment within 3–6 months by saving 15–30 hours per week per employee.' },
    { q: 'Which tools do you integrate with?', a: 'We integrate with WhatsApp Business API, Google Sheets, Zoho, HubSpot, Tally, Notion, Slack, and most REST APIs.' },
    { q: 'Can you automate my HR or payroll processes?', a: 'Yes. We have built payroll automation, attendance tracking, and leave management systems for SMEs across India.' },
  ];

  const features = [
    { title: 'Invoice & Billing', desc: 'Auto-generate invoices, send payment reminders, and sync with your accounting software.' },
    { title: 'Email & WhatsApp Campaigns', desc: 'Trigger personalised emails and WhatsApp messages based on customer actions.' },
    { title: 'Lead Management', desc: 'Capture leads from forms, WhatsApp, and ads automatically.' },
    { title: 'Report Generation', desc: 'Daily/weekly business reports delivered to your inbox or WhatsApp — zero manual work.' },
    { title: 'Data Sync', desc: 'Keep your CRM, ERP, and spreadsheets in perfect sync across all platforms.' },
    { title: 'Attendance & HR', desc: 'Automate attendance tracking, leave approvals, and payroll calculations.' },
  ];

  return (
    <ServicePageLayout
      {...props}
      seoTitle="Business Automation Solutions India | VSGRPS Technologies Namakkal"
      seoDescription="Custom business automation solutions in Namakkal, India. Automate invoicing, emails, workflows, and reporting. Save 20+ hours/week. Free consultation."
      canonical="https://vsgrps.com/services/automation-solutions"
      badge="Automation Solutions"
      heroTitle="Business Automation Solutions in India"
      heroSubtitle="Stop doing repetitive tasks manually. VSGRPS Technologies builds intelligent automation systems that save your team 20–30 hours every week."
      ctaLabel="Get a Free Automation Audit →"
      featuresTitle="What We Automate"
      features={features}
      faqs={faqs}
      closingTitle="Ready to Automate Your Business?"
      closingCta="Book a Free Automation Audit"
    />
  );
};

export default AutomationPage;
