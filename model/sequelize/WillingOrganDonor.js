const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const WillingOrganDonor = sequelize.define('WillingOrganDonor', {
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
    cellNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    patientFrom: {
        type: Sequelize.DATE,
        allowNull: false
    },
    patientTill: {
        type: Sequelize.DATE,
        allowNull: true
    }
});

module.exports = WillingOrganDonor;