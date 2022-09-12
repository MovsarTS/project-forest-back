const { Router } = require('express')
const router = Router()
const { workerController } = require('../controllers/worker.controller')

router.post('/worker', workerController.addWorker)
router.get('/worker', workerController.getWorker)

module.exports = router;