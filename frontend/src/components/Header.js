import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  const navLinks = [
    { path: '/', label: 'Hem' },
    { path: '/tjanster', label: 'Tjänster' },
    { path: '/projekt', label: 'Projekt' },
    { path: '/om-oss', label: 'Om oss' },
    { path: '/kontakt', label: 'Kontakt' },
  ];
  
  return (
    <header className="bg-granite/95 text-white sticky top-0 z-50 shadow-[0_20px_40px_rgba(28,42,54,0.18)] border-b border-white/10 backdrop-blur-sm" data-testid="main-header">
      <div className="max-w-content mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 animate-fade-in-up" data-testid="logo-link">
            <div className="text-2xl font-semibold tracking-[0.08em] uppercase">
              <span className="text-copper">Vasastadens</span> Plåtslageri
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 animate-fade-in-up-delay">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                  isActive(link.path) ? 'text-copper' : 'text-white/80 hover:text-copper'
                }`}
                data-testid={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="bg-copper hover:bg-copper-dark text-white px-7 py-2.5 rounded-full font-semibold transition-colors shadow-lg shadow-black/10"
              data-testid="cta-offert-button"
            >
              Begär offert
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
            data-testid="mobile-menu-toggle"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6" data-testid="mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 text-base font-medium transition-colors ${
                  isActive(link.path) ? 'text-copper' : 'text-white/80 hover:text-copper'
                }`}
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 bg-copper text-white px-6 py-3 rounded-full font-semibold text-center shadow-lg shadow-black/10"
              data-testid="mobile-cta-offert-button"
            >
              Begär offert
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
