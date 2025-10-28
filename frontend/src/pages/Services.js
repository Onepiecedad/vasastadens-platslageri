import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      slug: 'takarbeten',
      title: 'Takarbeten',
      description: 'Professionella taklösningar för alla typer av byggnader. Vi hanterar allt från nybyggnation till renovering av befintliga tak.',
      image: 'https://images.unsplash.com/photo-1643225523483-e2c434191bba?w=600&q=80',
      features: ['Nybyggnation', 'Takrenovering', 'Taktäckning', 'Plåttak']
    },
    {
      slug: 'fasadplat',
      title: 'Fasadplåt',
      description: 'Moderna och hållbara fasadlösningar i aluminium och stålplåt. Perfekt för bostäder och kommersiella fastigheter.',
      image: 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=600&q=80',
      features: ['Aluminiumplåt', 'Stålplåt', 'Fasadrenovering', 'Moderna designer']
    },
    {
      slug: 'service',
      title: 'Service & Underhåll',
      description: 'Regelbundet underhåll och snabba reparationer. Vi ser till att ditt tak och din fasad håller länge.',
      image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=600&q=80',
      features: ['Regelbunden service', 'Akuta reparationer', 'Besiktning', 'Förebyggande underhåll']
    },
    {
      slug: 'entreprenad',
      title: 'Entreprenad',
      description: 'Kompletta entreprenadjobb där vi tar ansvar för hela projektet från start till mål.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
      features: ['Projektledning', 'Totalentreprenad', 'Nybyggnation', 'Renovering']
    },
  ];
  
  return (
    <div data-testid="services-page">
      <Hero
        title="Våra Tjänster"
        subtitle="Kompletta lösningar för tak och fasad"
        imageUrl="https://images.unsplash.com/photo-1635424824849-1b09bdcc55b1?w=1920&q=80"
        height="h-[400px]"
      />
      
      <Breadcrumbs items={[{ label: 'Tjänster' }]} />
      
      <section className="py-24 bg-light">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-lg text-neutral max-w-3xl mx-auto">
              Vi erbjuder ett komplett utbud av tjänster inom tak och fasad. Med över 50 års erfarenhet garanterar vi kvalitet i varje projekt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/tjanster/${service.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-transparent hover:border-copper/40 shadow-md hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`service-card-${index}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 text-3xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-neutral mb-5">{service.description}</p>
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-neutral flex items-center">
                        <span className="w-2.5 h-2.5 bg-copper/80 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-copper font-semibold tracking-wide group-hover:text-copper-dark">
                    Läs mer <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-granite text-white">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 animate-fade-in-up">Redo att börja ditt projekt?</h2>
          <p className="text-xl mb-8 text-white/75 max-w-2xl mx-auto animate-fade-in-up-delay">
            Kontakta oss idag för en kostnadsfri offert och konsultation.
          </p>
          <Link
            to="/kontakt"
            className="inline-block bg-copper hover:bg-copper-dark text-white px-9 py-4 rounded-full text-lg font-semibold transition-all shadow-xl shadow-black/10 animate-fade-in-up-delay-lg"
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
