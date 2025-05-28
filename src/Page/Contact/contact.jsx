import React from 'react';
import './contact.css';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="contact-section">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact Us
      </motion.h2>

      <div className="contact-container">
        <motion.div className="contact-card" whileHover={{ scale: 1.05 }}>
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Shop Address</h3>
          <p>Rajasthan, Jhunjhunu</p>
          <p>Nawalgarh, Ramdevji Temple ke piche</p>
          <p>Karshi Mandi Road, Ward No. 6</p>
        </motion.div>

        <motion.div className="contact-card" whileHover={{ scale: 1.05 }}>
          <FaPhoneAlt className="contact-icon" />
          <h3>Call / WhatsApp</h3>
          <p>
            Sanjay Singodiya:{' '}
            <a href="tel:9057224952">9057224952</a>,{' '}
            <a href="tel:8233238256">8233238256</a>
          </p>
          <p>
            Rajesh Singodiya: <a href="tel:9024321148">9024321148</a>
          </p>
        </motion.div>

        <motion.div className="contact-card social-icons" whileHover={{ scale: 1.05 }}>
          <h3>Connect on Social Media</h3>
          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=100076379882198"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/sainisanjay82"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/9057224952"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        <motion.div className="contact-card map-card" whileHover={{ scale: 1.05 }}>
          <h3>Visit Us on Map</h3>
          <iframe
            title="Siddhi Vinayak Sounds & Events Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.59720352101544!2d75.26827764676771!3d27.848116635039727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cb494fefd1ffd%3A0x87b59b1725190b81!2sFire%20Birgede%20Office%2C%20Nawalgarh!5e1!3m2!1sen!2sin!4v1748321958836!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
