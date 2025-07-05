import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Verified Patient',
    platform: 'Google',
    text: 'His staff is nice and the appointments are always on time.',
    rating: 5,
  },
  {
    name: 'Alyssa R.',
    platform: 'Yelp',
    text: 'He wants to do what is best for your dental health first and foremost.',
    rating: 5,
  },
  
];

const Testimon = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const delay = 3000; // 4 seconds

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  // Auto-slide with pause on hover
  const startAutoSlide = () => {
    intervalRef.current = setInterval(nextSlide, delay);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); // cleanup
  }, []);

  return (
    <section className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center relative group">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">What Our Patients Say</h2>

        <div
          className="bg-white p-6 rounded-xl shadow-lg transition-all duration-700 ease-in-out"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div className="flex items-center justify-center mb-4">
            {Array.from({ length: testimonials[current].rating }).map((_, i) => (
              <Star key={i} className="text-yellow-400 w-5 h-5 fill-yellow-400" />
            ))}
          </div>

          <p className="text-gray-700 italic mb-4 transition-opacity duration-500">
            "{testimonials[current].text}"
          </p>

          <p className="text-sm font-semibold text-gray-900">
            {testimonials[current].name}
            <span className="text-gray-500"> • {testimonials[current].platform}</span>
          </p>
        </div>

        {/* Optional dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimon;
