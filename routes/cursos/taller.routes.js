const express = require('express');
const router = express.Router();
const { getTalleres, getTaller } = require('../../controllers/cursos/taller.controller');

router.get('/', getTalleres);
router.get('/:id', getTaller);

module.exports = router;
