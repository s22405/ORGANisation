const DoctorRepository = require('../repository/sequelize/DoctorRepository');

exports.showDoctorList = (req, res, next) => {
    DoctorRepository.getDoctors()
        .then(doctors => {
            res.render('pages/doctor/list', {
                doctors: doctors,
                navLocation: 'Doctors'
            });
        });
    // res.render('pages/doctor/list', {navLocation: 'Doctors'});
}
exports.showAddDoctorForm = (req, res, next) => {
    res.render('pages/doctor/form', {
        doctor: {},
        pageTitle: req.__('doctor.form.add.pageTitle'),
        formMode: 'createNew',
        btnLabel: req.__('doctor.form.add.btnLabel'),
        formAction: '/doctors/add',
        navLocation: 'Doctors'
    });
    // res.render('pages/doctor/form', {navLocation: 'Doctors'});
}

exports.showEditDoctorForm = (req, res, next) => {
    const idDoctor = req.params.idDoctor;
    DoctorRepository.getDoctorById(idDoctor)
        .then(doctor => {
            res.render('pages/doctor/form', {
                doctor: doctor,
                pageTitle: req.__('doctor.form.edit.pageTitle'),
                formMode: 'edit',
                btnLabel: req.__('doctor.form.edit.btnLabel'),
                formAction: '/doctors/edit',
                navLocation: 'Doctors'
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
                pageTitle: req.__('doctor.form.details.pageTitle'),
                formMode: 'showDetails',
                // btnLabel: 'Edit doctor',
                formAction: '',
                navLocation: 'Doctors'
            });
        });
    // res.render('pages/doctor/form-details', {navLocation: 'Doctors'});
}

exports.addDoctor = (req, res, next) => {
    const doctorData = {...req.body};
    DoctorRepository.createDoctor(doctorData)
        .then( result => {
            res.redirect('/doctors');
        });
};
exports.updateDoctor = (req, res, next) => {
    const idDoctor = req.body._id;
    const doctorData = {...req.body};
    DoctorRepository.updateDoctor(idDoctor, doctorData)
        .then( result => {
            res.redirect('/doctors');
        });
};
exports.deleteDoctor = (req, res, next) => {
    const idDoctor = req.params.idDoctor;
    DoctorRepository.deleteDoctor(idDoctor)
        .then( () => {
            res.redirect('/doctors');
        });
};
