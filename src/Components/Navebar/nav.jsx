import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle menu on keyboard 'Enter' or 'Space'
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/navimg/log.png" alt="Siddhi Vinayak" />
      </div>

      <ul className={isMobileMenuOpen ? 'navbar-links mobile' : 'navbar-links'}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Gallery">Gallery</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li>
  <a
    href="https://wa.me/919057224952" // Sanjay Singodiya's number (international format, no +)
    className="book-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
    Book Now
  </a>
</li>

      </ul>

      <div
        className="hamburger"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        tabIndex={0}
        role="button"
        aria-label="Toggle navigation menu"
        onKeyDown={handleKeyDown}
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
