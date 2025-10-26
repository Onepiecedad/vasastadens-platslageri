import { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    fetchProjects();
  }, []);
  
  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API}/projects`);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const categories = ['all', 'Takarbeten', 'Fasadplåt', 'Service', 'Entreprenad'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);
  
  return (
    <div data-testid="projects-page">
      <Hero
        title="VÌra Projekt"
        subtitle="Se exempel pÌ vårt arbete och lÌt dig inspireras"
        imageUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
        height="h-[400px]"
      />
      
      <Breadcrumbs items={[{ label: 'Projekt' }]} />
      
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          {/* Filter */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  filter === category
                    ? 'bg-copper text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                data-testid={`filter-${category}`}
              >
                {category === 'all' ? 'Alla' : category}
              </button>
            ))}
          </div>
          
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-copper"></div>
              <p className="mt-4 text-gray-600">Laddar projekt...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">Inga projekt hittades.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.slug}
                  to={`/projekt/${project.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  data-testid={`project-card-${index}`}
                >
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <Calendar size={48} />
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-copper text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-granite mb-2 group-hover:text-copper transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <MapPin size={16} className="mr-1" />
                      {project.location}
                      <span className="mx-2">·</span>
                      {project.year}
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex items-center text-copper font-medium">
                      Lİs mer <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;