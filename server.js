const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Servir archivos estáticos del front-end
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de ejemplo API
app.get('/api', (req, res) => {
  res.json({ mensaje: 'Servidor funcionando en Render 🚀' });
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
