const express = require('express');
const route = express.Router();
const orderController = require('../controller/orders');
const isAuth = require('../middleware/isAuth');

route.post('/', isAuth, orderController.CREATE_ORDER);
route.patch('/:orderId/pay', isAuth, orderController.MODIFY_ORDER);
route.get('/:orderId', isAuth, orderController.GET_ORDER);
route.get('/user/:userId', isAuth, orderController.GET_ALL_ORDERS);
module.exports = route;