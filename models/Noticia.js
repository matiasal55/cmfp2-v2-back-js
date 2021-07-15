const { Schema, model } = require('mongoose');

const noticiaSchema = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    subtitulo: {
        type: String,
        required: true,
    },
    texto: {
        type: String,
        required: true,
    },
    photos: Array,
});

const noticiaModel = model('noticias', noticiaSchema);

module.exports = noticiaModel;
