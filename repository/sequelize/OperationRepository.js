const Sequelize = require('sequelize');

const Doctor = require('../../model/sequelize/Doctor');
const Operation = require('../../model/sequelize/Operation');
const Organ = require('../../model/sequelize/Organ');
const WillingOrganDonor = require('../../model/sequelize/WillingOrganDonor');

exports.getOperations = () => {
    return Operation.findAll({include: [
            {
                model: Doctor,
                as: 'doctor'
            },
            {
                model: Organ,
                as: 'organ'
            },
            {
                model: WillingOrganDonor,
                as: 'willingOrganDonor'
            }]
    });
};

exports.getOperationById = (idOperation) => {
    return Operation.findByPk(idOperation, {include: [
            {
                model: Doctor,
                as: 'doctor'
            },
            {
                model: Organ,
                as: 'organ'
            },
            {
                model: WillingOrganDonor,
                as: 'willingOrganDonor'
            }]
        });
};

exports.createOperation = (newOperationData) => {
    console.log(JSON.stringify(newOperationData));

    return Operation.create({
        idWillingOrganDonor: newOperationData.idWillingOrganDonor,
        idDoctor: newOperationData.idDoctor,
        idOrgan: newOperationData.idOrgan,
        successful: newOperationData.successful,
        bedNumber: newOperationData.bedNumber,
        operationTimestamp: newOperationData.operationTimestamp
    });
};

exports.updateOperation = (idOperation, operationData) => {
    return Operation.update(operationData, {where: {_id: idOperation} });
};

exports.deleteOperation = (idOperation) => {
    return Operation.destroy({
        where: { _id: idOperation }
    });
};

exports.deleteManyOperations = (idOperations) => {
    return Operation.find({ _id: { [Sequelize.Op.in]: idOperations }});
};