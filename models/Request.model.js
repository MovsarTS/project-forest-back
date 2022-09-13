const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    yourName: String,
    yourAddress: String,
    phoneNumber: String,
    workDescription: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Service'
    }
});

const Request = mongoose.model('Request', requestSchema);
module.exports = Request;