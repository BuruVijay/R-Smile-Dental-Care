import React from 'react';
import { motion } from 'framer-motion';
import officeImg from '../assets/office.jpg'; // You can save the image as office.jpg in /assets


function OfficeWelcome() {
  return (
    <section id="office" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to our office!</h2>
        <p className="text-gray-700">
          "We specialize in treating fearful and anxious patients"<br />
          Compassion and understanding are the guiding principles by which Dr. Rashmi Srivastava, DDS and his staff treat every patient. We care about our patients and do our very best to create an environment that is both pleasant and comfortable...
        </p>
      </motion.div>
      <motion.img
        src={officeImg}
        alt="Office Building"
        className="rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </section>
  );
}

export default OfficeWelcome;