const express = require('express');
const router = express.Router();
require('../JS/database'); //conexion a la bd

//#region constantes

const {
    newActivity,
    Asignarcalificacion,
    getActivityCurso,
    getDatosTarea,
    getTareasEntregadas,
    updateActivity,
} = require('../JS/actividades');

const {
    check,
    validationResult
} = require('express-validator');
//#endregion POST

router.post('/Frontend/activitynueva', function (req, res, next) {
    newActivity(req, res, next, validationResult);
});
router.post('/Frontend/TareaCalificada', function (req, res, next) {
    Asignarcalificacion(req, res, next, validationResult);
});
//#endregion GET
router.get('/Frontend/activityobtener', function (req, res, next) {
    getActivityCurso(req, res, next, validationResult);
});
router.get('/Frontend/DatosTarea', function (req, res, next) {
    getDatosTarea(req, res, next, validationResult);
});
router.get('/Frontend/TareasEntregadas', function (req, res, next) {
    getTareasEntregadas(req, res, next, validationResult);
});
//#endregion PUT
router.put('/Frontend/activityupdate', function (req, res, next) {
    updateActivity(req, res, next, validationResult);
});
module.exports = router;