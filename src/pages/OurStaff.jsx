import React from 'react';

const staff = [
  { name: 'Dr. Rashmi Srivastava', title: 'Chief Dentist' },
  { name: 'Jane Doe', title: 'Dental Assistant' },
  { name: 'John Smith', title: 'Hygienist' }
];


const OurStaff = () => {
  return (
    <section id="our-staff" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Our Staff</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {staff.map((person, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-lg w-64 shadow hover:shadow-xl transition">
            <div className="h-32 w-32 bg-blue-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">{person.name}</h3>
            <p className="text-gray-600">{person.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurStaff;