const mongoose = require('mongoose');

const shippingSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    }, 
    city: {
        type: String,
        required: true
    }, 
    postalCode: {
        type: String,
        required: true
    }, 
    country: {
        type: String,
        required: true
    }
})

const paymentSchema = new mongoose.Schema({
    paymentMethod: {
        type: String,
        required: true
    }
})

const orderItemsSchema = new mongoose.Schema({
    quantityOrdered: { type: Number, required: true },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderItems: [orderItemsSchema],
    shipping: shippingSchema,
    payment: paymentSchema,
    itemPrice: {type: Number, required: true},
    shippingPrice: {type: Number, required: true},
    taxPrice: {type: Number, required: true},
    totalPrice: {type: Number, required: true},
    isPaid: {type: Boolean, default: false},
    isDelivered: {type: Boolean, default: false}
})

module.exports = mongoose.model('Order', orderSchema);