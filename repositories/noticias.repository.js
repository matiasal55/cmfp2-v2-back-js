const Model = require('../models/Noticia');

const getNoticias = async () => {
    const noticias = Model.find().sort({ _id: -1 });
    return noticias;
};

const getUltimasNoticias = async () => {
    const noticias = Model.find().sort({ _id: -1 }).limit(3);
    return noticias;
};

const getNoticia = async (id) => {
    const noticia = Model.findById(id);
    return noticia;
};

module.exports = { getNoticias, getUltimasNoticias, getNoticia };
