const alumno = require('../modelos/alumno');
const notas = require('../modelos/notas');
const activities = require('../modelos/actividades');

module.exports = {

    //#region GET
    getActivityCurso: async (req, res, next, validationResult) => {
        try {
            var actividades = await activities.find({});
            res.status(200).send(actividades);
        } catch (err) {
            res.status(404).send('No he encontrado');
        }

    },
    alumnosNotas:async (req,res,next,validaResult)=>{
            try{
                var obtenernotas = await notas.findOne({id_estudiante:req.query.carnet});
                console.log(obtenernotas);
                res.status(200).send(obtenernotas);
            }catch(err){
                    res.status(404).send(JSON.stringify('no existen notas '));
                    console.log(err);
                    
            }
    },
    //#region POST
    //#region PUT
    // actualizar cualquier dato de un alumno
    updateAlum: async (req, res, next, validationResult) => {
        try {
            var al = await alumno.findOne({
                $or: [{
                    correo: new RegExp(req.query.correo, "i")
                }, {
                    id_estudiante: req.query.id_estudiante
                }, {
                    _id: req.query._id
                }]
            });

            await alumno.findOneAndUpdate({
                _id: al._id
            }, {
                id_estudiante: req.query.id_estudiante || al.id_estudiante,
                id_bot: req.query.id_bot || al.id_bot,
                nombres: req.query.nombre || al.nombres,
                apellidos: req.query.apellido || al.apellidos,
                correo: req.query.correo || al.correo,
                seccion: req.query.seccion || al.seccion
            });
            res.status(201).send('Actualizado ');
        } catch (err) {
            res.status(404).send('No he encontrado');
            console.log(err);
        }
    },
    //#endregion PUT
}