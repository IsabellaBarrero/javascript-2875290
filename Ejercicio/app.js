/* const fondo = document.querySelector('.container');
const sol = document.querySelector('.sol');
const nube1 = document.querySelector('.uno');
const nube2 = document.querySelector('.dos');
const nube3 = document.querySelector('.tres')


function noche (){
    fondo.style.backgroundColor = 'blue'
    sol.style.backgroundColor = 'white'
}


fondo.addEventListener('click', noche); */
const fondo = document.querySelector('.container');
const solGuia = document.querySelector('.guia');
const sol = document.querySelector('.sol');
const nube1 = document.querySelector('.uno');
const nube2 = document.querySelector('.dos');
const nube3 = document.querySelector('.tres')



function noche (){
    fondo.style.backgroundColor = 'blue'
    sol.style.backgroundColor = 'white'
}

function moverSol(){
    sol.style.animation = "move 6s linear";
    solGuia.style.animation = "move 6s linear";
}

function moverNube(){
    nube1.style.animation = "nube1 8.5s linear";
    nube2.style.animation = "nube1 8.5s linear";
    nube3.style.animation = "nube1 8.5s linear";
}




fondo.addEventListener('click', noche);
solGuia.addEventListener('click', moverSol);
nube1.addEventListener('click', moverNube);
