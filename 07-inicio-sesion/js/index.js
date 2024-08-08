const username = document.querySelector('#username');
const password = document.querySelector('#password');
const formulario = document.querySelector('#formulario');

function validarUsuario (e){
    e.preventDefault();

    let currentUser = JSON.parse(localStorage.getItem("usuario"));

    console.log(Boolean(username.value === currentUser.userN));
    console.log(Boolean(password.value === currentUser.userP));

    if(username.value === currentUser.userN && password.value === currentUser.userP){
        window.location = "./vistas/userpage.html"
    } else{

    }
    formulario.reset()

}

formulario.addEventListener("submit", validarUsuario)