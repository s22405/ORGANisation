const WillingOrganDonorRepository = require('../repository/sequelize/WillingOrganDonorRepository');

exports.showWillingOrganDonorList = (req, res, next) => {
    WillingOrganDonorRepository.getWillingOrganDonors()
        .then(willingOrganDonors => {
            res.render('pages/willingOrganDonor/list', {
                willingOrganDonors: willingOrganDonors,
                navLocation: 'WillingOrganDonors',
                validationErrors: []
            });
        });
    // res.render('pages/willingOrganDonor/list', {navLocation: 'WillingOrganDonors'});
}
exports.showAddWillingOrganDonorForm = (req, res, next) => {
    res.render('pages/willingOrganDonor/form', {
        willingOrganDonor: {},
        pageTitle: 'New willingOrganDonor',
        formMode: 'createNew',
        btnLabel: 'Add willingOrganDonor',
        formAction: '/willingOrganDonors/add',
        navLocation: 'WillingOrganDonors',
        validationErrors: []
    });
    // res.render('pages/willingOrganDonor/form', {navLocation: 'WillingOrganDonors'});
}

exports.showEditWillingOrganDonorForm = (req, res, next) => {
    const idWillingOrganDonor = req.params.idWillingOrganDonor;
    WillingOrganDonorRepository.getWillingOrganDonorById(idWillingOrganDonor)
        .then(willingOrganDonor => {
            res.render('pages/willingOrganDonor/form', {
                willingOrganDonor: willingOrganDonor,
                pageTitle: 'Edit willingOrganDonor',
                formMode: 'edit',
                btnLabel: 'Edit willingOrganDonor',
                formAction: '/willingOrganDonors/edit',
                navLocation: 'WillingOrganDonors',
                validationErrors: []
            });
        });
    // res.render('pages/willingOrganDonor/form-edit', {navLocation: 'WillingOrganDonors'});
}

exports.showWillingOrganDonorDetails = (req, res, next) => {
    const idWillingOrganDonor = req.params.idWillingOrganDonor;
    WillingOrganDonorRepository.getWillingOrganDonorById(idWillingOrganDonor)
        .then(willingOrganDonor => {
            res.render('pages/willingOrganDonor/form', {
                willingOrganDonor: willingOrganDonor,
                pageTitle: 'WillingOrganDonor details',
                formMode: 'showDetails',
                // btnLabel: 'Edit willingOrganDonor',
                formAction: '',
                navLocation: 'WillingOrganDonors',
                validationErrors: []
            });
        });
    // res.render('pages/willingOrganDonor/form-details', {navLocation: 'WillingOrganDonors'});
}

exports.addWillingOrganDonor = (req, res, next) => {
    const willingOrganDonorData = { ...req.body };
    WillingOrganDonorRepository.createWillingOrganDonor(willingOrganDonorData)
        .then( result => {
            res.redirect('/willingOrganDonors');
        })
        .catch(err => {
            res.render('pages/willingOrganDonor/form', {
                willingOrganDonor: willingOrganDonorData,
                pageTitle: 'Add willingOrganDonor',
                formMode: 'createNew',
                btnLabel: 'Add willingOrganDonor',
                formAction: '/willingOrganDonors/add',
                navLocation: 'WillingOrganDonors',
                validationErrors: err.errors
            });
        });
};
exports.updateWillingOrganDonor = (req, res, next) => {
    const idWillingOrganDonor = req.body._id;
    const willingOrganDonorData = { ...req.body };
    WillingOrganDonorRepository.updateWillingOrganDonor(idWillingOrganDonor, willingOrganDonorData)
        .then( result => {
            res.redirect('/willingOrganDonors');
        })
        .catch(err => {
            res.render('pages/willingOrganDonor/form', {
                willingOrganDonor: willingOrganDonorData,
                pageTitle: 'Edit willingOrganDonor',
                formMode: 'edit',
                btnLabel: 'Edit willingOrganDonor',
                formAction: '/willingOrganDonors/edit',
                navLocation: 'WillingOrganDonors',
                validationErrors: err.errors
            });
        });
};
exports.deleteWillingOrganDonor = (req, res, next) => {
    const idWillingOrganDonor = req.params.idWillingOrganDonor;
    WillingOrganDonorRepository.deleteWillingOrganDonor(idWillingOrganDonor)
        .then( () => {
            res.redirect('/willingOrganDonors');
        });
};
