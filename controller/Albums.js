const express = require('express');

// const mongoose = require('mongoose');
const Album = require('../models/Album.js')

const createAlbum =async (req,res) => {

    try {
        console.log('Album Model:', Album);
        const {name, image} =req.body;
        // create a new album instance

        const newAlbum = new Album({
            name,
            image
        });
        await newAlbum.save();
        console.log('Album Model:', Album);

        res.status(201).json({message:'Album created successfuly',album: newAlbum})
    }
    catch(error){
        console.error('Error creating album:',error);
        res.status(500).json({error:'Internal Server Error'});
}
};

module.exports = {
    createAlbum,
};