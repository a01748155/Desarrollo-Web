const path = require('path');

exports.getFormulario = (req,res) => {
    res.sendFile(path.join(__dirname,'..','views','forma.html'));
}

exports.postValidacion = (req,res) => {
    cancion = req.body.cancion;
    comida = req.body.comida;
    color = req.body.color;
    peli = req.body.peli;

    if(peli == "" || color == "" || comida == "" || cancion == ""){
        res.json({datosCompletos:"negativo"});
    }else{
        res.json({datosCompletos:"afirmativo"});
    }
}