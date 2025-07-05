import React, { useEffect } from 'react';
import { Routes, Route,Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import OurOffice from './pages/OurOffice';
import Specials from './pages/Specials';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import ViewPosts from './components/ViewPosts';


import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {

  useEffect(() => {
  AOS.init({
    duration: 800,    // animation duration in ms
    once: true,       // only animate once on scroll
    easing: 'ease-in-out',
  });
}, []);

  return (
    
    <div className="font-sans text-gray-800 scroll-smooth">

      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/our-office" element={<OurOffice />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          
          <Route path="/blog/view-posts" element={<ViewPosts />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
    </div>
  );
}

export default App;