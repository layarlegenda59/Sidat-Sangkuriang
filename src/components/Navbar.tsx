import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { getTotalItems } = useCart();

  const navItems = [
    { key: 'home', label: t('nav.home') },
    { key: 'about', label: t('nav.about') },
    { key: 'farming', label: t('nav.farming') },
    { key: 'training', label: t('nav.training') },
    { key: 'products', label: t('nav.products') },
    { key: 'education', label: t('nav.education') },
    { key: 'contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-18">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/LOGO%20LANJUTAN.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL0xPR08gTEFOSlVUQU4ucG5nIiwiaWF0IjoxNzU0MzUyOTEyLCJleHAiOjE3ODU4ODg5MTJ9.KbUXnFvlpo_B6P8c_wyr7EGe8WMko8RZJ4U3EZPXsdI"
              alt="Sidat Sangkuriang Logo"
              className="h-14 sm:h-16 lg:h-16 w-auto cursor-pointer"
              onClick={() => onPageChange('home')}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onPageChange(item.key)}
                className={`nav-desktop text-sm lg:text-sm font-semibold transition-all duration-300 py-2 px-2 relative ${
                  currentPage === item.key
                    ? 'text-teal-600'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {item.label}
                {currentPage === item.key && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-md sm:rounded-lg bg-gray-50 hover:bg-teal-50 hover:text-teal-600 transition-all duration-300 border border-gray-200"
            >
              {language === 'id' ? (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="6" width="20" height="6" fill="#FF0000"/>
                  <rect x="2" y="12" width="20" height="6" fill="#FFFFFF"/>
                </svg>
              ) : (
                <img 
                  src="https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/EN.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL0VOLnBuZyIsImlhdCI6MTc1NDM2Nzk1OSwiZXhwIjoxNzg1OTAzOTU5fQ.tbaXOgdI1yDWAJMC7xKq5atcO5EOckRWDCY1M4A-5uU"
                  alt="English Flag"
                  className="w-4 h-4 sm:w-5 sm:h-5 object-cover rounded-sm"
                />
              )}
              <span className="text-xs sm:text-sm font-semibold">{language.toUpperCase()}</span>
            </button>

            {/* Cart */}
            <button
              onClick={() => onPageChange('checkout')}
              className="relative p-2 sm:p-2.5 lg:p-3 text-gray-700 hover:text-teal-600 transition-colors bg-gray-50 hover:bg-teal-50 rounded-md sm:rounded-lg"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 text-gray-700 hover:text-teal-600 bg-gray-50 hover:bg-teal-50 rounded-lg transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  onPageChange(item.key);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                  currentPage === item.key
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;