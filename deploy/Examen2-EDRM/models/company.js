const Sequelize = require('sequelize');

const Company = (sequelize) => {
    sequelize.define('Company',{
        nombreCompany: Sequelize.STRING,
    });
}

module.exports = Company;