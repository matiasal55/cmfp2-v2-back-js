const express = require('express');
const especialidadesRouter = require('./especialidades.routes');
const tallerRouter = require('./taller.routes');
const router = express.Router();

router.use('/especialidades', especialidadesRouter);
router.use('/taller', tallerRouter);

module.exports = router;
