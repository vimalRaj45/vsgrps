import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    title: 'How to Choose the Best Software Development Company for Your Startup in India',
    excerpt: 'Finding the right startup tech partner in India can be the difference between scaling or stalling. Learn what to look for...',
    keyword: 'best software development company for startups in India'
  },
  {
    id: 2,
    title: 'Affordable Digital Solutions for Small Businesses in India — What You Need to Know',
    excerpt: 'Going digital doesn’t have to break the bank. Explore affordable digital solutions for small businesses in India...',
    keyword: 'affordable digital solutions for small businesses India'
  }
];

const BlogPage = ({ theme, toggleTheme }) => {
  return (
    <>
      <Helmet>
        <title>Blog | VSGRPS Technologies - Digital Solutions Insights</title>
        <meta name="description" content="Insights and tips for startups and small businesses in India. Learn about web development, app scaling, and digital transformation." />
        <link rel="canonical" href="https://vsgrps.com/blog" />
      </Helmet>
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="blog-page">
        <section className="section section--hero">
          <div className="container">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-title text-center"
            >
              Startup & Business Insights
            </motion.h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
              {posts.map((post, index) => (
                <motion.article 
                  key={index}
                  className="blog-card p-5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ background: 'var(--surface-card)', borderRadius: '24px', border: '1px solid var(--border-color)' }}
                >
                  <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                  <p className="text-secondary mb-5" style={{ color: 'var(--text-secondary)' }}>{post.excerpt}</p>
                  <div className="font-bold" style={{ color: 'var(--color-accent)' }}>
                    Read Full Article →
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogPage;
