const express = require('express');
const { analyzeSEO } = require('../controllers/seoController');

const router = express.Router();

router.post('/analyze', analyzeSEO);

module.exports = router;
