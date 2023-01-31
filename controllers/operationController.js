const OperationRepository = require('../repository/sequelize/OperationRepository');
const OrganRepository = require('../repository/sequelize/OrganRepository');
const DoctorRepository = require('../repository/sequelize/DoctorRepository');
const WillingOrganDonorRepository = require('../repository/sequelize/WillingOrganDonorRepository');

exports.showOperationList = (req, res, next) => {
    OperationRepository.getOperations()
        .then(operations => {
            res.render('pages/operation/list', {
                operations: operations,
                navLocation: 'Operations'
            });
        });
    // res.render('pages/operation/list', {navLocation: 'Operations'});
}
exports.showAddOperationForm = (req, res, next) => {
    let allDoctors, allOrgans, allWillingOrganDonors;

    DoctorRepository.getDoctors()
        .then(doctors => {
            allDoctors = doctors;
            return OperationRepository.getOperations();
        })
    OrganRepository.getOrgans()
        .then(organs => {
            allOrgans = organs;
            return OperationRepository.getOperations();
        })
    WillingOrganDonorRepository.getWillingOrganDonors()
        .then(willingOrganDonors => {
            allWillingOrganDonors = willingOrganDonors;
            return OperationRepository.getOperations();
        })
        .then(() => {
            res.render('pages/operation/form', {
                operation: {},
                formMode: 'createNew',
                allDoctors: allDoctors,
                allOrgans: allOrgans,
                allWillingOrganDonors: allWillingOrganDonors,
                pageTitle: 'New operation',
                btnLabel: 'New operation',
                formAction: '/operations/add',
                navLocation: 'Operations'
            });
        });
}
exports.showEditOperationForm = (req, res, next) => {
    const idOperation = req.params.idOperation;
    let allDoctors, allOrgans, allWillingOrganDonors;

    DoctorRepository.getDoctors()
        .then(doctors => {
            allDoctors = doctors;
            return OperationRepository.getOperations();
        })
    OrganRepository.getOrgans()
        .then(organs => {
            allOrgans = organs;
            return OperationRepository.getOperations();
        })
    WillingOrganDonorRepository.getWillingOrganDonors()
        .then(willingOrganDonors => {
            allWillingOrganDonors = willingOrganDonors;
            return OperationRepository.getOperations();
        })
    OperationRepository.getOperationById(idOperation)
        .then(operation => {
            res.render('pages/operation/form', {
                operation: operation,
                formMode: 'edit',
                allDoctors: allDoctors,
                allOrgans: allOrgans,
                allWillingOrganDonors: allWillingOrganDonors,
                pageTitle: 'Edit operation',
                btnLabel: 'Edit operation',
                formAction: '/operations/edit',
                navLocation: 'Operations'
            });
        });
}
exports.showOperationDetails = (req, res, next) => {
    const idOperation = req.params.idOperation;
    let allDoctors, allOrgans, allWillingOrganDonors;

    DoctorRepository.getDoctors()
        .then(doctors => {
            allDoctors = doctors;
            return OperationRepository.getOperations();
        })
    OrganRepository.getOrgans()
        .then(organs => {
            allOrgans = organs;
            return OperationRepository.getOperations();
        })
    WillingOrganDonorRepository.getWillingOrganDonors()
        .then(willingOrganDonors => {
            allWillingOrganDonors = willingOrganDonors;
            return OperationRepository.getOperations();
        })
    OperationRepository.getOperationById(idOperation)
        .then(operation => {
            res.render('pages/operation/form', {
                operation: operation,
                formMode: 'showDetails',
                allDoctors: allDoctors,
                allOrgans: allOrgans,
                allWillingOrganDonors: allWillingOrganDonors,
                pageTitle: 'Operation details',
                // btnLabel: 'Edit operation',
                formAction: '',
                navLocation: 'Operations'
            });
        });
}
exports.addOperation = (req, res, next) => {
    const operationData = {...req.body};
    OperationRepository.createOperation(operationData)
        .then( result => {
            res.redirect('/operations');
        });
};
exports.updateOperation = (req, res, next) => {
    const idOperation = req.body._id;
    const operationData = {...req.body};
    OperationRepository.updateOperation(idOperation, operationData)
        .then( result => {
            res.redirect('/operations');
        });
};
exports.deleteOperation = (req, res, next) => {
    const idOperation = req.params.idOperation;
    OperationRepository.deleteOperation(idOperation)
        .then( () => {
            res.redirect('/operations');
        });
};
// exports.showAddOperationForm = (req, res, next) => {
//     /*
//     30/01 22:03
//     TODO there were some differences between the tutorial and a friend's project,
//      which I asked him to check for me to make sure that I understood how it works...
//      we'll see if I end up pulling my hair out because of this
//      */
//     let allDoctors, allOrgans, allWillingOrganDonors;
//     OperationRepository.getOperations()
//         .then(doctors => {
//             allDoctors = doctors;
//             return OrganRepository.getOrgans();
//         })
//         .then(organs => {
//             allOrgans = organs;
//             return WillingOrganDonorRepository.getWillingOrganDonors();
//         })
//         .then(willingOrganDonors => {
//             allWillingOrganDonors = willingOrganDonors;
//             res.render('pages/operations/form', {
//                 operation: {},
//                 formMode: 'createNew',
//                 allDoctors: allDoctors,
//                 allOrgans: allOrgans,
//                 allWillingOrganDonors: allWillingOrganDonors,
//                 pageTitle: 'New operation',
//                 btnLabel: 'Add operation',
//                 formAction: '/operations/add',
//                 navLocation: 'Operations'
//             });
//         });
//     // res.render('pages/operation/form', {navLocation: 'Operations'});
// }
// exports.showEditOperationForm = (req, res, next) => {
//     const idOperation = req.params.idOperation;
//
//     let allDoctors, allOrgans, allWillingOrganDonors;
//
//     OperationRepository.getOperationById(idOperation)
//         .then(doctors => {
//             allDoctors = doctors;
//             return OrganRepository.getOrgans();
//         })
//         .then(organs => {
//             allOrgans = organs;
//             return WillingOrganDonorRepository.getWillingOrganDonors();
//         })
//         .then(willingOrganDonors => {
//             allWillingOrganDonors = willingOrganDonors;
//         })
//         .then(operation => {
//             res.render('pages/operations/form', {
//                 operation: operation,
//                 formMode: 'edit',
//                 allDoctors: allDoctors,
//                 allOrgans: allOrgans,
//                 allWillingOrganDonors: allWillingOrganDonors,
//                 pageTitle: 'Edit operation',
//                 btnLabel: 'Edit operation',
//                 formAction: '/operations/edit',
//                 navLocation: 'Operations'
//             });
//         })
//     // res.render('pages/doctor/form-edit', {navLocation: 'Doctors'});
// }