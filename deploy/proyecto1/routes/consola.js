const express = require('express');
const router = express.Router();
const consolaController = require('../controllers/consola')//cuando se usa require no es necesario colocar .js en el archivo


//Create Read Update Delete (CRUD) (ABCC) Altas Bajas Cambios Consultas

//Servicio para mostrar el formulario
router.get('/altaConsola',consolaController.getAltaConsola);
//Servicio para procesar los datos del formulario
router.post('/altaConsola',consolaController.postAltaConsola);
//Servicio para consultar todos los datos
router.get('/consultaConsola',consolaController.getConsultaConsola);

router.get('/tarea2',consolaController.getTarea2);
router.post('/tarea2',consolaController.postTarea2);


module.exports = router;