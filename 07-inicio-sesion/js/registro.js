const username = document.querySelector('#username');
const password = document.querySelector('#password');
const formulario = document.querySelector('#formulario');

function registrarUsuario(e){
    e.preventDefault();
    let usuario = {
        userN: username.value,
        userP: password.value,

    }

    localStorage.setItem("usuario", JSON.stringify(usuario));   
    formulario.reset()
}

formulario.addEventListener("submit",registrarUsuario)