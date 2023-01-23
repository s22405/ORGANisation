exports.showOperationList = (req, res, next) => {
    res.render('pages/operation/list', {navLocation: 'Operations'});
}
exports.showAddOperationForm = (req, res, next) => {
    res.render('pages/operation/form', {navLocation: 'Operations'});
}
exports.showOperationDetails = (req, res, next) => {
    res.render('pages/operation/form-details', {navLocation: 'Operations'});
}
exports.showEditOperationForm = (req, res, next) => {
    res.render('pages/operation/form-edit', {navLocation: 'Operations'});
}