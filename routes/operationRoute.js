const express = require('express');
const router = express.Router();
const operationController = require('../controllers/operationController');

router.get('/', operationController.showOperationList);
router.get('/add', operationController.showAddOperationForm);
router.get('/details/:operationId', operationController.showOperationDetails); //TODO operationId uncalled?
router.get('/edit/:operationId', operationController.showEditOperationForm); //TODO operationId uncalled?

module.exports = router;



