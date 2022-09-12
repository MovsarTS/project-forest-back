const mongoose = require('mongoose');

const workerSchema = mongoose.Schema({
    image: String,
    name: String,
    post: String,
    description: String,
});

const Worker = mongoose.model('Worker', workerSchema);
module.exports = Worker;