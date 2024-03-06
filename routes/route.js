const express = require('express');
// initalizing the router 
const router = express.Router();
const albumsController  = require("../controller/Albums");
console.log("Album",albumsController);



router.post("/create",albumsController.createAlbum);
// router.get('/:id',albumsController.getAlbum);
// router.post("/update",albumsController.update);
// router.post("/delete",albumsController.delete)


module.exports = router;


//Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.

//It is written on top of busboy for maximum efficiency. this is a third part so please remember it .

