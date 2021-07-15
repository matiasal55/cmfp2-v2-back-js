const { getNoticias, getUltimasNoticias } = require('../repositories/noticias.repository');

const noticiasList = async () => {
    const noticias = await getNoticias();
    return noticias;
};

const noticiasLastItems = async () => {
    const noticias = await getUltimasNoticias();
    return noticias;
};

module.exports = { noticiasList, noticiasLastItems };
