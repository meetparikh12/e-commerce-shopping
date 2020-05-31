const mongoose = require('mongoose');
const Order = require('../model/Order');
const ErrorHandling = require('../model/ErrorHandling');
const Product = require('../model/Product');

exports.CREATE_ORDER = async (req,res,next) => {
    const {shipping, payment, orderItems, itemPrice, shippingPrice, totalPrice, taxPrice} = req.body;
    let productId = await orderItems.map((item)=> item.product);
    let product;

    for(let i=0; i<productId.length; i++){
        try {
            console.log(productId[i]);
            product = await Product.findOne({_id: productId[i]}) 
            console.log(product);
            
        } catch(err){
            console.log(err);
            return next(new ErrorHandling('Not a valid product ID', 500))
        } 
        if(!product){
            return next(new ErrorHandling('Product not found', 404))
        }
    }

    const order = new Order({
        shipping, payment, orderItems, itemPrice, shippingPrice, totalPrice, taxPrice
    })
    try {
        await order.save();
    } catch(err){
        console.log(err);
        return next(new ErrorHandling('Order not created', 500))
    } 
    res.status(201).json({order});
}   

exports.GET_ORDER = async (req,res,next)=> {
    const {orderId} = req.params;
    let order;
    try {
        order = await Order.findById(orderId)
    } catch(err){
        return next(new ErrorHandling('Order not fetched', 500))
    }
    if(!order){
        return next(new ErrorHandling('Order not found', 404))
    }
    res.status(200).json({order});
}