const { especialidadesList, especialidadesItem } = require('../services/cursos.services');

const getEspecialidades = async (req, res) => {
    const cursos = await especialidadesList();
    res.json(cursos);
};

const getEspecialidad = async (req, res) => {
    const id = req.params.id;
    const curso = await especialidadesItem(id);
    res.json(curso);
};

module.exports = { getEspecialidades, getEspecialidad };
