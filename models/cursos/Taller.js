const { model } = require('mongoose');
const schema = require('./Curso');

const tallerModel = model('talleres', schema);

module.exports = tallerModel;
