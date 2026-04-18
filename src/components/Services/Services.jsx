import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LottieIcon from '../Common/LottieIcon';
import './Services.css';

const services = [
  {
    icon: 'https://assets2.lottiefiles.com/packages/lf20_xlmz9xwm.json',
    title: 'Web Development',
    slug: 'web-development',
    description: 'High-performance corporate websites, e-commerce platforms, and custom web applications designed to meet your specific business goals with speed and scalability.',
  },
  {
    icon: 'https://assets2.lottiefiles.com/packages/lf20_tno6cg2w.json',
    title: 'Automation Solutions',
    slug: 'automation-solutions',
    description: 'Reduce manual work through workflow automation, automated customer communication, and process optimization tools that streamline your daily operations.',
  },
  {
    icon: 'https://assets2.lottiefiles.com/packages/lf20_zrqthn6o.json',
    title: 'Dashboards & CRM',
    slug: 'crm-dashboards',
    description: 'Centralize your operations with custom business dashboards and CRM systems, giving you full control over data, performance, and strategic decision-making.',
  },
  {
    icon: 'https://assets2.lottiefiles.com/packages/lf20_2LdLki.json',
    title: 'Custom Software',
    slug: 'custom-software',
    description: 'End-to-end system design, API integrations, and scalable architecture tailored to your unique requirements for long-term usability and impact.',
  },
  {
    icon: 'https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json',
    title: 'Hosting & Cloud',
    slug: 'hosting-cloud',
    description: 'Secure, high-uptime web hosting and cloud deployment services using modern infrastructure to ensure your applications are always available and performant.',
  },
  {
    icon: 'https://assets2.lottiefiles.com/packages/lf20_vnikrcia.json',
    title: 'Customer Support',
    slug: 'customer-support',
    description: 'Ongoing technical support and maintenance to ensure your digital systems continue to run smoothly and adapt to your evolving business needs.',
  },
];

/* Cloudflare signature: fast upward slide + fade, 60ms stagger */
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.35,
      ease: [0.0, 0.0, 0.2, 1],
    },
  }),
};

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.0, 0.0, 0.2, 1] }}
        >
          <span className="section-badge">
            <i className="pi pi-th-large"></i>
            Our Services
          </span>
          <h2 className="section-title">What We Do Best</h2>
          <p className="section-subtitle">
            End-to-end digital services designed to accelerate your business and 
            give you a competitive edge.
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="services__card"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              onClick={() => navigate(`/services/${service.slug}`)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex="0"
              aria-label={`Learn more about our ${service.title} services`}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(`/services/${service.slug}`); }}
            >
              <div className="services__icon">
                <LottieIcon src={service.icon} size="150px" />
              </div>
              <h3 className="services__title">{service.title}</h3>
              <p className="services__description">{service.description}</p>
              <div className="services__arrow">
                <i className="pi pi-arrow-right"></i>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
