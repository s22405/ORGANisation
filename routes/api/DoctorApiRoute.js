const express = require('express');
const router = express.Router();

const doctorApiController = require('../../api/DoctorAPI');

router.get('/', doctorApiController.getDoctors);
router.get('/:idDoctor', doctorApiController.getDoctorById);
router.post('/', doctorApiController.createDoctor);
router.put('/:idDoctor', doctorApiController.updateDoctor);
router.delete('/:idDoctor', doctorApiController.deleteDoctor);

module.exports = router;