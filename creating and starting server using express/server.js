const express = require('express');

const app = express() //server creating but not start


app.get("/", (req, res)=>{ // program to make server work
    res.send("Hello World")
})

app.get("/about", (req, res)=>{  // program to make server work on about page
    res.send("About Page")
})


app.listen(3000, ()=>{          //start server
    console.log('Server is running on port 3000')
})