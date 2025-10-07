const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuarios');
const reservasRoutes = require('./routes/reservas');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/reservas', reservasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
