const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})



const UserCustomerModel = mongoose.model("customersdata", schema);

module.exports = UserCustomerModel