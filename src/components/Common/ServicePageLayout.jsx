/**
 * ServicePageLayout — shared layout for all /services/* pages.
 * Uses VSGRPS design system CSS variables and classes from index.css.
 * Fully theme-compatible (dark/light).
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Breadcrumb from './Breadcrumb';
import { motion } from 'framer-motion';

/* ── Card grid item ─────────────────────────────── */
const FeatureCard = ({ title, desc, index }) => (
  <motion.div
    className="svc-card"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.07, duration: 0.35, ease: 'easeOut' }}
  >
    <h3 className="svc-card__title">{title}</h3>
    {desc && <p className="svc-card__desc">{desc}</p>}
  </motion.div>
);

/* ── FAQ accordion item ─────────────────────────── */
const FaqItem = ({ q, a }) => (
  <div className="svc-faq__item">
    <h3 className="svc-faq__q">{q}</h3>
    <p className="svc-faq__a">{a}</p>
  </div>
);

/* ── Main layout component ─────────────────────── */
const ServicePageLayout = ({
  theme,
  toggleTheme,
  /* SEO */
  seoTitle,
  seoDescription,
  seoKeywords,
  canonical,
  faqSchema,
  /* breadcrumb */
  breadcrumb,        // [{ name, href? }]
  /* hero */
  badge,             // e.g. 'Web Development'
  heroTitle,
  heroSubtitle,
  ctaLabel,
  ctaHref = '/contact',
  /* feature grid */
  featuresTitle = 'What We Offer',
  features,          // [{ title, desc }]
  /* optional case study */
  caseStudyTitle,
  caseStudyBody,     // JSX
  /* FAQ */
  faqTitle = 'Frequently Asked Questions',
  faqs,              // [{ q, a }]
  /* bottom CTA */
  closingTitle,
  closingCta,
}) => (
  <>
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      {seoKeywords && <meta name="keywords" content={seoKeywords} />}
      <link rel="canonical" href={canonical} />
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
    </Helmet>

    <Navbar theme={theme} toggleTheme={toggleTheme} />

    <main className="svc-page">
      {/* ── Hero ── */}
      <section className="section svc-hero">
        <div className="container">
          <Breadcrumb crumbs={breadcrumb} />

          {badge && (
            <span className="section-badge">
              <i className="pi pi-bolt" aria-hidden="true" />
              {badge}
            </span>
          )}

          <motion.h1
            className="svc-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {heroTitle}
          </motion.h1>

          {heroSubtitle && (
            <motion.p
              className="svc-hero__sub"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {heroSubtitle}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link to={ctaHref} className="btn btn-primary svc-hero__cta">
              {ctaLabel}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Feature grid ── */}
      {features?.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{featuresTitle}</h2>
            </div>
            <div className="svc-grid">
              {features.map((f, i) => (
                <FeatureCard key={i} index={i} {...f} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Case study ── */}
      {caseStudyTitle && (
        <section className="section">
          <div className="container svc-case">
            <h2 className="section-title">{caseStudyTitle}</h2>
            <div className="svc-case__body">{caseStudyBody}</div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {faqs?.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{faqTitle}</h2>
            </div>
            <div className="svc-faq">
              {faqs.map((f, i) => (
                <FaqItem key={i} {...f} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Closing CTA ── */}
      {closingTitle && (
        <section className="section section-dark-alt svc-closing">
          <div className="container svc-closing__inner">
            <h2 className="svc-closing__title">{closingTitle}</h2>
            <Link to={ctaHref} className="btn btn-primary">
              {closingCta || ctaLabel}
            </Link>
          </div>
        </section>
      )}
    </main>
  </>
);

export default ServicePageLayout;
