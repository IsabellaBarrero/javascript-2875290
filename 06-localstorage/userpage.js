const saludo = document.querySelector('#saludo');

let nombreUsuario = JSON.parse(localStorage.getItem('user'));

saludo.innerHTML = `Hola ${nombreUsuario.userName} 🌼`