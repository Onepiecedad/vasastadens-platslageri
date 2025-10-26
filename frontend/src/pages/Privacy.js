import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';

const Privacy = () => {
  return (
    <div data-testid="privacy-page">
      <Hero
        title="Integritetspolicy"
        subtitle="Hur vi hanterar dina personuppgifter"
        imageUrl="https://images.unsplash.com/photo-1635424824849-1b09bdcc55b1?w=1920&q=80"
        height="h-[400px]"
      />
      
      <Breadcrumbs items={[{ label: 'Integritetspolicy' }]} />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-granite mb-6">Personuppgiftsansvarig</h2>
            <p className="text-gray-600 mb-8">
              Vasastadens Plåtslageri AB är personuppgiftsansvarig för behandlingen av dina personuppgifter.
            </p>
            
            <h2 className="text-3xl font-bold text-granite mb-6 mt-12">Vilka personuppgifter samlar vi in?</h2>
            <p className="text-gray-600 mb-4">
              Vi samlar in följande personuppgifter när du kontaktar oss eller ansöker om anställning:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
              <li>Namn</li>
              <li>E-postadress</li>
              <li>Telefonnummer</li>
              <li>Meddelande och övrig information du lämnar till oss</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-granite mb-6 mt-12">Ändamål och laglig grund</h2>
            <p className="text-gray-600 mb-4">
              Vi behandlar dina personuppgifter för att:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Hantera din förfrågan om offert eller annan information</li>
              <li>Hantera din ansökan om anställning</li>
              <li>Kommunicera med dig om våra tjänster</li>
            </ul>
            <p className="text-gray-600 mb-8">
              Den rättsliga grunden för behandlingen är vårt berättigade intresse av att hantera kundförfrågningar och rekrytering.
            </p>
            
            <h2 className="text-3xl font-bold text-granite mb-6 mt-12">Hur länge sparar vi dina uppgifter?</h2>
            <p className="text-gray-600 mb-8">
              Vi sparar dina personuppgifter så länge det är nödvändigt för att uppfylla de ändamål som anges ovan. 
              Kontaktförfrågningar sparas i högst 2 år. Jobbansökningar sparas i högst 2 år efter rekryteringsprocessens slut.
            </p>
            
            <h2 className="text-3xl font-bold text-granite mb-6 mt-12">Dina rättigheter</h2>
            <p className="text-gray-600 mb-4">
              Du har rätt att:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
              <li>Begära ett registerutdrag över dina personuppgifter</li>
              <li>Begära rättelse av felaktiga personuppgifter</li>
              <li>Begära radering av dina personuppgifter</li>
              <li>Begära begränsning av behandlingen</li>
              <li>Invända mot behandlingen</li>
              <li>Lämna klagomål till tillsynsmyndigheten (Integritetsskyddsmyndigheten)</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-granite mb-6 mt-12">Cookies</h2>
            <p className="text-gray-600 mb-8">
              Vår webbplats använder inga cookies för spårning. Vi använder endast nödvändiga tekniska cookies för att webbplatsen ska fungera.
            </p>
            
            <h2 className="text-3xl font-bold text-granite mb-6 mt-12">Kontakta oss</h2>
            <p className="text-gray-600 mb-4">
              Om du har frågor om vår integritetspolicy eller vill utöva dina rättigheter, kontakta oss:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Vasastadens Plåtslageri AB</strong><br />
                Vasagatan 12<br />
                411 24 Göteborg<br />
                E-post: info@vasastadens.se<br />
                Telefon: 031-123 456
              </p>
            </div>
            
            <p className="text-gray-500 text-sm mt-12">
              Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
