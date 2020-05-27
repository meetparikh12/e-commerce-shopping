const express = require('express');
const route = express.Router();
const productController = require('../controller/products');

route.get('/', productController.GET_ALL_PRODUCTS);
route.post('/', productController.CREATE_PRODUCT);

module.exports = route;