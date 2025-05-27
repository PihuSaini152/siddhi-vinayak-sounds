import React from 'react';
import './service.css';

const services = [
  {
    id: 1,
    name: 'Birthday Party Management',
    desc: 'Complete birthday setup with decoration, DJ, lighting, and cake arrangements.',
    img: '/Servicesimg/bdy.jpg'
  },
  {
    id: 2,
    name: 'Other Parties Management',
    desc: 'Professional arrangements for anniversaries, get-togethers & private parties.',
    img: '/Servicesimg/party.jpg'
  },
  {
    id: 3,
    name: 'Reception Management',
    desc: 'Stage, lighting, truss & DJ for elegant and exciting reception nights.',
    img: '/Servicesimg/respection.jpg'
  },
  {
    id: 4,
    name: 'Square Type Truss',
    desc: 'Sturdy square truss setup with proper lighting and support for sound systems.',
    img: '/Servicesimg/Squre.jpg'
  },
  {
    id: 5,
    name: 'Circle Type Truss',
    desc: 'Stylish round truss for center stage and decorative setups.',
    img: '/Servicesimg/cricle.jpg'
  },
  {
    id: 6,
    name: 'Background LED Truss',
    desc: 'Customizable LED truss to enhance the stage background and performance area.',
    img: '/Servicesimg/led.jpg'
  },
  {
    id: 7,
    name: 'Lighting, Decoration & Sound Truss',
    desc: 'Complete truss setup with colorful lights, DJ setup & themed decoration.',
    img: '/Servicesimg/big.jpg'
  },
  {
    id: 8,
    name: 'Speaker Rent',
    desc: 'High-quality speakers available on rent for all events, indoor or outdoor.',
    img: '/Servicesimg/spekars.jpg'
  },
  {
    id: 9,
    name: 'DJ Available',
    desc: 'Professional DJ with sound system to pump up any party or celebration.',
    img: '/Servicesimg/dj.jpg'
  },
  {
    id: 10,
    name: 'Band, Ghodi & Baraat Rath',
    desc: 'Full baraat experience with band, ghodi, lighting, and decorated rath.',
    img: '/Servicesimg/rath.jpg'
  },
  {
    id: 11,
    name: 'Bride Fog Matka Entry',
    desc: 'Grand fog entry with matkas for unforgettable bridal moments.',
    img: '/Servicesimg/fog.jpg'
  },
  {
    id: 12,
    name: 'Fire Entry',
    desc: 'Electrifying fire entry effects for weddings or special performances.',
    img: '/Servicesimg/fire.jpg'
  },
  {
    id: 13,
    name: 'Balloon Entry',
    desc: 'Romantic and elegant balloon entry perfect for couples or birthdays.',
    img: '/Servicesimg/ballon.jpg'
  },
  {
    id: 14,
    name: 'Tent Decoration Management',
    desc: 'Full tent setup with theme-based decoration and custom designs.',
    img: '/Servicesimg/tent.jpg'
  },
  {
    id: 15,
    name: 'Caterers Management',
    desc: 'Delicious food catering service with trained staff and variety.',
    img: '/Servicesimg/catress.jpg'
  },
  {
    id: 16,
    name: 'Dance Floor Setup System',
    desc: 'Vibrant LED dance floors with synced music & lighting effects.',
    img: '/Servicesimg/floor.jpg'
  },
  {
    id: 17,
    name: 'Full Event Management',
    desc: 'From entry to stage to food – complete event solution under one roof.',
    img: '/Servicesimg/event.jpg'
  },
  {
    id: 18,
    name: 'Any Functions Sound System Available',
    desc: 'Book top-quality sound systems for any kind of function or program.',
    img: '/Servicesimg/sound.jpg'
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <h1 className="services-heading">Our Professional Services</h1>
      <p className="services-subtext">
        We provide complete event solutions including sound, DJ, lighting, decoration, bride entries, truss setups, tent management, and more. Experience unmatched energy and unforgettable vibes at every event!
      </p>
      <div className="services-container">
        {services.map((item) => (
          <div key={item.id} className="service-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
