const ErrorHandling = require('../model/ErrorHandling');
const jwt = require('jsonwebtoken')
const {secretKey} = require('../config/keys');

module.exports = async (req,res,next)=> {
    
    let header = req.get('Authorization');
    if(!header) {
        return next(new ErrorHandling('Not Authorized', 401));
    } 
    const token = header.split(" ")[1];
    let decoded_token;
    try {
        decoded_token = jwt.verify(token, secretKey);
    } catch(err) {
        return next(new ErrorHandling('Not Authorized', 401))
    }
    if(!decoded_token){
        return next(new ErrorHandling('Not Authorized', 401))
    }
    
    req.user = {
        _id: decoded_token.userId,
        isAdmin: decoded_token.isAdmin
    }

    next();
}