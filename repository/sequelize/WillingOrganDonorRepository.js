const Doctor = require('../../model/sequelize/Doctor');
const Operation = require('../../model/sequelize/Operation');
const Organ = require('../../model/sequelize/Organ');
const WillingOrganDonor = require('../../model/sequelize/WillingOrganDonor');

exports.getWillingOrganDonors = () => {
    return WillingOrganDonor.findAll();
};

exports.getWillingOrganDonorById = (idWillingOrganDonor) => {
    return WillingOrganDonor.findByPk(idWillingOrganDonor,
        {
            include: [{
                model: Operation,
                as: 'operations',
                include: [{
                    model: Doctor,
                    as: 'doctor'
                },{
                    model: Organ,
                    as: 'organ'
                }]
            }]
        });
};

exports.createWillingOrganDonor = (newWillingOrganDonorData) => {
    return WillingOrganDonor.create({
        name: newWillingOrganDonorData.name,
        cellNumber: newWillingOrganDonorData.cellNumber,
        patientFrom: newWillingOrganDonorData.patientFrom,
        patientTill: newWillingOrganDonorData.patientTill
    });
};

exports.updateWillingOrganDonor = (idWillingOrganDonor, willingOrganDonorData) => {
    const name = willingOrganDonorData.name;
    const cellNumber = willingOrganDonorData.cellNumber;
    const patientFrom = willingOrganDonorData.patientFrom;
    const  patientTill = willingOrganDonorData.patientTill;
    return WillingOrganDonor.update(willingOrganDonorData, {where: {_id: idWillingOrganDonor} });
};

exports.deleteWillingOrganDonor = (idWillingOrganDonor) => {
    return WillingOrganDonor.destroy({
        where: { _id: idWillingOrganDonor }
    });
};