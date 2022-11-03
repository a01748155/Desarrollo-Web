const Sequelize = require('sequelize');

module.exports = (sequelize)=>{ // exports directo
    sequelize.define('Videojuego',{
        // Forma específica de declarar atributos
        nombreVideojuego:{
            type: Sequelize.STRING,
            allowNull:true,
        },
        clasificacion: Sequelize.STRING
    });
}