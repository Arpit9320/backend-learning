    const ImageKit = require("@imagekit/nodejs")
    require("dotenv").config()


    const imageKit = new ImageKit({
        privateKey: process.env.ImageKit_Private_key
    })

    async function uploadFile(buffer, fileName) {

        console.log(buffer, fileName)
        
        const result = await imageKit.files.upload({
            file: buffer.toString("base64"),
            fileName: fileName
        })

        return result

    }

    module.exports = uploadFile