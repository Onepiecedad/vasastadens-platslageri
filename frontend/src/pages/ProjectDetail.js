import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    fetchProject();
  }, [slug]);
  
  const fetchProject = async () => {
    try {
      const response = await axios.get(`${API}/projects/${slug}`);
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
          <p className="mt-4 text-gray-600">Laddar projekt...</p>
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
        imageUrl={project.imageUrl || 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80'}
        height="h-[500px]"
      />
      
      <Breadcrumbs items={[
        { label: 'Projekt', link: '/projekt' },
        { label: project.title }
      ]} />
      
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <span className="bg-copper text-white px-4 py-2 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-granite mb-6">Om Projektet</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {project.longDescription}
              </p>
              
              <h3 className="text-2xl font-bold text-granite mb-6">Utförda Arbeten</h3>
              <div className="space-y-4 mb-12">
                {project.services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3" data-testid={`service-${index}`}>
                    <CheckCircle className="text-copper flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 text-lg">{service}</span>
                  </div>
                ))}
              </div>
              
              {project.imageUrl && (
                <div className="rounded-lg overflow-hidden shadow-xl mb-12">
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
              <div className="bg-gray-50 p-8 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold text-granite mb-6">Projektinformation</h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin size={18} className="mr-2 text-copper" />
                      <span className="font-semibold">Plats</span>
                    </div>
                    <p className="text-gray-700 ml-7">{project.location}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar size={18} className="mr-2 text-copper" />
                      <span className="font-semibold">År</span>
                    </div>
                    <p className="text-gray-700 ml-7">{project.year}</p>
                  </div>
                  
                  <div>
                    <div className="text-gray-600 mb-2 font-semibold">Kategori</div>
                    <p className="text-gray-700">{project.category}</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-300 pt-6">
                  <h4 className="font-semibold text-granite mb-4">Intresserad av liknande arbete?</h4>
                  <Link
                    to="/kontakt"
                    className="block w-full bg-copper hover:bg-copper-dark text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-granite mb-6">Se fler projekt</h2>
          <Link
            to="/projekt"
            className="inline-block bg-granite hover:bg-granite-light text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
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
