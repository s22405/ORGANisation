const Doctor = require('../../model/sequelize/Doctor');
const Operation = require('../../model/sequelize/Operation');
const Organ = require('../../model/sequelize/Organ');
const WillingOrganDonor = require('../../model/sequelize/WillingOrganDonor');

exports.getDoctors = () => {
    return Doctor.findAll();
};

exports.getDoctorById = (idDoctor) => {
    return Doctor.findByPk(idDoctor,
        {
            include: [{
                model: Operation,
                as: 'operations',
                include: [{
                    model: Organ,
                    as: 'organ'
                },{
                    model: WillingOrganDonor,
                    as: 'willingOrganDonor'
                }]
            }]
        });
};

exports.createDoctor = (newDoctorData) => {
    return Doctor.create({
        name: newDoctorData.name,
        dateJoin: newDoctorData.dateJoin,
        dateLeave: newDoctorData.dateLeave
    });
};

exports.updateDoctor = (idDoctor, doctorData) => {
    const name = doctorData.name;
    const dateJoin = doctorData.dateJoin;
    const dateLeave = doctorData.dateLeave;
    return Doctor.update(doctorData, {where: {_id: idDoctor} });
};

exports.deleteDoctor = (idDoctor) => {
    return Doctor.destroy({
        where: { _id: idDoctor }
    });
};

exports.findByName = (name) => {
    return Doctor.findOne({
        where: {name: name}
    });
}