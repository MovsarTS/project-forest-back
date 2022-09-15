const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    countInBasket:{
        type: Number,
        default: 1
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;