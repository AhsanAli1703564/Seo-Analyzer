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
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Keyword Suggestion Tool</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter a keyword"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-r-lg hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Search'}
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {results && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Results for "{results.keyword}"</h2>
            <button onClick={exportCSV} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Export CSV
            </button>
          </div>
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left">Keyword</th>
                <th className="px-4 py-2 text-left">Volume</th>
                <th className="px-4 py-2 text-left">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {results.suggestions.map((suggestion, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{suggestion.keyword}</td>
                  <td className="px-4 py-2">{suggestion.volume}</td>
                  <td className="px-4 py-2">{suggestion.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Related Queries</h3>
            <ul className="list-disc list-inside">
              {results.relatedQueries.map((query, index) => (
                <li key={index}>{query}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default KeywordTool;
