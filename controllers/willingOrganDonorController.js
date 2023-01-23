exports.showWillingOrganDonorList = (req, res, next) => {
    res.render('pages/willingOrganDonor/list', {navLocation: 'WillingOrganDonors'});
}
exports.showAddWillingOrganDonorForm = (req, res, next) => {
    res.render('pages/willingOrganDonor/form', {navLocation: 'WillingOrganDonors'});
}
exports.showWillingOrganDonorDetails = (req, res, next) => {
    res.render('pages/willingOrganDonor/form-details', {navLocation: 'WillingOrganDonors'});
}