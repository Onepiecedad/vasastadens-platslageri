import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';
import { useScrollToHero } from '@/hooks/useScrollToHero';
import { API_BASE } from '@/lib/api';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useScrollToHero([slug]);
  
  useEffect(() => {
    fetchProject();
  }, [slug]);
  
  const fetchProject = async () => {
    try {
      const response = await axios.get(`${API_BASE}/projects/${slug}`);
      setProject(response.data);
    } catch (error) {
      console.error('Error fetching project:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-copper"></div>
          <p className="mt-4 text-neutral">Laddar projekt...</p>
        </div>
      </div>
    );
  }
  
  if (error || !project) {
    return <NotFound />;
  }
  
  return (
    <div data-testid="project-detail-page">
      <Hero
        title={project.title}
        subtitle={`${project.location} · ${project.year}`}
        imageUrl={project.imageUrl || '/images/goteborg-skyline-sunset.png'}
        height="min-h-[380px] md:h-[500px]"
      />
      
      <Breadcrumbs items={[
        { label: 'Projekt', link: '/projekt' },
        { label: project.title }
      ]} />
      
      <section className="py-24 bg-light">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* Main Content */}
            <div className="lg:col-span-2 animate-fade-in-up">
              <div className="mb-8">
                <span className="bg-copper text-white px-4 py-2 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
              
              <h2 className="text-4xl font-semibold text-granite mb-6">Om Projektet</h2>
              <p className="text-lg text-neutral mb-8 leading-relaxed">
                {project.longDescription}
              </p>
              
              <h3 className="text-2xl font-semibold text-granite mb-6">Utförda Arbeten</h3>
              <div className="space-y-4 mb-12">
                {project.services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3" data-testid={`service-${index}`}>
                    <CheckCircle className="text-copper flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral text-lg">{service}</span>
                  </div>
                ))}
              </div>
              
              {project.imageUrl && (
                <div className="rounded-2xl overflow-hidden shadow-xl mb-12">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-white p-8 rounded-2xl border border-[#D1D5DB]/60 shadow-xl sticky top-24 animate-fade-in-up-delay">
                <h3 className="text-xl font-semibold text-granite mb-6">Projektinformation</h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <div className="flex items-center text-neutral mb-2">
                      <MapPin size={18} className="mr-2 text-copper" />
                      <span className="font-semibold">Plats</span>
                    </div>
                    <p className="text-neutral ml-7">{project.location}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-neutral mb-2">
                      <Calendar size={18} className="mr-2 text-copper" />
                      <span className="font-semibold">År</span>
                    </div>
                    <p className="text-neutral ml-7">{project.year}</p>
                  </div>
                  
                  <div>
                    <div className="text-neutral mb-2 font-semibold">Kategori</div>
                    <p className="text-neutral">{project.category}</p>
                  </div>
                </div>
                
                <div className="border-t border-[#D1D5DB]/60 pt-6">
                  <h4 className="font-semibold text-granite mb-4">Intresserad av liknande arbete?</h4>
                  <Link
                    to="/kontakt"
                    className="block w-full bg-copper hover:bg-copper-dark text-white text-center px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-black/10"
                    data-testid="project-contact-button"
                  >
                    Kontakta oss
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Projects CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-granite mb-6 animate-fade-in-up">Se fler projekt</h2>
          <Link
            to="/projekt"
            className="inline-block bg-granite hover:bg-granite-light text-white px-7 py-3.5 sm:px-9 sm:py-4 rounded-full text-lg font-semibold transition-all shadow-lg shadow-black/10 animate-fade-in-up-delay"
            data-testid="view-more-projects-button"
          >
            Visa alla projekt
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
