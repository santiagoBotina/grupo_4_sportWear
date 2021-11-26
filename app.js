const express = require("express");
const app = express();

const routerIndex = require("./src/routes/index.js");
const routerdetalleProducto = require("./src/routes/detalleProducto.js")
const routerLogin = require ("./src/routes/login.js")
const routerRegister = require ("./src/routes/register.js")
const routerCarrito = require ("./src/routes/carrito.js")

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use("/", routerIndex)
app.use("/productdetail", routerdetalleProducto)
app.use("/login", routerLogin)
app.use("/register", routerRegister)
app.use("/carrito", routerCarrito)


app.listen(5000, () => {
  console.log("Servidor funcionando en local host 5000");
});
/*
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/productdetail", (req, res) => {
  res.sendFile(__dirname + "/views/detalle_del_producto.html");
});
*/
app.get("/cart", (req, res) => {
  res.sendFile(__dirname + "/views/carrito.html");
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/views/register.html");
  });

  app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
  });