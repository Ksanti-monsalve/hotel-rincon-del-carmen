// JS login

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const usuario = JSON.parse(localStorage.getItem('usuario'));

  if (usuario && usuario.email === email && usuario.password === password) {
    localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
    document.getElementById('mensaje').textContent = '¡Inicio de sesión exitoso!';
    // Redirigir a habitaciones.html o página principal
    window.location.href = 'habitaciones.html';
  } else {
    document.getElementById('mensaje').textContent = 'Correo o contraseña incorrectos.';
  }
});