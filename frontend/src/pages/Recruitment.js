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
        height="h-[400px]"
      />
      
      <Breadcrumbs items={[{ label: 'Rekrytering' }]} />
      
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-granite mb-4">Lediga Tjänster</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi söker alltid duktiga och motiverade hantverkare. Se våra lediga tjänster nedan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {positions.map((position, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg" data-testid={`position-${index}`}>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-copper/10 p-3 rounded-lg">
                    <Briefcase className="text-copper" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-granite mb-2">{position.title}</h3>
                    <p className="text-gray-600">{position.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-granite mb-3">Krav:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-copper rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-granite mb-4">Ansök Nu</h2>
              <p className="text-lg text-gray-600">
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
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg" data-testid="job-application-form">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Namn *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper"
                  data-testid="job-form-name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  E-post *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper"
                  data-testid="job-form-email"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper"
                  data-testid="job-form-phone"
                />
              </div>
              
              <div>
                <label htmlFor="position" className="block text-gray-700 font-medium mb-2">
                  Tjänst av intresse
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper"
                  data-testid="job-form-position"
                >
                  <option value="Plåtslagare">Plåtslagare</option>
                  <option value="Lärling Plåtslagare">Lärling Plåtslagare</option>
                  <option value="Annan position">Annan position</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper"
                  data-testid="job-form-experience"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper"
                  data-testid="job-form-message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-copper hover:bg-copper-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center disabled:opacity-50"
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
