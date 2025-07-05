import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const blogPosts = [
  {
    title: 'Gum disease and High blood pressure',
    date: 'Sep 25th, 2019',
    excerpt: 'People with gum disease (periodontitis) have a greater likelihood of high blood pressure (hypertension), according to a study published today in Cardiovascular Research...',
  },
  {
    title: 'Sleep Apnea can be a serious health issue',
    date: 'Oct 22nd, 2018',
    excerpt: 'Sleep Apnea is a serious health concern.',
  },
  {
    title: 'The most important dental visit starts with a cleaning and exam',
    date: 'Apr 23rd, 2019',
    excerpt: '"A ounce of prevention is worth a pound of cure"',
  },
];

const Blog = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-sky-600 py-20 text-center shadow-md">
        <h1 className="text-5xl text-white font-bold drop-shadow-md">Blog</h1>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto mt-6 px-4 text-sm text-gray-500">
        <span
          className="text-blue-700 font-medium cursor-pointer "
          onClick={() => navigate('/')}
        >
          R-Smile Dental Care
        </span>
        {' '} &gt; <span>Blog</span>

        <span
          className="float-right cursor-pointer hover:text-blue-500 transition"
          onClick={() => navigate('/blog/view-posts')}
        >
          View all posts
        </span>  
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-xl font-semibold text-sky-600 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-3">{post.excerpt}</p>
            <p className="text-sm text-gray-400">{post.date}</p>
          </motion.div>
        ))}
      </div>

      {/* Accessibility Icon (optional fixed corner) */}
      <div className="fixed bottom-5 left-5">
        <button className="bg-blue-500 text-white rounded-full p-3 shadow-lg hover:scale-105 transition">
          <span role="img" aria-label="Accessibility">🧍‍♂️</span>
        </button>
      </div>
    </section>
  );
};

export default Blog;
