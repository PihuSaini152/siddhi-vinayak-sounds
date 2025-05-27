import React from 'react';
import './eventgallery.css';

const services = [
  {
    id: 1,
    name: 'Birthday Party Management',
    img: '/Servicesimg/bdy.jpg'
  },
  {
    id: 2,
    name: 'Other Parties Management',
    img: '/Servicesimg/party.jpg'
  },
  {
    id: 3,
    name: 'Reception Management',
    img: '/Servicesimg/respection.jpg'
  },
  {
    id: 4,
    name: 'Square Type Truss',
    img: '/Servicesimg/Squre.jpg'
  },
  {
    id: 5,
    name: 'Circle Type Truss',
    img: '/Servicesimg/cricle.jpg'
  },
  {
    id: 6,
    name: 'Background LED Truss',
    img: '/Servicesimg/led.jpg'
  },
  {
    id: 7,
    name: 'Lighting, Decoration & Sound Truss',
    img: '/Servicesimg/big.jpg'
  },
  {
    id: 8,
    name: 'Speaker Rent',
    img: '/Servicesimg/spekars.jpg'
  },
  {
    id: 9,
    name: 'DJ Available',
    img: '/Servicesimg/dj.jpg'
  },
  {
    id: 10,
    name: 'Band, Ghodi & Baraat Rath',
    img: '/Servicesimg/rath.jpg'
  },
  {
    id: 11,
    name: 'Bride Fog Matka Entry',
    img: '/Servicesimg/fog.jpg'
  },
  {
    id: 12,
    name: 'Fire Entry',
    img: '/Servicesimg/fire.jpg'
  },
  {
    id: 13,
    name: 'Balloon Entry',
    img: '/Servicesimg/ballon.jpg'
  },
  {
    id: 14,
    name: 'Tent Decoration Management',
    img: '/Servicesimg/tent.jpg'
  },
  {
    id: 15,
    name: 'Caterers Management',
    img: '/Servicesimg/catress.jpg'
  },
  {
    id: 16,
    name: 'Dance Floor Setup System',
    img: '/Servicesimg/floor.jpg'
  },
  {
    id: 17,
    name: 'Full Event Management',
    img: '/Servicesimg/event.jpg'
  },
  {
    id: 18,
    name: 'Any Functions Sound System Available',
    img: '/Servicesimg/sound.jpg'
  },
  {
    id: 19,
    name: 'Any Functions Sound System Available',
    img: '/gallery/19.jpg'
  },
  {
    id: 20,
    name: 'Any Functions Sound System Available',
    img: '/gallery/20.jpg'
  },
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Services Gallery</h2>
      
      <div className="gallery-grid">
        {services.map((service) => (
          <div key={service.id} className="gallery-item">
            <img src={service.img} alt={service.name} />
          </div>
        ))}
      </div>

      {/* 🎥 Video Heading Section */}
      <div className="video-heading">
        <h3>Our Work in Action 🎬</h3>
        <p>Watch how we light up events with energy, music, and unforgettable celebrations!</p>
      </div>

      {/* 🎥 Video Section */}
      <div className="video-container">
        <video controls>
          <source src="/gallery/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video controls>
          <source src="/gallery/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Gallery;
