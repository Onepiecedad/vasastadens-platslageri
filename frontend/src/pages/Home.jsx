import Hero from '@/components/Hero';
import { useScrollToHero } from '@/hooks/useScrollToHero';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';

const Home = () => {
  useScrollToHero([]);
  const services = [
    {
      title: 'Takarbeten',
      description: 'Professionell takläggning och takrenovering för alla typer av byggnader.',
      link: '/tjanster/takarbeten',
      icon: '🏠'
    },
    {
      title: 'Fasadplåt',
      description: 'Moderna fasadlösningar i plåt för bostäder och kommersiella fastigheter.',
      link: '/tjanster/fasadplat',
      icon: '🏢'
    },
    {
      title: 'Service',
      description: 'Regelbundet underhåll och akuta reparationer för tak och fasad.',
      link: '/tjanster/service',
      icon: '🔧'
    },
    {
      title: 'Entreprenad',
      description: 'Kompletta entreprenadjobb från planering till färdig leverans.',
      link: '/tjanster/entreprenad',
      icon: '⚙️'
    },
  ];
  
  const features = [
    'Över 50 års erfarenhet i branschen',
    'Certifierade och försäkrade hantverkare',
    'Högkvalitativa material från ledande tillverkare',
    'Garanti på allt utfört arbete',
    'Snabb och professionell service',
    'Gratis kostnadsfri offert',
  ];
  
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <Hero
        title="Professionella Tak- och Fasadlösningar i Göteborg"
        subtitle="Sedan 1973 levererar vi högkvalitativt hantverksarbete för bostäder och företag."
        imageUrl="/images/hero-roofer-goteborg.png"
        ctaText="Begär kostnadsfri offert"
        ctaLink="/kontakt"
      />
      
      {/* Services Section */}
      <section className="py-24 bg-light">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl text-granite mb-5" data-testid="services-section-title">Våra Tjänster</h2>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              Vi erbjuder kompletta lösningar för tak och fasad – från nybyggnation till renovering och underhåll.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white p-8 rounded-2xl border border-transparent hover:border-copper/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
                data-testid={`service-card-${index}`}
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-granite mb-3 group-hover:text-copper transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral mb-6">{service.description}</p>
                <div className="flex items-center text-copper font-medium tracking-wide">
                  Läs mer <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl text-granite mb-6" data-testid="why-choose-us-title">
                Varför Välja Vasastadens Bleck &amp; Plåtslageri?
              </h2>
              <p className="text-lg text-neutral mb-8">
                Sedan 1973 har vi byggt vår verksamhet på kvalitet, pålitlighet och nöjda kunder. Våra erfarna hantverkare levererar alltid arbete av högsta kvalitet.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3" data-testid={`feature-${index}`}>
                    <CheckCircle className="text-copper flex-shrink-0 mt-1" size={24} />
                    <span className="text-neutral text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up-delay">
              <img
                src="/images/roof-water-beading.png"
                alt="Detaljbild av plåttak med vattenpärlor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-granite text-white">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 animate-fade-in-up" data-testid="cta-section-title">Behöver du hjälp med tak eller fasad?</h2>
          <p className="text-xl mb-8 text-white/75 max-w-2xl mx-auto animate-fade-in-up-delay">
            Kontakta oss idag för en kostnadsfri konsultation och offert. Våra experter står redo att hjälpa dig.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-lg">
            <Link
              to="/kontakt"
              className="inline-block bg-copper hover:bg-copper-dark text-white px-7 py-3.5 sm:px-9 sm:py-4 rounded-full text-lg font-semibold transition-all shadow-xl shadow-black/10"
              data-testid="cta-contact-button"
            >
              Begär offert
            </Link>
            <a
              href="tel:031-123456"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-7 py-3.5 sm:px-9 sm:py-4 rounded-full text-lg font-semibold transition-all border border-white/20 backdrop-blur-sm"
              data-testid="cta-phone-button"
            >
              <Phone size={20} className="mr-2" />
              Ring oss: 031-123 456
            </a>
          </div>
        </div>
      </section>
      
      {/* Recent Projects Section */}
      <section className="py-24 bg-light">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl text-granite mb-4" data-testid="projects-section-title">Senaste Projekt</h2>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              Se några av våra senaste projekt och låt dig inspireras.
            </p>
          </div>
          <div className="text-center animate-fade-in-up-delay">
            <Link
              to="/projekt"
              className="inline-block bg-granite hover:bg-granite-light text-white px-7 py-3.5 sm:px-9 sm:py-4 rounded-full text-lg font-semibold transition-colors shadow-lg shadow-black/10"
              data-testid="view-all-projects-button"
            >
              Se alla projekt
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
