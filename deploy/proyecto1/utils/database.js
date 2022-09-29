//Configuración de sequelize
const Sequelize = require('sequelize');
const {applyRelations} = require('./relations');
// Objeto de conexión
const sequelize = new Sequelize('test','admin','WowerTecB3?',{
    dialect:'mysql',
    host:'database-1.cwwdror2rmhy.us-east-1.rds.amazonaws.com',
    dialectOptions:{
        options:{
            //Características especiales de la colección
        }
    },
    define:{
        timestamps:false,
        freezeTableName:true
    }
});

//Cargar los modelos (entidades)
const modelDefiners = [
    require('../models/videojuego'),
    require('../models/consola'),
    require('../models/company'),
    require('../models/consolaVideojuego')
];

//Adherir los modelos al objeto de conexión 
for (const modelDefiner of modelDefiners){ //for each, como en python
    modelDefiner(sequelize);
}

//Generar las relaciones entre las tablas
applyRelations(sequelize);

//Exportar el objeto sequelize
module.exports = sequelize;



//module.exports = sequelize; // se necesita para poder sacar el archivo

/*


const Consola = sequelize.define('consola',{
    //Atributos
    nombre:{
        type:Sequelize.STRING,
        allowNull:false
    },
    marca:{
        type:Sequelize.STRING,
        allowNull:false
    }
});


//Prueba de conexión

sequelize.sync()
    .then(resultado=>{
        console.log('Conexión exitosa')
    });


*/