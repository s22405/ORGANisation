const express = require('express');
const router = express.Router();

const willingOrganDonorApiController = require('../../api/WillingOrganDonorAPI');

router.get('/', willingOrganDonorApiController.getWillingOrganDonors);
router.get('/:idWillingOrganDonor', willingOrganDonorApiController.getWillingOrganDonorById);
router.post('/', willingOrganDonorApiController.createWillingOrganDonor);
router.put('/:idWillingOrganDonor', willingOrganDonorApiController.updateWillingOrganDonor);
router.delete('/:idWillingOrganDonor', willingOrganDonorApiController.deleteWillingOrganDonor);

module.exports = router;