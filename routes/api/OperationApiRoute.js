const express = require('express');
const router = express.Router();

const operationApiController = require('../../api/OperationAPI');

router.get('/', operationApiController.getOperations);
router.get('/:idOperation', operationApiController.getOperationById);
router.post('/', operationApiController.createOperation);
router.put('/:idOperation', operationApiController.updateOperation);
router.delete('/:idOperation', operationApiController.deleteOperation);

module.exports = router;