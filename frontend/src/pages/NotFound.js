import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50" data-testid="not-found-page">
      <div className="text-center px-6">
        <div className="mb-8">
          <Search className="mx-auto text-gray-300" size={120} />
        </div>
        <h1 className="text-6xl font-bold text-granite mb-4">404</h1>
        <h2 className="text-3xl font-bold text-granite mb-4">Sidan hittades inte</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Tyvärr kunde vi inte hitta sidan du letade efter. Den kan ha flyttats eller tagits bort.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-copper hover:bg-copper-dark text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg text-lg font-semibold transition-colors"
          data-testid="back-to-home-button"
        >
          <Home size={20} className="mr-2" />
          Tillbaka till startsidan
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
