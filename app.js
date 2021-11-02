const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(5000, () =>{
    console.log("Servidor funcionando en local host 5000");
})

/*app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html');
});  
*/

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/detalle_del_producto.html');
});