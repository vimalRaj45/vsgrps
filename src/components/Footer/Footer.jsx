import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import LegalDialog from './LegalDialog';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [legalVisible, setLegalVisible] = useState(false);
  const [activeLegal, setActiveLegal] = useState(null);

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Projects', href: '#projects' },
      { label: 'Careers', href: '/contact' },
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/projects' },
      { label: 'Documentation', href: '/contact' },
      { label: 'Support', href: '/contact' },
    ],
    products: [
      { label: 'CertifyPro', href: 'https://certifypro.vsgrps.com', target: '_blank', rel: 'noopener noreferrer' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialLinks = [
    { icon: 'pi pi-linkedin', href: 'https://www.linkedin.com/in/vimal-raj-s-b83b42324', label: 'LinkedIn' },
    { icon: 'pi pi-github', href: 'https://github.com/vimalRaj45', label: 'GitHub' },
  ];

  const handleNavClick = (e, href) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLegalClick = (e, action) => {
    e.preventDefault();
    setActiveLegal(action);
    setLegalVisible(true);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="navbar__logo-icon">V</div>
              <span className="navbar__logo-text">VSGRPS</span>
            </div>
            <p className="footer__description">
              Technology-driven digital solutions focused on building efficient,
              scalable, and user-friendly systems. We create software that simplifies
              processes and supports growth.
            </p>
            <div className="footer__socials">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="footer__column">
            <h3 className="footer__column-title">Company</h3>
            <ul className="footer__links">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer__link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer__column">
            <h3 className="footer__column-title">Resources</h3>
            <ul className="footer__links">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="footer__column">
            <h3 className="footer__column-title">Products</h3>
            <ul className="footer__links">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer__link"
                    target={link.target}
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="footer__column">
            <h3 className="footer__column-title">Legal</h3>
            <ul className="footer__links">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="footer__link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} VSGRPS Technologies. All rights reserved.
          </p>
          <p className="footer__tagline">
            Crafted with <span className="footer__heart">♥</span> in India
          </p>
        </div>
      </div>

      <LegalDialog
        visible={legalVisible}
        onHide={() => setLegalVisible(false)}
        type={activeLegal}
      />
    </footer>
  );
};

export default Footer;
