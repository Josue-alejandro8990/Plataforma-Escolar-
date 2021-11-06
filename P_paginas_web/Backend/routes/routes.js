const express = require ('express');
const router = express.Router();
require('../JS/database'); //conexion a la bd

//variables para manejar el crud
var query = require('../middleware/auth');
var log = require ('../JS/login.js');

router.post('/Frontend/login',log.logAlum);
router.post('/Frontend/consultartareas', log.logAlum);
router.post('/Frontend/registrar',log.registraralum);
router.post('/errors', function (requ, res) {
    console.error(requ.body, res);
    res.sendStatus(200);
});

//region get
router.post('/Frontend/login')
router.get('/errors', function (requ, res) {
    console.error(requ.body, res);
    res.sendStatus(200);
});
module.exports = router;