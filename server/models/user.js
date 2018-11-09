const mongoose = require('mongoose');
// const customer = require('./customer.js')

// Connect to the database
mongoose.connect("mongodb://localhost/app_db_v1");

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
        permissions: Boolean,
    }
);

const User = mongoose.model('User', userSchema);
// Create new User

const data = new User(
    {
        username: "Mark.Illingworth@vivaenergy.com.au",
        password: "Bombers",
        firstname: "Mark",
        lastname: "Illingworth",
        email: "mark.illingworth@vivaenergy.com.au",
        userid: 235163,
        linemanager: "David Fox",
        role: "user",
        permissions: true,
    }, 
    {
        username: "david.fox@vivaenergy.com.au",
        password: "StKilda",
        firstname: "David",
        lastname: "Fox",
        email: "david.fox@vivaenergy.com.au",
        userid: 123456,
        linemanager: "Denis Utizberea",
        role: "approver",
        permissions: true,
    }
);

data.save(function(err){
    if(err){
        console.log(err);
    } else {
        alert("Success! New Users added to the database")
    }
});
