const mongoose = require('mongoose');
const customer = require('./models/customer.js')

let userSchema = new mongoose.Schema(
    {
        username: String,
        password: String,
        firstname: String,
        lastname: String,
        email: String,
        userid: Number,
        linemanager: String,
        role: String,
        permissions: String,
        customer,
    }
);
// Methods that can be called on this model

module.exports = mongoose.model('User', userSchema);