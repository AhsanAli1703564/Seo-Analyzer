import { useState } from 'react';
import axios from 'axios';

const KeywordTool = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/keywords/suggestions`, { keyword });
      setResults(response.data);
    } catch (err) {
      setError('Failed to fetch keyword suggestions. Please try again.');
    }
    setLoading(false);
  };

  const exportCSV = () => {
    if (!results) return;
    const csv = 'Keyword,Volume,Difficulty\n' + results.suggestions.map(s => `${s.keyword},${s.volume},${s.difficulty}`).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'keyword-suggestions.csv';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800">Keyword Suggestion Tool</h1>
        <form onSubmit={handleSubmit} className="mb-6 sm:mb-8 bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Enter a keyword"
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-t-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2 sm:mb-0"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-b-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-blue-700 transition duration-200 disabled:opacity-50 text-sm sm:text-base"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Search'}
            </button>
          </div>
        </form>
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded mb-4 text-sm sm:text-base">{error}</div>}
        {results && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-4">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">Results for "{results.keyword}"</h2>
                <button onClick={exportCSV} className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200 text-sm sm:text-base w-full sm:w-auto">
                  Export CSV
                </button>
              </div>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="inline-block min-w-full align-middle">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
                    <thead className="bg-blue-50">
                      <tr>
                        <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keyword</th>
                        <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
                        <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {results.suggestions.map((suggestion, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition duration-150">
                          <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">{suggestion.keyword}</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">{suggestion.volume.toLocaleString()}</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                            <span className={`inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full text-xs font-medium ${
                              suggestion.difficulty < 30 ? 'bg-green-100 text-green-800' :
                              suggestion.difficulty < 70 ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {suggestion.difficulty}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">Related Queries</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {results.relatedQueries.map((query, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-200 hover:bg-gray-100 transition duration-150">
                    <span className="text-xs sm:text-sm text-gray-700">{query}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KeywordTool;
