import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-6">Reach out to schedule your appointment today!</p>
      <form className="max-w-xl mx-auto space-y-4">
        <input className="w-full p-3 border rounded" type="text" placeholder="Your Name" required />
        <input className="w-full p-3 border rounded" type="email" placeholder="Your Email" required />
        <textarea className="w-full p-3 border rounded" placeholder="Message" rows="4" required></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send</button>
      </form>
    </section>
  );
};

export default Contact;
