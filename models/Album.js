const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name:{type:String,require:true},
    image:{type:String, require:true}
})


const Album = mongoose.model('Album',albumSchema);

module.exports = Album;