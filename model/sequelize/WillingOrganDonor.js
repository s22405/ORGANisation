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
        allowNull: false,
        validate: {
            notEmpty: true,
            len: {
                args: [1, 200],
                msg: "The field should contain between 1 and 200 characters"
            },
        }
    },
    cellNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isInt: true,
            min: 1,
            max: 99,
        }
    },
    patientFrom: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: true,
            isDate: true,
            isAfter: {
                args: "5500-04-05",
                msg: "PatientFrom cannot happen before landing date (5500-04-05)"
            }
        }
    },
    patientTill: {
        type: Sequelize.DATE,
        allowNull: true,
        validate: {
            isDate: true,
            isAfter: {
                args: "5500-04-05",
                msg: "PatientTill cannot happen before landing date (5500-04-05)"
            }
            // isAfter:  { //DEFINITELY double check that this works
            //     args: this.dateJoin.toString(),
            //     msg: "DateLeave must be after dateJoin"
            // }
            // patientTillAfterPatientFrom() { //yeah no idea if this will work
            // }
        }
    }
}//,
// {
//     validate: { //yeah no idea if this will work
//         patientTillAfterPatientFrom() {
//             if(this.patientFrom.isAfter(this.patientTill)) {
//                 throw new Error('PatientFrom cannot happen before PatientTill')
//             }
//         }
//     }
// }
//let this be a lesson to all
//custom functions are also cursed
//or I'm retarded
//why did you even joke about writing this entire thing in C++? Are you insane?
);

module.exports = WillingOrganDonor;