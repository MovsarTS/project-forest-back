const { Router } = require('express');
const router = Router();
const { serviceController } = require('../controllers/service.controller');

router.post('/service', serviceController.addService);
router.get('/services', serviceController.getAllServices);

module.exports = router;