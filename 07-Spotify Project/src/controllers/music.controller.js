const musicModel = require("../models/music.model")
const albumModel = require("../models/album.model")

const jwt = require("jsonwebtoken")
const {uploadFile} = require("../services/storage.service")

async function createMusic(req, res){

        const {title} = req.body
        const file = req.file


        const result = await uploadFile(file.buffer.toString("base64"))
        console.log("IMAGEKIT RESULT:", result);

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: req.user.id
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

}


async function createAlbum(req, res) {
        
        const {title, musics} = req.body
        

        const album = await albumModel.create({
            title,
            artist: req.user.id,
            musics: musics
        })

        res.status(201).json({
            message: "Album created successfully",
            album:{
                id: album._id,
                title: album.title,
                artist: album.artist,
                musics: album.musics
            }
        })

}

async function getAllMusic(req, res) {
    
    const musics = await musicModel.find().populate("artist", "username email")

    res.status(201).json({
        message: "Musics fetched successfully",
        musics
    })

}

async function getAllAlbum(req, res){
    const albums = await albumModel.find().select("title artist").populate("artist", "username email")

    res.status(201).json({
        message: "Albums fetched successfully",
        albums
    })
}

async function getAlbumByID(req, res,) {
    
    const albumid = req.params.albumId
    
    const album = await albumModel.findById(albumid).populate("artist", "username email").populate("musics")

    return res.status(200).json({
        message: "Album fetched successfully",
        album
    })

}

module.exports = {createMusic, createAlbum, getAllMusic, getAllAlbum, getAlbumByID}