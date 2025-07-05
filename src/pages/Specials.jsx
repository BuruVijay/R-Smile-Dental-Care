import React from 'react';
import Services from '../pages/Services';

const Specials = () => {
  return (
    <>
    <section id="specials" className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
      <p className="text-lg mb-6">Get 20% off your first visit!</p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Book Now</button>
    </section>
    <Services/>
    </>
  );
};

export default Specials;