import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { useScrollToHero } from '@/hooks/useScrollToHero';
import { API_BASE } from '@/lib/api';

const BASE_FILTERS = [
  { value: 'all', label: 'Alla' },
  { value: 'featured', label: 'Utvalda' },
];

const Projects = () => {
  useScrollToHero([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');
  const [filters, setFilters] = useState(BASE_FILTERS);

  const fetchProjects = useCallback(
    async (currentFilter) => {
      setLoading(true);
      setError('');

      try {
        const params = {};
        if (currentFilter === 'featured') {
          params.featured = true;
        } else if (currentFilter !== 'all') {
          params.category = currentFilter;
        }

        const response = await axios.get(`${API_BASE}/projects`, {
          params,
        });
        setProjects(response.data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Kunde inte hämta projekt just nu. Försök igen senare.');
        setProjects([]);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const fetchMeta = useCallback(async () => {
    try {
      const response = await axios.get(`${API_BASE}/projects/meta`);
      const categories = response.data?.categories ?? [];
      if (categories.length === 0) {
        setFilters(BASE_FILTERS);
        return;
      }

      const categoryFilters = categories.map((category) => ({
        value: category.name,
        label: `${category.name} (${category.count})`,
      }));

      setFilters([...BASE_FILTERS, ...categoryFilters]);
    } catch (err) {
      console.error('Error fetching projects meta:', err);
      setFilters(BASE_FILTERS);
    }
  }, []);

  useEffect(() => {
    fetchProjects(filter);
  }, [filter, fetchProjects]);

  useEffect(() => {
    fetchMeta();
  }, [fetchMeta]);

  return (
    <div data-testid="projects-page">
      <Hero
        title="Våra Projekt"
        subtitle="Se exempel på vårt arbete och låt dig inspireras"
        imageUrl="/images/goteborg-skyline-sunset.png"
        height="min-h-[360px] md:h-[400px]"
      />

      <Breadcrumbs items={[{ label: 'Projekt' }]} />

      <section className="py-24 bg-light">
        <div className="max-w-content mx-auto px-6">
          {/* Filter */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center animate-fade-in-up">
            {filters.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={`px-7 py-2.5 rounded-full font-medium tracking-wide transition-all ${
                  filter === value
                    ? 'bg-copper text-white shadow-lg shadow-black/10'
                    : 'bg-white text-neutral border border-[#D1D5DB]/70 hover:border-copper/40 hover:text-copper'
                }`}
                data-testid={`filter-${value}`}
              >
                {label}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-copper" />
              <p className="mt-4 text-neutral">Laddar projekt...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-600 text-lg">{error}</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral text-lg">Inga projekt hittades.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Link
                  key={project.slug}
                  to={`/projekt/${project.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-transparent hover:border-copper/40 shadow-md hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
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
                    <h3 className="text-2xl font-semibold text-granite mb-2 group-hover:text-copper transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-neutral text-sm mb-3">
                      <MapPin size={16} className="mr-1" />
                      {project.location}
                      <span className="mx-2">·</span>
                      {project.year}
                    </div>
                    <p className="text-neutral mb-4">{project.description}</p>
                    <div className="flex items-center text-copper font-semibold tracking-wide">
                      Läs mer{' '}
                      <ArrowRight
                        size={18}
                        className="ml-2 group-hover:translate-x-2 transition-transform"
                      />
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
