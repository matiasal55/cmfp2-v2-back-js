const especialidades = require('../models/Especialidades');

const getCursos = async () => {
    const cursos = await especialidades.find();
    return cursos;
};

module.exports = { getCursos };
