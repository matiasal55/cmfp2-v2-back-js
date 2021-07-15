const { noticiasList, noticiasLastItems, noticia } = require('../services/noticias.services');

const getNoticias = async (req, res) => {
    const noticias = await noticiasList();
    res.json(noticias);
};

const getUltimasNoticias = async (req, res) => {
    const noticias = await noticiasLastItems();
    res.json(noticias);
};

const getNoticia = async (req, res) => {
    const { id } = req.params;
    const request = await noticia(id);
    res.json(request);
};

module.exports = { getNoticias, getUltimasNoticias, getNoticia };
