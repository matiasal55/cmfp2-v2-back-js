const { Schema, model } = require('mongoose');

const noticiaSchema = new Schema({
    id: {
        type: Number,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    photos: Array,
    mainImage: {
        type: String,
        required: true,
    },
});

const noticiaModel = model('noticias', noticiaSchema);

module.exports = noticiaModel;
