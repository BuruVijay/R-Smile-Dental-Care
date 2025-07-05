import React from 'react';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    title: 'Gum disease and High blood pressure',
    date: 'Sep 25th, 2019',
    content:
      'People with gum disease (periodontitis) have a greater likelihood of high blood pressure (hypertension)...',
  },
  {
    title: 'The most important dental visit starts with a cleaning and exam',
    date: 'Apr 23rd, 2019',
    content:
      'Many patients view their bi-annual dental cleaning and exam visit as being unimportant. It can actually be the most important appointment. If you do not come in for your cleaning and exam, it can actually cost you money in the long run. Upon examination, we may find a small cavity...',
  },
  {
    title: 'Sleep Apnea can be a serious health issue',
    date: 'Oct 22nd, 2018',
    content:
      'Do you know how serious Sleep Apnea can be? This common disorder results in breathing interruptions during sleep. Left untreated it can result in Coronary heart disease, stroke, depression and other health-related issues. If you struggle with your CPAP machine there is a dental alternative...',
  },
];

const ViewPosts = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-sky-600 py-20 text-center shadow-md">
        <h1 className="text-4xl md:text-5xl text-white font-bold drop-shadow">Blog Archive</h1>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto mt-6 px-4 text-sm text-gray-500">
        <span
          className="text-blue-700 font-medium cursor-pointer"
          onClick={() => navigate('/')}
        >
          R-Smile Dental Care
        </span>{' '}
        &gt;{' '}
        <span
          className="text-blue-700 font-medium cursor-pointer"
          onClick={() => navigate('/blog')}
        >
          Blog
        </span>{' '}
        &gt; <span>Archive</span>
      </div>

      {/* Posts */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="border-l-4 border-sky-500 pl-6 py-4 hover:bg-sky-50 rounded-lg transition duration-200"
          >
            <h2 className="text-xl text-sky-600 font-semibold cursor-pointer">
              {post.title}
            </h2>
            <p className="text-sm text-gray-400 mb-2">{post.date}</p>
            <p className="text-gray-700 leading-relaxed">{post.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ViewPosts;
