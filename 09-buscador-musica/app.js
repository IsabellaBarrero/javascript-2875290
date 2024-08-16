const container = document.querySelector(".container");
const buscador = document.querySelector("#buscador");
const textoBusqueda = document.querySelector("#textoBusqueda");
const listaStatus = document.querySelector("#listaStatus");

function mostrarResults(result){

    result.forEach(element => {

        const card = document.createElement('div')
        card.classList.add("card");
        container.appendChild(card)
    
        card.innerHTML = ` 
            <div class="card">
                <img src="${element.imagen}" alt="Imagen de la canción" class="card-image">
                <div class="card-content">
                    <h2 class="card-title">${element.nombre}</h2>
                    <p class="card-artist">${element.artista}</p>
                    <p class="card-year">${element.año}</p>
                    <p class="card-genre">${element.genero}</p>
                </div>
            </div>
          `
        container.appendChild(card)
      });
}

function filtrar(e){
    
    e.preventDefault();

    container.innerHTML = "";

    let filtro = musica;

    if(listaStatus.value !== "todo"){
        console.log(musica[0].genero)
        filtro = musica.filter(musica => {
            musica.genero.forEach(genero => {
                return genero.toLowerCase() === listaStatus.value.toLowerCase
            })
        });
    }else{
      if(textoBusqueda.value){
        filtro = filtro.filter(musica => musica.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()));
        mostrarResults(filtro) 
    }else{
        mostrarResults(musica)
      }
  
      textoBusqueda.value = ""
}
}
mostrarResults(musica)
buscador.addEventListener('submit', filtrar)

  
/* 
musica.forEach(element => {
let card = document.createElement('div');

card.innerHTML = `
<div class="container">
    <div class="card">
        <img src="${element.imagen}" alt="Imagen de la canción" class="card-image">
        <div class="card-content">
            <h2 class="card-title">${element.nombre}</h2>
            <p class="card-artist">${element.artista}</p>
            <p class="card-year">${element.año}</p>
            <p class="card-genre">${element.genero}</p>
        </div>
    </div>
</div>
` 
container.appendChild(card);
}); */