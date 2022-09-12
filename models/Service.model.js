const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    image: String,
    name: String,
    description: String
});

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;