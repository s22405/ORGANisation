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
        allowNull: false
    },
    idDoctor: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idOrgan: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    successful: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    bedNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    operationTimestamp: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = Operation;
