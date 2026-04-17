import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';

const servicesData = {
  'web-development': {
    title: 'Custom Web Development Solutions',
    description: 'Scalable, high-performance web applications tailored to your business needs.',
    content: `
      <h2>Transform Your Business with Premium Web Solutions</h2>
      <p>In today's digital landscape, your website is often the first point of contact for your customers. At VSGRPS Technologies, we specialize in building modern, responsive, and high-performance web applications that drive growth and engagement.</p>
      <p>Our team of expert developers uses the latest technologies like React, Next.js, and Node.js to create seamless user experiences. We don't just build websites; we build digital ecosystems that solve complex business problems.</p>
      <h3>Our Web Development Process</h3>
      <ul>
        <li><strong>Discovery & Planning:</strong> We understand your vision and define the project scope.</li>
        <li><strong>Design & UX:</strong> Crafting beautiful, intuitive interfaces.</li>
        <li><strong>Development:</strong> Agile development with clean, scalable code.</li>
        <li><strong>Testing & Launch:</strong> Rigorous QA to ensure a flawless experience.</li>
      </ul>
      <p>Whether you need a simple corporate website or a complex e-commerce platform, we have the expertise to deliver excellence.</p>
    `,
    faqs: [
      { q: "How much does web development cost?", a: "Our web development projects start at ₹50,000 for basic websites and go up to ₹5,00,000+ for complex platforms." },
      { q: "How long does it take to build a website?", a: "A typical project takes 4-8 weeks depending on complexity." }
    ],
    canonical: 'https://vsgrps.com/services/web-development'
  },
  'automation-solutions': {
    title: 'Intelligent Business Automation',
    description: 'Streamline your workflows and reduce manual effort with our custom automation tools.',
    content: `
      <h2>Empower Your Team with Automation</h2>
      <p>Manual processes are the bottleneck of modern business. We help you identify repetitive tasks and automate them using intelligent software solutions.</p>
      <p>From data processing pipelines to automated customer support, our solutions save thousands of hours and reduce human error significantly.</p>
    `,
    faqs: [
      { q: "What processes can be automated?", a: "Almost any repetitive digital task can be automated, from data entry to certificate generation." }
    ],
    canonical: 'https://vsgrps.com/services/automation-solutions'
  }
  // Add other services here...
};

const ServiceDetailPage = ({ theme, toggleTheme }) => {
  const { slug } = useParams();
  const service = servicesData[slug] || servicesData['web-development'];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{service.title} | VSGRPS Technologies</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={service.canonical} />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="service-detail-page" style={{ padding: '120px 0 60px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '30px', color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 600 }}>
            <i className="pi pi-arrow-left"></i> Back to Services
          </Link>
          
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: 1.2 }}>{service.title}</h1>
          <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>{service.description}</p>
          
          <div className="service-content" dangerouslySetInnerHTML={{ __html: service.content }} style={{ lineHeight: 1.8, fontSize: '1.1rem' }} />

          <section style={{ marginTop: '60px' }}>
            <h2 style={{ marginBottom: '30px' }}>Frequently Asked Questions</h2>
            <Accordion activeIndex={0}>
              {service.faqs.map((faq, index) => (
                <AccordionTab key={index} header={faq.q}>
                  <p>{faq.a}</p>
                </AccordionTab>
              ))}
            </Accordion>
          </section>

          <div style={{ marginTop: '80px', textAlign: 'center', padding: '60px', borderRadius: '24px', background: 'var(--gradient-primary)', color: 'white' }}>
            <h2>Ready to transform your business?</h2>
            <p style={{ marginBottom: '30px', opacity: 0.9 }}>Get a free consultation for your project today.</p>
            <Link to="/contact">
              <Button label="Get Started Now" icon="pi pi-bolt" className="p-button-lg p-button-raised" style={{ background: 'white', color: 'var(--color-primary)', border: 'none' }} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ServiceDetailPage;
