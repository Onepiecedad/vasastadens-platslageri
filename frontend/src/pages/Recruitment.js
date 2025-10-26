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
    position: 'Pl\u00e5tslagare',
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
        position: 'Pl\u00e5tslagare',
        experience: '',
        message: ''
      });
    } catch (err) {
      setError('Ett fel uppstod. V\u00e4nligen f\u00f6rs\u00f6k igen.');
      console.error('Error submitting application:', err);
    } finally {
      setLoading(false);
    }
  };
  
  const positions = [
    {
      title: 'Pl\u00e5tslagare',
      description: 'Vi s\u00f6ker erfarna pl\u00e5tslagare f\u00f6r tak- och fasadarbeten.',
      requirements: ['Minst 3 \u00e5rs erfarenhet', 'K\u00f6rkort B', 'God fysisk form', 'Teamplayer']
    },
    {
      title: 'L\u00e4rling Pl\u00e5tslagare',
      description: 'Vi erbjuder l\u00e4rlingplatser f\u00f6r dig som vill l\u00e4ra dig yrket.',
      requirements: ['Intresse f\u00f6r hantverksyrket', 'Noggrannhet och ansvar', 'K\u00f6rkort B f\u00f6rdel']
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
          </div>\n          \n          <div className=\"grid grid-cols-1 md:grid-cols-2 gap-8 mb-16\">\n            {positions.map((position, index) => (\n              <div key={index} className=\"bg-gray-50 p-8 rounded-lg\" data-testid={`position-${index}`}>\n                <div className=\"flex items-start space-x-4 mb-4\">\n                  <div className=\"bg-copper/10 p-3 rounded-lg\">\n                    <Briefcase className=\"text-copper\" size={24} />\n                  </div>\n                  <div>\n                    <h3 className=\"text-2xl font-bold text-granite mb-2\">{position.title}</h3>\n                    <p className=\"text-gray-600\">{position.description}</p>\n                  </div>\n                </div>\n                <div className=\"mt-6\">\n                  <h4 className=\"font-semibold text-granite mb-3\">Krav:</h4>\n                  <ul className=\"space-y-2\">\n                    {position.requirements.map((req, idx) => (\n                      <li key={idx} className=\"flex items-start space-x-2\">\n                        <span className=\"w-2 h-2 bg-copper rounded-full mt-2 flex-shrink-0\"></span>\n                        <span className=\"text-gray-700\">{req}</span>\n                      </li>\n                    ))}\n                  </ul>\n                </div>\n              </div>\n            ))}\n          </div>\n        </div>\n      </section>\n      \n      <section className=\"py-20 bg-gray-50\">\n        <div className=\"max-w-content mx-auto px-6\">\n          <div className=\"max-w-3xl mx-auto\">\n            <div className=\"text-center mb-12\">\n              <h2 className=\"text-4xl font-bold text-granite mb-4\">Ans\u00f6k Nu</h2>\n              <p className=\"text-lg text-gray-600\">\n                Fyll i formul\u00e4ret nedan s\u00e5 h\u00f6r vi av oss.\n              </p>\n            </div>\n            \n            {submitted && (\n              <div className=\"bg-green-50 border border-green-200 rounded-lg p-6 mb-6 flex items-start space-x-3\" data-testid=\"success-message\">\n                <CheckCircle className=\"text-green-600 flex-shrink-0 mt-1\" size={24} />\n                <div>\n                  <h3 className=\"font-semibold text-green-900 mb-1\">Tack f\u00f6r din ans\u00f6kan!</h3>\n                  <p className=\"text-green-700\">Vi \u00e5terkommer inom kort.</p>\n                </div>\n              </div>\n            )}\n            \n            {error && (\n              <div className=\"bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-700\" data-testid=\"error-message\">\n                {error}\n              </div>\n            )}\n            \n            <form onSubmit={handleSubmit} className=\"space-y-6 bg-white p-8 rounded-lg shadow-lg\" data-testid=\"job-application-form\">\n              <div>\n                <label htmlFor=\"name\" className=\"block text-gray-700 font-medium mb-2\">\n                  Namn *\n                </label>\n                <input\n                  type=\"text\"\n                  id=\"name\"\n                  name=\"name\"\n                  value={formData.name}\n                  onChange={handleChange}\n                  required\n                  className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper\"\n                  data-testid=\"job-form-name\"\n                />\n              </div>\n              \n              <div>\n                <label htmlFor=\"email\" className=\"block text-gray-700 font-medium mb-2\">\n                  E-post *\n                </label>\n                <input\n                  type=\"email\"\n                  id=\"email\"\n                  name=\"email\"\n                  value={formData.email}\n                  onChange={handleChange}\n                  required\n                  className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper\"\n                  data-testid=\"job-form-email\"\n                />\n              </div>\n              \n              <div>\n                <label htmlFor=\"phone\" className=\"block text-gray-700 font-medium mb-2\">\n                  Telefon *\n                </label>\n                <input\n                  type=\"tel\"\n                  id=\"phone\"\n                  name=\"phone\"\n                  value={formData.phone}\n                  onChange={handleChange}\n                  required\n                  className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper\"\n                  data-testid=\"job-form-phone\"\n                />\n              </div>\n              \n              <div>\n                <label htmlFor=\"position\" className=\"block text-gray-700 font-medium mb-2\">\n                  Tj\u00e4nst av intresse\n                </label>\n                <select\n                  id=\"position\"\n                  name=\"position\"\n                  value={formData.position}\n                  onChange={handleChange}\n                  className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper\"\n                  data-testid=\"job-form-position\"\n                >\n                  <option value=\"Pl\u00e5tslagare\">Pl\u00e5tslagare</option>\n                  <option value=\"L\u00e4rling Pl\u00e5tslagare\">L\u00e4rling Pl\u00e5tslagare</option>\n                  <option value=\"Annan position\">Annan position</option>\n                </select>\n              </div>\n              \n              <div>\n                <label htmlFor=\"experience\" className=\"block text-gray-700 font-medium mb-2\">\n                  Erfarenhet (\u00e5r) *\n                </label>\n                <input\n                  type=\"text\"\n                  id=\"experience\"\n                  name=\"experience\"\n                  value={formData.experience}\n                  onChange={handleChange}\n                  required\n                  placeholder=\"T.ex. 5 \u00e5r\"\n                  className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper\"\n                  data-testid=\"job-form-experience\"\n                />\n              </div>\n              \n              <div>\n                <label htmlFor=\"message\" className=\"block text-gray-700 font-medium mb-2\">\n                  Personligt brev *\n                </label>\n                <textarea\n                  id=\"message\"\n                  name=\"message\"\n                  value={formData.message}\n                  onChange={handleChange}\n                  required\n                  rows={6}\n                  placeholder=\"Ber\u00e4tta lite om dig sj\u00e4lv och varf\u00f6r du vill arbeta hos oss...\"\n                  className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper\"\n                  data-testid=\"job-form-message\"\n                ></textarea>\n              </div>\n              \n              <button\n                type=\"submit\"\n                disabled={loading}\n                className=\"w-full bg-copper hover:bg-copper-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center disabled:opacity-50\"\n                data-testid=\"job-form-submit\"\n              >\n                {loading ? (\n                  'Skickar...'\n                ) : (\n                  <>\n                    Skicka ans\u00f6kan <Send size={20} className=\"ml-2\" />\n                  </>\n                )}\n              </button>\n            </form>\n          </div>\n        </div>\n      </section>\n    </div>\n  );\n};\n\nexport default Recruitment;
