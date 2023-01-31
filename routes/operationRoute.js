const express = require('express');
const router = express.Router();
const operationController = require('../controllers/operationController');

router.get('/', operationController.showOperationList);
router.get('/add', operationController.showAddOperationForm);
router.get('/edit/:idOperation', operationController.showEditOperationForm);
router.get('/details/:idOperation', operationController.showOperationDetails);

router.post('/add', operationController.addOperation);
router.post('/edit', operationController.updateOperation);
router.get('/delete/:idOperation', operationController.deleteOperation);

module.exports = router;



