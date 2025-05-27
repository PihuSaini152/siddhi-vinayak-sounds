import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navebar/nav.jsx';
import Footer from './Components/Footer/Footer.jsx'; 
import Home from './Pageg/Herosection/herosection.jsx'; 
import Services from './Pageg/services/service.jsx';
import About from './Pageg/About/about.jsx'
import Gallery from './Pageg/Eventgallery/eventgallery.jsx';
import Contact from './Pageg/contect/contect.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="*" element={<Home/>} />
        <Route path="/services" element={<Services />} />
       <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
       
      </Routes>
      <Footer />
    </>
  );
}

export default App;
