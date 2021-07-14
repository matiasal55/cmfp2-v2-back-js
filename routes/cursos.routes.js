const express = require('express');
const router = express.Router();

const { getCursos } = require('../controllers/cursos.controller');

router.get('/', getCursos);

module.exports = router;
