import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion';

const AboutPage = ({ theme, toggleTheme }) => {
  return (
    <>
      <Helmet>
        <title>About Us | VSGRPS Technologies - Software Company in Namakkal</title>
        <meta name="description" content="Learn about VSGRPS Technologies, a leading digital solutions company in Namakkal, India. We help startups and small businesses go digital." />
        <link rel="canonical" href="https://vsgrps.com/about" />
      </Helmet>
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="about-page">
        <section className="section section--hero">
          <div className="container">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-title text-center"
            >
              The Best Software Company in Namakkal
            </motion.h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="p-5 mb-5" style={{ background: 'var(--surface-section)', borderRadius: '16px', borderLeft: '4px solid var(--color-accent)' }}>
                <p className="text-xl line-height-4 m-0">
                  At <strong>VSGRPS</strong>, known formally as <strong>Vision Solutions Groups</strong>, we believe that technology is the ultimate catalyst for human potential. Founded with a vision to revolutionize the way businesses interact with the digital world, VSGRPS has grown into a leading name in the software development industry in India. Our core philosophy is built on the pillars of innovation, integrity, and impact.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-4">Our Identity: VSGRPS Technologies</h2>
              <p className="text-lg mb-6 line-height-3">
                <strong>VSGRPS Technologies</strong> serves as our dedicated tech division, focusing on the specialized delivery of high-end software products and services. While <strong>Vision Solutions Groups</strong> provides the overarching strategic vision and consulting, <strong>VSGRPS Technologies</strong> is the engine room where code becomes reality. Together, we operate as a unified force designed to help our clients navigate the complexities of the modern tech ecosystem.
              </p>
              
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg mb-6 line-height-3">
                Our mission is simple: to provide world-class digital solutions that solve real-world problems. At <strong>VSGRPS</strong>, we don't just build software; we build solutions. From web applications that engage users to automation systems that streamline back-end processes, <strong>Vision Solutions Groups</strong> is committed to delivering excellence at every touchpoint.
              </p>

              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg mb-6 line-height-3">
                We aspire to be the global benchmark for digital innovation. By consistently pushing the boundaries of what’s possible with <strong>VSGRPS Technologies</strong>, we aim to lead the charge in the next wave of technological advancement. We see a future where every business, regardless of size, has access to the powerful tools developed by <strong>Vision Solutions Groups</strong>.
              </p>

              <h2 className="text-3xl font-bold mb-4">Why Choose VSGRPS?</h2>
              <p className="text-lg mb-6 line-height-3">
                Choosing <strong>VSGRPS</strong> means partnering with a team that values your success as much as you do. Our deep roots in India’s tech hub allow us to tap into a vast pool of talent and provide cost-effective yet premium solutions. <strong>VSGRPS Technologies</strong> ensures that every line of code is optimized for performance, security, and scalability. 
              </p>
              
              <div className="p-4" style={{ background: 'var(--surface-card)', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <p className="m-0 italic text-secondary">
                  Whether it’s custom software, enterprise-level web apps, or sophisticated automation, 
                  <strong> Vision Solutions Groups</strong> has the track record and the talent to bring your vision to life. 
                  Experience the <strong>VSGRPS</strong> difference—where <strong>Vision Solutions Groups</strong> and 
                  <strong> VSGRPS Technologies</strong> come together to build the digital future of your business.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AboutPage;
