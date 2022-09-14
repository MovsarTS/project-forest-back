const { Router } = require('express');
const router = Router();
const { requestController } = require('../controllers/request.controller');

router.post('/request', requestController.addRequest);
router.get('/requests', requestController.getRequests);
router.delete('/request/:id', requestController.deleteRequest)

module.exports = router;