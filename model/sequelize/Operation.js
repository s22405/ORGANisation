const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Operation = sequelize.define('Operation', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idWillingOrganDonor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isInt: true,
        }
    },
    idDoctor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isInt: true,
        }
    },
    idOrgan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isInt: true
        }
    },
    successful: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    bedNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isInt: true,
            min: 1,
            max: 99,
        }
    },
    operationTimestamp: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            isDate: true,
            notEmpty: true,
            isAfter: { //TODO double check that this works
                args: "5500-04-05",
                msg: "DateJoin cannot happen before landing date (5500-04-05)"
            }
        }
    }
});

module.exports = Operation;
