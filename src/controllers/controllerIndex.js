//const express = require('express');

const indexController = {
    index: function(req, res){
        res.render("index")

    },
     detalleProducto: function(req, res){
            res.render("detalle_del_producto")
        }
    }
    
    


module.exports=indexController