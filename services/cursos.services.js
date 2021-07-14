const { getCursos } = require('../repositories/cursos.repository');

const cursosList = async () => {
    const cursos = await getCursos();
    return cursos;
};

module.exports = { cursosList };
