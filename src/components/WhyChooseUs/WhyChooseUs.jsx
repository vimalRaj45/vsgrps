import React from 'react';
import { motion } from 'framer-motion';
import LottieIcon from '../Common/LottieIcon';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: 'https://assets2.lottiefiles.com/packages/lf20_3rwasyjy.json',
    title: 'Fast Delivery',
    description: 'We follow agile sprints with clear milestones, delivering your project on time without compromising quality.',
  },
  {
    icon: 'https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json',
    title: 'Dedicated Team',
    description: 'Get a fully committed team of engineers, designers, and PMs focused exclusively on your project.',
  },
  {
    icon: 'https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security practices baked into every line of code. Your data and users are always protected.',
  },
  {
    icon: 'https://assets2.lottiefiles.com/packages/lf20_xlmz9xwm.json',
    title: 'Scalable Architecture',
    description: 'We build systems that grow with your business — from 100 users to 1 million, without a rewrite.',
  },
  {
    icon: 'https://assets2.lottiefiles.com/packages/lf20_khzniaya.json',
    title: 'Transparent Process',
    description: 'Weekly demos, daily standups, and real-time communication via Slack, Jira, and your preferred tools.',
  },
  {
    icon: 'https://assets2.lottiefiles.com/packages/lf20_jbrw3hcz.json',
    title: 'Proven Track Record',
    description: '50+ successful projects delivered across fintech, healthcare, e-commerce, and enterprise SaaS.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section why-choose">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.0, 0.0, 0.2, 1] }}
        >
          <span className="section-badge">
            <i className="pi pi-verified"></i>
            Why Choose Us
          </span>
          <h2 className="section-title">The VSGRPS Advantage</h2>
          <p className="section-subtitle">
            We don't just build software — we build partnerships. Here's what makes 
            working with us different.
          </p>
        </motion.div>

        <div className="why-choose__grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="why-choose__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06, ease: [0.0, 0.0, 0.2, 1] }}
            >
              <div className="why-choose__icon">
                <LottieIcon src={reason.icon} size="85px" />
              </div>
              <h3 className="why-choose__title">{reason.title}</h3>
              <p className="why-choose__description">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
