const express = require('express');
const router = express.Router();
const operationController = require('../controllers/operationController');

router.get('/', operationController.showOperationList);
router.get('/add', operationController.showAddOperationForm);
router.get('/edit/:idOperation', operationController.showEditOperationForm); //TODO operationId uncalled?
router.get('/details/:idOperation', operationController.showOperationDetails); //TODO operationId uncalled?

module.exports = router;



