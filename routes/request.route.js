const { Router } = require('express');
const router = Router();
const { requestController } = require('../controllers/request.controller');

router.post('/request', requestController.addRequest);
router.get('/requests', requestController.getRequests);

module.exports = router;