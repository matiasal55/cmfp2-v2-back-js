const express = require('express');
const { getNoticias, getUltimasNoticias } = require('../controllers/noticias.controller');
const router = express.Router();

router.get('/all', getNoticias);
router.get('/last', getUltimasNoticias);

module.exports = router;
