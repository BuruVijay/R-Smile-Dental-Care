import React from 'react';

const testimonials = [
  { name: 'Alex R.', text: "The most gentle and professional dental experience I've had!" },
  { name: 'Monica P.', text: 'I always leave smiling—literally!' }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="italic">"{t.text}"</p>
            <p className="mt-2 font-semibold">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;