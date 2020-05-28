const express = require('express');
const route = express.Router();
const userController = require('../controller/users');

route.post('/register', userController.REGISTER_USER);
route.post('/login', userController.LOGIN_USER);

module.exports = route;