const especialidades = require('../models/Especialidades');

const getCursosEspecialidades = async () => {
    const cursos = await especialidades.find();
    return cursos;
};

const getCursoEspecialidades = async (id) => {
    const cursos = await especialidades.find({ id });
    return cursos;
};

module.exports = { getCursosEspecialidades, getCursoEspecialidades };
