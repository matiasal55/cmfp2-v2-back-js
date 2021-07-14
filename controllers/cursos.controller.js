const { cursosList } = require('../services/cursos.services');

const getCursos = async (req, res) => {
    const cursos = await cursosList();
    res.json({ cursos });
};

module.exports = { getCursos };
