// Definimos todo para nuestro server http

const express = require("express");
const { createServer } = require("http");

const path = require("path");
const cookieParser = require("cookie-parser");

// importamos el server de socket.io
const realTimeServer = require("./realTimeServer");

const app = express();
const httpServer = createServer(app);

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

// usamos el parser de cookies
app.use(cookieParser());

// Routes
app.use(require("./routes"));

// Public
app.use(express.static(path.join(__dirname, "public")));

// levantar server
httpServer.listen(app.get("port"), () => {
    console.log(`server corriendo en ${app.get("port")}`);
});

// llamada al server de socket.io y le pasamos el server de http
realTimeServer(httpServer);