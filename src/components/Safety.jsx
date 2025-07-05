import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ShieldCheck, Thermometer, Wind, Droplets, DoorOpen } from 'lucide-react';

const safetyPoints = [
  { text: 'Medical grade HEPA unit in every operatory', icon: <Wind className="w-6 h-6 text-blue-600" /> },
  { text: 'Doors on all operatories', icon: <DoorOpen className="w-6 h-6 text-blue-600" /> },
  { text: 'Windows that open installed in operatories', icon: <Wind className="w-6 h-6 text-blue-600" /> },
  { text: 'Hi-tech unit that reduces aerosols if needed', icon: <Droplets className="w-6 h-6 text-blue-600" /> },
  { text: 'Bacteria-reducing rinse', icon: <Droplets className="w-6 h-6 text-blue-600" /> },
  { text: 'Temperature checks, health questions & patient staggering', icon: <Thermometer className="w-6 h-6 text-blue-600" /> },
  { text: 'All staff trained & geared for mutual protection', icon: <ShieldCheck className="w-6 h-6 text-blue-600" /> },
];

const Safety = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8" id="safety">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">We Care About Your Safety</h2>
        <p className="text-gray-700 mb-12 text-lg italic">
          During these stressful times in our world, it’s important to tend to all your health needs — and to do so safely.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {safetyPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>{point.icon}</div>
              <p className="text-gray-800 text-left">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Safety;
