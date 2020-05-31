const express = require('express');
const route = express.Router();
const orderController = require('../controller/orders');

route.post('/', orderController.CREATE_ORDER);
route.get('/:orderId', orderController.GET_ORDER);
route.get('/', orderController.GET_ALL_ORDERS);
module.exports = route;