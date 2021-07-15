const { model } = require('mongoose');
const schema = require('./Curso');

const especialidadesModel = model('especialidades', schema);

module.exports = especialidadesModel;
