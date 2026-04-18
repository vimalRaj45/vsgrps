import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import toast from 'react-hot-toast';
import LottieIcon from '../Common/LottieIcon';
import scoutContact from '../../assets/scout-contact.png';
import './Contact.css';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async () => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    toast.success('Message sent successfully!');
    reset();
  };

  return (
    <section id="contact" className="section section-alt contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.0, 0.0, 0.2, 1] }}
        >
          <span className="section-badge">
            <i className="pi pi-envelope"></i>
            Get In Touch
          </span>
          <h2 className="section-title">Let's Build Something Great</h2>
          <p className="section-subtitle">
            Have a project in mind? Send us a message and our team will get back to you 
            within 24 hours.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Info Cards */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.0, 0.0, 0.2, 1] }}
          >
            <div className="contact__illustration-container mb-5">
              <img src={scoutContact} alt="Contact VSGRPS Support Team for Software Project Inquiries" className="contact__scout-img" loading="lazy" />
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <LottieIcon src="https://assets2.lottiefiles.com/packages/lf20_6ozt4yjk.json" size="70px" />
              </div>
              <div>
                <h4 className="contact__info-title">Email Us</h4>
                <p className="contact__info-text">vimalraj5207@gmail.com</p>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <LottieIcon src="https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json" size="70px" />
              </div>
              <div>
                <h4 className="contact__info-title">Call or WhatsApp</h4>
                <p className="contact__info-text">+91 88070 99288</p>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <LottieIcon src="https://assets2.lottiefiles.com/packages/lf20_q5pk6p1k.json" size="70px" />
              </div>
              <div>
                <h4 className="contact__info-title">Our Location</h4>
                <p className="contact__info-text">Namakkal, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <LottieIcon src="https://assets2.lottiefiles.com/packages/lf20_touohxv0.json" size="70px" />
              </div>
              <div>
                <h4 className="contact__info-title">Working Hours</h4>
                <p className="contact__info-text">Always open for inquiries</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="contact__form-wrapper"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.0, 0.0, 0.2, 1] }}
          >
            {isSubmitted ? (
              <motion.div 
                className="contact__success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <LottieIcon 
                  src="https://assets2.lottiefiles.com/packages/lf20_jbrw3hcz.json" 
                  size="180px" 
                  loop={false} 
                />
                <h3 className="contact__success-title">Message Received!</h3>
                <p className="contact__success-text">
                  Thank you for reaching out. Our team will get back to you 
                  within 24 hours.
                </p>
                <Button 
                  label="Send Another Message" 
                  className="p-button-text p-button-sm mt-4" 
                  onClick={() => setIsSubmitted(false)} 
                />
              </motion.div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="contact-name" className="contact__label">Full Name</label>
                    <InputText
                      id="contact-name"
                      placeholder="John Doe"
                      className={`contact__input ${errors.name ? 'p-invalid' : ''}`}
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <small className="contact__error">{errors.name.message}</small>}
                  </div>

                  <div className="contact__field">
                    <label htmlFor="contact-email" className="contact__label">Email Address</label>
                    <InputText
                      id="contact-email"
                      placeholder="john@example.com"
                      className={`contact__input ${errors.email ? 'p-invalid' : ''}`}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                    {errors.email && <small className="contact__error">{errors.email.message}</small>}
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-subject" className="contact__label">Subject</label>
                  <InputText
                    id="contact-subject"
                    placeholder="Project Inquiry"
                    className={`contact__input ${errors.subject ? 'p-invalid' : ''}`}
                    {...register('subject', { required: 'Subject is required' })}
                  />
                  {errors.subject && <small className="contact__error">{errors.subject.message}</small>}
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-message" className="contact__label">Message</label>
                  <InputTextarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className={`contact__input ${errors.message ? 'p-invalid' : ''}`}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 20, message: 'Please provide at least 20 characters' },
                    })}
                  />
                  {errors.message && <small className="contact__error">{errors.message.message}</small>}
                </div>

                <Button
                  type="submit"
                  label={isSubmitting ? 'Sending...' : 'Send Message'}
                  icon={isSubmitting ? 'pi pi-spinner pi-spin' : 'pi pi-send'}
                  className="contact__submit btn btn-primary"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                />
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
