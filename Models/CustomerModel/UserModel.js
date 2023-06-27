const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    googleId: String,
    name: String,
    email: {
        type: String,
        index: true,
        unique: true,
    },
    password: String,
    avatar: String,

}, {
    timestamps: true
})


const CustomerModel = mongoose.model("customer", schema);

module.exports = CustomerModel;