const { noticiasList } = require('../services/noticias.services');

const getNoticias = async (req, res) => {
    const noticias = await noticiasList();
    res.json(noticias);
};

module.exports = { getNoticias };
