const Doctor = require('../../model/sequelize/Doctor');
const Operation = require('../../model/sequelize/Operation');
const Organ = require('../../model/sequelize/Organ');
const WillingOrganDonor = require('../../model/sequelize/WillingOrganDonor');

exports.getOrgans = () => {
    return Organ.findAll();
};

exports.getOrganById = (idOrgan) => {
    return Organ.findByPk(idOrgan,
        {
            include: [{
                model: Operation,
                as: 'operations',
                include: [{
                    model: Doctor,
                    as: 'doctor'
                },{
                    model: WillingOrganDonor,
                    as: 'willingOrganDonor'
                }]
            }]
        });
};

exports.createOrgan = (newOrganData) => {
    return Organ.create({
        name: newOrganData.name,
        price: newOrganData.price
        // allOrgan: Organ.findAll
    });
};

exports.updateOrgan = (idOrgan, organData) => {
    const name = organData.name;
    const price = organData.price;
    return Organ.update(organData, {where: {_id: idOrgan} });
};

exports.deleteOrgan = (idOrgan) => {
    return Organ.destroy({
        where: { _id: idOrgan }
    });
};