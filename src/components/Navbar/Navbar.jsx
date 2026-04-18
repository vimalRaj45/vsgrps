import React, { useState, useEffect } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { motion, AnimatePresence } from 'framer-motion';
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
    { label: 'Home',         icon: 'pi pi-home',        command: () => handleNavClick('#home') },
    { label: 'About',        icon: 'pi pi-info-circle',  command: () => handleNavClick('#about') },
    {
      label: 'Services',
      icon: 'pi pi-desktop',
      // Click goes to /services page; sub-items go to individual service pages
      command: () => navigate('/services'),
      items: [
        { label: 'Web Development',      icon: 'pi pi-globe',      command: () => { setVisible(false); navigate('/services/web-development'); } },
        { label: 'Automation Solutions', icon: 'pi pi-cog',         command: () => { setVisible(false); navigate('/services/automation-solutions'); } },
        { label: 'CRM & Dashboards',     icon: 'pi pi-chart-bar',   command: () => { setVisible(false); navigate('/services/crm-dashboards'); } },
        { label: 'Custom Software',      icon: 'pi pi-code',        command: () => { setVisible(false); navigate('/services/custom-software'); } },
        { label: 'Hosting & Cloud',      icon: 'pi pi-server',      command: () => { setVisible(false); navigate('/services/hosting-cloud'); } },
        { label: 'Customer Support',     icon: 'pi pi-headphones',  command: () => { setVisible(false); navigate('/services/customer-support'); } },
      ],
    },
    { label: 'Projects',    icon: 'pi pi-briefcase',    command: () => handleNavClick('#projects') },
    { label: 'Testimonials',icon: 'pi pi-star',         command: () => handleNavClick('#testimonials') },
    { label: 'Rate Us',     icon: 'pi pi-heart-fill',   command: () => handleNavClick('#company-review') },
    { label: 'Contact',     icon: 'pi pi-envelope',     command: () => handleNavClick('#contact') },
  ];

  const start = (
    <motion.div 
      className="navbar__logo" 
      onClick={() => handleNavClick('#home')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      role="button"
      tabIndex="0"
      aria-label="VSGRPS Home"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleNavClick('#home'); }}
    >
      <div className="navbar__logo-icon" aria-hidden="true">V</div>
      <span className="navbar__logo-text">VSGRPS</span>
    </motion.div>
  );

  const end = (
    <div className="navbar__end">
      <button
        onClick={toggleTheme}
        className="navbar__theme-toggle"
        aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      >
        <svg
          className={`theme-icon ${theme === 'dark' ? 'theme-icon--moon' : 'theme-icon--sun'}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {theme === 'light' ? (
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
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
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button 
          label="Work With Us" 
          icon="pi pi-bolt" 
          onClick={() => handleNavClick('#contact')} 
          className="navbar__cta p-button-primary" 
          aria-label="Work With Us - Contact VSGRPS"
        />
      </motion.div>
      <button className="navbar__mobile-toggle" onClick={() => setVisible(true)} aria-label="Open Navigation Menu">
        <i className="pi pi-bars" aria-hidden="true"></i>
      </button>
    </div>
  );

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
            <AnimatePresence>
              {visible && items.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`navbar__mob-link ${item.className || ''}`} 
                  onClick={item.command}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={item.icon}></i>
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="navbar__mob-theme">
            <span>{theme === 'light' ? 'Switch to Night Mode' : 'Switch to Light Mode'}</span>
            <Button 
              icon={theme === 'light' ? 'pi pi-moon' : 'pi pi-sun'} 
              onClick={toggleTheme} 
              className="p-button-rounded p-button-text p-button-secondary" 
            />
          </div>

          <motion.div 
            className="navbar__mob-footer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              label="Start a Project" 
              icon="pi pi-bolt" 
              onClick={() => handleNavClick('#contact')} 
              className="w-full p-button-primary p-3" 
              aria-label="Start a Project with VSGRPS"
            />
            <p className="navbar__mob-tagline">Trusted by 50+ Businesses</p>
          </motion.div>
        </Sidebar>
      </div>
    </motion.nav>
  );
};

export default Navbar;
