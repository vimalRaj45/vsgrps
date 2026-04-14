import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';

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
              <Route path="/" element={<HomePage onShowChatbot={() => setShowChatbot(true)} theme={theme} toggleTheme={toggleTheme} onInstall={() => setShowInstallPrompt(true)} isInstalled={isInstalled} />} />
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
  );
}

export default App;
