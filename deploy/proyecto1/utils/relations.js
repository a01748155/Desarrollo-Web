const videojuego = require("../models/videojuego");

function applyRelations(sequelize){
    console.log(sequelize.models);
    const Company = sequelize.models.Company;
    const Videojuego = sequelize.models.Videojuego;
    const Consola = sequelize.models.Consola;
    const ConsolaVideojuego = sequelize.models.ConsolaVideojuego;

    //Compañia puede desarrollar varios videojuegos
    Company.hasMany(Videojuego);
    //Un videojuego solo puede ser desarrollado por una compañía
    Videojuego.belongsTo(Company);

    //Un videojuego puede ejecutarse en muchas cosas
    Videojuego.belongsToMany(Consola,{through:ConsolaVideojuego})
    //Una consola de videojuegos puede tener muchos videojuegos
    Consola.belongsToMany(Videojuego,{through:ConsolaVideojuego})
    
}

module.exports = {applyRelations}; // se ponen las llaves porque es una función