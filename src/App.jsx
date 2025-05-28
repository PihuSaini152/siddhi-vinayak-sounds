import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navebar/nav.jsx';
import Footer from './Components/Footer/footer.jsx'; 
import Home from './Page/Herosection/herosection.jsx'; 
import Services from './Page/services/service.jsx';
import About from './Page/About/about.jsx'
import Gallery from './Page/Eventgallery/eventgallery.jsx';
import Contact from './Page/Contact/contact.jsx'

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
