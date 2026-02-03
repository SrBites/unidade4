const mongoose = require('mongoose');
//schema do mongodb
const BookSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'O título é obrigatório'],
        trim: true
    },
    autor: {
        type: String,
        required: [true, 'O autor é obrigatório'],
        trim: true
    },
    ano: {
        type: Number,
        required: [true, 'O ano de publicação é obrigatório']
    },
    genero: {
        type: String,
        required: [true, 'O gênero é obrigatório'],
        trim: true
    },
    criadoEm: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Book', BookSchema);