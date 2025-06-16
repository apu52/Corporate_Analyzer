
import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Only scroll if we're on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/#${sectionId}`;
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '/', action: () => {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }},
    { name: 'Features', href: '#features', action: () => scrollToSection('features') },
    { name: 'Pricing', href: '#pricing', action: () => scrollToSection('pricing') },
    { name: 'Analytics', href: '#analytics', action: () => scrollToSection('analytics') },
    { name: 'Testimonials', href: '#testimonials', action: () => scrollToSection('testimonials') },
    { name: 'About Us', href: '#about', action: () => scrollToSection('about') },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '#contact', action: () => scrollToSection('contact') }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-white font-bold text-sm">CA</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Corporate-Analyzer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={item.action}
                  className="text-slate-700 hover:text-indigo-600 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-indigo-50 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="text-slate-700 hover:text-indigo-600 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-indigo-50 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </button>
              )
            ))}
          </div>

          {/* Auth & CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/auth/login">
              <Button variant="ghost" className="text-slate-700 hover:text-indigo-600 hover:bg-indigo-50">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/survey">
              <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-indigo-600 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-slate-200/50 rounded-b-xl shadow-lg">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-slate-700 hover:text-indigo-600 block px-3 py-3 text-base font-medium rounded-lg hover:bg-indigo-50 transition-all duration-300"
                    onClick={() => {
                      if (item.action) item.action();
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={item.action}
                    className="text-slate-700 hover:text-indigo-600 block px-3 py-3 text-base font-medium rounded-lg hover:bg-indigo-50 transition-all duration-300 w-full text-left"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <div className="px-3 py-2 space-y-2">
                <Link to="/auth/login">
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/survey">
                  <Button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white rounded-lg shadow-lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
