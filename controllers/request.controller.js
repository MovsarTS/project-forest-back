const { default: mongoose } = require('mongoose')
const Request = require('../models/Request.model')

module.exports.requestController = {

    addRequest: async (req, res) => {
        const data = await Request.create({
            yourName: req.body.yourName,
            yourAddress: req.body.yourAddress,
            phoneNumber: req.body.phoneNumber,
            workDescription: req.body.workDescription
        })
        res.json(data)
    },

    getRequests: async (req, res) => {
        const data = await Request.find().populate('workDescription')
        res.json(data)
    },

    deleteRequest: async (req, res) => {
        const data = await Request.findByIdAndDelete(req.params.id)
        res.json(data)
    }
}