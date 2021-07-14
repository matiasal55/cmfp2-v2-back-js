const { getCursosEspecialidades } = require('../repositories/cursos.repository');

const especialidadesList = async () => {
    const cursos = await getCursosEspecialidades();
    return cursos;
};

module.exports = { especialidadesList };
