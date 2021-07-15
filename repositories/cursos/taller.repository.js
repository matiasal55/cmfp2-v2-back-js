const Model = require('../../models/cursos/Taller');

const getCursosTaller = async () => {
    const cursos = Model.find();
    return cursos;
};

const getCursoTaller = async (id) => {
    const cursos = Model.findOne({ id });
    return cursos;
};

module.exports = { getCursosTaller, getCursoTaller };
