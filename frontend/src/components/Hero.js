import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, imageUrl, ctaText, ctaLink, height = 'h-[600px]' }) => {
  return (
    <div className={`relative ${height} flex items-center justify-center overflow-hidden`} data-testid="hero-section">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          filter: 'brightness(0.75)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto px-6 text-center text-white animate-fade-in-up">
        <h1 className="text-[clamp(2.75rem,4vw,4.5rem)] font-semibold mb-6 leading-snug" data-testid="hero-title">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-10 text-gray-200/90 max-w-3xl mx-auto" data-testid="hero-subtitle">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <Link
            to={ctaLink}
            className="inline-block bg-copper hover:bg-copper-dark text-white px-9 py-4 rounded-full text-lg font-semibold transition-colors shadow-xl"
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
