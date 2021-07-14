const { cursosList } = require('../services/cursos.services');

const getCursos = (req, res) => {
    const cursos = cursosList();
    res.json({ cursos });
};

module.exports = { getCursos };
