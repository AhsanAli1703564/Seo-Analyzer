import { useState } from 'react';
import axios from 'axios';

const SEOAnalyzer = () => {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/seo/analyze`, { url });
      setResults(response.data);
    } catch (err) {
      setError('Failed to analyze the website. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">SEO Analyzer</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-r-lg hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {results && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Analysis Results for {results.url}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Meta Information</h3>
              <p><strong>Title:</strong> {results.meta.title}</p>
              <p><strong>Description:</strong> {results.meta.description}</p>
              <p><strong>Keywords:</strong> {results.meta.keywords}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Headings</h3>
              <p><strong>H1:</strong> {results.headings.h1}</p>
              <p><strong>H2:</strong> {results.headings.h2}</p>
              <p><strong>H3:</strong> {results.headings.h3}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Content</h3>
              <p><strong>Word Count:</strong> {results.wordCount}</p>
              <p><strong>Readability Score:</strong> {results.readability}/100</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Images</h3>
              <p><strong>Total:</strong> {results.images.total}</p>
              <p><strong>With Alt:</strong> {results.images.withAlt}</p>
              <p><strong>Without Alt:</strong> {results.images.withoutAlt}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Links</h3>
              <p><strong>Internal:</strong> {results.links.internal}</p>
              <p><strong>External:</strong> {results.links.external}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Technical</h3>
              <p><strong>Load Speed:</strong> {results.loadSpeed}</p>
              <p><strong>SEO Score:</strong> {results.score}/100</p>
              <p><strong>Robots.txt:</strong> {results.robots ? 'Yes' : 'No'}</p>
              <p><strong>Sitemap:</strong> {results.sitemap ? 'Yes' : 'No'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOAnalyzer;
