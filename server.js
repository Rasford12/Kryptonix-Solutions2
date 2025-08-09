// Importar dependencias
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000; // Puedes cambiarlo si quieres

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente 🚀");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
