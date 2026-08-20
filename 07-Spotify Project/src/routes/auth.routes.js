const express = require("express")
const authControllers = require("../controllers/auth.controller")


const router = express.Router()


router.post("/register", authControllers.registerUser)

router.post("/login", authControllers.loginUser)

router.post("/logout", authControllers.logOutUser)



module.exports = router