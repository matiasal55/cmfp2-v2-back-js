const express = require('express');
const { getNoticias, getUltimasNoticias, getNoticia } = require('../controllers/noticias.controller');
const router = express.Router();

router.get('/all', getNoticias);
router.get('/last', getUltimasNoticias);
router.get('/:id', getNoticia);

module.exports = router;
