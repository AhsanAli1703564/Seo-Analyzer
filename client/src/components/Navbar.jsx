import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="SEO Tools Hub" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold text-primary">SEO Tools Hub</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/keyword-tool" className="text-gray-700 hover:text-primary">Keyword Tool</Link>
            <Link to="/seo-analyzer" className="text-gray-700 hover:text-primary">SEO Analyzer</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
