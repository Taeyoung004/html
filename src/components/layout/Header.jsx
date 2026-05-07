import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'History', to: '/history' },
    { name: 'Facility', to: '/facility' },
    { name: 'Location', to: '/location' },
    { name: 'Contact', to: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer">
          <Link to="/">
            <span className={`text-2xl font-bold tracking-tight ${isScrolled || !isHome ? 'text-secondary' : 'text-white'}`}>
              <span className="text-primary">BA</span> TECH
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`cursor-pointer font-medium hover:text-primary transition-colors ${isScrolled || !isHome ? 'text-slate-700' : 'text-slate-200'}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled || !isHome ? 'text-secondary' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-slate-700 font-medium cursor-pointer hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
