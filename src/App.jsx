import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Component Imports
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

// Lazy Loaded Components
const About = React.lazy(() => import('./components/About/About'));
const Services = React.lazy(() => import('./components/Services/Services'));
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const WhyChooseUs = React.lazy(() => import('./components/WhyChooseUs/WhyChooseUs'));
const Testimonials = React.lazy(() => import('./components/Testimonials/Testimonials'));
const TechStack = React.lazy(() => import('./components/TechStack/TechStack'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const CompanyReview = React.lazy(() => import('./components/CompanyReview/CompanyReview'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));
const Chatbot = React.lazy(() => import('./components/Chatbot/Chatbot'));
const FloatingActions = React.lazy(() => import('./components/FloatingActions/FloatingActions'));
const CookieConsent = React.lazy(() => import('./components/Footer/CookieConsent'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail/ProjectDetail'));
const AppSolutions = React.lazy(() => import('./components/AppSolutions/AppSolutions'));
const FeaturedProduct = React.lazy(() => import('./components/FeaturedProduct/FeaturedProduct'));
const Blog = React.lazy(() => import('./components/Blog/Blog'));

// New SEO Pages
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';

// Service Sub-Pages (Fix 12 — dedicated content pages)
const WebDevelopmentPage  = React.lazy(() => import('./pages/services/WebDevelopmentPage'));
const AutomationPage      = React.lazy(() => import('./pages/services/AutomationPage'));
const CRMPage             = React.lazy(() => import('./pages/services/CRMPage'));
const CustomSoftwarePage  = React.lazy(() => import('./pages/services/CustomSoftwarePage'));
const HostingPage         = React.lazy(() => import('./pages/services/HostingPage'));
const CustomerSupportPage = React.lazy(() => import('./pages/services/CustomerSupportPage'));

import LazySection from './components/Common/LazySection';

// Page Components
const HomePage = ({ onShowChatbot, theme, toggleTheme, onInstall, isInstalled }) => (
  <>
    <Navbar onShowChatbot={onShowChatbot} theme={theme} toggleTheme={toggleTheme} />
    <main>
      <Hero />
      <LazySection><About /></LazySection>
      <LazySection><Services /></LazySection>
      <LazySection><FeaturedProduct /></LazySection>
      <LazySection><AppSolutions onInstall={onInstall} isInstalled={isInstalled} /></LazySection>
      <LazySection><Projects /></LazySection>
      <LazySection><Blog /></LazySection>
      <LazySection><WhyChooseUs /></LazySection>
      <LazySection><Testimonials /></LazySection>
      <LazySection><CompanyReview /></LazySection>
      <LazySection><TechStack /></LazySection>
      <LazySection><Contact /></LazySection>
    </main>
  </>
);

const ProjectPage = ({ onShowChatbot, theme, toggleTheme }) => (
  <>
    <Navbar onShowChatbot={onShowChatbot} theme={theme} toggleTheme={toggleTheme} />
    <ProjectDetail />
  </>
);

function App() {
  const [loading, setLoading] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('vsgrps_theme') || 'dark');
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  React.useEffect(() => {
    // Check if running in standalone mode (already installed and opened)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    if (isStandalone) {
      setIsInstalled(true);
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // If prompt is available, it's not definitely 'installed' in current context
      setIsInstalled(false);
    });

    window.addEventListener('appinstalled', () => {
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
      setIsInstalled(true);
      console.log('App successfully installed!');
    });
  }, []);

  const handleInstallPWA = async () => {
    if (!deferredPrompt) {
      toast.error('App installation is not available right now. Your device might already have it installed or may not support it.', {
        id: 'pwa-error'
      });
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
      toast.success('Thank you for installing our app!');
    }
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('vsgrps_theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  const isPrerender = window.__PRERENDER_INJECTED;

  return (
    <HelmetProvider>
      <Router>
        <React.Suspense fallback={null}>
          <div className="app">
          <Toaster />

          {loading && !isPrerender && <LoadingScreen onComplete={handleLoadingComplete} />}

          {(!loading || isPrerender) && (
            <>
              <Routes>
                <Route path="/" element={
                  <>
                    <Helmet>
                      <title>VSGRPS | Vision Solutions Groups | VSGRPS Technologies - Software Development India</title>
                      <meta name="description" content="VSGRPS (Vision Solutions Groups) is a leading software development company in India. VSGRPS Technologies provides high-end web apps and automation systems." />
                      <link rel="canonical" href="https://vsgrps.com/" />
                    </Helmet>
                    <HomePage onShowChatbot={() => setShowChatbot(true)} theme={theme} toggleTheme={toggleTheme} onInstall={() => setShowInstallPrompt(true)} isInstalled={isInstalled} />
                  </>
                } />
                <Route path="/about" element={<AboutPage theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="/services" element={<ServicesPage theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="/blog" element={<BlogPage theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="/privacy" element={<PrivacyPage theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="/terms" element={<TermsPage theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="/cookies" element={<CookiePolicyPage theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="/projects" element={
                  <>
                    <Helmet>
                      <title>Our Projects | VSGRPS Portfolio</title>
                      <meta name="description" content="Explore our portfolio of premium digital products, from automation tools to high-scale web applications." />
                      <link rel="canonical" href="https://vsgrps.com/projects" />
                    </Helmet>
                    <HomePage onShowChatbot={() => setShowChatbot(true)} theme={theme} toggleTheme={toggleTheme} onInstall={() => setShowInstallPrompt(true)} isInstalled={isInstalled} />
                  </>
                } />
                <Route path="/contact" element={
                  <>
                    <Helmet>
                      <title>Contact VSGRPS | Get a Free Quote</title>
                      <meta name="description" content="Ready to scale your business? Contact VSGRPS today for premium software development and digital transformation services." />
                      <link rel="canonical" href="https://vsgrps.com/contact" />
                    </Helmet>
                    <HomePage onShowChatbot={() => setShowChatbot(true)} theme={theme} toggleTheme={toggleTheme} onInstall={() => setShowInstallPrompt(true)} isInstalled={isInstalled} />
                  </>
                } />
                <Route path="/project/:id" element={<ProjectPage onShowChatbot={() => setShowChatbot(true)} theme={theme} toggleTheme={toggleTheme} />} />

                {/* Service Sub-Pages — Fix 12 */}
                <Route path="/services/web-development"   element={<WebDevelopmentPage  theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="/services/automation-solutions" element={<AutomationPage   theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="/services/crm-dashboards"    element={<CRMPage            theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="/services/custom-software"   element={<CustomSoftwarePage theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="/services/hosting-cloud"     element={<HostingPage        theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="/services/customer-support"  element={<CustomerSupportPage theme={theme} toggleTheme={toggleTheme} />} />
              </Routes>
            
            <Chatbot visible={showChatbot} onHide={() => setShowChatbot(false)} />
            <FloatingActions onShowChatbot={() => setShowChatbot(true)} />
            <Footer />
            <CookieConsent />

            {/* Custom PWA Install Dialog */}
            <Dialog 
              visible={showInstallPrompt} 
              onHide={() => setShowInstallPrompt(false)}
              className="pwa-install-dialog"
              style={{ width: '90vw', maxWidth: '400px', borderRadius: '16px', overflow: 'hidden' }}
              draggable={false}
              resizable={false}
              closable={false}
              showHeader={false}
            >
              <div className="flex flex-column align-items-center text-center p-5 pt-6">
                <i className="pi pi-cloud-download text-6xl mb-4" style={{ color: 'var(--color-accent)' }}></i>
                <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-color)' }}>Install VSGRPS App</h2>
                <p className="mb-5 line-height-3" style={{ color: 'var(--text-secondary)' }}>
                  Get the optimal experience! Install our app on your device for lightning-fast loading, offline access, and a native app feel.
                </p>
                
                <div className="flex flex-column w-full gap-3">
                  <Button 
                    label="Install App Now" 
                    icon="pi pi-download" 
                    className="p-button-primary p-3 w-full justify-content-center font-bold" 
                    style={{ borderRadius: '8px', background: 'var(--color-accent)', border: 'none' }}
                    onClick={handleInstallPWA} 
                  />
                  <Button 
                    label="Maybe Later" 
                    className="p-button-text p-3 w-full justify-content-center" 
                    style={{ borderRadius: '8px', color: 'var(--text-secondary)' }}
                    onClick={() => setShowInstallPrompt(false)} 
                  />
                </div>
              </div>
            </Dialog>
          </>
        )}
      </div>
      </React.Suspense>
    </Router>
    </HelmetProvider>
  );
}

export default App;
