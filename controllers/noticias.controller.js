const { noticiasList, noticiasLastItems, noticia } = require('../services/noticias.services');
const { success } = require('../services/messages/success');
const { error, internal } = require('../services/messages/error');

const getNoticias = async (req, res) => {
    try {
        const noticias = await noticiasList();
        if (noticias.length > 0) return success(res, noticias);
        return error(res, 'No se encontraron noticias');
    } catch (e) {
        return internal(res);
    }
};

const getUltimasNoticias = async (req, res) => {
    try {
        const noticias = await noticiasLastItems();
        if (noticias.length > 0) return res.json(noticias);
        return error(res, 'No se encontraron noticias');
    } catch (e) {
        return internal(res);
    }
};

const getNoticia = async (req, res) => {
    try {
        const { id } = req.params;
        const request = await noticia(id);
        if (request) return res.json(request);
        return error(res, 'No se encontró la noticia con ese id');
    } catch (e) {
        return internal(res);
    }
};

module.exports = { getNoticias, getUltimasNoticias, getNoticia };
