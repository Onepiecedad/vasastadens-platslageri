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
    <header className="bg-granite text-white sticky top-0 z-50 shadow-lg" data-testid="main-header">
      <div className="max-w-content mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3" data-testid="logo-link">
            <div className="text-2xl font-bold">
              <span className="text-copper">Vasastadens</span> Plåtslageri
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors hover-copper ${
                  isActive(link.path) ? 'text-copper' : 'text-white'
                }`}
                data-testid={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="bg-copper hover:bg-copper-dark text-white px-6 py-2 rounded font-medium transition-colors"
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
                className={`block py-3 text-base font-medium transition-colors hover-copper ${
                  isActive(link.path) ? 'text-copper' : 'text-white'
                }`}
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 bg-copper text-white px-6 py-3 rounded font-medium text-center"
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