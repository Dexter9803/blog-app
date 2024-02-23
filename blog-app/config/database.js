const mongoose = require('mongoose')
require("dotenv").config();

const connectwithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(console.log("DB connected successfully"))
    .catch(err => {
        console.log("DB facing connection issues")
        console.log(err)
        process.exit(1)
    })
}

module.exports = connectwithDb;