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

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800">SEO Analyzer</h1>
        <form onSubmit={handleSubmit} className="mb-6 sm:mb-8 bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL (e.g., https://example.com)"
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-t-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2 sm:mb-0"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-b-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-blue-700 transition duration-200 disabled:opacity-50 text-sm sm:text-base"
              disabled={loading}
            >
              {loading ? 'Analyzing...' : 'Analyze'}
            </button>
          </div>
        </form>
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded mb-4 text-sm sm:text-base">{error}</div>}
        {results && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-4">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">Analysis Results for {results.url}</h2>
                <div className={`px-3 sm:px-4 py-2 rounded-lg ${getScoreBg(results.score)} w-full sm:w-auto text-center`}>
                  <span className={`text-xl sm:text-2xl font-bold ${getScoreColor(results.score)}`}>
                    {results.score}/100
                  </span>
                  <p className="text-xs sm:text-sm text-gray-600">SEO Score</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">Meta Information</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-gray-600 text-sm">Title:</span>
                      <p className="text-xs sm:text-sm text-gray-800 mt-1 break-words">{results.meta.title}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600 text-sm">Description:</span>
                      <p className="text-xs sm:text-sm text-gray-800 mt-1 break-words">{results.meta.description}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600 text-sm">Keywords:</span>
                      <p className="text-xs sm:text-sm text-gray-800 mt-1 break-words">{results.meta.keywords}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">Headings Structure</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">H1:</span>
                      <span className="font-semibold text-blue-600 text-sm">{results.headings.h1}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">H2:</span>
                      <span className="font-semibold text-blue-600 text-sm">{results.headings.h2}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">H3:</span>
                      <span className="font-semibold text-blue-600 text-sm">{results.headings.h3}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">Content Analysis</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Word Count:</span>
                      <span className="font-semibold text-green-600 text-sm">{results.wordCount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Readability:</span>
                      <span className={`font-semibold text-sm ${results.readability >= 70 ? 'text-green-600' : results.readability >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {results.readability}/100
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">Images</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Total Images:</span>
                      <span className="font-semibold text-blue-600 text-sm">{results.images.total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">With Alt Text:</span>
                      <span className="font-semibold text-green-600 text-sm">{results.images.withAlt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Without Alt Text:</span>
                      <span className="font-semibold text-red-600 text-sm">{results.images.withoutAlt}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">Links</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Internal Links:</span>
                      <span className="font-semibold text-blue-600 text-sm">{results.links.internal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">External Links:</span>
                      <span className="font-semibold text-purple-600 text-sm">{results.links.external}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">Technical SEO</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Load Speed:</span>
                      <span className={`font-semibold text-sm ${results.loadSpeed === 'Fast' ? 'text-green-600' : results.loadSpeed === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>
                        {results.loadSpeed}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Robots.txt:</span>
                      <span className={`font-semibold text-sm ${results.robots ? 'text-green-600' : 'text-red-600'}`}>
                        {results.robots ? 'Present' : 'Missing'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Sitemap:</span>
                      <span className={`font-semibold text-sm ${results.sitemap ? 'text-green-600' : 'text-red-600'}`}>
                        {results.sitemap ? 'Present' : 'Missing'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SEOAnalyzer;
