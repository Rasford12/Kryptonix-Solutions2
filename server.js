const express = require("express");
const path = require("path");

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos de la carpeta "public" (front-end)
app.use(express.static(path.join(__dirname, "public")));

// Ruta de prueba
app.get("/api", (req, res) => {
  res.json({ message: "Servidor funcionando correctamente 🚀" });
});

// Configurar puerto (Render lo asigna en process.env.PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
