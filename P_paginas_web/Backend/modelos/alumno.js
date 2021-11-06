const mongoose = require('mongoose');
var schema = mongoose.Schema;

var alumno = new mongoose.Schema({
    id_estudiante: {
        type: String
    },
    id_bot: {
        type: String
    },
    nombres: {
        type: String
    },
    apellidos: {
        type: String
    },
    correo: {
        type: String
    },
    seccion: {
        type: String
    },
    password: {
        type: String
    },
    token: {
        type: String
    }
});


module.exports = mongoose.model('tb_alumno', alumno);