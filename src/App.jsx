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
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Testimonials from './components/Testimonials/Testimonials';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/Contact/Contact';
import CompanyReview from './components/CompanyReview/CompanyReview';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';
import FloatingActions from './components/FloatingActions/FloatingActions';
import CookieConsent from './components/Footer/CookieConsent';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import AppSolutions from './components/AppSolutions/AppSolutions';
import FeaturedProduct from './components/FeaturedProduct/FeaturedProduct';
import Blog from './components/Blog/Blog';

// Page Components
const HomePage = ({ onShowChatbot, theme, toggleTheme, onInstall, isInstalled }) => (
  <>
    <Navbar onShowChatbot={onShowChatbot} theme={theme} toggleTheme={toggleTheme} />
    <main>
      <Hero />
      <About />
      <Services />
      <FeaturedProduct />
      <AppSolutions onInstall={onInstall} isInstalled={isInstalled} />
      <Projects />
      <Blog />
      <WhyChooseUs />
      <Testimonials />
      <CompanyReview />
      <TechStack />
      <Contact />
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
  const [loading, setLoading] = useState(true);
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

  return (
    <HelmetProvider>
      <Router>
        <div className="app">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              fontFamily: 'var(--font-family)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.9375rem',
            },
            success: {
              iconTheme: { primary: '#2563EB', secondary: '#FFFFFF' },
            },
          }}
        />

        <AnimatePresence mode="wait">
          {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
        </AnimatePresence>

        {!loading && (
          <>
            <Routes>
              <Route path="/" element={
                <>
                  <Helmet>
                    <title>VSGRPS — Premium Software Development & Scaling</title>
                    <meta name="description" content="Build Smarter, Scale Faster. VSGRPS provides premium digital solutions, automation, and high-performance web applications for global businesses." />
                    <meta name="keywords" content="software development, web applications, scaling, digital transformation, VSGRPS, automation, custom software" />
                    <link rel="canonical" href="https://vsgrps.com/" />
                    <meta property="og:title" content="VSGRPS — Building Digital Excellence" />
                    <meta property="og:description" content="Transforming complex business ideas into premium digital solutions. Scalable, secure, and future-ready." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://vsgrps.com/" />
                    <meta property="og:image" content="https://vsgrps.com/og-image.jpg" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="VSGRPS — Premium Software Development" />
                    <meta name="twitter:description" content="Build Smarter, Scale Faster with VSGRPS." />
                    <meta name="twitter:image" content="https://vsgrps.com/og-image.jpg" />
                  </Helmet>
                  <HomePage onShowChatbot={() => setShowChatbot(true)} theme={theme} toggleTheme={toggleTheme} onInstall={() => setShowInstallPrompt(true)} isInstalled={isInstalled} />
                </>
              } />
              <Route path="/about" element={
                <>
                  <Helmet>
                    <title>About VSGRPS | Premium Software Development</title>
                    <meta name="description" content="Learn about VSGRPS, our mission, and our commitment to building premium digital solutions and high-performance applications." />
                    <meta name="keywords" content="about VSGRPS, mission, software development team, premium solutions" />
                    <link rel="canonical" href="https://vsgrps.com/about" />
                  </Helmet>
                  <HomePage onShowChatbot={() => setShowChatbot(true)} theme={theme} toggleTheme={toggleTheme} onInstall={() => setShowInstallPrompt(true)} isInstalled={isInstalled} />
                </>
              } />
              <Route path="/projects" element={
                <>
                  <Helmet>
                    <title>Our Projects | VSGRPS Portfolio</title>
                    <meta name="description" content="Explore our portfolio of premium digital products, from automation tools to high-scale web applications." />
                    <meta name="keywords" content="portfolio, software projects, web apps, VSGRPS projects" />
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
                    <meta name="keywords" content="contact VSGRPS, software quote, business scaling, hire developers" />
                    <link rel="canonical" href="https://vsgrps.com/contact" />
                  </Helmet>
                  <HomePage onShowChatbot={() => setShowChatbot(true)} theme={theme} toggleTheme={toggleTheme} onInstall={() => setShowInstallPrompt(true)} isInstalled={isInstalled} />
                </>
              } />
              <Route path="/project/:id" element={<ProjectPage onShowChatbot={() => setShowChatbot(true)} theme={theme} toggleTheme={toggleTheme} />} />
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
    </Router>
    </HelmetProvider>
  );
}

export default App;
