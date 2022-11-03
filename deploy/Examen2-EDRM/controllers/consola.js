const path = require('path');
const Examen = require('../utils/database').models.Examen;
const sequelize = require('../utils/database');
const Sequelize = require('sequelize');

exports.getExamenes = (req,res)=>{
    //SELECT * from Consola;
    Examen.findAll()
        .then(examenes=>{
            console.log("Examenes",examenes);
            res.send(examenes);
        })
        .catch(e=>{
            console.log(e);
            res.send("Error");
        })
}

exports.postAltaExamen = (req,res) => {
    console.log(req.body);
    //INSERT INTO Consola VALUES ()
    Examen.create(req.body)
    .then(resultado=>{
        console.log('Registro exitoso');//Servidor
        res.send('Registro exitoso')//Cliente
    })
    .catch(error=>{
        console.log(error);//Servidor
        res.send("Ocurrio un error");//Cliente
    })
}