import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Home, Code, FileText, MessageSquare, Menu, X } from 'lucide-react';
import { FiGithub, FiMail, FiLinkedin, FiTwitter } from 'react-icons/fi'; // Import social icons

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { path: '/home', label: 'Home', icon: Home },
    { path: '/developer', label: 'Developers', icon: Code },
    { path: '/trial', label: 'Try It', icon: FileText },
    { path: '/suggestion', label: 'Suggestion', icon: MessageSquare },
  ];

  const isActive = (path: string): boolean => location.pathname === path;

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const currentYear: number = new Date().getFullYear(); // Get current year for footer

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col"> {/* Added flex-col for sticky footer */}
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/home" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <div>
                <h1 className="text-2xl font-extrabold text-gray-900">AI Content Detector</h1>
                <p className="text-sm text-gray-600">Advanced algorithmic text analysis</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out ${
                      isActive(item.path)
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform hover:scale-105'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow"> {/* Added flex-grow to push footer to bottom */}
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"> {/* Added text-center for mobile */}
            {/* About Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4"> {/* Center logo on mobile */}
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">AI Content Detector</span>
              </div>
              <p className="text-gray-400 text-sm">
                A tool for detecting AI-generated content with high accuracy using a Data Structure based Algorithm.
              </p>
            </div>
            
            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Connect Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex justify-center md:justify-start space-x-4"> {/* Center social icons on mobile */}
                <a href="https://github.com/AtharvGangwar48" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors text-2xl">
                  <FiGithub />
                </a>
                <a href="mailto:atharvgangwar8@gmail.com" aria-label="Email" className="text-gray-400 hover:text-white transition-colors text-2xl">
                  <FiMail />
                </a>
                <a href="https://www.linkedin.com/in/atharvgangwar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors text-2xl">
                  <FiLinkedin />
                </a>
                <a href="https://x.com/Atharv_48" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors text-2xl">
                  <FiTwitter />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {currentYear} AI Content Detector. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
