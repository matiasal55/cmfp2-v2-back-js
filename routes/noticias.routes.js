const express = require('express');
const { getNoticias } = require('../controllers/noticias.controller');
const router = express.Router();

router.get('/all', getNoticias);

module.exports = router;
