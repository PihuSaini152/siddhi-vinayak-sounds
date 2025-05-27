import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h2>Siddhi Vinayak Sounds & Events</h2>
          <p>Professional event management services including party, wedding, reception, bride entry, tents, decoration, sound & lighting.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p><FaPhoneAlt /> <a href="tel:9057224952">9057224952</a>, <a href="tel:8233238256">8233238256</a></p>
          <p><FaPhoneAlt /> <a href="tel:9024321148">9024321148</a></p>
          <p><FaMapMarkerAlt /> Rajasthan, Jhunjhunu, Nawalgarh, Ramdevji Temple ke piche, Karshi Mandi Road, Ward No. 6</p>
          <p><FaEnvelope /> <a href="mailto:info@siddhivinayak.com">info@siddhivinayak.com</a></p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/sanjay.saini" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/sainisanjay82" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/9057224952" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Siddhi Vinayak Sounds & Events. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
