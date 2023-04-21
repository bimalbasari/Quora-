const mongoose = require('mongoose');
require('dotenv').config();

const url ="mongodb+srv://Bimal1234:bIMAL964737@cluster0.p8by3ki.mongodb.net/quora"

module.exports.connect = () => {
    mongoose.connect(url)
        .then(() => {
            console.log("MongoDB is connected")
        }).catch((e) => console.log(e));
}
