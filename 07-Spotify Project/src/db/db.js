const mongoose = require("mongoose")

const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.Mongo_URI)

        console.log("Connected to DB")
    } catch (error) {
        console.log("Error while connecting to DB", error)
    }
}


module.exports = connectDB