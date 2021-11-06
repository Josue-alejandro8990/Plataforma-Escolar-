const mongoose = require('mongoose');
var schema = mongoose.Schema;

var alumActivity = new mongoose.Schema({
    id_alumno: { 
        type: String
    },
    id_tarea: {
         type: String
        },
    estado: { 
        type: String, required: true, default:'Pendiente de Revisar'
    },
    punteo: { 
        type: String, required: true, default:'0'
    }
});

module.exports = mongoose.model('tb_alumActivity', alumActivity);