const mongoose = require('mongoose');
var schema = mongoose.Schema;

var notas = new mongoose.Schema({
    id_estudiante: { type: String, required: true},
    id_curso: { type: String, required: true},
    pparcial: { type: Number, required: true, default: 0},
    sparcial: { type: Number, required: true, default: 0},
    efinal: { type: Number, required: true, default: 0},
    actividades: { type: Number, required: true, default: 0},
});

module.exports = mongoose.model('tb_notas', notas);