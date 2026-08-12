const express = require("express")
const postModel = require("./models/post.model")
const multer = require("multer")
const uploadFile = require("./services/storage.service")
const cors  = require("cors")


const app = express()
app.use(cors())
app.use(express.json())

const upload = multer({storage: multer.memoryStorage()}) // to store the uploaded file in memory, which memory:- in this case RAM of the server, instead of saving it to disk

app.post("/create-post", upload.single("image"), async (req, res)=>{

    console.log(req.body)
    console.log(req.file)

    const result = await uploadFile(req.file.buffer, req.file.originalname)
    console.log(result)
    console.log(result.url)
    console.log(req.body.caption)

    postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    res.status(201).json({
        message: "Post created successfully"
    })

})

app.get("/Posts-Feed", async (req, res)=>{

    const posts = await postModel.find()

    res.status(200).json({
        message: "Posts fetched successfully",
        posts:posts
    })

})




module.exports = app