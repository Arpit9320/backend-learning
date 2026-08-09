const mongoose = require("mongoose")

const noteScehma = new mongoose.Schema({

    title: String,
    description:String

})

const noteModel = mongoose.model("note", noteScehma)


module.exports = noteModel