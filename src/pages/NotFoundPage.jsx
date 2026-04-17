import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const NotFoundPage = ({ theme, toggleTheme }) => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | VSGRPS Technologies</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://vsgrps.com/404" />
      </Helmet>
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="not-found-page" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '8rem', margin: 0, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>404</h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Oops! The page you're looking for doesn't exist.</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>
            It looks like you took a wrong turn. Let's get you back on track.
          </p>

          <div style={{ maxWidth: '500px', margin: '0 auto 40px', position: 'relative' }}>
            <span className="p-input-icon-left w-full">
              <i className="pi pi-search" />
              <InputText placeholder="Search our site..." className="w-full p-3" style={{ borderRadius: '30px' }} />
            </span>
          </div>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/"><Button label="Home" icon="pi pi-home" className="p-button-rounded p-button-outlined" /></Link>
            <Link to="/services"><Button label="Services" icon="pi pi-cog" className="p-button-rounded p-button-outlined" /></Link>
            <Link to="/portfolio"><Button label="Portfolio" icon="pi pi-images" className="p-button-rounded p-button-outlined" /></Link>
            <Link to="/contact"><Button label="Support" icon="pi pi-envelope" className="p-button-rounded p-button-outlined" /></Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default NotFoundPage;
