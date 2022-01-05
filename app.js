const express = require("express");
const app = express();

const routerIndex = require("./src/routes/index.js");
const routerLogin = require("./src/routes/login.js");
const routerRegister = require("./src/routes/register.js");
const routerCarrito = require("./src/routes/carrito.js");

const routerProducts = require("./src/routes/formProduct.js");

const methodOverride = require("method-override"); //este metodo es para aplicar los metodos de HTTP (PUT, DELETE)

app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/", routerIndex);
app.use("/login", routerLogin); // VER de cambiar rutas luego de definir los accesos 07/12/2021 sprint 4
app.use("/register", routerRegister);
app.use("/cart", routerCarrito);
app.use("/products", routerProducts);

app.listen(5000, () => {
  console.log("Servidor funcionando en local host 5000");
});
