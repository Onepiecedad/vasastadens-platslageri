import { useState } from 'react';
import axios from 'axios';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Send, CheckCircle, Briefcase } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Recruitment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Plåtslagare',
    experience: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await axios.post(`${API}/jobs`, formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: 'Plåtslagare',
        experience: '',
        message: ''
      });
    } catch (err) {
      setError('Ett fel uppstod. Vänligen försök igen.');
      console.error('Error submitting application:', err);
    } finally {
      setLoading(false);
    }
  };
  
  const positions = [
    {
      title: 'Plåtslagare',
      description: 'Vi söker erfarna plåtslagare för tak- och fasadarbeten.',
      requirements: ['Minst 3 års erfarenhet', 'Körkort B', 'God fysisk form', 'Teamplayer']
    },
    {
      title: 'Lärling Plåtslagare',
      description: 'Vi erbjuder lärlingplatser för dig som vill lära dig yrket.',
      requirements: ['Intresse för hantverksyrket', 'Noggrannhet och ansvar', 'Körkort B fördel']
    },
  ];
  
  return (
    <div data-testid="recruitment-page">
      <Hero
        title="Arbeta Hos Oss"
        subtitle="Bli en del av vårt team"
        imageUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
        height="min-h-[360px] md:h-[400px]"
      />
      
      <Breadcrumbs items={[{ label: 'Rekrytering' }]} />
      
      <section className="py-24 bg-light">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl text-granite mb-4">Lediga Tjänster</h2>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              Vi söker alltid duktiga och motiverade hantverkare. Se våra lediga tjänster nedan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-[#D1D5DB]/60 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`position-${index}`}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-copper/10 p-3 rounded-lg">
                    <Briefcase className="text-copper" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-granite mb-2">{position.title}</h3>
                    <p className="text-neutral">{position.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-granite mb-3">Krav:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-copper rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-neutral">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl text-granite mb-4">Ansök Nu</h2>
              <p className="text-lg text-neutral">
                Fyll i formuläret nedan så hör vi av oss.
              </p>
            </div>
            
            {submitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 flex items-start space-x-3" data-testid="success-message">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-green-900 mb-1">Tack för din ansökan!</h3>
                  <p className="text-green-700">Vi återkommer inom kort.</p>
                </div>
              </div>
            )}
            
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-700" data-testid="error-message">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-light p-6 sm:p-8 rounded-2xl border border-[#D1D5DB]/60 shadow-xl animate-fade-in-up-delay" data-testid="job-application-form">
              <div>
                <label htmlFor="name" className="block text-neutral font-medium mb-2">
                  Namn *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#D1D5DB] rounded-xl focus:ring-2 focus:ring-copper focus:border-copper/80 transition-shadow"
                  data-testid="job-form-name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-neutral font-medium mb-2">
                  E-post *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#D1D5DB] rounded-xl focus:ring-2 focus:ring-copper focus:border-copper/80 transition-shadow"
                  data-testid="job-form-email"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-neutral font-medium mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#D1D5DB] rounded-xl focus:ring-2 focus:ring-copper focus:border-copper/80 transition-shadow"
                  data-testid="job-form-phone"
                />
              </div>
              
              <div>
                <label htmlFor="position" className="block text-neutral font-medium mb-2">
                  Tjänst av intresse
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#D1D5DB] rounded-xl focus:ring-2 focus:ring-copper focus:border-copper/80 transition-shadow"
                  data-testid="job-form-position"
                >
                  <option value="Plåtslagare">Plåtslagare</option>
                  <option value="Lärling Plåtslagare">Lärling Plåtslagare</option>
                  <option value="Annan position">Annan position</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-neutral font-medium mb-2">
                  Erfarenhet (år) *
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  placeholder="T.ex. 5 år"
                  className="w-full px-4 py-3 border border-[#D1D5DB] rounded-xl focus:ring-2 focus:ring-copper focus:border-copper/80 transition-shadow"
                  data-testid="job-form-experience"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-neutral font-medium mb-2">
                  Personligt brev *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Berätta lite om dig själv och varför du vill arbeta hos oss..."
                  className="w-full px-4 py-3 border border-[#D1D5DB] rounded-xl focus:ring-2 focus:ring-copper focus:border-copper/80 transition-shadow"
                  data-testid="job-form-message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-copper hover:bg-copper-dark text-white px-7 py-3.5 sm:px-9 sm:py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center shadow-lg shadow-black/10 disabled:opacity-60"
                data-testid="job-form-submit"
              >
                {loading ? (
                  'Skickar...'
                ) : (
                  <>
                    Skicka ansökan <Send size={20} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recruitment;
