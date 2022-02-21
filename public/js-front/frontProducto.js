//console.log("Estoy en un archivo dentro de public/js-front")

//const express = require("express");

window.addEventListener('load', function() {

   let nombreProducto = document.querySelector(".input-text");
   
   nombreProducto.addEventListener("click", function(){
        nombreProducto.style.backgroundColor = "red",
            alert("Tienes que completar en nombre del Producto")
        nombreProducto.addEventListener("blur", function() {
            if (nombreProducto >= 8) {
                nombreProducto.style.backgroundColor = "white"
            }
        })

        /*
        let descripcionCarateres = document.getElementById("descripcion")
   
   descripcionCarateres.addEventListener("click", function(){
    descripcionCarateres.style.backgroundColor = "red",
            alert("Tienes que completar en nombre del Producto")
            descripcionCarateres.addEventListener("blur", function() {
            if (nombreProducto >= 20) {
                descripcionCarateres.style.backgroundColor = "white"
            }
        })
        */

        //let archivoImagen = document.getElementById("productImage")
   }

        
               
   )

   

})
