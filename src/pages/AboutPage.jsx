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
              <p className="text-xl line-height-4 mb-5">
                VSGRPS Technologies is a premier <strong>digital solutions provider in Namakkal</strong>. 
                We were founded with a simple mission: to empower startups and small businesses with the 
                tools they need to thrive in a digital-first world. As a <strong>startup tech company in Namakkal</strong>, 
                we understand the unique challenges founders face, and we build systems that simplify growth 
                and improve productivity.
              </p>
              
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg mb-6">
                Our mission is to bridge the gap between complex technology and business success. 
                We create digital ecosystems that are scalable, secure, and user-focused.
              </p>

              <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="mb-8" style={{ listStyle: 'none', padding: 0 }}>
                <li className="mb-3"><i className="pi pi-check-circle mr-3" style={{ color: 'var(--color-accent)' }}></i> Practical & Reliable Systems</li>
                <li className="mb-3"><i className="pi pi-check-circle mr-3" style={{ color: 'var(--color-accent)' }}></i> Clean & Scalable Codebase</li>
                <li className="mb-3"><i className="pi pi-check-circle mr-3" style={{ color: 'var(--color-accent)' }}></i> Transparent Development Process</li>
                <li className="mb-3"><i className="pi pi-check-circle mr-3" style={{ color: 'var(--color-accent)' }}></i> Passion for Innovation (CertifyPro & more)</li>
              </ul>
              
              <div className="p-5" style={{ background: 'var(--surface-section)', borderRadius: '16px', borderLeft: '4px solid var(--color-accent)' }}>
                <p className="m-0 italic">
                  Located in Namakkal, Tamil Nadu, India — serving businesses globally with 
                  digital excellence.
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
