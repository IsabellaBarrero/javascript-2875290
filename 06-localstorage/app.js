/* let nombre = 'José' 
let items = ['uno', 'dos', 'tres', 'cuatro', 'cinco']
let musica = {

        id: 3,
        nombre: 'cl9',
        artista: 'Lady Starlight',
        año: 2020,
        genero: 'Techno',
        imagen: 'https://geo-media.beatport.com/image_size/1400x1400/fa2555bc-297b-45c5-b1bb-bf9517613609.jpg',
}

function agregarStorage (key, value){
    if(typeof value === 'string'){
        localStorage.setItem(key,value)
    }else {
        localStorage.setItem( key,JSON.stringify(value))
    }
}

agregarStorage ('nombre', nombre)
agregarStorage ('carrito', items)
agregarStorage ('musica', musica)

function obtenerDatos (){
    let nombreUsuario = localStorage.getItem('nombre')
    let carritoUsuario = JSON.parse (localStorage.getItem('carrito'))
    let musicaUsuario = JSON.parse (localStorage.getItem('musica'))

    console.log(carritoUsuario, typeof carritoUsuario)

    carritoUsuario.forEach(item => {
        console.log(item)
    });
}


obtenerDatos()

function borrarItem (item){
    localStorage.removeItem(item)
}

/* borrarItem ('carrito')
borrarItem ('nombre')
borrarItem ('musica') */

/* function borrarTodo (){
    localStorage.clear()
}

borrarTodo() */ 

const formulario = document.querySelector('#formulario');
const nombreUsuario = document.querySelector('#usuario');
const contraseña = document.querySelector('#contraseña');