import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const TermsPage = ({ theme, toggleTheme }) => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | VSGRPS Technologies</title>
        <meta name="description" content="Terms of Service for VSGRPS, Vision Solutions Groups, and VSGRPS Technologies." />
      </Helmet>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="legal-page section">
        <div className="container" style={{ maxWidth: '800px', margin: '4rem auto' }}>
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-secondary mb-4">Last Updated: April 18, 2026</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="line-height-3 mb-4">
              By accessing our website at vsgrps.com, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="line-height-3 mb-4">
              Permission is granted to temporarily download one copy of the materials on <strong>Vision Solutions Groups</strong>'s website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
            <p className="line-height-3 mb-4">
              The materials on <strong>VSGRPS Technologies</strong>'s website are provided on an 'as is' basis. VSGRPS makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
            <p className="line-height-3 mb-4">
              In no event shall <strong>VSGRPS</strong> or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VSGRPS's website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Governing Law</h2>
            <p className="line-height-3 mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsPage;
