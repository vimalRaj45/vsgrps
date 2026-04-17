import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import projectsData from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const [viewMode, setViewMode] = useState('carousel');
  const navigate = useNavigate();

  return (
    <section id="projects" className="section section-alt projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.0, 0.0, 0.2, 1] }}
        >
          <span className="section-badge">
            <i className="pi pi-briefcase"></i>
            Our Projects
          </span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            Explore a selection of projects we've delivered — each one built to 
            solve real challenges and create lasting impact.
          </p>
        </motion.div>

        {/* View Toggle */}
        <div className="projects__toggle">
          <button
            className={`projects__toggle-btn ${viewMode === 'carousel' ? 'active' : ''}`}
            onClick={() => setViewMode('carousel')}
          >
            <i className="pi pi-images"></i>
            Carousel
          </button>
          <button
            className={`projects__toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <i className="pi pi-th-large"></i>
            Grid
          </button>
        </div>

        {/* Carousel View */}
        {viewMode === 'carousel' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="projects__swiper"
            >
              {projectsData.map((project, index) => (
                <SwiperSlide key={project.id}>
                  <ProjectCard project={project} index={index} navigate={navigate} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && (
          <motion.div
            className="projects__grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} navigate={navigate} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, navigate }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      className="projects__card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.07, ease: [0.0, 0.0, 0.2, 1] }}
      onClick={() => navigate(`/project/${project.id}`)}
      style={{ cursor: 'pointer' }}
      role="button"
      tabIndex="0"
      aria-label={`View details for project: ${project.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(`/project/${project.id}`); }}
    >
      {/* Image */}
      <div className="projects__card-image-wrapper">
        {!imageLoaded && (
          <div className="projects__card-skeleton">
            <div className="projects__card-skeleton-shimmer"></div>
          </div>
        )}
        <img
          src={project.image}
          alt={project.title}
          width="600"
          height="400"
          className={`projects__card-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <div className="projects__card-overlay">
          <span className="projects__card-view">
            <i className="pi pi-eye"></i>
            View Project
          </span>
        </div>
        <span
          className="projects__card-category-badge"
          style={{ background: project.color }}
        >
          {project.category}
        </span>
      </div>

      <div className="projects__card-body">
        <h3 className="projects__card-title">{project.title}</h3>
        <p className="projects__card-description">{project.shortDescription}</p>

        <div className="projects__card-tech">
          {project.tech.slice(0, 4).map((t, i) => (
            <span key={i} className="projects__card-tag">{t}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="projects__card-tag projects__card-tag--more">+{project.tech.length - 4}</span>
          )}
        </div>

        <div className="projects__card-footer">
          <span className="projects__card-year">
            <i className="pi pi-calendar"></i>
            {project.year}
          </span>
          <span className="projects__card-btn">
            Details
            <i className="pi pi-arrow-right"></i>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
