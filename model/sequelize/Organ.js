const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Organ = sequelize.define('Organ', {
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
    price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    }
});

module.exports = Organ;