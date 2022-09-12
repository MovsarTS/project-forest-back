const { Router } = require('express');
const router = Router();
const { usersController } = require('../controllers/user.controller');

router.get('/user', usersController.getAllUsers);
router.post('/user', usersController.addUser);
router.post('/login', usersController.login);

module.exports = router;