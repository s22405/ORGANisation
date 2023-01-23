const express = require('express');
const router = express.Router();
const organController = require('../controllers/organController');

router.get('/', organController.showOrganList);
router.get('/add', organController.showAddOrganForm);
router.get('/details/:organId', organController.showOrganDetails); //TODO organId uncalled?
router.get('/edit/:organId', organController.showEditOrganForm); //TODO organId uncalled?

module.exports = router;



