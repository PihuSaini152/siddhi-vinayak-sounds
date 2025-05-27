import React from 'react';
import './herosection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="heroLeft">
        <h1 className="animated-heading">
          Siddhi Vinayak <br /> Event Management
        </h1>
        <p className="hero-description">
          Book your next <strong>Wedding</strong>, <strong>Reception</strong>, <strong>Bride Entry</strong>, <strong>Birthday Party</strong>, <strong>Corporate Event</strong>, <strong>Tent Services</strong>, <strong>Decorations</strong>, <strong>DJ Services</strong>, <strong>Rath Processions</strong> & all event solutions with us.<br />
          We deliver top-notch sound systems, lighting, and unforgettable vibes to make your event spectacular!
        </p>

        <a
          href="https://wa.me/9057224952?text=Hello%2C%20I%20want%20to%20book%20Siddhi%20Vinayak%20Sounds%20%26%20Events%20for%20my%20upcoming%20function."
          target="_blank"
          rel="noopener noreferrer"
          className="book-btn"
        >
          Book Now
        </a>
      </div>

      <div className="heroRight">
        <img src="/heroimg/sound.jpg" alt="DJ Sound Setup" />
      </div>
    </section>
  );
};

export default HeroSection;
