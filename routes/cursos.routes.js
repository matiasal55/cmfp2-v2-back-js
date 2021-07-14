const express = require('express');
const router = express.Router();

const { getEspecialidades, getEspecialidad } = require('../controllers/cursos.controller');

router.get('/especialidades', getEspecialidades);
router.get('/especialidades/:id', getEspecialidad);

module.exports = router;
