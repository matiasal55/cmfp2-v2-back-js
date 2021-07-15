const { especialidadesList, especialidadesItem } = require('../services/cursos.services');
const { success } = require('../services/messages/success');
const { error, internal } = require('../services/messages/error');

const getEspecialidades = async (req, res) => {
    try {
        const cursos = await especialidadesList();
        if (cursos.length > 0) return success(res, cursos);
        return error(res, 'No se encontraron cursos');
    } catch (e) {
        return internal(res);
    }
};

const getEspecialidad = async (req, res) => {
    try {
        const id = req.params.id;
        const curso = await especialidadesItem(id);
        if (curso) return success(res, curso);
        return error(res, 'No se encontró el curso con ese ID');
    } catch (e) {
        return internal(res);
    }
};

module.exports = { getEspecialidades, getEspecialidad };
