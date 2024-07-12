const fondo = document.querySelector('.container');
const sol = document.querySelector('.sol');
const nube1 = document.querySelector('.uno');
const nube2 = document.querySelector('.dos');
const nube3 = document.querySelector('.tres')


function noche (){
    fondo.style.backgroundColor = 'blue'
    sol.style.backgroundColor = 'white'
}






fondo.addEventListener('click', noche);
