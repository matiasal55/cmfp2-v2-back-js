const express = require('express');
const router = express.Router();

const { getEspecialidades } = require('../controllers/cursos.controller');

router.get('/especialidades', getEspecialidades);

module.exports = router;
