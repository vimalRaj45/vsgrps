import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const CookiePolicyPage = ({ theme, toggleTheme }) => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | VSGRPS Technologies</title>
        <meta name="description" content="Cookie Policy for VSGRPS, Vision Solutions Groups, and VSGRPS Technologies." />
      </Helmet>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="legal-page section">
        <div className="container" style={{ maxWidth: '800px', margin: '4rem auto' }}>
          <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-secondary mb-4">Last Updated: April 18, 2026</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
            <p className="line-height-3 mb-4">
              As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
            <p className="line-height-3 mb-4">
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Disabling Cookies</h2>
            <p className="line-height-3 mb-4">
              You can prevent the setting of cookies by adjusting the settings on your browser. Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. The Cookies We Set</h2>
            <p className="line-height-3 mb-4">
              We use cookies to manage the theme selection (Dark/Light mode) for <strong>VSGRPS</strong> and to understand how our visitors interact with <strong>Vision Solutions Groups</strong>'s digital offerings via analytics.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. More Information</h2>
            <p className="line-height-3 mb-4">
              Hopefully that has clarified things for you. If you are looking for more information then you can contact us through our website vsgrps.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CookiePolicyPage;
