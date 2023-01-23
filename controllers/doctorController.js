exports.showDoctorList = (req, res, next) => {
    res.render('pages/doctor/list', {navLocation: 'Doctors'});
}
exports.showAddDoctorForm = (req, res, next) => {
    res.render('pages/doctor/form', {navLocation: 'Doctors'});
}
exports.showDoctorDetails = (req, res, next) => {
    res.render('pages/doctor/form-details', {navLocation: 'Doctors'});
}