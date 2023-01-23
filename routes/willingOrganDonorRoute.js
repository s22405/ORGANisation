const express = require('express');
const router = express.Router();
const willingOrganDonorController = require('../controllers/willingOrganDonorController');

router.get('/', willingOrganDonorController.showWillingOrganDonorList);
router.get('/add', willingOrganDonorController.showAddWillingOrganDonorForm);
router.get('/details/:willingOrganDonorId', willingOrganDonorController.showWillingOrganDonorDetails); //TODO willingOrganDonorId uncalled?
router.get('/edit/:willingOrganDonorId', willingOrganDonorController.showEditWillingOrganDonorForm); //TODO willingOrganDonorId uncalled?

module.exports = router;



