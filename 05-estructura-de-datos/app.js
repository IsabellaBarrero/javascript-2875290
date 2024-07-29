const container = document.querySelector('.container')

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
});