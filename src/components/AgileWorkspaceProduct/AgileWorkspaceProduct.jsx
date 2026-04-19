import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'primereact/button';
import LottieIcon from '../Common/LottieIcon';
import './AgileWorkspaceProduct.css';

const AgileWorkspaceProduct = () => {
    return (
        <section className="agile-product">
            <div className="container">
                <div className="agile-product__grid">
                    <motion.div
                        className="agile-product__visual"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: 'spring' }}
                    >
                        <div className="agile-mockup-container">
                            <picture>
                                <img
                                    src="/images/projects/agile-workspace.png"
                                    alt="VSGRPS Agile Workspace - Modern SaaS Agile Project Management Platform"
                                    width="1024"
                                    height="1024"
                                    loading="lazy"
                                    decoding="async"
                                    className="agile-mockup-img"
                                />
                            </picture>
                            <div className="agile-mockup-overlay"></div>
                            <div className="floating-badge">
                                <i className="pi pi-bolt"></i>
                                <span>High Performance</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="agile-product__content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="agile-badge">NEW ENTERPRISE SOLUTION</span>
                        <h2 className="agile-title">VSGRPS Agile Workspace</h2>
                        <h3 className="agile-subtitle">High-Fidelity Project Governance & Team Velocity</h3>

                        <p className="agile-description">
                            A modern, secure, and multi-tenant SaaS platform designed for high-performance agile project management. 
                            Built with a focus on security, scalability, and premium user experience.
                        </p>

                        <div className="agile-features-grid">
                            <div className="agile-feature-item">
                                <div className="feature-icon-wrapper">
                                    <i className="pi pi-building"></i>
                                </div>
                                <div>
                                    <h4>Multi-Tenant</h4>
                                    <p>Secure data isolation for organizations</p>
                                </div>
                            </div>
                            <div className="agile-feature-item">
                                <div className="feature-icon-wrapper">
                                    <i className="pi pi-th-large"></i>
                                </div>
                                <div>
                                    <h4>Agile Boards</h4>
                                    <p>Real-time Kanban with priority tracking</p>
                                </div>
                            </div>
                            <div className="agile-feature-item">
                                <div className="feature-icon-wrapper">
                                    <i className="pi pi-eye"></i>
                                </div>
                                <div>
                                    <h4>Executive View</h4>
                                    <p>Project health metrics for stakeholders</p>
                                </div>
                            </div>
                            <div className="agile-feature-item">
                                <div className="feature-icon-wrapper">
                                    <i className="pi pi-file"></i>
                                </div>
                                <div>
                                    <h4>Secure Storage</h4>
                                    <p>Role-based file management & sharing</p>
                                </div>
                            </div>
                            <div className="agile-feature-item">
                                <div className="feature-icon-wrapper">
                                    <i className="pi pi-shield"></i>
                                </div>
                                <div>
                                    <h4>Enterprise Security</h4>
                                    <p>RBAC & comprehensive audit logging</p>
                                </div>
                            </div>
                            <div className="agile-feature-item">
                                <div className="feature-icon-wrapper">
                                    <i className="pi pi-users"></i>
                                </div>
                                <div>
                                    <h4>Team Sync</h4>
                                    <p>Advanced collaboration & meeting notes</p>
                                </div>
                            </div>
                        </div>

                        <div className="agile-actions">
                            <Button
                                label="Explore Agile Workspace"
                                icon="pi pi-external-link"
                                className="p-button-primary agile-premium-btn"
                                onClick={() => window.open('https://agile.vsgrps.com', '_blank')}
                            />
                            <div className="agile-tech-stack">
                                <span>Built with</span>
                                <div className="tech-pills">
                                    <span className="tech-pill">React 19</span>
                                    <span className="tech-pill">Fastify</span>
                                    <span className="tech-pill">PostgreSQL</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AgileWorkspaceProduct;
