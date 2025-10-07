const { readDB, writeDB } = require('../utils/fileManager');

function registrarUsuario(req, res) {
  const { nombre, email, password } = req.body;
  const db = readDB();

  if (db.usuarios.find(u => u.email === email)) {
    return res.status(400).json({ mensaje: 'El usuario ya existe' });
  }

  db.usuarios.push({ id: Date.now(), nombre, email, password });
  writeDB(db);
  res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
}

function loginUsuario(req, res) {
  const { email, password } = req.body;
  const db = readDB();
  const usuario = db.usuarios.find(u => u.email === email && u.password === password);

  if (!usuario) {
    return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
  }

  res.json({ mensaje: 'Login exitoso', usuario: { id: usuario.id, nombre: usuario.nombre, email: usuario.email } });
}

module.exports = { registrarUsuario, loginUsuario };
