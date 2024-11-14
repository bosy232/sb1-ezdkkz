import React from 'react';
import { Award, Users, Calendar } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#2C3E50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">About EFSS</h1>
            <p className="text-lg max-w-3xl mx-auto">
              The Egyptian Fertility and Sterility Society has been at the forefront of reproductive medicine
              for over two decades, dedicated to advancing research, education, and patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="h-8 w-8 text-[#1abc9c]" />,
                stat: "28+ Years",
                description: "Of Excellence"
              },
              {
                icon: <Users className="h-8 w-8 text-[#1abc9c]" />,
                stat: "1,100+",
                description: "Active Members"
              },
              {
                icon: <Award className="h-8 w-8 text-[#1abc9c]" />,
                stat: "200+",
                description: "Research Papers"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.stat}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 text-[#2C3E50]">Vision</h3>
                <p className="text-gray-600">
                  To be the leading authority in reproductive medicine in Egypt and the Middle East,
                  fostering innovation, research, and excellence in patient care.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 text-[#2C3E50]">Goals</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Advance research in reproductive medicine</li>
                  <li>Provide continuing education for healthcare professionals</li>
                  <li>Promote best practices in fertility treatment</li>
                  <li>Support patient education and awareness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Ahmed Hassan",
                role: "President",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop"
              },
              {
                name: "Dr. Sarah Mohamed",
                role: "Vice President",
                image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop"
              },
              {
                name: "Dr. Omar Ali",
                role: "Scientific Director",
                image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop"
              }
            ].map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{leader.name}</h3>
                  <p className="text-[#1abc9c]">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;