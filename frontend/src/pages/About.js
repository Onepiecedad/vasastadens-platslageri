import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CheckCircle, Users, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Award className="text-copper" size={40} />,
      title: 'Kvalitet',
      description: 'Vi kompromissar aldrig med kvaliteten. Varje projekt utförs med högsta precision och omsorg.'
    },
    {
      icon: <Users className="text-copper" size={40} />,
      title: 'Kundtillfredsställelse',
      description: 'Våra kunder är vår högsta prioritet. Vi strävar alltid efter att överträffa förväntningarna.'
    },
    {
      icon: <Target className="text-copper" size={40} />,
      title: 'Pålitlighet',
      description: 'När vi säger att vi ska göra något, så gör vi det. I tid och enligt avtal.'
    },
  ];
  
  const milestones = [
    { year: '1973', event: 'Vasastadens Plåtslageri grundas i Göteborg' },
    { year: '1985', event: 'Expansion till fasadarbeten och större entreprenadjobb' },
    { year: '2000', event: 'Certifiering enligt branschstandarder' },
    { year: '2010', event: 'Över 30 anställda hantverkare' },
    { year: '2024', event: 'Mer än 50 år i branschen – fortfarande starka' },
  ];
  
  return (
    <div data-testid="about-page">
      <Hero
        title="Om Vasastadens Plåtslageri"
        subtitle="Över 50 års erfarenhet av kvalitetsarbete"
        imageUrl="https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?w=1920&q=80"
        height="h-[400px]"
      />
      
      <Breadcrumbs items={[{ label: 'Om oss' }]} />
      
      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-granite mb-6" data-testid="story-title">Vår Historia</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sedan 1973 har Vasastadens Plåtslageri varit en pålitlig partner för tak- och fasadarbeten i Göteborg och omnejd. Vad som började som ett litet familjeföretag har vuxit till en av regionens mest respekterade aktörer inom branschen.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Genom åren har vi byggt vårt rykte på kvalitet, pålitlighet och hårt arbete. Våra erfarna hantverkare kombinerar traditionellt hantverk med moderna tekniker för att leverera resultat som håller över tid.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Idag är vi stolta över att tjäna både privatpersoner och företag med allt från mindre reparationer till stora entreprenadjobb. Vår lokala förankring i Göteborg är viktig för oss – vi är en del av samhället vi bygger i.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=800&q=80"
                alt="Vasastadens Plåtslageri team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-granite mb-4">Våra Värderingar</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dessa värderingar vägleder allt vi gör och hjälper oss att leverera exceptionell service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg" data-testid={`value-card-${index}`}>
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-granite mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-granite mb-4">Vår Resa</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Från 1973 till idag – en resa av tillväxt och utveckling.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex mb-8 last:mb-0" data-testid={`milestone-${index}`}>
                <div className="flex-shrink-0 w-24 font-bold text-copper text-xl">
                  {milestone.year}
                </div>
                <div className="flex-grow">
                  <div className="relative pl-8 pb-8 border-l-2 border-copper last:border-l-0 last:pb-0">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-copper rounded-full"></div>
                    <p className="text-gray-700 text-lg">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Vill du arbeta med oss?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Vi söker alltid duktiga hantverkare. Se våra lediga tjänster eller kontakta oss för ett projekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/rekrytering"
              className="inline-block bg-copper hover:bg-copper-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              data-testid="careers-cta-button"
            >
              Lediga tjänster
            </Link>
            <Link
              to="/kontakt"
              className="inline-block bg-white hover:bg-gray-100 text-navy px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              data-testid="contact-cta-button"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
