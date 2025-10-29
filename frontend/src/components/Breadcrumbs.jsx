import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="bg-light py-4 border-b border-white/40" data-testid="breadcrumbs">
      <div className="max-w-content mx-auto px-6">
        <ol className="flex items-center space-x-2 text-sm text-neutral animate-fade-in-up">
          <li>
            <Link to="/" className="text-neutral hover:text-copper transition-colors" data-testid="breadcrumb-home">
              Hem
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight size={16} className="text-neutral/60" />
              {item.link ? (
                <Link to={item.link} className="text-neutral hover:text-copper transition-colors" data-testid={`breadcrumb-${index}`}>
                  {item.label}
                </Link>
              ) : (
                <span className="text-granite font-medium" data-testid={`breadcrumb-current-${index}`}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
