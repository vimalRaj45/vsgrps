import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Sidebar } from 'primereact/sidebar';
import './Chatbot.css';

// Groq API Configuration
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY ; 
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

if (!GROQ_API_KEY && import.meta.env.PROD) {
    console.error("GROQ API Key is missing! Please add VITE_GROQ_API_KEY to your Cloudflare Pages environment variables.");
}

const SYSTEM_PROMPT = `
You are the VSGRPS Intelligence Assistant. Talk like a friendly, professional, and knowledgeable Indian business consultant. 

PRIMARY KNOWLEDGE: VSGRPS (Vision Solutions Groups / VSGRPS Technologies)
- Tagline: "Led by vision, Built for growth."
- Location: Namakkal, Tamil Nadu, India.
- Focus: High-value premium digital solutions for SMEs and Enterprises.

SERVICES & PRICING:
1. Web Development: Custom React/Next.js websites, SaaS platforms, and E-commerce.
   - Pricing: Landing pages from ₹3k, Business websites from ₹15k.
2. Business Automation: WhatsApp automation, workflow optimization, and reporting.
   - Pricing: Automation setups start at ₹5k to ₹20k.
3. CRM & Dashboards: Custom internal tools and sales pipelines.
   - Pricing: Affordable custom systems from ₹20k to ₹50k+.
4. Custom Software: Bespoke ERP systems, vendor portals, and internal apps.
   - Pricing: Range between ₹50k to ₹1L for major enterprise projects.
5. Hosting & Cloud: Managed AWS, Cloudflare, and DigitalOcean deployments.
6. Customer Support: WhatsApp chatbots, helpdesk systems, and 24/7 automation.

FLAGSHIP PRODUCT: CertifyPro 🛡️
- Purpose: Automated batch certificate generation.
- Features: Generate 1,000s of certificates in seconds, zero data footprint (privacy), bulk ZIP export.
- Availability: Official utility at certifypro.vsgrps.com.

PRICING PHILOSOPHY:
- All prices mentioned are **approximate estimates**. 
- Final pricing is **not fixed** and is calculated based on your specific business requirements and project complexity.
- Our goal is to work hard to understand your business and offer the **best possible (lowest) rates** to help you grow. We prioritize long-term partnerships over one-time high costs.

STRICT RULES:
- If asked "Do you have products?", highlight CertifyPro.
- For services, lead with our "Vision Solutions" approach.
- Always clarify that pricing is an estimate based on requirements.
- Always use Rupees (₹).
- Keep responses brief (1-3 sentences).
- Append [WS_BTN] if the user asks for contact, pricing, or shows high intent (after 3+ messages).
- Direct Contact: +91 88070 99288 / vimalraj5207@gmail.com.
`;


const Chatbot = ({ visible, onHide }) => {
    const [messages, setMessages] = useState([
        { text: "Hello! 👋 I'm your VSGRPS Consultant. How can I assist you with your business growth or digital service needs today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleWhatsAppRedirect = () => {
        const message = "Hi VSGRPS team! I'd like to discuss a project with you.";
        window.open(`https://wa.me/918807099288?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleCall = () => {
        window.location.href = "tel:+918807099288";
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    const fetchGroqResponse = async (userInput, history) => {
        try {
            // Prepare the context for the model
            const apiMessages = [
                { role: "system", content: SYSTEM_PROMPT },
                ...history.map(msg => ({
                    role: msg.sender === 'user' ? 'user' : 'assistant',
                    content: msg.text
                })),
                { role: "user", content: userInput }
            ];

            const response = await fetch(GROQ_API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${GROQ_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messages: apiMessages,
                    model: "llama-3.3-70b-versatile", // High performance model
                    temperature: 0.6, // Slightly lower temperature for more factual responses
                    max_tokens: 512,
                    top_p: 1,
                    stream: false,
                    stop: null
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || "Failed to reach intelligence server");
            }

            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error("Groq API Error:", error);
            // Fallback response with buttons if API fails (Free tier limits etc)
            return "I'm experiencing a high volume of requests at the moment. For immediate assistance with your business questions, please connect with our team directly! [WS_BTN]";
        }
    };

    const handleSendMessage = async () => {
        if (!input.trim() || loading) return;

        const currentInput = input;
        const userMessage = { text: currentInput, sender: 'user' };
        
        // Update messages with user input and clear textfield
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        // Fetch AI response
        const botResponseText = await fetchGroqResponse(currentInput, messages);
        
        setMessages(prev => [...prev, { text: botResponseText, sender: 'bot' }]);
        setLoading(false);
    };


    const renderMessageContent = (msg) => {
        const text = msg.text;
        if (msg.sender === 'bot' && text.includes('[WS_BTN]')) {
            const cleanText = text.replace('[WS_BTN]', '').trim();
            return (
                <div className="message-content-with-cta">
                    <div className="message-text">{cleanText}</div>
                    <div className="cta-button-group">
                        <Button 
                            label="WhatsApp" 
                            icon="pi pi-whatsapp" 
                            className="p-button-success p-button-sm message-cta-btn" 
                            onClick={handleWhatsAppRedirect}
                            aria-label="Contact us on WhatsApp"
                        />
                        <Button 
                            label="Call Now" 
                            icon="pi pi-phone" 
                            className="p-button-info p-button-sm message-cta-btn call-btn" 
                            onClick={handleCall}
                            aria-label="Call VSGRPS Technologies"
                        />
                    </div>
                </div>
            );
        }
        return <div className="message-text">{text}</div>;
    };

    return (
        <Sidebar 
            visible={visible} 
            onHide={onHide} 
            position="right" 
            className="chatbot-sidebar mobile-full"
            header={(
                <div className="chatbot-header">
                    <div className="navbar__logo">
                        <div className="navbar__logo-icon">VS</div>
                        <span className="navbar__logo-text">Internal Assistant</span>
                    </div>
                </div>
            )}
        >
            <div className="chatbot-container">
                <div className="chat-window">
                    <ScrollPanel className="chat-messages">
                        <div className="messages-inner-container">
                            {messages.map((m, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`message-wrapper ${m.sender}`}
                                >
                                    <div className="message-bubble">
                                        {renderMessageContent(m)}
                                    </div>
                                </motion.div>
                            ))}
                            {loading && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="message-wrapper bot"
                                >
                                    <div className="message-bubble loading">
                                        <span></span><span></span><span></span>
                                    </div>
                                </motion.div>
                            )}
                            {messages.length === 1 && (
                                <div className="suggested-questions">
                                    <button onClick={() => setInput("What services do you offer?")}>Services 🚀</button>
                                    <button onClick={() => setInput("What are your price estimates?")}>Pricing ₹</button>
                                    <button onClick={() => setInput("How do we get started?")}>Get Started 📈</button>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </ScrollPanel>
                    <div className="chat-input-area">
                        <InputText 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Ask about CertifyPro or VSGRPS..."
                            autoFocus
                        />
                        <Button 
                            icon={loading ? "pi pi-spin pi-spinner" : "pi pi-send"} 
                            onClick={handleSendMessage} 
                            disabled={loading || !input.trim()} 
                            className="p-button-rounded btn-send" 
                            aria-label="Send Message"
                        />
                    </div>
                </div>

                <div className="chatbot-footer-simple">
                    Fast Support: <strong>+91 88070 99288</strong>
                </div>
            </div>
        </Sidebar>
    );
};

export default Chatbot;
