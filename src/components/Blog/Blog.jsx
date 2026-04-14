import React from 'react';
import { motion } from 'framer-motion';
import blogPosts from '../../data/blog';
import './Blog.css';

const Blog = () => {
  return (
    <section id="blog" className="section blog">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.0, 0.0, 0.2, 1] }}
        >
          <span className="section-badge">
            <i className="pi pi-book"></i>
            Our Blog
          </span>
          <h2 className="section-title">Insights & Innovation</h2>
          <p className="section-subtitle">
            Stay updated with the latest trends in software development, 
            digital transformation, and business automation.
          </p>
        </motion.div>

        <div className="blog__grid">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog__card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.0, 0.0, 0.2, 1] }}
            >
              <div className="blog__card-image-wrapper">
                <img src={post.image} alt={post.title} className="blog__card-image" loading="lazy" />
                <span className="blog__card-category">{post.category}</span>
              </div>
              
              <div className="blog__card-content">
                <div className="blog__card-meta">
                  <span><i className="pi pi-calendar"></i> {post.date}</span>
                  <span><i className="pi pi-clock"></i> {post.readTime}</span>
                </div>
                
                <h3 className="blog__card-title">
                  <a href="#">{post.title}</a>
                </h3>
                
                <p className="blog__card-excerpt">{post.excerpt}</p>
                
                <div className="blog__card-footer">
                  <span className="blog__card-author">By {post.author}</span>
                  <a href="#" className="blog__card-link">
                    Read More
                    <i className="pi pi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.div 
          className="blog__more-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#" className="btn btn-outline blog__more-btn">
            View All Insights
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
