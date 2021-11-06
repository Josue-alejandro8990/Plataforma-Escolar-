const express = require('express');
const router = express.Router();
require('../JS/database'); //conexion a la bd
//#region constantes
const {
    getActivityCurso,
    alumnosNotas
} = require('../JS/alumno');

const {
    check,
    validationResult
} = require('express-validator');
// #endregion

//#region GET
router.get('/Frontend/obtenertareas', function (req, res, next) {
    getActivityCurso(req, res, next, validationResult);
});
router.get('/Frontend/obtenernotas', function (req, res, next) {
    alumnosNotas(req, res, next, validationResult);
});
module.exports = router;