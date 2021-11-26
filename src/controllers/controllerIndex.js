const express = require('express');
const router = express.Router();

const indexController = {
    index: function(req, res){
        res.render("index")
    }
}