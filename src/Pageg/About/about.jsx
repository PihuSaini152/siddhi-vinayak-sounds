import React from 'react';
import './about.css';
import aboutImg from '/about/about.jpg'; 

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt="DJ Setup" />
        </div>
        <div className="about-content">
          <h2> Siddhi Vinayak Trust Sounds Nawalgrah</h2>
          <p>
            Siddhi Vinayak Trust Sounds Nawalgrah is a leading event service provider in Rajasthan, 
            known for delivering powerful DJ setups, vibrant lighting, and full wedding & party event management. 
            Led by <strong>Sanjay Singodiya</strong> and <strong>Rajesh Singodiya</strong>, our team has built 
            a reputation for creating unforgettable experiences across Nawalgrah and nearby regions.
          </p>
          <p>
            Whether it’s a wedding, reception, cultural program, or a rocking DJ night, we handle everything —
            bride & groom entries, tents, decorations, and full event coordination with complete professionalism and passion.
          </p>
          <ul className="about-highlights">
            <li>🎧 Powerful DJ Sound Systems</li>
            <li>💡 Lighting & Special Effects</li>
            <li>🎪 Tent, Decoration & Stage Setup</li>
            <li>👰 Bride & Groom Entry Arrangements</li>
            <li>⭐ Trusted by hundreds of clients</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
