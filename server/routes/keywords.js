const express = require('express');
const { getKeywordSuggestions } = require('../controllers/keywordController');

const router = express.Router();

router.post('/suggestions', getKeywordSuggestions);

module.exports = router;
