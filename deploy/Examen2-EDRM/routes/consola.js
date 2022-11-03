const express = require('express');
const router = express.Router();
const consolaController = require('../controllers/consola')//cuando se usa require no es necesario colocar .js en el archivo

router.post('/createExamen',consolaController.postAltaExamen);
router.get('/readExamen',consolaController.getExamenes);

module.exports = router;