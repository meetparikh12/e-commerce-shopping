const express = require('express');
const route = express.Router();
const productController = require('../controller/products');
const {body} = require('express-validator');
const isAuth = require('../middleware/isAuth');

route.get('/', productController.GET_ALL_PRODUCTS)
route.get('/user/:userId', isAuth, productController.GET_ALL_PRODUCTS_FOR_USER);
route.get('/:productId', productController.GET_SINGLE_PRODUCT);
route.post('/', isAuth, [
    body('name').trim().isLength({min: 6, max: 30}).withMessage('Product Name must be between 6 to 20 characters'),
    body('brand').trim().isLength({min: 3, max: 15}).withMessage('Brand Name must be between 3 to 15 characters'),
    body('price').isInt({min: 100, max: 9999}).withMessage('Price range must be between 3 to 4 digits'),
    body('description').trim().isLength({min: 10, max: 50}).withMessage('Product Description must be between 10 to 50 characters'),
    body('quantityInStock').isInt({min: 1, max: 20}).withMessage('Quantity in stock must be between 1 to 20')
] ,productController.CREATE_PRODUCT);
route.patch('/:productId', isAuth, [
    body('name').trim().isLength({min: 6, max: 30}).withMessage('Product Name must be between 6 to 20 characters'),
    body('brand').trim().isLength({min: 3, max: 15}).withMessage('Brand Name must be between 3 to 15 characters'),
    body('price').isInt({min: 100, max: 9999}).withMessage('Price range must be between 3 to 4 digits'),
    body('description').trim().isLength({min: 10, max: 50}).withMessage('Product Description must be between 10 to 50 characters'),
    body('quantityInStock').isInt({min: 0, max: 20}).withMessage('Quantity in stock must be between 0 to 20')
] ,productController.UPDATE_PRODUCT);
route.delete('/:productId', isAuth, productController.DELETE_PRODUCT);

module.exports = route;