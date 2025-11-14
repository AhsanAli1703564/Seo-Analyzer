const axios = require('axios');

const getKeywordSuggestions = async (req, res) => {
  const { keyword } = req.body;

  if (!keyword) {
    return res.status(400).json({ error: 'Keyword is required' });
  }

  try {
    // Mock keyword suggestions since ZenRows API is timing out
    const mockSuggestions = [
      `${keyword} tips`,
      `${keyword} guide`,
      `${keyword} tutorial`,
      `${keyword} examples`,
      `${keyword} best practices`,
      `${keyword} tools`,
      `${keyword} vs alternatives`,
      `${keyword} for beginners`,
      `${keyword} advanced`,
      `${keyword} 2024`
    ];

    const results = mockSuggestions.map((suggestion, index) => ({
      keyword: suggestion,
      volume: Math.floor(Math.random() * 10000) + 100, // Mock volume
      difficulty: Math.floor(Math.random() * 100) + 1, // Mock difficulty
    }));

    // Generate related queries (simple expansion)
    const relatedQueries = mockSuggestions.slice(0, 5).map(s => `${s} free`);

    res.json({
      keyword,
      suggestions: results,
      relatedQueries,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch keyword suggestions' });
  }
};

module.exports = { getKeywordSuggestions };
