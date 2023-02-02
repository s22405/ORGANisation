const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Doctor = sequelize.define('Doctor', {
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
    dateJoin: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: true,
            isDate: true,
            isAfter: { //TODO double check that this works
                args: "5500-03-31",
                msg: "DateJoin cannot happen before landing date (5500-04-01)"
            }
        }
    },
    dateLeave: {
        type: Sequelize.DATE,
        allowNull: true,
        //TODO validation with null didn't fucking work despite the documentation saying that adding "allowNull" will not set them off
        // guess what? it fucking did
        // validate: {
        //     isDate: true,
        //     isAfter:  { //DEFINITELY double check that this works
        //         args: "5500-03-31",
        //         msg: "DateLeave cannot happen before landing date (5500-04-01)"
        //         // args: this.dateJoin.toString(),
        //         // msg: "DateLeave must be after dateJoin"
        //     }
        //     // dateLeaveAfterDateJoin() { //yeah no idea if this will work
        //     // }
        //     //a testament to my attempts at creating a custom function, I've spent ~3 hours trying to create one, I give up
        // }
    }
});//,
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


module.exports = Doctor;