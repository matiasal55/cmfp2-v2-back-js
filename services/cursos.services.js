const { getCursosEspecialidades, getCursoEspecialidades, getCursosTaller, getCursoTaller } = require('../repositories/cursos.repository');

const especialidadesList = async () => {
    const cursos = await getCursosEspecialidades();
    return cursos;
};

const especialidadesItem = async (id) => {
    const cursos = await getCursoEspecialidades(id);
    return cursos;
};

const talleresList = async () => {
    const cursos = await getCursosTaller();
    return cursos;
};

const talleresItem = async (id) => {
    const cursos = await getCursoTaller(id);
    return cursos;
};

module.exports = { especialidadesList, especialidadesItem, talleresList, talleresItem };
