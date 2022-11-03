const Sequelize = require('sequelize');

module.exports = (sequelize)=>{ // exports directo
    sequelize.define('Examen',{
        // Forma específica de declarar atributos
        matriculaAlumno:{
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull:true
        },
        calificacion: Sequelize.FLOAT,
        nombreAlumno: Sequelize.STRING,
        materia: Sequelize.STRING
    });
}