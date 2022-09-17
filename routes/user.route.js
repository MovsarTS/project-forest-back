const { Router } = require('express');
const router = Router();
const { usersController } = require('../controllers/user.controller');

router.get('/user', usersController.getAllUsers);
router.post('/user', usersController.addUser);
router.post('/login', usersController.login);
router.patch('/basket', usersController.addInBasket)
router.patch('/basket/remove', usersController.removeFromBasket)
router.patch('/allBasket/remove', usersController.removeAllBasket)
router.get('/basket/:userId', usersController.getBasket)


module.exports = router;