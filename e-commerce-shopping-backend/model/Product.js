const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    }, 

    brand: {
        type: String,
        required: true
    }, 

    description: {
        type: String,
        required: true
    }, 

    price: {
        type: Number,
        required: true,
        default: 0
    }, 

    quantityInStock: {
        type: Number,
        required: true,
        default: 0
    }, 

    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema);