const musicModel = require("../models/music.model")
const jwt = require("jsonwebtoken")
const {uploadFile} = require("../services/storage.service")

async function createMusic(req, res){

    const token  = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "Please Login to continue"
        })
    }

    
    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.role !== "artist"){
            return res.status(403).json({
                message: "You don't have access to create music"
            })
        }

        const {title} = req.body
        const file = req.file


        const result = await uploadFile(file.buffer.toString("base64"))
        console.log("IMAGEKIT RESULT:", result);

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: decoded.id
        })

        res.status(200).json({
            message: "Music uploaded Successfully",
            music:{
                id: music._id,
                url: music.uri,
                title: music.title,
                artist: music.artist
            }
        })
    } catch (error) {

        console.log(error)

        res.status(401).json({
            message: "Unauthorized"
        })
    }

    
}

module.exports = {createMusic}