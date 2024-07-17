const leonImg = document.querySelector('.leon');
const matildaImg = document.querySelector('.matilda');
const plantaImg = document.querySelector('.planta');
const textoLeon = document.querySelector('.texto1');
const textoTp = document.querySelector('.texto2');
const armaImg = document.querySelector('.arma');
const boton = document.querySelector('.btn');


function play (){
    leonImg.style.animation = "moverleon 4.5s linear";
    matildaImg.style.animation = "movermatilda 4s linear";
    plantaImg.style.animation = "moverplanta 4s linear";
    textoLeon.style.animation = "movertexto1 2s linear 0s, rotartexto1 2.5s linear 3s";
    textoTp.style.animation = "movertexto2 3s linear";
    armaImg.style.animation = "moverarma 4s linear";
    
}



boton.addEventListener('click', play)