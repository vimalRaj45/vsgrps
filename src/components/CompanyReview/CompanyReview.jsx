import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rating } from 'primereact/rating';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import toast from 'react-hot-toast';
import './CompanyReview.css';

const CompanyReview = () => {
  const [rating, setRating] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!reason.trim()) {
      toast.error('Please share your reason for this rating.');
      return;
    }
    if (email.includes('@')) {
      setShowDialog(false);
      toast.success('Review submitted successfully! Thank you for your feedback.', {
        duration: 4000,
        icon: '⭐️'
      });
      setSubmitted(true);
    } else {
      toast.error('Please enter a valid email address.');
    }
  };

  return (
    <section className="section company-review" id="company-review">
      <div className="container">
        <motion.div 
          className="company-review__card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div 
                key="rating-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="company-review__content"
              >
                <span className="section-badge">
                  <i className="pi pi-heart-fill"></i> Give Us Feedback
                </span>
                <h2 className="section-title">Rate Your Experience with VSGRPS</h2>
                <p className="section-subtitle">
                  Your feedback drives our excellence. Let us know how we're doing!
                </p>

                <div className="company-review__rating-wrapper">
                  <Rating 
                    value={rating} 
                    onChange={(e) => {
                      setRating(e.value);
                      if (e.value) setShowDialog(true);
                    }}
                    cancel={false}
                    onIcon={<img src="https://primefaces.org/cdn/primereact/images/rating/custom-icon-active.png" alt="active" width="40px" height="40px" />}
                    offIcon={<img src="https://primefaces.org/cdn/primereact/images/rating/custom-icon.png" alt="inactive" width="40px" height="40px" />}
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 12 }}
                className="company-review__success"
              >
                <motion.div 
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                >
                  <img 
                    src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f929/512.webp" 
                    alt="Star Eyes Happy" 
                    className="company-review__success-img"
                  />
                </motion.div>
                <h2 className="section-title mt-4">Thank You So Much!</h2>
                <p className="section-subtitle">
                  Your {rating}-star feedback helps us reach new heights of excellence.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <Dialog 
          header="Complete Your Review" 
          visible={showDialog} 
          onHide={() => setShowDialog(false)}
          style={{ width: '90vw', maxWidth: '420px' }}
          draggable={false}
          resizable={false}
          className="company-review__dialog"
        >
          <div className="company-review__dialog-body">
            <p className="mb-4 text-secondary">We'd love to stay in touch! Please enter your email and a reason to finalize your <strong>{rating} star</strong> rating.</p>
            
            <div className="field mb-4">
              <label htmlFor="user-reason" className="block mb-2 font-semibold">Reason for your rating</label>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-comment"></i>
                </span>
                <InputTextarea 
                  id="user-reason" 
                  value={reason} 
                  onChange={(e) => setReason(e.target.value)} 
                  placeholder="Tell us what you liked..."
                  className="w-full"
                  rows={2}
                  autoResize
                />
              </div>
            </div>

            <div className="field mb-4">
              <label htmlFor="user-email" className="block mb-2 font-semibold">Your Email Address</label>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-envelope"></i>
                </span>
                <InputText 
                  id="user-email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="email@example.com"
                  className="w-full"
                />
              </div>
            </div>

            <Button 
              label="Submit My Rating" 
              icon="pi pi-send" 
              onClick={handleSubmit} 
              className="w-full p-button-primary p-3"
              style={{ borderRadius: 'var(--radius-sm)' }}
            />
          </div>
        </Dialog>
      </div>
    </section>
  );
};

export default CompanyReview;
