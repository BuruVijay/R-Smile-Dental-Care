import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png'

import Safety from '../components/Safety';
import OfficeWelcome from '../components/OfficeWelcome';
import VeteranDiscount from '../components/VeteranDiscount';
import Testimon from '../components/Testimon';
import Services from '../pages/Services';
import Map from '../components/Map';

import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    <section id="home" className="bg-blue-100 h-screen flex items-center justify-center text-center">
      <motion.div 
        initial={{ opacity: 0, y: -40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-4 w-full"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center text-left">
          {/* Left Column: Doctor Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Welcome to SmileCare</h2>
            <p className="text-lg text-gray-700 mb-6">Caring for your smile with compassion and technology</p>

            <div className="bg-white p-6 rounded-xl shadow-md">
  <h3 className="text-2xl font-semibold text-blue-700 mb-2">Dr. Rashmi Srivastava, DDS</h3>
  <p className="text-gray-800 mb-1">Family & General Dentist</p>
  <p className="text-gray-700 mb-4">Washington Township, Sewell, NJ</p>

  <div className="flex flex-col sm:flex-row sm:justify-center gap-3">
    <button className="shadow-md px-4 py-2 rounded text-blue-500 font-bold border border-blue-500 transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-blue-50">
      📞 856-210-9508
    </button>

    <button className="bg-blue-600 text-white px-4 py-2 rounded transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-blue-700 hover:shadow-lg">
      Request Appointment
    </button>
  </div>
</div>


          </div>

          {/* Right Column: Hero Image */}
          <div>
            <img 
              src={heroImage} 
              alt="dental-img"
              className="w-full max-w-md mx-auto object-contain"
            />
          </div>
        </div>
      </motion.div>
    </section>

    <main className="space-y-20 p-6 md:p-12">
        <Testimon/>
        <Safety />
        <OfficeWelcome />
        <VeteranDiscount />
        <Services/>
        <Map/>
      </main>

      <Footer/>
    
    </>
  );
};

export default Home;