const mongoose = require('mongoose');
var schema = mongoose.Schema;

var actividad = new mongoose.Schema({
    nombre: { type: String, required: true},
    nota:{type:String},
    comentario:{type:String,default:''},
    descripcion: { type: String, required: true},
    dateFinal: { type: Date, required: true},
    dateInicial: { type: String, required: true, default: Date.now },
});

module.exports = mongoose.model('tb_actividades', actividad);