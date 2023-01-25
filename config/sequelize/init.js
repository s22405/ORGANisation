const sequelize = require('./sequelize');

const Doctor = require('../../model/sequelize/Doctor');
const WillingOrganDonor = require('../../model/sequelize/WillingOrganDonor');
const Organ = require('../../model/sequelize/Organ');
const Operation = require('../../model/sequelize/Operation');

module.exports = () => {
    Doctor.hasMany(Operation, {as: 'operations', foreignKey:{name: 'idDoctor', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Operation.belongsTo(Doctor, {as: 'doctor', foreignKey: {name: 'idDoctor', allowNull: false}});

    WillingOrganDonor.hasMany(Operation, {as: 'operations', foreignKey:{name: 'idWillingOrganDonor', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Operation.belongsTo(WillingOrganDonor, {as: 'willingOrganDonor', foreignKey: {name: 'idWillingOrganDonor', allowNull: false}});

    Organ.hasMany(Operation, {as: 'operations', foreignKey:{name: 'idOrgan', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Operation.belongsTo(Organ, {as: 'organ', foreignKey: {name: 'idOrgan', allowNull: false}});

    let allDoctors, allWillingOrganDonors, allOrgans;
    return sequelize
        .sync({force: true})
        .then( () => {
            return Doctor.findAll();
        })
        .then(doctors => {
            if( !doctors || doctors.length == 0) {
                return Doctor.bulkCreate([
                    {name: 'BarryTheChopper', dateJoin: '5500-04-01', dateLeave: null}
                ])
                .then( () => {
                    return Doctor.findAll();
                });
            } else {
                return doctors;
            }
        })
        .then( doctors => {
            allDoctors = doctors;
            return WillingOrganDonor.findAll();
        })
        .then(willingOrganDonors => {
            if( !willingOrganDonors || willingOrganDonors.length == 0) {
                return WillingOrganDonor.bulkCreate([
                    {name: 'Jonathan Mother', cellNumber: 1, patientFrom: '5500-04-05', patientTill: '5500-04-06'} //TODO double check if values are correct
                ])
                .then( () => {
                    return WillingOrganDonor.findAll();
                });
            } else {
                return willingOrganDonors;
            }
        })
        .then( willingOrganDonors => {
            allWillingOrganDonors = willingOrganDonors;
            return Organ.findAll();
        })
        .then(organs => {
            if( !organs || organs.length == 0) {
                return Organ.bulkCreate([
                    {name: 'Hearts', price: 99.99} //TODO double check if values are correct
                ])
                .then( () => {
                    return Organ.findAll();
                });
            } else {
                return organs;
            }
        })
        .then( organs => {
            allOrgans = organs;
            return Operation.findAll();
        })
        .then( operations => {
            if( !operations || operations.length == 0) {
                return Operation.bulkCreate([
                    {idWillingOrganDonor: allWillingOrganDonors[0]._id, idDoctor: allDoctors[0]._id, idOrgan: allOrgans[0]._id, successful: true, bedNumber: 1, operationTimestamp: '5500-04-05' }
                ]);
            } else {
                return operations;
            }
        });
};