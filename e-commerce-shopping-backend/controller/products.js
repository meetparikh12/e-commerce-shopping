const Product = require('../model/Product');
const ErrorHandling = require('../model/ErrorHandling');
const {validationResult} = require('express-validator');
const mongoose = require('mongoose');
const User = require('../model/User');


exports.GET_ALL_PRODUCTS = async (req,res,next)=> {
    let products;

    try {
        products = await Product.find();
    }catch(err){
        return next(new ErrorHandling('Products not fetched', 500));
    } 
    if(!products || products.length === 0){
        return next(new ErrorHandling('No Products found', 404));
    }

    res.status(200).json({products: products.map((product)=> {
        return {
            _id: product._id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            quantityInStock: product.quantityInStock
        }
    })});
}

exports.GET_ALL_PRODUCTS_FOR_USER = async (req,res,next)=> {
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
    let products;

    try {
        products = await Product.find({user: req.user._id});
    }catch(err){
        return next(new ErrorHandling('Products not fetched', 500));
    } 
    if(!products || products.length === 0){
        return next(new ErrorHandling('No Products found', 404));
    }

    res.status(200).json({products: products.map((product)=> {
        return {
            _id: product._id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            quantityInStock: product.quantityInStock
        }
    })});
}

exports.GET_SINGLE_PRODUCT = async (req,res,next)=> {
    const {productId} = req.params;
    let product;
    try {
        product = await Product.findById(productId);
    } catch(err) {
        return next(new ErrorHandling('Product not fetched', 500));
    }
    if(!product) {
        return next(new ErrorHandling('Product not found', 404));
    }

    res.status(200).json({product});
}

exports.CREATE_PRODUCT = async (req,res,next)=> {
    const error = validationResult(req);
    if(!error.isEmpty()){
        let err = {};
        err.message = error.array();
        err.status = 422;
        return next(err);
    }
    let user;
    try{
        user = await User.findById(req.user._id);
    } catch(err){
        return next(new ErrorHandling('User not fetched', 500))
    } 
    if(!user){
        return next(new ErrorHandling('User not found', 404))
    }
    if(req.user.isAdmin !== true){
        return next(new ErrorHandling("Sorry, You're not authorized", 401))
    }
    const {name, brand, description, price, quantityInStock, image} = req.body;
    const product = new Product({
        name,
        brand,
        description,
        price,
        quantityInStock,
        image,
        user: req.user._id
    })

    try {

        const session = await mongoose.startSession();
        session.startTransaction();
        await product.save({session});
        await user.products.unshift(product);
        await user.save({session});
        await session.commitTransaction();

    } catch(err) {
        return next(new ErrorHandling('Product not created', 500))
    }
    res.status(201).json({message: 'Product created successfully'});
}

exports.UPDATE_PRODUCT = async (req,res,next) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        let err = {};
        err.message = error.array();
        err.status = 422;
        return next(err);
    }

    const {productId} = req.params;
    let product;
    try {
        product = await Product.findById(productId);
    } catch(err) {
        return next(new ErrorHandling('Product not fetched', 500));
    } 
    if(!product) {
        return next(new ErrorHandling('Product not found', 404));
    }

    if(req.user._id !== product.user.toString()){
        return next(new ErrorHandling('Not Authorized', 401))
    } 

    const {name, brand, description, price, quantityInStock} = req.body;
    product.name = name;
    product.brand = brand;
    product.description = description;
    product.price = price;
    product.quantityInStock = quantityInStock;

    try {
        await product.save();
    } catch(err){
        return next(new ErrorHandling('Product not updated', 500));
    } 
    res.status(200).json({message : 'Product updated successfully'});
}

exports.DELETE_PRODUCT = async (req,res,next) => {
    const {productId} = req.params;
    let user;
    try {
        user = await User.findById(req.user._id);
        console.log(user);
    } catch(err){
        return next(new ErrorHandling('User not fetched', 500));
    } 
    if(!user){
        return next(new ErrorHandling('User not found', 404));
    }
    let product;
    try {
        product = await Product.findById(productId);
        console.log(product);
    } catch(err) {
        return next(new ErrorHandling('Product not fetched', 500));
    } 
    if(!product) {
        return next(new ErrorHandling('Product not found', 404));
    }
    if(req.user._id !== product.user.toString()){
        return next(new ErrorHandling('Not Authorized', 401))
    } 
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await user.products.pull(product);
        await user.save({session});
        
        await product.remove({session});
        await session.commitTransaction();
    } catch(err){
        console.log(err);
        return next(new ErrorHandling('Product not deleted', 500));
    } 
    res.status(200).json({message: 'Product deleted successfully'});

}