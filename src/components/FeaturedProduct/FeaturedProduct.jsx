import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'primereact/button';
import LottieIcon from '../Common/LottieIcon';
import './FeaturedProduct.css';

const FeaturedProduct = () => {
    return (
        <section className="featured-product">
            <div className="container">
                <div className="featured-product__grid">
                    <motion.div 
                        className="featured-product__content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="featured-badge">FLAGSHIP PRODUCT</span>
                        <h2 className="featured-title">CertifyPro</h2>
                        <h3 className="featured-subtitle">The VSGRPS Standard for Batch Certificate Generation</h3>
                        
                        <p className="featured-description">
                            Generate 1,000s of professional certificates in seconds, with zero data footprint. 
                            Built for organizations that prioritize speed, precision, and privacy.
                        </p>

                        <ul className="featured-features">
                            <li><LottieIcon src="https://assets2.lottiefiles.com/packages/lf20_jbrw3hcz.json" size="20px" className="mr-2" /> Visual Design Studio</li>
                            <li><LottieIcon src="https://assets2.lottiefiles.com/packages/lf20_jbrw3hcz.json" size="20px" className="mr-2" /> High-Res Batch Processing</li>
                            <li><LottieIcon src="https://assets2.lottiefiles.com/packages/lf20_kyu7xb1v.json" size="20px" className="mr-2" /> Zero-Retention Architecture</li>
                            <li><LottieIcon src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" size="20px" className="mr-2" /> Bulk ZIP Export Strategy</li>
                        </ul>

                        <div className="featured-actions">
                            <Button 
                                label="Try CertifyPro Free" 
                                icon="pi pi-external-link" 
                                className="p-button-primary premium-btn"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                                onClick={() => window.open('https://certifyipro.netlify.app/', '_blank')}
                            />
                            <div className="powered-by">
                                <span>Official Utility by</span>
                                <span className="vsgrps-logo">VSGRPS Technologies</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="featured-product__visual"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: 'spring' }}
                    >
                        <div className="mockup-container">
                            <img src="/images/projects/certifypro.png" alt="CertifyPro Mockup" className="mockup-img" />
                            <div className="mockup-overlay"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProduct;
