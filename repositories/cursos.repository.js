const especialidades = require('../models/Especialidades');

const getCursosEspecialidades = async () => {
    const cursos = await especialidades.find();
    return cursos;
};

module.exports = { getCursosEspecialidades };
