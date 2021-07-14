const { especialidadesList } = require('../services/cursos.services');

const getEspecialidades = async (req, res) => {
    const cursos = await especialidadesList();
    res.json(cursos);
};

module.exports = { getEspecialidades };
