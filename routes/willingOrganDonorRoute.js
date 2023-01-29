const express = require('express');
const router = express.Router();
const willingOrganDonorController = require('../controllers/willingOrganDonorController');

router.get('/', willingOrganDonorController.showWillingOrganDonorList);
router.get('/add', willingOrganDonorController.showAddWillingOrganDonorForm);
//note to self, remember to name everything the exact same way everywhere just in case it's actually a dependency
//but you didn't realise that it is... UNLESS YOU WANT TO SIT AROUND FOR 2 HOURS TRYING NOT TO PULL A CURT FUCKING COBAIN
//BECAUSE THERE'S AN ERROR SSSSSOOOOOOMMMMMEEWWHHEERREEEE IN THE CODE
router.get('/details/:idWillingOrganDonor', willingOrganDonorController.showWillingOrganDonorDetails);
router.get('/edit/:idWillingOrganDonor', willingOrganDonorController.showEditWillingOrganDonorForm);

module.exports = router;



