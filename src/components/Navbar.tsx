import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Calendar, FileText, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    {
      label: 'Annual Meeting',
      subItems: ['2024', '2023', '2022', '2021', '2020'],
      path: '/meetings'
    },
    { path: '/documents', label: 'Documents' },
    { path: '/payment', label: 'Payment' },
    {
      label: 'Journal',
      subItems: ['Current Issue', 'Archive', 'Submit Paper'],
      path: '/journal'
    }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#2C3E50]/95 backdrop-blur-sm' : 'bg-[#2C3E50]'
    } border-t-4 border-crimson`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 group">
            <div className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-[#1abc9c] group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-white font-bold text-xl">EFSS</span>
            </div>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link, index) => (
                <div key={index} className="relative group">
                  {link.subItems ? (
                    <div className="text-white hover:text-[#1abc9c] px-3 py-2 rounded-md text-sm font-medium transition-all cursor-pointer flex items-center">
                      {link.label}
                      <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        {link.subItems.map((item, idx) => (
                          <Link
                            key={idx}
                            to={`${link.path}/${item.toLowerCase()}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1abc9c] hover:text-white transition-colors"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`text-white hover:text-[#1abc9c] px-3 py-2 rounded-md text-sm font-medium transition-all ${
                        location.pathname === link.path ? 'text-[#1abc9c]' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/login"
                className="bg-[#1abc9c] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#16a085] transition-all flex items-center gap-2 hover:scale-105"
              >
                <User size={16} />
                Login
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#1abc9c] focus:outline-none transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.subItems ? (
                  <div className="space-y-1">
                    <div className="text-white px-3 py-2 text-base font-medium">
                      {link.label}
                    </div>
                    <div className="pl-4 space-y-1">
                      {link.subItems.map((item, idx) => (
                        <Link
                          key={idx}
                          to={`${link.path}/${item.toLowerCase()}`}
                          className="text-gray-300 hover:text-[#1abc9c] block px-3 py-2 text-sm transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-white hover:text-[#1abc9c] block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      location.pathname === link.path ? 'text-[#1abc9c]' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/login"
              className="bg-[#1abc9c] text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#16a085] transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;