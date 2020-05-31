const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String, 
        required: true
    }, 
    isAdmin: {
        type: Boolean, 
        required:true,
        default: false
    },

    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }]
})

module.exports = mongoose.model('User', userSchema);