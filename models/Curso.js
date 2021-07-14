const { Schema } = require('mongoose');

const cursoSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    titulo: {
        type: String,
        required: true,
    },
    presentacion: String,
    contenidos: {
        type: Array,
        required: true,
    },
    estudios: {
        type: Number,
        required: true,
    },
    duracion: {
        type: Number,
        required: true,
    },
    inscripcion: {
        type: Number,
        required: true,
    },
    dias: {
        type: String,
        required: true,
    },
    certificacion: {
        type: Array,
        required: true,
    },
    imgMain: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
});

module.exports = cursoSchema;
