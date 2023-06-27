const mongoose = require("mongoose");
require('dotenv').config();


// mongo url 
const MongoDb = process.env.MONGO_DB_URL


mongoose.connect(MongoDb).then(() => {
    console.log("Server Connected to mongodb")
}).catch((erro) => {
    console.log(erro)
})


module.exports = mongoose


