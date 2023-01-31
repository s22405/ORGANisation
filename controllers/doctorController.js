const DoctorRepository = require('../repository/sequelize/DoctorRepository');

exports.showDoctorList = (req, res, next) => {
    DoctorRepository.getDoctors()
        .then(doctors => {
            res.render('pages/doctor/list', {
                doctors: doctors,
                navLocation: 'Doctors',
                validationErrors: []
            });
        });
    // res.render('pages/doctor/list', {navLocation: 'Doctors'});
}
exports.showAddDoctorForm = (req, res, next) => {
    res.render('pages/doctor/form', {
        doctor: {},
        pageTitle: 'New doctor',
        formMode: 'createNew',
        btnLabel: 'Add doctor',
        formAction: '/doctors/add',
        navLocation: 'Doctors',
        validationErrors: []
    });
    // res.render('pages/doctor/form', {navLocation: 'Doctors'});
}

exports.showEditDoctorForm = (req, res, next) => {
    const idDoctor = req.params.idDoctor;
    DoctorRepository.getDoctorById(idDoctor)
        .then(doctor => {
            res.render('pages/doctor/form', {
                doctor: doctor,
                pageTitle: 'Edit doctor',
                formMode: 'edit',
                btnLabel: 'Edit doctor',
                formAction: '/doctors/edit',
                navLocation: 'Doctors',
                validationErrors: []
            });
        });
    // res.render('pages/doctor/form-edit', {navLocation: 'Doctors'});
}

exports.showDoctorDetails = (req, res, next) => {
    const idDoctor = req.params.idDoctor;
    DoctorRepository.getDoctorById(idDoctor)
        .then(doctor => {
            res.render('pages/doctor/form', {
                doctor: doctor,
                pageTitle: 'Doctor details',
                formMode: 'showDetails',
                // btnLabel: 'Edit doctor',
                formAction: '',
                navLocation: 'Doctors',
                validationErrors: []
            });
        });
    // res.render('pages/doctor/form-details', {navLocation: 'Doctors'});
}

exports.addDoctor = (req, res, next) => {
    const doctorData = {...req.body};
    DoctorRepository.createDoctor(doctorData)
        .then( result => {
            res.redirect('/doctors');
        })
        .catch(err => {
                res.render('pages/doctor/form', {
                doctor: doctorData,
                pageTitle: 'Add doctor',
                formMode: 'createNew',
                btnLabel: 'Add doctor',
                formAction: '/doctors/add',
                navLocation: 'Doctors',
                validationErrors: err.errors
            });
        });
};

exports.updateDoctor = (req, res, next) => {
    const idDoctor = req.body._id;
    const doctorData = {...req.body};
    DoctorRepository.updateDoctor(idDoctor, doctorData)
        .then( result => {
            res.redirect('/doctors');
        })
        .catch(err => {
            res.render('pages/doctor/form', {
                doctor: doctorData,
                pageTitle: 'Edit doctor',
                formMode: 'edit',
                btnLabel: 'Edit doctor',
                formAction: '/doctors/edit',
                navLocation: 'Doctors',
                validationErrors: err.errors
            });
        });
};
exports.deleteDoctor = (req, res, next) => {
    const idDoctor = req.params.idDoctor;
    DoctorRepository.deleteDoctor(idDoctor)
        .then( () => {
            res.redirect('/doctors');
        });
};
