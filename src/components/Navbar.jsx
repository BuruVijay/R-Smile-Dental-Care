import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X, ChevronDown } from 'lucide-react';

const staffDropdown = [
  { label: 'DR. HOWARD CETEL', to: '/staff/howard-cetel' },
  { label: 'DR. RASHMI SRIVASTAVA', to: '/staff/rashmi-srivastava' },
  { label: 'STAFF MEMBERS', to: '/staff/members' },
];


const officeDropdown = [
  { label: 'FORMS AND PATIENT EDUCATION', to: '/office/forms' },
  { label: 'INSURANCE AND BILLING', to: '/office/insurance' },
  { label: 'OFFICE GALLERY', to: '/office/gallery' },
];


const servicesDropdown = [
  { label: 'INVISALIGN', to: '/services/invisalign' },
  { label: 'TEETH CLEANING', to: '/services/teeth-cleaning' },
  { label: 'TEETH WHITENING', to: '/services/teeth-whitening' },
  { label: 'CROWNS', to: '/services/crowns' },
  { label: 'ROOT CANAL', to: '/services/root-canal' },
  { label: 'DENTAL IMPLANTS', to: '/services/dental-implants' },
  { label: 'DENTURES', to: '/services/dentures' },
  { label: 'ORAL SURGERY', to: '/services/oral-surgery' },
  { label: 'VIEW MORE SERVICES', to: '/services' },
];

const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-semibold text-sm">
        {label} <ChevronDown size={16} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 bg-white shadow-md border rounded-lg w-56 py-2 z-50 animate-fade-in">
          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(item.to)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'OUR STAFF', dropdown: staffDropdown },
    { label: 'SPECIALS', path: '/specials' },
    { label: 'SERVICES', dropdown: servicesDropdown },
    { label: 'BLOG', path: '/blog' },
    { label: 'TESTIMONIALS', path: '/testimonials' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-36 sm:w-40 h-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold items-center">
          {navItems.map((item, i) => (
            item.dropdown ? (
              <Dropdown key={i} label={item.label} items={item.dropdown} />
            ) : (
              <Link
                key={i}
                to={item.path}
                className="relative group transition text-gray-700 hover:text-blue-600 hover:scale-105"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {navItems.map((item, i) => (
              <div key={i}>
                {item.dropdown ? (
                  <>
                    <span className="block text-gray-700 font-semibold">{item.label}</span>
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((child, j) => (
                        <Link
                          key={j}
                          to={child.to}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-600 hover:text-blue-500"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
