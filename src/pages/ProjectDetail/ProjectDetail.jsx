import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import projectsData from '../../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = useMemo(() => projectsData.find((p) => p.id === id), [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="project-detail">
      {/* Back Navigation Bar */}
      <div className="project-detail__top-nav">
        <div className="container">
          <motion.button 
            className="project-detail__back-btn" 
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <i className="pi pi-arrow-left"></i>
            <span>Back to Portfolio</span>
          </motion.button>
        </div>
      </div>

      {/* Centered Hero */}
      <div className="project-detail__hero container">
        <motion.div 
          className="project-detail__hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="project-detail__badge" style={{ background: `${project.color}15`, color: project.color }}>
            {project.category}
          </span>
          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__subtitle">{project.shortDescription}</p>
          
          <div className="project-detail__quick-info">
            <div className="project-detail__info-pill">
              <i className="pi pi-building"></i>
              <span>{project.client}</span>
            </div>
            <div className="project-detail__info-pill">
              <i className="pi pi-clock"></i>
              <span>{project.duration}</span>
            </div>
            <div className="project-detail__info-pill">
              <i className="pi pi-calendar"></i>
              <span>{project.year}</span>
            </div>
          </div>
          <div className="project-detail__actions">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              <i className="pi pi-external-link"></i>
              <span>View Live Project</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="project-detail__hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={project.detailImages[0]} alt={project.title} loading="eager" />
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="project-detail__body">
        <div className="container">
          
          {/* Centered Metrics Row */}
          <motion.div 
            className="project-detail__metrics-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {project.results.map((result, idx) => (
              <div key={idx} className="project-detail__metric">
                <strong className="project-detail__metric-val" style={{ color: project.color }}>
                  {result.metric}
                </strong>
                <span className="project-detail__metric-label">{result.label}</span>
              </div>
            ))}
          </motion.div>
          
          {/* Main Context Grid replaced with Centered Sections */}
          <div className="project-detail__centered-content">
            {/* Overview Section */}
            <motion.section 
              className="project-detail__section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="project-detail__section-title">
                <i className="pi pi-info-circle"></i> Project Overview
              </h2>
              <div className="project-detail__text-content">
                {project.fullDescription.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.section>

            {/* Tech Stack Section */}
            <motion.section 
              className="project-detail__section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="project-detail__section-title">
                <i className="pi pi-code"></i> Technologies Used
              </h2>
              <div className="project-detail__tags">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="project-detail__tag">{t}</span>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Full-width Gallery (Middle Break) */}
          <div className="project-detail__gallery-section">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="project-detail__section-title" style={{ justifyContent: 'center', marginBottom: '32px' }}>
                <i className="pi pi-images"></i> Interactive Gallery
              </h2>
              <div className="project-detail__swiper-container">
                <Swiper 
                  modules={[Navigation, Pagination]} 
                  spaceBetween={24} 
                  slidesPerView={1} 
                  navigation 
                  pagination={{ clickable: true }}
                >
                  {project.detailImages.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="project-detail__slide">
                        <img src={img} alt={`Slide ${idx + 1}`} loading="lazy" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          </div>

          {/* Lower Content */}
          <div className="project-detail__centered-content">
             {/* Key Features Section */}
             <motion.section 
              className="project-detail__section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="project-detail__section-title">
                <i className="pi pi-star"></i> Core Capabilities
              </h2>
              <div className="project-detail__features">
                {project.features.map((f, idx) => (
                  <div key={idx} className="project-detail__feature-card">
                    <div className="project-detail__feature-icon" style={{ background: `${project.color}15`, color: project.color }}>
                      <i className="pi pi-check-circle"></i>
                    </div>
                    <span className="project-detail__feature-text">{f}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Call to Action Next Project */}
            <motion.div 
              className="project-detail__box project-detail__box--cta"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h3>Let's Build It</h3>
              <p>Ready to achieve similar results for your business?</p>
              <div className="project-detail__cta-btns">
                <button className="btn btn-primary" onClick={() => navigate('/#contact')}>
                  <i className="pi pi-bolt"></i> Start a Project
                </button>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline-white"
                >
                  <i className="pi pi-external-link"></i>
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Suggested Projects */}
      <div className="project-detail__suggested">
        <div className="container">
          <h2 className="project-detail__section-title" style={{ justifyContent: 'center', margin: '0 0 40px 0' }}>
            <i className="pi pi-clone"></i> More From Our Portfolio
          </h2>
          <div className="project-detail__suggested-grid">
            {projectsData.filter(p => p.id !== project.id).slice(0, 3).map(p => (
              <div 
                key={p.id} 
                className="project-detail__suggested-card"
                onClick={() => {
                  navigate(`/project/${p.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                <div className="project-detail__suggested-img">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <span className="project-detail__suggested-cat" style={{ background: p.color }}>{p.category}</span>
                </div>
                <div className="project-detail__suggested-info">
                  <h4>{p.title}</h4>
                  <p>{p.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
