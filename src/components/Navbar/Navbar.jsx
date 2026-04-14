import React, { useState, useEffect } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setVisible(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = [
    { label: 'Home', icon: 'pi pi-home', command: () => handleNavClick('#home') },
    { label: 'About', icon: 'pi pi-info-circle', command: () => handleNavClick('#about') },
    { label: 'Services', icon: 'pi pi-desktop', command: () => handleNavClick('#services') },
    { label: 'Projects', icon: 'pi pi-briefcase', command: () => handleNavClick('#projects') },
    { label: 'Testimonials', icon: 'pi pi-star', command: () => handleNavClick('#testimonials') },
    { label: 'Rate Us', icon: 'pi pi-heart-fill', command: () => handleNavClick('#company-review') },
    { label: 'Contact', icon: 'pi pi-envelope', command: () => handleNavClick('#contact') },
  ];

  const start = (
    <div className="navbar__logo" onClick={() => handleNavClick('#home')}>
      <div className="navbar__logo-icon">V</div>
      <span className="navbar__logo-text">VSGRPS</span>
    </div>
  );

  const end = (
    <div className="navbar__end">
      {/* Custom SVG sun/moon morphing toggle — Cloudflare rule: purposeful, no bounce */}
      <button
        onClick={toggleTheme}
        className="navbar__theme-toggle"
        aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      >
        <svg
          className={`theme-icon ${theme === 'dark' ? 'theme-icon--moon' : 'theme-icon--sun'}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {theme === 'light' ? (
            // Moon icon
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            // Sun icon
            <>
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
              <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>
      <Button 
        label="Work With Us" 
        icon="pi pi-bolt" 
        onClick={() => handleNavClick('#contact')} 
        className="navbar__cta p-button-primary" 
      />
      <button 
        className="navbar__mobile-toggle" 
        onClick={() => setVisible(true)}
        aria-label="Navigation Menu"
      >
        <i className="pi pi-bars"></i>
      </button>
    </div>
  );

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container">
        <Menubar 
          model={items} 
          start={start} 
          end={end} 
          className="navbar__menubar"
        />

        <Sidebar 
          visible={visible} 
          onHide={() => setVisible(false)} 
          position="right"
          className="navbar__mobile-sidebar"
          showCloseIcon={true}
          header={(
            <div className="navbar__logo">
              <div className="navbar__logo-icon">V</div>
              <span className="navbar__logo-text">VSGRPS</span>
            </div>
          )}
        >
          <div className="navbar__mob-links">
            {items.map((item, idx) => (
              <div 
                key={idx} 
                className={`navbar__mob-link ${item.className || ''}`} 
                onClick={item.command}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="navbar__mob-theme">
            <span>{theme === 'light' ? 'Switch to Night Mode' : 'Switch to Light Mode'}</span>
            <Button 
              icon={theme === 'light' ? 'pi pi-moon' : 'pi pi-sun'} 
              onClick={toggleTheme} 
              className="p-button-rounded p-button-text p-button-secondary" 
            />
          </div>

          <div className="navbar__mob-footer">
            <Button 
              label="Start a Project" 
              icon="pi pi-bolt" 
              onClick={() => handleNavClick('#contact')} 
              className="w-full p-button-primary p-3" 
            />
            <p className="navbar__mob-tagline">Trusted by 50+ Businesses</p>
          </div>
        </Sidebar>
      </div>
    </motion.nav>
  );
};

export default Navbar;
