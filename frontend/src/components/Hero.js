import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, imageUrl, ctaText, ctaLink, height = 'h-[600px]' }) => {
  return (
    <div className={`relative ${height} flex items-center justify-center overflow-hidden`} data-testid="hero-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto" data-testid="hero-subtitle">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <Link
            to={ctaLink}
            className="inline-block bg-copper hover:bg-copper-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            data-testid="hero-cta-button"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;