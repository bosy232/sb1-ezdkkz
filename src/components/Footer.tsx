import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <p>10 Mesaha Str., Dokki, Giza, Egypt</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2" />
                <a href="mailto:contact@efss.org" className="hover:text-[#1abc9c]">
                  contact@efss.org
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2" />
                <a href="tel:+201234567890" className="hover:text-[#1abc9c]">
                  +20 123 456 7890
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#1abc9c]">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1abc9c]">Membership</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1abc9c]">Events</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1abc9c]">Resources</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates and news.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-[#1abc9c] px-4 py-2 rounded-r-md hover:bg-[#16a085] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Egyptian Fertility And Sterility Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;