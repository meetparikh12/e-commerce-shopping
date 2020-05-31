const mongoose = require('mongoose');
const Order = require('../model/Order');
const ErrorHandling = require('../model/ErrorHandling');
const Product = require('../model/Product');
const User = require('../model/User');

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
    let user;
    try {
        user = await User.findById(req.user._id);
    } catch(err){
        return next(new ErrorHandling('User not fetched', 500))
    }
    if(!user){
        return next(new ErrorHandling('User not found', 404))
    }
    const order = new Order({
        shipping, payment, orderItems, itemPrice, shippingPrice, totalPrice, taxPrice, user: req.user._id
    })
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await order.save({session});
        await user.orders.unshift(order);
        await user.save({session})
        await session.commitTransaction();

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
    if(order.user.toString() !== req.user._id){
        return next(new ErrorHandling('Not Authorized', 401))
    }
    res.status(200).json({order});
}

exports.GET_ALL_ORDERS = async (req,res,next)=> {
    const {userId} = req.params;
    let user;
    try {
        user = await User.findById(userId);
    } catch (err) {
        return next(new ErrorHandling('User not fetched', 500))
    }
    if (!user) {
        return next(new ErrorHandling('User not found', 404))
    }
    if(user._id.toString() !== req.user._id){  
        return next(new ErrorHandling('Not Authorized', 401));
    }
    let orders;
    try {
        orders = await Order.find({user: req.user._id})
    } catch(err){
        return next(new ErrorHandling('Orders not fetched', 500));
    } 
    if(!orders || orders.length === 0){
        return next(new ErrorHandling('No orders found in your list', 404));
    }
    // if (orders.user.toString() !== req.user._id) {
    //     return next(new ErrorHandling('Not Authorized', 401))
    // }
    res.status(200).json({orders})
}