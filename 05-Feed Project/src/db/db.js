const mongoose = require("mongoose")
require("dotenv").config()


const connectDB = async ()=>{

    try {
        await mongoose.connect(process.env.Mongo_URI)

        console.log("Connected to DB")
    } catch (error) {

        console.error("DB Connection failed:", error.message);
        process.exit(1)
        
    }

}


module.exports = connectDB