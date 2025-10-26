import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      slug: 'takarbeten',
      title: 'Takarbeten',
      description: 'Professionella taklösningar för alla typer av byggnader. Vi hanterar allt frÌn nybyggnation till renovering av befintliga tak.',
      image: 'https://images.unsplash.com/photo-1643225523483-e2c434191bba?w=600&q=80',
      features: ['Nybyggnation', 'Takrenovering', 'Taktäckning', 'Plåttak']
    },
    {
      slug: 'fasadplat',
      title: 'FasadplÌt',
      description: 'Moderna och hÌllbara fasadlösningar i aluminium och stÌlplÌt. Perfekt för bostŠder och kommersiella fastigheter.',
      image: 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=600&q=80',
      features: ['AluminiumplÌt', 'StÌlplÌt', 'Fasadrenovering', 'Moderna designer']
    },
    {
      slug: 'service',
      title: 'Service & UnderhÌll',
      description: 'Regelbundet underhÌll och snabba reparationer. Vi ser till att ditt tak och din fasad hÌller länge.',
      image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=600&q=80',
      features: ['Regelbunden service', 'Akuta reparationer', 'Besiktning', 'Förebyggande underhÌll']
    },
    {
      slug: 'entreprenad',
      title: 'Entreprenad',
      description: 'Kompletta entreprenadjobb där vi tar ansvar för hela projektet frÌn start till mÌl.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
      features: ['Projektledning', 'Totalentreprenad', 'Nybyggnation', 'Renovering']
    },
  ];
  
  return (
    <div data-testid="services-page">
      <Hero
        title="VÌra TjŠnster"
        subtitle="Kompletta lösningar för tak och fasad"
        imageUrl="https://images.unsplash.com/photo-1635424824849-1b09bdcc55b1?w=1920&q=80"
        height="h-[400px]"
      />
      
      <Breadcrumbs items={[{ label: 'TjŠnster' }]} />
      
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi erbjuder ett komplett utbud av tjŠnster inom tak och fasad. Med över 50 Ìrs erfarenhet garanterar vi kvalitet i varje projekt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/tjanster/${service.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                data-testid={`service-card-${index}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-3xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-700 flex items-center">
                        <span className="w-2 h-2 bg-copper rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-copper font-medium group-hover:text-copper-dark">
                    LŠs mer <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-granite text-white">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Redo att börja ditt projekt?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Kontakta oss idag för en kostnadsfri offert och konsultation.
          </p>
          <Link
            to="/kontakt"
            className="inline-block bg-copper hover:bg-copper-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            data-testid="services-cta-button"
          >
            Begär offert
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;