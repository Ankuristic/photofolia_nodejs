
const mongoose = require('mongoose');

const mongoURI= "mongodb://127.0.0.1:27017/photofolia_nodejs"



const coonectDB =async() =>{
    try {
        await mongoose.connect(mongoURI);
        console.log('cnnection successful to database');

    } catch(error){
        console.error("database connection failed");
        process.exit(0);
    }
}


module.exports= coonectDB;