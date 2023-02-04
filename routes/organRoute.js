const express = require('express');
const router = express.Router();
const organController = require('../controllers/organController');

router.get('/', organController.showOrganList);
router.get('/add', organController.showAddOrganForm);
router.get('/details/:idOrgan', organController.showOrganDetails);
router.get('/edit/:idOrgan', organController.showEditOrganForm);

router.post('/add', organController.addOrgan);
router.post('/edit', organController.updateOrgan);
router.get('/delete/:idOrgan', organController.deleteOrgan);

module.exports = router;



