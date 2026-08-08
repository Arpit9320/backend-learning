//To create the server

const express = require("express");

const app = express()
app.use(express.json()) //middleware ko use krne ke liye ye line likhi hai

app.post("/notes", (req, res)=>{


    const request = req.body  //getting data from the server
    console.log(request)


})



module.exports = app