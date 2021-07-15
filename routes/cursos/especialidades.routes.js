const express = require('express');
const router = express.Router();
const { getEspecialidades, getEspecialidad } = require('../../controllers/cursos/especialidades.controller');

router.get('/', getEspecialidades);
router.get('/:id', getEspecialidad);

module.exports = router;
