// exports.showOrganList = (req, res, next) => {
//     res.render('pages/organ/list', {navLocation: 'Organs'});
// }
// exports.showAddOrganForm = (req, res, next) => {
//     res.render('pages/organ/form', {navLocation: 'Organs'});
// }
// exports.showOrganDetails = (req, res, next) => {
//     res.render('pages/organ/form-details', {navLocation: 'Organs'});
// }
// exports.showEditOrganForm = (req, res, next) => {
//     res.render('pages/organ/form-edit', {navLocation: 'Organs'});
// }
const OrganRepository = require('../repository/sequelize/OrganRepository');

exports.showOrganList = (req, res, next) => {
    OrganRepository.getOrgans()
        .then(organs => {
            res.render('pages/organ/list', {
                organs: organs,
                navLocation: 'Organs',
                validationErrors: []
            });
        });
    // res.render('pages/organ/list', {navLocation: 'Organs'});
}
exports.showAddOrganForm = (req, res, next) => {
    res.render('pages/organ/form', {
        organ: {},
        pageTitle: 'New organ',
        formMode: 'createNew',
        btnLabel: 'Add organ',
        formAction: '/organs/add',
        navLocation: 'Organs',
        validationErrors: []
    });
    // res.render('pages/organ/form', {navLocation: 'Organs'});
}

exports.showEditOrganForm = (req, res, next) => {
    const idOrgan = req.params.idOrgan;
    OrganRepository.getOrganById(idOrgan)
        .then(organ => {
            res.render('pages/organ/form', {
                organ: organ,
                pageTitle: 'Edit organ',
                formMode: 'edit',
                btnLabel: 'Edit organ',
                formAction: '/organs/edit',
                navLocation: 'Organs',
                validationErrors: []
            });
        });
    // res.render('pages/organ/form-edit', {navLocation: 'Organs'});
}

exports.showOrganDetails = (req, res, next) => {
    const idOrgan = req.params.idOrgan;
    OrganRepository.getOrganById(idOrgan)
        .then(organ => {
            res.render('pages/organ/form', {
                organ: organ,
                pageTitle: 'Organ details',
                formMode: 'showDetails',
                // btnLabel: 'Edit organ',
                formAction: '',
                navLocation: 'Organs',
                validationErrors: []
            });
        });
    // res.render('pages/organ/form-details', {navLocation: 'Organs'});
}

exports.addOrgan = (req, res, next) => {
    const organData = { ...req.body };
    OrganRepository.createOrgan(organData)
        .then( result => {
            res.redirect('/organs');
        })
        .catch(err => {
            res.render('pages/organ/form', {
                organ: organData,
                pageTitle: 'Add organ',
                formMode: 'createNew',
                btnLabel: 'Add organ',
                formAction: '/organs/add',
                navLocation: 'Organs',
                validationErrors: err.errors
            })
            err.errors.forEach(err => {
                if (err.path.includes('name') && err.type == 'unique violation'){
                    err.message = "Name is already in use";
                }
            })
        });
};
exports.updateOrgan = (req, res, next) => {
    const idOrgan = req.body._id;
    const organData = { ...req.body };
    OrganRepository.updateOrgan(idOrgan, organData)
        .then( result => {
            res.redirect('/organs');
        })
        .catch(err => {
            res.render('pages/organ/form', {
                organ: organData,
                pageTitle: 'Edit organ',
                formMode: 'edit',
                btnLabel: 'Edit organ',
                formAction: '/organs/edit',
                navLocation: 'Organs',
                validationErrors: err.errors
            })
            err.errors.forEach(err => {
                if (err.path.includes('name') && err.type == 'unique violation'){
                    err.message = "Name is already in use";
                }
            })
        });
};
exports.deleteOrgan = (req, res, next) => {
    const idOrgan = req.params.idOrgan;
    OrganRepository.deleteOrgan(idOrgan)
        .then( () => {
            res.redirect('/organs');
        });
};
