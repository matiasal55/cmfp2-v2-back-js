const { getCursos } = require('../repositories/cursos.repository');

const cursosList = () => {
    const cursos = getCursos();
    return cursos;
};

module.exports = { cursosList };
