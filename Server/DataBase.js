const mongoose = require('mongoose');
require('dotenv').config();

 const url = process.env.DB


module.exports.connect = () => {
    mongoose.connect(url)
        .then(() => {
            console.log("MongoDB is connected")
        }).catch((e) => console.log(e));
}
    