const express = require('express');
const router = express.Router();

const { getEspecialidades, getEspecialidad, getTalleres, getTaller } = require('../controllers/cursos.controller');

router.get('/especialidades', getEspecialidades);
router.get('/especialidades/:id', getEspecialidad);
router.get('/taller', getTalleres);
router.get('/taller/:id', getTaller);

module.exports = router;
