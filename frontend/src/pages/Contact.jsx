import { useState } from 'react';
import axios from 'axios';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { useScrollToHero } from '@/hooks/useScrollToHero';
import { API_BASE } from '@/lib/api';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, formDefaultValues } from '@/lib/validation';

const Contact = () => {
  useScrollToHero([]);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: formDefaultValues.contact,
    mode: 'onBlur',
  });

  const onSubmit = async (values) => {
    setErrorMessage('');
    setSubmitted(false);
    try {
      await axios.post(`${API_BASE}/contact`, values);
      setSubmitted(true);
      reset(formDefaultValues.contact, { keepDefaultValues: true });
    } catch (err) {
      const detail =
        err.response?.data?.detail ||
        'Ett fel uppstod. Vänligen försök igen eller ring oss direkt.';
      setErrorMessage(detail);
      console.error('Error submitting form:', err);
    }
  };
  
  return (
    <div data-testid="contact-page">
      <Hero
        title="Kontakta Oss"
        subtitle="Vi ser fram emot att höra från dig"
        imageUrl="/images/gutter-service.png"
        height="min-h-[360px] md:h-[400px]"
      />
      
      <Breadcrumbs items={[{ label: 'Kontakt' }]} />
      
      <section className="py-24 bg-light">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#D1D5DB]/60 shadow-xl animate-fade-in-up">
              <h2 className="text-4xl font-semibold text-granite mb-6">Begär Offert</h2>
              <p className="text-lg text-neutral mb-8">
                Fyll i formuläret nedan så återkommer vi inom 24 timmar.
              </p>
              
              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 flex items-start space-x-3" data-testid="success-message">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-green-900 mb-1">Tack för ditt meddelande!</h3>
                    <p className="text-green-700">Vi återkommer inom kort.</p>
                  </div>
                </div>
              )}
              
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-700" data-testid="error-message">
                  {errorMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form" noValidate>
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                  {...register('honeypot')}
                />
                <div>
                  <label htmlFor="name" className="block text-neutral font-medium mb-2">
                    Namn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : 'border-[#D1D5DB] focus:ring-2 focus:ring-copper focus:border-copper/80'} rounded-xl transition-shadow`}
                    {...register('name')}
                    data-testid="contact-form-name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-neutral font-medium mb-2">
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : 'border-[#D1D5DB] focus:ring-2 focus:ring-copper focus:border-copper/80'} rounded-xl transition-shadow`}
                    {...register('email')}
                    data-testid="contact-form-email"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-neutral font-medium mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : 'border-[#D1D5DB] focus:ring-2 focus:ring-copper focus:border-copper/80'} rounded-xl transition-shadow`}
                    {...register('phone')}
                    data-testid="contact-form-phone"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-neutral font-medium mb-2">
                    Tjänst av intresse
                  </label>
                  <select
                    id="service"
                    name="service"
                    aria-invalid={errors.service ? 'true' : 'false'}
                    className={`w-full px-4 py-3 border ${errors.service ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : 'border-[#D1D5DB] focus:ring-2 focus:ring-copper focus:border-copper/80'} rounded-xl transition-shadow`}
                    {...register('service')}
                    data-testid="contact-form-service"
                  >
                    <option value="Takarbeten">Takarbeten</option>
                    <option value="Fasadplåt">Fasadplåt</option>
                    <option value="Service">Service</option>
                    <option value="Entreprenad">Entreprenad</option>
                    <option value="Övrigt">Övrigt</option>
                  </select>
                  {errors.service && (
                    <p className="mt-2 text-sm text-red-600">{errors.service.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-neutral font-medium mb-2">
                    Meddelande *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : 'border-[#D1D5DB] focus:ring-2 focus:ring-copper focus:border-copper/80'} rounded-xl transition-shadow`}
                    {...register('message')}
                    data-testid="contact-form-message"
                  ></textarea>
                  <p className="mt-2 text-sm text-neutral/70">
                    Beskriv ditt projekt så detaljerat som möjligt.
                  </p>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-copper hover:bg-copper-dark text-white px-7 py-3.5 sm:px-9 sm:py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center shadow-lg shadow-black/10 disabled:opacity-60"
                  data-testid="contact-form-submit"
                >
                  {isSubmitting ? (
                    'Skickar...'
                  ) : (
                    <>
                      Skicka meddelande <Send size={20} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#D1D5DB]/60 shadow-xl animate-fade-in-up-delay">
              <h2 className="text-4xl font-semibold text-granite mb-6">Kontaktinformation</h2>
              <p className="text-lg text-neutral mb-8">
                Du är alltid välkommen att kontakta oss direkt via telefon eller e-post.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4" data-testid="contact-info-phone">
                  <div className="bg-copper/10 p-3 rounded-lg">
                    <Phone className="text-copper" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-granite mb-1">Telefon</h3>
                    <a href="tel:031-123456" className="text-neutral hover:text-copper transition-colors">
                      031-123 456
                    </a>
                    <p className="text-sm text-neutral/70 mt-1">Vardagar 7:00 - 17:00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-info-email">
                  <div className="bg-copper/10 p-3 rounded-lg">
                    <Mail className="text-copper" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-granite mb-1">E-post</h3>
                    <a href="mailto:info@vasastadens.se" className="text-neutral hover:text-copper transition-colors">
                      info@vasastadens.se
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-info-address">
                  <div className="bg-copper/10 p-3 rounded-lg">
                    <MapPin className="text-copper" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-granite mb-1">Adress</h3>
                    <p className="text-neutral">
                      Vasagatan 12<br />
                      411 24 Göteborg
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-light p-6 sm:p-8 rounded-xl border border-[#D1D5DB]/60">
                <h3 className="text-xl font-semibold text-granite mb-4">Öppettider</h3>
                <div className="space-y-2 text-neutral">
                  <div className="flex justify-between">
                    <span>Måndag - Fredag</span>
                    <span className="font-medium">7:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lördag - Söndag</span>
                    <span className="font-medium">Stängt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
