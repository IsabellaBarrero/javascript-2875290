const listaColores = document.querySelector('#listaColores');
const btnCrear = document.querySelector('#btnCrear');
const main = document.querySelector('#main');
const btnBorrar = document.querySelector('#btnBorrar');
let n = 1;

function crear (){
    
    const ball = document.createElement('div');
    const equis = document.createElement('button');

    equis.innerText = 'x';
    equis.classList.add('equis');

    ball.classList.add('pelotica');
    ball.style.backgroundColor = listaColores.value;
    ball.innerText = n++;
/*     ball.innerHTML = equis; */
    ball.appendChild(equis)

    main.appendChild(ball);
}

function borrarPantalla (){
    main.innerHTML = '';
    n=1;
}
function borrarElemento (e){ 
    if(e.target.innerText == 'x'){
        main.removeChild(e.target.parentElement);
    }
}
function completarTarea (e){ 
    e.target.style.textDecoration = 'line-through';
}

btnCrear.addEventListener('click',crear)
btnBorrar.addEventListener('click',borrarPantalla)
main.addEventListener('click',borrarElemento)
main.addEventListener('click',completarTarea)