import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 fixed top-0 left-0 z-50 md:static">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              BusinessTracker
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors">
              Features
            </a>
            <a href="#pricing-section" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors">
              Testimonials
            </a>
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href="#pricing-section"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Get Started
            </a>
          </nav>

          <button 
            className="md:hidden p-3 rounded-full border border-gray-200 bg-white dark:bg-gray-800 shadow-lg z-50 focus:outline-none"
            style={{ minWidth: 44, minHeight: 44 }}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute inset-x-0 top-[56px] bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-xl pb-20 px-4 pt-4 space-y-2 animate-slide-down" style={{zIndex: 41}}>
            <a href="#features" className="block px-3 py-3 text-lg text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 font-medium border-b border-gray-100 dark:border-gray-800">Features</a>
            <a href="#pricing-section" className="block px-3 py-3 text-lg text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 font-medium border-b border-gray-100 dark:border-gray-800">Pricing</a>
            <a href="#testimonials" className="block px-3 py-3 text-lg text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 font-medium border-b border-gray-100 dark:border-gray-800">Testimonials</a>
            <div className="px-3 py-2 flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Dark Mode</span>
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
              </button>
            </div>
            <a
              href="#pricing-section"
              className="block mx-3 py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full text-center font-semibold hover:shadow-lg mt-2"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
