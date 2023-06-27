const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    memberid: Number,
    address: String,
    password: String,
    landmark: String,
    email: String,
    location: String,
    mobileNo: Number,
    telNo: Number,
    officeNo: Number,
    alternateNo: Number,
    aadharno: Number,
    occupation: String,
    designation: String,
    houseStatus: String,
    dob: Date,
    doa: Date,
    image: String,
    spouseDetails: {},
    payment: Number,
    discountAmt: Number,
    recievedAmt: Number,
    balanceAmt: Number,
    paymentMethod: String,
    freeServices: []
}, {
    timestamps: true
})

const CustomerModel = mongoose.model("our-customers", schema);

module.exports = CustomerModel;

