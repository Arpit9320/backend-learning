//To create the server

const express = require("express");

const app = express()
app.use(express.json()) //middleware ko use krne ke liye ye line likhi hai

const notes = []; 

app.post("/notes", (req, res)=>{        // server me data daalne ke liye aur data frontend pr aa rha hai


    const request = req.body  //getting data from the frontend
    console.log(request)
    notes.push(req.body)

    res.status(201).json({
        message: "Note created successfully"
    })


})

app.get("/notes", (req, res)=>{        // server se data fetch krne ke liye

    res.status(200).json({
        message: "Notes fetched successfully",
        notes:notes
    })

})


app.delete("/notes/:index", (req, res)=>{       //server se data delete krne ke liye

    const index = req.params.index

    delete notes[index]

    res.status(200).json({
        message: "Note Deleted Successfully"
    })

})

app.patch("/notes/:index", (req, res)=>{       // server pr data update krne ke liye
    const index = req.params.index
    const description = req.body.description
    const title = req.body.title


    notes[index].title = title
    notes[index].description = description

    res.status(200).json({
        message: "Note Updated successfully"
    })

})


module.exports = app