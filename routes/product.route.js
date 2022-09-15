const { Router } = require('express');
const router = Router();
const { productController } = require('../controllers/product.controller');

router.post('/product', productController.addProduct);
router.get('/products', productController.getProduct);
router.patch('/basket/plus', productController.countPlus)
router.patch('/basket/minus', productController.countMinus)

module.exports = router;