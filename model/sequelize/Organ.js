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
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            len: {
                args: [1, 200],
                msg: "The field should contain between 1 and 200 characters"
            },
        }
    },
    price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
        validate: {
            notEmpty: true,
            min: 0,
            max: 99999.99,
            //TODO isfloat?
        }
    }
});

module.exports = Organ;