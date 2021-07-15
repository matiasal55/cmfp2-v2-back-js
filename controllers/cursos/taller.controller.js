const { talleresList, talleresItem } = require('../../services/cursos/taller.services');
const { success } = require('../../services/messages/success');
const { error, internal } = require('../../services/messages/error');

const getTalleres = async (req, res) => {
    try {
        const cursos = await talleresList();
        if (cursos.length > 0) return success(res, cursos);
        return error(res, 'No se encontraron cursos');
    } catch (e) {
        return internal(res);
    }
};

const getTaller = async (req, res) => {
    try {
        const id = req.params.id;
        const curso = await talleresItem(id);
        if (curso) return success(res, curso);
        return error(res, 'No se encontró el curso con ese ID');
    } catch (e) {
        return internal(res);
    }
};

module.exports = { getTalleres, getTaller };
