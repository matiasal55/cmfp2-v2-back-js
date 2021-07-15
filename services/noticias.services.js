const { getNoticias } = require('../repositories/noticias.repository');

const noticiasList = async () => {
    const noticias = await getNoticias();
    return noticias;
};

module.exports = { noticiasList };
