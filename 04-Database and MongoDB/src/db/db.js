const mongoose = require("mongoose")
require("dotenv").config();


async function connectDB() {
    
    try {
        await mongoose.connect(process.env.MONGO_URI)
        
        console.log("Connected to DB")
    } catch (error) {
        console.error("DB connection failed:", error.message)
        process.exit(1)
    }
    
}


module.exports = connectDB