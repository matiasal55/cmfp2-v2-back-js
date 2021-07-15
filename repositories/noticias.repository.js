const Model = require('../models/Noticia');

const getNoticias = async () => {
    const noticias = Model.find();
    return noticias;
};

module.exports = { getNoticias };
