import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const PrivacyPage = ({ theme, toggleTheme }) => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | VSGRPS Technologies</title>
        <meta name="description" content="Privacy Policy for VSGRPS, Vision Solutions Groups, and VSGRPS Technologies." />
      </Helmet>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="legal-page section">
        <div className="container" style={{ maxWidth: '800px', margin: '4rem auto' }}>
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-secondary mb-4">Last Updated: April 18, 2026</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="line-height-3 mb-4">
              Welcome to <strong>VSGRPS</strong> (also known as <strong>Vision Solutions Groups</strong> and <strong>VSGRPS Technologies</strong>). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website (vsgrps.com) and tell you about your privacy rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Data We Collect</h2>
            <p className="line-height-3 mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="line-height-3 ml-4">
              <li>Identity Data (Name, username)</li>
              <li>Contact Data (Email address, telephone numbers)</li>
              <li>Technical Data (IP address, browser type, location)</li>
              <li>Usage Data (Information about how you use our website)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
            <p className="line-height-3 mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide services via <strong>VSGRPS Technologies</strong>, manage our relationship with you, and improve our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Contact Us</h2>
            <p className="line-height-3 mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br /><strong>Website:</strong> vsgrps.com
              <br /><strong>Location:</strong> India
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPage;
