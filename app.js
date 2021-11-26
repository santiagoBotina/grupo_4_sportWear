const express = require("express");
const app = express();
const router = express.Router();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.listen(5000, () => {
  console.log("Servidor funcionando en local host 5000");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/productdetail", (req, res) => {
  res.sendFile(__dirname + "/views/detalle_del_producto.html");
});

app.get("/cart", (req, res) => {
  res.sendFile(__dirname + "/views/carrito.html");
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/views/register.html");
  });

  app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
  });