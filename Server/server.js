const express = require("express");
const cors = require("cors");
const path = require("path")
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const db = require("./db");
const router = require("./routes")
require('dotenv').config()

// Mongodb Connection

db.connect()

// Middle Wire

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));


// cors 
app.use((req, res, next) => {
    req.headers("Acces-control-Allow-Origin", "*")
    req.headers("Acces-control-Allow-Headers", "*")
    next()
});


// Static
app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use("/uploads", express.static(path.join(__dirname, "/../fronted/build")));
app.use(cors());

// routes

app.use("/api",router)




app.get("*", (req, res) => {
    try {
        res.sendFile(path.join(`${__dirname}/../fronted/build`));
    } catch (e) {
        res.send("Oops! unexpected eroor")
    }
})


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
