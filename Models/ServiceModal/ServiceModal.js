const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    adminStatus: String,
    block: Boolean,
}, {
    timestamps: true
})



const ServiceModal = mongoose.model("services", schema);

module.exports = ServiceModal