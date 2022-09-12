const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    yourName: String,
    yourAddress: String,
    phoneNumber: Number,
    workDescription: String
});

const Request = mongoose.model('Request', requestSchema);
module.exports = Request;