const express = require("express");
const cors = require("cors");
// cant integrade api without cors;

//express  = librabry (all built in functions of put, post , patch);

//mongoose = librabry to establish connection to database;
const PORT = 8080;

const app = express();
app.use(cors());

app.listen(PORT, ()=>{
    console.log("API is running on PORT: " + PORT)
})