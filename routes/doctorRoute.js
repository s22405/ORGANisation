const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.get('/', doctorController.showDoctorList);
router.get('/add', doctorController.showAddDoctorForm);
router.get('/edit/:idDoctor', doctorController.showEditDoctorForm);
router.get('/details/:idDoctor', doctorController.showDoctorDetails);

router.post('/add', doctorController.addDoctor);
router.post('/edit', doctorController.updateDoctor);
router.get('/delete/:idDoctor', doctorController.deleteDoctor);

module.exports = router;



