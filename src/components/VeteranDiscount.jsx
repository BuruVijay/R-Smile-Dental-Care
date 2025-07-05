import React from 'react';
import { motion } from 'framer-motion';
import { Medal, UserCheck } from 'lucide-react';

const VeteranDiscount = () => {
  return (
    <section id="veterans" className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      
      {/* Veteran Discount */}
      <motion.div
        className="bg-blue-100 border-l-4 border-blue-500 rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-center gap-4 text-blue-900"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Medal className="w-10 h-10 text-blue-600 flex-shrink-0" />
        <h3 className="text-lg sm:text-xl font-semibold text-center sm:text-left">
          🎖️ It is our honor to support veterans with a <span className="text-blue-700 font-bold">10% discount</span> on all dental care services.
        </h3>
      </motion.div>

      {/* Welcome Message */}
      <motion.div
        className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <UserCheck className="w-6 h-6 text-blue-700" />
          <h4 className="text-xl font-bold text-blue-900">Welcome Dr. Rashmi Srivastava</h4>
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
          <p>
            After decades of dedicated dental care in Sewell, New Jersey, Dr. Howard Cetel is retiring. Known as one of the best dentists in Gloucester County, he’s received the “Best Dentist” award five times for his compassionate, patient-centered approach.
          </p>
          <p>
            We warmly welcome <strong>Dr. Rashmi Srivastava</strong> as the new leader of our practice. A graduate of <strong>New York University College of Dentistry (NYU)</strong>, Dr. Srivastava brings 20+ years of experience in delivering comprehensive, high-quality dental care.
          </p>
          <p>
            To maintain our welcoming environment, <strong>our dedicated staff remains unchanged</strong>, ensuring that you’ll continue to see the same friendly faces you trust.
          </p>
          <p>
            We look forward to seeing you and your family at your next visit. Thank you for being a part of our dental family.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default VeteranDiscount;
