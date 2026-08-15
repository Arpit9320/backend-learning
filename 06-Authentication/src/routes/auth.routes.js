const express = require("express");
const authControllers = require("../controllers/auth.controller")


const router = express.Router()

router.post("/register", authControllers.registerUser)

router.get("/test", (req, res)=>{
    console.log("cookies:", req.cookies)

    res.json({
        message: "Test route",
        cookies: req.cookies
    })
})


module.exports = router;