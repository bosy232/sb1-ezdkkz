import React from 'react';
import { ArrowRight, Calendar, Award, Users, BookOpen } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('')",
        }}
      >
        <div className="text-center text-white px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Egyptian Fertility And{' '}
            <span className="text-crimson">Sterility Society</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Advancing reproductive health through education, research, and
            excellence in patient care
          </p>
          <a
            href="#membership"
            className="inline-flex items-center bg-[#1abc9c] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#16a085] transition-all hover:scale-105"
          >
            Join Us Today
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection animation="slide-in">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Calendar />,
                  stat: '28+',
                  label: 'Years of Excellence',
                },
                { icon: <Users />, stat: '1,100+', label: 'Active Members' },
                { icon: <Award />, stat: '200+', label: 'Research Papers' },
                { icon: <BookOpen />, stat: '50+', label: 'Annual Events' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform"
                >
                  <div className="inline-flex p-4 rounded-full bg-[#1abc9c]/10 text-[#1abc9c] mb-4 group-hover:bg-[#1abc9c] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {item.stat}
                  </h3>
                  <p className="text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Membership Section */}
      <AnimatedSection animation="fade-in">
        <section id="membership" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Membership Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Access to Resources',
                  description:
                    'Get exclusive access to our comprehensive library of medical resources and research papers.',
                },
                {
                  title: 'Professional Network',
                  description:
                    'Connect with leading professionals in the field of reproductive medicine.',
                },
                {
                  title: 'Educational Events',
                  description:
                    'Participate in workshops, conferences, and continuing education programs.',
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4 text-[#2C3E50]">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Latest News Section */}
      <AnimatedSection animation="scale-in">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Latest News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Annual Conference 2024',
                  date: 'March 15, 2024',
                  image:
                    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop',
                },
                {
                  title: 'New Research Publication',
                  date: 'February 28, 2024',
                  image:
                    'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=500&h=300&fit=crop',
                },
                {
                  title: 'Workshop Series',
                  date: 'April 5, 2024',
                  image:
                    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop',
                },
              ].map((news, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="px-4 py-2 bg-white text-gray-900 rounded-md">
                        Read More
                      </button>
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {news.title}
                  </h3>
                  <p className="text-gray-600">{news.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Home;
