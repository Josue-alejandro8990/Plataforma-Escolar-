const mongoose = require('mongoose');
var schema = mongoose.Schema;

var profe = new mongoose.Schema({

    id_bot: {
        type: String,
        unique: true
    },
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token: String,
    curso: {
        type: String,
        unique: true
    },
    seccion:{
        type:String,
        unique:true
    }
});

module.exports = mongoose.model('tb_profesor', profe);