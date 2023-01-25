const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Doctor = sequelize.define('Doctor', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateJoin: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dateLeave: {
        type: Sequelize.DATE,
        allowNull: true
    }
});

module.exports = Doctor;