const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name:{type:String,require:true},
    // image:{type:String, require:true}
    image: {
        data: Buffer, // Binary data of the image
        contentType: String, // MIME type of the image (e.g., 'image/jpeg', 'image/png')
    },
})


const Album = mongoose.model('Album',albumSchema);
console.log("my name is bhagwan", Album)

module.exports = Album;