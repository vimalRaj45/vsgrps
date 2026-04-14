import React from 'react';
import { Dialog } from 'primereact/dialog';
import { ScrollPanel } from 'primereact/scrollpanel';
import './LegalDialog.css';

const LegalDialog = ({ visible, onHide, type }) => {
    const getContent = () => {
        switch (type) {
            case 'Privacy Policy':
                return {
                    title: 'Privacy Policy',
                    content: (
                        <div className="legal-content">
                            <h3>1. Information We Collect</h3>
                            <p>We only collect information that you voluntarily provide to us when you fill out our contact form, such as your name, email address, and phone number.</p>
                            
                            <h3>2. How We Use Your Information</h3>
                            <p>We use the information we collect to communicate with you, provide requested services, and improve our website and services.</p>
                            
                            <h3>3. Information Sharing</h3>
                            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, so long as those parties agree to keep this information confidential.</p>
                            
                            <h3>4. Your Consent</h3>
                            <p>By using our site, you consent to our privacy policy.</p>
                            
                            <h3>5. Contacting Us</h3>
                            <p>If there are any questions regarding this privacy policy, you may contact us using the information on our website.</p>
                        </div>
                    )
                };
            case 'Terms of Service':
                return {
                    title: 'Terms of Service',
                    content: (
                        <div className="legal-content">
                            <h3>1. Acceptance of Terms</h3>
                            <p>By accessing this website, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
                            
                            <h3>2. Use License</h3>
                            <p>Permission is granted to temporarily download one copy of the materials on VSGRPS's web site for personal, non-commercial transitory viewing only.</p>
                            
                            <h3>3. Disclaimer</h3>
                            <p>The materials on VSGRPS's web site are provided "as is". VSGRPS makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                            
                            <h3>4. Limitations</h3>
                            <p>In no event shall VSGRPS or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on VSGRPS's Internet site.</p>
                            
                            <h3>5. Revisions and Errata</h3>
                            <p>The materials appearing on VSGRPS's web site could include technical, typographical, or photographic errors. VSGRPS does not warrant that any of the materials on its web site are accurate, complete, or current.</p>
                        </div>
                    )
                };
            case 'Cookie Policy':
                return {
                    title: 'Cookie Policy',
                    content: (
                        <div className="legal-content">
                            <h3>1. What are Cookies?</h3>
                            <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.</p>
                            
                            <h3>2. How We Use Cookies</h3>
                            <p>We use cookies to enhance your experience on our website. Specifically, we use them to:</p>
                            <ul>
                                <li>Remember your theme preference (Dark/Light mode).</li>
                                <li>Remember your session within our interactive tools.</li>
                            </ul>
                            
                            <h3>3. Managing Cookies</h3>
                            <p>Most browsers allow you to control cookies through their settings. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, as it will no longer be personalized to you.</p>
                            
                            <h3>4. More Information</h3>
                            <p>For more information on how we use cookies, please contact us.</p>
                        </div>
                    )
                };
            default:
                return { title: 'Legal', content: <p>No content available.</p> };
        }
    };

    const { title, content } = getContent();

    return (
        <Dialog 
            header={title} 
            visible={visible} 
            onHide={onHide} 
            breakpoints={{'960px': '75vw', '640px': '90vw'}} 
            style={{width: '50vw'}}
            className="legal-dialog"
        >
            <ScrollPanel style={{ width: '100%', height: '400px' }} className="legal-scroll">
                {content}
            </ScrollPanel>
        </Dialog>
    );
};

export default LegalDialog;
