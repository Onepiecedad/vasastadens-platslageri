import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Takarbeten',
      description: 'Professionell taklŠggning och takrenovering för alla typer av byggnader.',
      link: '/tjanster/takarbeten',
      icon: '🏠'
    },
    {
      title: 'FasadplÌt',
      description: 'Moderna fasadlösningar i plÌt för bostŠder och kommersiella fastigheter.',
      link: '/tjanster/fasadplat',
      icon: '🏢'
    },
    {
      title: 'Service',
      description: 'Regelbundet underhÌll och akuta reparationer för tak och fasad.',
      link: '/tjanster/service',
      icon: '🔧'
    },
    {
      title: 'Entreprenad',
      description: 'Kompletta entreprenadjobb frÌn planering till färdig leverans.',
      link: '/tjanster/entreprenad',
      icon: '⚙️'
    },
  ];
  
  const features = [
    'Över 50 års erfarenhet i branschen',
    'Certifierade och försäkrade hantverkare',
    'Högkvalitativa material frÌn ledande tillverkare',
    'Garanti pÌ allt utfört arbete',
    'Snabb och professionell service',
    'Gratis kostnadsfri offert',
  ];
  
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <Hero
        title="Professionella Tak- och Fasadlösningar i Göteborg"
        subtitle="Sedan 1973 levererar vi högkvalitativt hantverksarbete för bostŠder och företag."
        imageUrl="https://images.unsplash.com/photo-1635424824849-1b09bdcc55b1?w=1920&q=80"
        ctaText="Begär kostnadsfri offert"
        ctaLink="/kontakt"
      />
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-granite mb-4" data-testid="services-section-title">VÌra TjŠnster</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi erbjuder kompletta lösningar för tak och fasad â frÌn nybyggnation till renovering och underhÌll.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                data-testid={`service-card-${index}`}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-granite mb-3 group-hover:text-copper transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-copper font-medium">
                  LŠs mer <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-granite mb-6" data-testid="why-choose-us-title">
                Varför VŠlja Vasastadens PlÌtslageri?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Sedan 1973 har vi byggt vÌr verksamhet pÌ kvalitet, pÌlitlighet och nöjda kunder. VÌra erfarna hantverkare levererar alltid arbete av högsta kvalitet.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3" data-testid={`feature-${index}`}>
                    <CheckCircle className="text-copper flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?w=800&q=80"
                alt="Team pÌ arbetsplats"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="cta-section-title">Behöver du hjŠlp med tak eller fasad?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Kontakta oss idag för en kostnadsfri konsultation och offert. VÌra experter stÌr redo att hjŠlpa dig.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="inline-block bg-copper hover:bg-copper-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              data-testid="cta-contact-button"
            >
              Begär offert
            </Link>
            <a
              href="tel:031-123456"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-navy px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              data-testid="cta-phone-button"
            >
              <Phone size={20} className="mr-2" />
              Ring oss: 031-123 456
            </a>
          </div>
        </div>
      </section>
      
      {/* Recent Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-granite mb-4" data-testid="projects-section-title">Senaste Projekt</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Se nÌgra av vÌra senaste projekt och lÌt dig inspireras.
            </p>
          </div>
          <div className="text-center">
            <Link
              to="/projekt"
              className="inline-block bg-granite hover:bg-granite-light text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
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