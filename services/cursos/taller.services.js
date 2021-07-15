const { getCursosTaller, getCursoTaller } = require('../../repositories/cursos/taller.repository');

const talleresList = async () => {
    const cursos = await getCursosTaller();
    return cursos;
};

const talleresItem = async (id) => {
    const cursos = await getCursoTaller(id);
    return cursos;
};

module.exports = { talleresList, talleresItem };
