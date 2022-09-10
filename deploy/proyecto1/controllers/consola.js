const path = require('path');

// Proceso cuando se llame a la ruta
exports.getAltaConsola = (req,res) => {
    //res.send('<h1>Formulario de consola</h1>');
    res.sendFile(path.join(__dirname,'..','views','formulario.html'));
}//exports permite el uso de funciones en otros archivos

exports.postAltaConsola = (req,res) => {
    console.log(req.body);
    res.json({estado:'Exitoso'});
}

exports.getConsultaConsola = (req,res) => {
    res.send('<h1>Datos de las consolas</h1>');
}
