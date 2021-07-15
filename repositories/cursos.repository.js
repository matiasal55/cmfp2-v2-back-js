const especialidades = require('../models/Especialidades');
const taller = require('../models/Taller');

const getCursosEspecialidades = async () => {
    const cursos = await especialidades.find();
    return cursos;
};

const getCursoEspecialidades = async (id) => {
    const cursos = await especialidades.findOne({ id });
    return cursos;
};

const getCursosTaller = async () => {
    const cursos = taller.find();
    return cursos;
};

const getCursoTaller = async (id) => {
    const cursos = taller.findOne({ id });
    return cursos;
};

module.exports = { getCursosEspecialidades, getCursoEspecialidades, getCursosTaller, getCursoTaller };
