const { noticiasList, noticiasLastItems } = require('../services/noticias.services');

const getNoticias = async (req, res) => {
    const noticias = await noticiasList();
    res.json(noticias);
};

const getUltimasNoticias = async (req, res) => {
    const noticias = await noticiasLastItems();
    res.json(noticias);
};

module.exports = { getNoticias, getUltimasNoticias };
