import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from 'primereact/button';
import './CookieConsent.css';

const CookieConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('vsgrps_cookie_consent');
        if (!consent) {
            // Delay showing the banner for a better user experience
            const timer = setTimeout(() => {
                setVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('vsgrps_cookie_consent', 'accepted');
        setVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('vsgrps_cookie_consent', 'declined');
        setVisible(false);
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="cookie-consent-banner"
                >
                    <div className="cookie-container">
                        <div className="cookie-info">
                            <div className="cookie-icon">
                                <i className="pi pi-info-circle"></i>
                            </div>
                            <div className="cookie-text">
                                <h4>We Value Your Experience</h4>
                                <p>
                                    We use cookies to enhance your journey, remember your preferences (like night mode), 
                                    and provide high-end interactive tools. By accepting, you agree to our 
                                    <span className="cookie-link"> Privacy Policy</span>.
                                </p>
                            </div>
                        </div>
                        <div className="cookie-actions">
                            <Button 
                                label="Decline" 
                                className="p-button-text p-button-sm btn-decline" 
                                onClick={handleDecline} 
                            />
                            <Button 
                                label="Accept & Continue" 
                                className="p-button-primary p-button-sm btn-accept" 
                                onClick={handleAccept} 
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
