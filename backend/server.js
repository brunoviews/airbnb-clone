const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const listingsRoutes = require("./routes/listings");
require("dotenv").config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api/listings", listingsRoutes); //cualquier ruta que empiece con /api/listings, se manejará con listingsRoutes

// Conectar a MongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conexión a MongoDB exitosa"))
    .catch((err) => console.error("Error al conectar con MongoDB", err));

// Endpoint inicial
app.get("/", (req, res) => {
    res.send("¡Servidor funcionando!");
});



const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto http://localhost:${PORT}/ `));


