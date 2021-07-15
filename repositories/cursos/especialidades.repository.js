const Model = require('../../models/cursos/Especialidades');

const getCursosEspecialidades = async () => {
    const cursos = await Model.find();
    return cursos;
};

const getCursoEspecialidades = async (id) => {
    const cursos = await Model.findOne({ id });
    return cursos;
};

module.exports = { getCursosEspecialidades, getCursoEspecialidades };
