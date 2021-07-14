const { getCursosEspecialidades, getCursoEspecialidades } = require('../repositories/cursos.repository');

const especialidadesList = async () => {
    const cursos = await getCursosEspecialidades();
    return cursos;
};

const especialidadesItem = async (id) => {
    const cursos = await getCursoEspecialidades(id);
    return cursos;
};

module.exports = { especialidadesList, especialidadesItem };
