import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-granite to-granite-light text-white mt-24" data-testid="main-footer">
      <div className="max-w-content mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-[0.1em] uppercase">
              <span className="text-copper">Vasastadens</span> Plåtslageri
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Sedan 1973 har vi levererat kvalitetsarbete inom tak och fasad i Göteborg och omnejd.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Snabblänkar</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/tjanster" className="text-white/70 hover:text-copper transition-colors" data-testid="footer-link-services">
                  Tjänster
                </Link>
              </li>
              <li>
                <Link to="/projekt" className="text-white/70 hover:text-copper transition-colors" data-testid="footer-link-projects">
                  Projekt
                </Link>
              </li>
              <li>
                <Link to="/om-oss" className="text-white/70 hover:text-copper transition-colors" data-testid="footer-link-about">
                  Om oss
                </Link>
              </li>
              <li>
                <Link to="/rekrytering" className="text-white/70 hover:text-copper transition-colors" data-testid="footer-link-careers">
                  Karriär
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tjänster</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/tjanster/takarbeten" className="text-white/70 hover:text-copper transition-colors">
                  Takarbeten
                </Link>
              </li>
              <li>
                <Link to="/tjanster/fasadplat" className="text-white/70 hover:text-copper transition-colors">
                  Fasadplåt
                </Link>
              </li>
              <li>
                <Link to="/tjanster/service" className="text-white/70 hover:text-copper transition-colors">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/tjanster/entreprenad" className="text-white/70 hover:text-copper transition-colors">
                  Entreprenad
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-copper" />
                <a href="tel:031-123456" className="text-white/70 hover:text-copper transition-colors" data-testid="footer-phone">
                  031-123 456
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-copper" />
                <a href="mailto:info@vasastadens.se" className="text-white/70 hover:text-copper transition-colors" data-testid="footer-email">
                  info@vasastadens.se
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-copper mt-1" />
                <span className="text-white/70 text-sm">
                  Vasagatan 12<br />
                  411 24 Göteborg
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Vasastadens Plåtslageri AB. Alla rättigheter förbehållna.
          </p>
          <Link to="/integritet" className="text-white/60 hover:text-copper text-sm transition-colors mt-4 md:mt-0" data-testid="footer-privacy-link">
            Integritetspolicy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
