const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.get('/', doctorController.showDoctorList);
router.get('/add', doctorController.showAddDoctorForm);
router.get('/details/:doctorId', doctorController.showDoctorDetails); //TODO doctorId uncalled?
// router.get('/details/:doctorId', doctorController.showDoctorEditDoctorForm); //TODO doctorId uncalled?

module.exports = router;



