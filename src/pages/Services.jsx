import { motion } from 'framer-motion';
import crownsImg from '../assets/crowns.png';
import rootCanalImg from '../assets/root-canal.png';
import dentalImplantsImg from '../assets/dental-implants.png';
import denturesImg from '../assets/dentures.png';
import invisalignImg from '../assets/invisalign.png';
import teethWhiteningImg from '../assets/teeth-whitening.png';
import oralSurgeryImg from '../assets/oral-surgery.jpg';
import emergencyCareImg from '../assets/emergency-care.png';
import teethCleaningImg from '../assets/teeth-cleaning.jpg';

const services = [
  {
    name: 'Dental Crowns',
    description: 'Restore damaged teeth with custom-made crowns for protection and natural appearance.',
    img: crownsImg,
    link: '#',
  },
  {
    name: 'Root Canal',
    description: 'Painless root canal treatments to save infected teeth and relieve discomfort.',
    img: rootCanalImg,
    link: '#',
  },
  {
    name: 'Dental Implants',
    description: 'Permanent tooth replacement solutions that look and function like natural teeth.',
    img: dentalImplantsImg,
    link: '#',
  },
  {
    name: 'Dentures',
    description: 'Custom-fitted dentures for comfortable chewing and confident smiling.',
    img: denturesImg,
    link: '#',
  },
  {
    name: 'Invisalign',
    description: 'Clear aligners for discreet teeth straightening without metal braces.',
    img: invisalignImg,
    link: '#',
  },
  {
    name: 'Teeth Whitening',
    description: 'Professional whitening treatments for a brighter, more confident smile.',
    img: teethWhiteningImg,
    link: '#',
  },
  {
    name: 'Oral Surgery',
    description: 'Expert surgical procedures for tooth extractions and other oral health needs.',
    img: oralSurgeryImg,
    link: '#',
  },
  {
    name: 'Emergency Care',
    description: 'Immediate dental care for urgent situations and unexpected pain relief.',
    img: emergencyCareImg,
    link: '#',
  },
  {
    name: 'Teeth Cleaning',
    description: 'Professional cleaning to maintain oral health and prevent dental issues.',
    img: teethCleaningImg,
    link: '#',
  },
];


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-2">Our Dental Services</h2>
          <p className="text-gray-600 text-base max-w-md mx-auto">
            Personalized care with cutting-edge treatments for every smile.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-blue-500"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{service.name}</h3>
                <p className="text-gray-700 text-sm flex-grow">{service.description}</p>
                <a
                  href={service.link}
                  className="mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
