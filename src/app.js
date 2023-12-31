const express = require("express");
const morgan = require("morgan");

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.status(200).send("Welcome !!!")
})

module.exports = app