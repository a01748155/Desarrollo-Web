const path = require('path');

// Proceso cuando se llame a la ruta
exports.getAltaConsola = (req,res) => {
    //res.send('<h1>Formulario de consola</h1>');
    res.sendFile(path.join(__dirname,'..','views','formulario.html'));
}//exports permite el uso de funciones en otros archivos

exports.postAltaConsola = (req,res) => {
    console.log(req.body);
    res.json({estado:"Exitoso"});
}

exports.getTarea2 = (req,res) => {
    res.sendFile(path.join(__dirname,'..','views','tarea2.html'));
}

exports.postTarea2 = (req,res) => {
    palabra = req.body.idiomaf;
    traduccion = "";
    palin = req.body.palindromo;

    ap = 0;
    i = 0;
    j = palin.length - 1;
    p = 1;
    for(i = 0; i < palin.length; i++){
        if (palin[i] != palin[j]){
            p = 0;
            break;
        }
        j--;
    }

    while (ap < palabra.length){
        console.log(traduccion);
        if (palabra[ap] == "f" && ap < palabra.length-1){
            if (palabra[ap] + palabra[ap+1] == palabra[ap+2] + palabra[ap+3] && ap < palabra.length-3){
                traduccion = traduccion + palabra[ap] + palabra[ap+1];
                ap = ap+4;
            }else{
                ap = ap+2;
            }
        }else if((palabra[ap] == "f" && ap < palabra.length-1)){
            
        }else{
            traduccion = traduccion + palabra[ap];
            ap = ap+1;
        }
    }


    if(p == 0){
        res.json({estado:"La palabra " + palin + " no es un palíndromo. La palabra descifrada es: " + traduccion});
    }else{
        res.json({estado:"La palabra " + palin + " es un palíndromo. La palabra descifrada es: " + traduccion});
    }
    
}

exports.getConsultaConsola = (req,res) => {
    res.send('<h1>Datos de las consolas</h1>');
}
