const express = require('express');
const router = express.Router();

const organApiController = require('../../api/OrganAPI');

router.get('/', organApiController.getOrgans);
router.get('/:idOrgan', organApiController.getOrganById);
router.post('/', organApiController.createOrgan);
router.put('/:idOrgan', organApiController.updateOrgan);
router.delete('/:idOrgan', organApiController.deleteOrgan);

module.exports = router;