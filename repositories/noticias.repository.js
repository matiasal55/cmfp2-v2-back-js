const Model = require('../models/Noticia');

const getNoticias = async () => {
    const noticias = Model.find().sort({ _id: -1 });
    return noticias;
};

const getUltimasNoticias = async () => {
    const noticias = Model.find().sort({ _id: -1 }).limit(3);
    return noticias;
};

module.exports = { getNoticias, getUltimasNoticias };
