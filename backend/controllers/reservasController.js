const { readDB, writeDB } = require('../utils/fileManager');

function crearReserva(req, res) {
  const { usuarioId, habitacionId, fecha } = req.body;
  const db = readDB();

  db.reservas.push({
    id: Date.now(),
    usuarioId,
    habitacionId,
    fecha
  });

  writeDB(db);
  res.status(201).json({ mensaje: 'Reserva creada correctamente' });
}

function listarReservas(req, res) {
  const db = readDB();
  const reservasConNombre = db.reservas.map(r => {
    const habitacion = db.habitaciones.find(h => h.id === r.habitacionId);
    return { ...r, habitacionNombre: habitacion ? habitacion.nombre : 'Habitación desconocida' };
  });
  res.json({ reservas: reservasConNombre });
}

module.exports = { crearReserva, listarReservas };
