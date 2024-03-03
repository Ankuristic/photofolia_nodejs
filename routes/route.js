const express = require('express');
// initalizing the router 
const router = express.Router();
const albumsController  = require("../controller/Albums");
console.log("Album",albumsController);



router.post("/create",albumsController.createAlbum);
// router.get('/:id',albumsController.getAlbum);
// router.post("/update",albumsController.update);
// router.post("/delete",albumsController.delete)
