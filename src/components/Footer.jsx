import React from 'react';
import { Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0e2d3c] text-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">

        {/* Column 1 - Links */}
        <div>
          <h4 className="text-base font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">Accessibility Notice</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 2 - Contact Info */}
        <div>
          <h4 className="text-base font-semibold mb-3 text-white">Contact</h4>
          <p className="text-gray-300">R-Smile Dental Care, Sewell, NJ</p>
          <p className="text-gray-300 mt-2">
            <span className="text-white">Appointments:</span> <a href="tel:8562109508" className="hover:underline">856-210-9508</a><br />
            <span className="text-white">Inquiries:</span> <a href="tel:8564641900" className="hover:underline">856-464-1900</a>
          </p>
        </div>

        {/* Column 3 - Address */}
        <div>
          <h4 className="text-base font-semibold mb-3 text-white">Location</h4>
          <p className="text-gray-300">100B Kings Way West,<br />Suite 100B, Sewell, NJ 08080</p>
        </div>

        {/* Column 4 - Rating */}
        <div>
          <h4 className="text-base font-semibold mb-3 text-white">Our Rating</h4>
          <div className="flex items-center gap-2 text-white text-xl font-semibold">
            4.91 <span className="text-gray-400 text-sm">/ 5</span>
            <div className="flex ml-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-300 mt-1">(57 reviews)</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400">
        <p>&copy; 2025 Tebra Inc. &nbsp;|&nbsp; Medical website powered by Tebra</p>
      </div>
    </footer>
  );
};

export default Footer;
