const Service = require('../models/Service.model')

module.exports.serviceController = {

    addService: async (req, res) => {
        const data = await Service.create({
            image: req.body.image,
            name: req.body.name,
            description: req.body.description
        })
        res.json(data)
    },

    getAllServices: async (req, res) => {
        const data = await Service.find()
        res.json(data)
    }
}