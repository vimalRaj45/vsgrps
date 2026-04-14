import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechVista Solutions',
    feedback: 'VSGRPS transformed our outdated legacy system into a modern, scalable platform. Their team was responsive, professional, and delivered ahead of schedule. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Founder, GreenLeaf Startup',
    feedback: 'Working with VSGRPS was a game-changer. They understood our vision from day one and built an MVP that helped us secure our seed funding. Exceptional quality.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'CTO, FinEdge Corp',
    feedback: 'The cloud migration VSGRPS handled for us was flawless. Zero downtime, 40% cost reduction, and their post-launch support has been outstanding. True partners.',
    rating: 5,
  },
  {
    name: 'Lisa Chen',
    role: 'Product Manager, EduSmart',
    feedback: 'VSGRPS built our learning platform from scratch. The UI is beautiful, the performance is incredible, and our user engagement increased by 200%. Amazing work.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Director, LogiTrack Inc',
    feedback: 'Reliable, skilled, and genuinely passionate about delivering the best solution. VSGRPS didn\'t just meet our expectations — they exceeded them at every milestone.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Co-founder, WellnessHub',
    feedback: 'From concept to deployment, VSGRPS was with us every step. Their attention to detail and clean code practices made the entire process smooth and enjoyable.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section section-alt testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.0, 0.0, 0.2, 1] }}
        >
          <span className="section-badge">
            <i className="pi pi-star-fill"></i>
            Testimonials
          </span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear from businesses we've helped succeed.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials__swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonials__card">
                <div className="testimonials__quote">
                  <i className="pi pi-comment"></i>
                </div>

                <div className="testimonials__stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="pi pi-star-fill"></i>
                  ))}
                </div>

                <p className="testimonials__feedback">"{testimonial.feedback}"</p>

                <div className="testimonials__author">
                  <div className="testimonials__avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="testimonials__info">
                    <span className="testimonials__name">{testimonial.name}</span>
                    <span className="testimonials__role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
