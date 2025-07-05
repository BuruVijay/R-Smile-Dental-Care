import React from 'react';
import Services from '../pages/Services';

const OurOffice = () => {
  return (
    <>
    <section id="our-office" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4">Our Office</h2>
      <p className="max-w-3xl mx-auto mb-6 text-lg">A clean, modern, and friendly environment where your dental needs are our top priority.</p>
      <div className="flex justify-center">
        <div className="bg-gray-300 w-full max-w-xl h-64 rounded-lg shadow-inner"></div>
      </div>
    </section>
    <Services/>
    </>
  );
};

export default OurOffice;