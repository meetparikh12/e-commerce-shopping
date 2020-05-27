const express = require('express');
const route = express.Router();
const productController = require('../controller/products');

route.get('/', productController.GET_ALL_PRODUCTS);
route.get('/:productId', productController.GET_SINGLE_PRODUCT);
route.post('/', productController.CREATE_PRODUCT);
route.patch('/:productId', productController.UPDATE_PRODUCT);
route.delete('/:productId', productController.DELETE_PRODUCT);

module.exports = route;