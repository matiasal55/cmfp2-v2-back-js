const { getNoticias, getUltimasNoticias, getNoticia } = require('../repositories/noticias.repository');

const noticiasList = async () => {
    const noticias = await getNoticias();
    return noticias;
};

const noticiasLastItems = async () => {
    const noticias = await getUltimasNoticias();
    return noticias;
};

const noticia = async (id) => {
    const noticia = await getNoticia(id);
    return noticia;
};

module.exports = { noticiasList, noticiasLastItems, noticia };
