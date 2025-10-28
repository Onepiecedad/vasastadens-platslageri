import { useParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone } from 'lucide-react';
import NotFound from './NotFound';

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  
  const servicesData = {
    takarbeten: {
      title: 'Takarbeten',
      subtitle: 'Professionella taklösningar för alla typer av byggnader',
      image: 'https://images.unsplash.com/photo-1643225523483-e2c434191bba?w=1920&q=80',
      description: 'Våra erfarna plåtslagare utför alla typer av takarbeten – från nybyggnation till renovering av befintliga tak. Vi använder endast högkvalitativa material från ledande tillverkare och garanterar ett hållbart resultat.',
      services: [
        'Nybyggnation av tak',
        'Takrenovering och taktäckning',
        'Plåttak i stål och aluminium',
        'Falstak och stående falslösningar',
        'Renovering av takfot och stuprör',
        'Takavvattning och dagvattenhantering',
        'Snöfångare och takstegar',
        'Takluckor och skorstenar'
      ],
      benefits: [
        'Över 50 års erfarenhet av takarbeten',
        'Certifierade hantverkare',
        'Material från ledande tillverkare',
        'Garanti på utfört arbete',
        'ROT-avdrag tillgängligt'
      ]
    },
    fasadplat: {
      title: 'Fasadplåt',
      subtitle: 'Moderna fasadlösningar i aluminium och stål',
      image: 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=1920&q=80',
      description: 'Vi monterar och renoverar fasader i plåt för både bostäder och kommersiella byggnader. Våra fasadlösningar är både estetiskt tilltalande och underhållsfria, med lång livslängd.',
      services: [
        'Fasadplåt i aluminium',
        'Fasadplåt i stål',
        'Stående och liggande fasadpanel',
        'Fasadrenovering',
        'Korrugerad plåt',
        'Arkitektoniska plåtlösningar',
        'Färgmatchning enligt NCS-skala',
        'Ventilerade fasadsystem'
      ],
      benefits: [
        'Underhållsfria material',
        'Lång livslängd',
        'Brett utbud av färger och finish',
        'Energieffektiva lösningar',
        'Modern estetik'
      ]
    },
    service: {
      title: 'Service & Underhåll',
      subtitle: 'Regelbundet underhåll för lång livslängd',
      image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=1920&q=80',
      description: 'Regelbundet underhåll är nyckeln till att förlänga livslängden på ditt tak och din fasad. Vi erbjuder servicekontrakt och akuta reparationer för att se till att din fastighet alltid är i toppskick.',
      services: [
        'Regelbunden takinspektion',
        'Rengöring av takrännor och stuprör',
        'Reparation av takskador',
        'Byte av skadade plåtdelar',
        'Tätning och fuktsäkring',
        'Akuta läckageproblem',
        'Förebyggande underhåll',
        'Servicekontrakt för fastigheter'
      ],
      benefits: [
        'Snabb responstid',
        'Jour-service tillgänglig',
        'Förebygger större skador',
        'Kostnadseffektivt',
        'Erfarna servicetekniker'
      ]
    },
    entreprenad: {
      title: 'Entreprenad',
      subtitle: 'Kompletta entreprenadjobb från start till mål',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80',
      description: 'Vi tar hand om hela entreprenadjobbet – från projektering och planering till slutförande. Med vår långa erfarenhet av stora projekt kan du lita på att vi levererar i tid och enligt budget.',
      services: [
        'Totalentreprenad',
        'Projektledning',
        'Nybyggnation av industribyggnader',
        'Renovering av kommersiella fastigheter',
        'Samordning med andra entreprenörer',
        'Tid- och kostnadsplanering',
        'Kvalitetssäkring',
        'Besiktning och dokumentation'
      ],
      benefits: [
        'En kontaktperson för hela projektet',
        'Erfarenhet av stora projekt',
        'Tydlig kommunikation',
        'Leverans i tid',
        'Certifierade processer'
      ]
    }
  };
  
  const service = servicesData[serviceSlug];
  
  if (!service) {
    return <NotFound />;
  }
  
  return (
    <div data-testid="service-detail-page">
      <Hero
        title={service.title}
        subtitle={service.subtitle}
        imageUrl={service.image}
        height="min-h-[360px] md:h-[400px]"
      />
      
      <Breadcrumbs items={[
        { label: 'Tjänster', link: '/tjanster' },
        { label: service.title }
      ]} />
      
      <section className="py-24 bg-light">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* Main Content */}
            <div className="lg:col-span-2 animate-fade-in-up">
              <h2 className="text-4xl font-semibold text-granite mb-6">Om {service.title}</h2>
              <p className="text-lg text-neutral mb-10 leading-relaxed">
                {service.description}
              </p>
              
              <h3 className="text-2xl font-semibold text-granite mb-6">Våra Tjänster</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
                {service.services.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3" data-testid={`service-item-${index}`}>
                    <CheckCircle className="text-copper flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral">{item}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-semibold text-granite mb-6">Fördelar</h3>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3" data-testid={`benefit-${index}`}>
                    <CheckCircle className="text-copper flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-white p-8 rounded-2xl border border-[#D1D5DB]/60 shadow-xl sticky top-24 animate-fade-in-up-delay">
                <h3 className="text-2xl font-semibold text-granite mb-6">Begär Offert</h3>
                <p className="text-neutral mb-6">
                  Kontakta oss idag för en kostnadsfri offert och konsultation.
                </p>
                <Link
                  to="/kontakt"
                  className="block w-full bg-copper hover:bg-copper-dark text-white text-center px-8 py-3.5 rounded-full font-semibold mb-4 transition-all shadow-lg shadow-black/10"
                  data-testid="sidebar-contact-button"
                >
                  Kontakta oss
                </Link>
                <a
                  href="tel:031-123456"
                  className="flex items-center justify-center w-full bg-granite hover:bg-granite-light text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-black/10"
                  data-testid="sidebar-phone-button"
                >
                  <Phone size={20} className="mr-2" />
                  031-123 456
                </a>
                
                <div className="mt-8 pt-8 border-t border-[#D1D5DB]/60">
                  <h4 className="font-semibold text-granite mb-4">Andra Tjänster</h4>
                  <ul className="space-y-2">
                    {Object.keys(servicesData)
                      .filter(key => key !== serviceSlug)
                      .map(key => (
                        <li key={key}>
                          <Link
                            to={`/tjanster/${key}`}
                            className="text-neutral hover:text-copper transition-colors"
                          >
                            {servicesData[key].title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
