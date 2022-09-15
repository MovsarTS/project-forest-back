const Product = require('../models/Product.model')

module.exports.productController = {

    addProduct: async (req, res) => {
        const data = await Product.create({
            image: req.body.image,
            name: req.body.name,
            price: req.body.price
        })
        res.json(data)
    },

    getProduct: async (req, res) => {
        const data = await Product.find()
        res.json(data)
    },
    countPlus: async (req, res) => {
        try {
            const product = await Product.findByIdAndUpdate(req.body.productId, {
                $inc : {countInBasket: 1}
            })
            res.json(product)
        } catch (e) {
            res.json(e)
        }
      },
      countMinus: async (req, res) => {
        try {
            const product = await Product.findByIdAndUpdate(req.body.productId, {
                $inc : {countInBasket: -1}
            })
            res.json(product)
        } catch (e) {
            res.json(e)
        }
      }
}