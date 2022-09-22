const express = require('express');
const router = express.Router();
const consolaController = require('../controllers/consola')//cuando se usa require no es necesario colocar .js en el archivo


//Create Read Update Delete (CRUD) (ABCC) Altas Bajas Cambios Consultas

//Servicio para mostrar el formulario
router.get('/formulario',consolaController.getFormulario);
//Servicio para procesar los datos del formulario
router.post('/validacion',consolaController.postValidacion);

module.exports = router;