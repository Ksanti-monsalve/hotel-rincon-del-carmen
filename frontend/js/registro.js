document.getElementById('registroForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!nombre || !email || !password) {
    document.getElementById('mensaje').textContent = 'Todos los campos son obligatorios.';
    return;
  }

  // Guardar usuario en localStorage
  const usuario = { nombre, email, password };
  localStorage.setItem('usuario', JSON.stringify(usuario));

  document.getElementById('mensaje').textContent = '¡Registro exitoso! Ahora puedes iniciar sesión.';
  document.getElementById('registroForm').reset();
});