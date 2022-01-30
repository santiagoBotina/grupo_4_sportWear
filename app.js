const express = require("express");
const methodOverride = require("method-override"); //este metodo es para aplicar los metodos de HTTP (PUT, DELETE)
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
const bcrypt = require("bcryptjs");
const recordamemiddleware = require("./src/middlewares/recordameCookieMiddleware");

const app = express();

const routerIndex = require("./src/routes/index.js");
const routerLogin = require("./src/routes/login.js");
const routerRegister = require("./src/routes/register.js");
const routerCarrito = require("./src/routes/carrito.js");
const routerProducts = require("./src/routes/formProduct.js");

const routerUsers = require("./src/routes/usuario.js");

app.use(session({ secret: "secreto" }));
//MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(recordamemiddleware);

//EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use("/", routerIndex);
app.use("/login", routerLogin); // VER de cambiar rutas luego de definir los accesos 07/12/2021 sprint 4
app.use("/register", routerRegister);
app.use("/cart", routerCarrito);
app.use("/products", routerProducts);
app.use("/usuario", routerUsers);

app.listen(5000, () => {
  console.log("Servidor funcionando en local host 5000");
});
