const alumno = require('../modelos/alumno');
const activities = require('../modelos/actividades');
const alumActivity = require('../modelos/alumActivity');

module.exports = {

    // POST
    newActivity: async (req, res, next, validationResult) => {
        try {

            var act = new activities({
                nombre: req.query.nombre.toLowerCase(),
                nota:req.query.nota,
                descripcion: req.query.descripcion,
                dateFinal: new Date(req.query.dateFinal),
                dateInicial: new Date(),
            });
            await act.save();
            res.status(201).send(JSON.stringify('Tarea publicada'));
        } catch (err) {
            res.status(404).send(err);
            console.log(err);
        }

    },
    Asignarcalificacion: async (req, res, next, validationResult) => {
        try {

            var act = new alumActivity({
                id_alumno: req.query.carnet,
                id_tarea: req.query.id,
                estado: 'Tarea Calificada',
                punteo: req.query.nota,
            });
            await act.save();
            res.status(201).send(JSON.stringify('Tarea calificada'));
        } catch (err) {
            res.status(404).send(err);
            console.log(err);
        }
    },

    // GET 
    getActivityCurso: async (req, res, next, validationResult) => {
        try {
            var actividades = await activities.find({});
            res.status(200).send(actividades);
        } catch (err) {
            res.status(404).send('No he encontrado');
        }

    },
    getDatosTarea: async (req, res, next, validationResult) => {
        try {
            var actividades = await activities.findOne({_id:req.query._id});
            res.status(200).send(actividades);
        } catch (err) {
            res.status(404).send('No he encontrado');
        }

    },
    getTareasEntregadas: async (req, res, next, validationResult) => {
        try {
            var alumnos = await alumno.find({});
            res.status(200).send(alumnos);
        } catch (err) {
            res.status(404).send('No he encontrado');
        }

    },

    //PUT
    updateActivity: async (req, res, next, validationResult) => {
        try {
            await activities.findOneAndUpdate({
                _id: req.query.id
            }, {
                nota: req.query.nota,
                comentario: req.query.comentario,
            });

            res.status(201).send(JSON.stringify('Actualizado'));
        } catch (err) {
            res.status(404).send(err);
            console.log(err);
        }

    },
}