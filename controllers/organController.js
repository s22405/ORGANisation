exports.showOrganList = (req, res, next) => {
    res.render('pages/organ/list', {navLocation: 'Organs'});
}
exports.showAddOrganForm = (req, res, next) => {
    res.render('pages/organ/form', {navLocation: 'Organs'});
}
exports.showOrganDetails = (req, res, next) => {
    res.render('pages/organ/form-details', {navLocation: 'Organs'});
}
exports.showEditOrganForm = (req, res, next) => {
    res.render('pages/organ/form-edit', {navLocation: 'Organs'});
}