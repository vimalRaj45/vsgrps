import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import toast from 'react-hot-toast';
import './FloatingActions.css';

const FloatingActions = ({ onShowChatbot }) => {
    const [showBubble, setShowBubble] = useState(false);
    const [isTyping, setIsTyping] = useState(true);
    
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning! 👋 Need help?";
        if (hour < 17) return "Good Afternoon! 👋 Need help?";
        return "Good Evening! 👋 Need help?";
    };
    
    const greeting = getGreeting();
    
    const phone = "8807099288"; 
    const whatsapp = "918807099288";

    useEffect(() => {
        const showTimer = setTimeout(() => {
            setShowBubble(true);
            // Simulate typing effect
            setTimeout(() => setIsTyping(false), 2000);
        }, 12000); // 12 seconds

        return () => clearTimeout(showTimer);
    }, []);

    // Auto-hide after 15 seconds of being visible
    useEffect(() => {
        if (showBubble && !isTyping) {
            const hideTimer = setTimeout(() => {
                setShowBubble(false);
                // Re-show after 30sec if they are still on page
                setTimeout(() => setShowBubble(true), 30000);
            }, 12000);
            return () => clearTimeout(hideTimer);
        }
    }, [showBubble, isTyping]);

    const handleOpenChat = () => {
        setShowBubble(false);
        onShowChatbot();
    };

    const handleCloseBubble = (e) => {
        e.stopPropagation();
        setShowBubble(false);
    };

    const items = [
        {
            label: 'WhatsApp',
            icon: 'pi pi-whatsapp',
            className: 'speeddial__item speeddial__item--whatsapp',
            command: () => {
                window.open(`https://wa.me/${whatsapp}`, '_blank');
            }
        },
        {
            label: 'Call Us',
            icon: 'pi pi-phone',
            className: 'speeddial__item speeddial__item--call',
            command: () => {
                toast.success('Initiating call... Connecting now!');
                setTimeout(() => window.location.href = `tel:+91${phone}`, 500);
            }
        },
        {
            label: 'AI Chatbot',
            icon: 'pi pi-comment',
            className: 'speeddial__item speeddial__item--chat',
            command: onShowChatbot
        }
    ];

    return (
        <div className="floating-actions">
            <AnimatePresence>
                {showBubble && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(10px)' }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="premium-chat-widget"
                        onClick={handleOpenChat}
                    >
                        <div className="widget-glow-border"></div>
                        <div className="widget-content">
                            <div className="bot-avatar-container">
                                <div className="bot-avatar">
                                    <i className="pi pi-bolt"></i>
                                    <span className="online-indicator"></span>
                                </div>
                            </div>
                            
                                <div className="widget-main">
                                    <span className="widget-title">VSGRPS Assistant</span>
                                    {isTyping ? (
                                        <div className="typing-indicator-wrapper">
                                            <span className="typing-dot"></span>
                                            <span className="typing-dot"></span>
                                            <span className="typing-dot"></span>
                                        </div>
                                    ) : (
                                        <motion.p 
                                            initial={{ opacity: 0, x: -5 }} 
                                            animate={{ opacity: 1, x: 0 }}
                                            className="widget-msg"
                                        >
                                            {greeting}
                                        </motion.p>
                                    )}
                                </div>

                                <button className="widget-close-btn" onClick={handleCloseBubble} aria-label="Close Assistant Message">
                                    <i className="pi pi-times"></i>
                                </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Tooltip target=".p-speeddial-action" position="left" />
            <SpeedDial 
                model={items} 
                radius={70} 
                type="quarter-circle" 
                direction="up-left" 
                transitionDelay={60} 
                showIcon="pi pi-plus" 
                hideIcon="pi pi-times" 
                buttonClassName="speeddial-main-btn p-button-rounded"
                style={{ bottom: '16px', right: '16px' }}
                onClick={() => setShowBubble(false)}
            />
        </div>
    );
};

export default FloatingActions;
