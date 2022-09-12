console.log('moviesList.js success');

const body = document.querySelector('body');
const titulo = document.querySelector('fondoMoviesList');
let respuesta = confirm("Desea cambiar a modo oscuro?");

if (respuesta){
    body.style.backgroundColor = "#7f7f7f";
    body.classList.add("fondoMoviesList");
}

titulo.innerHTML = "LISTADO DE PELICULAS";
titulo.style.color = "white";
titulo.style.backgroundColor = "teal";
titulo.style.padding = "20px";









// const $ = (element) => document.querySelector(element);

// let body = $(body);
// let h1 = $("moviesListTitulo");

// let modoOscuro = prompt("¿Desea modo oscuro?");

// if (modoOscuro) {   
//     body.style.backgroundColor = "#7f7f7f";
//     body.classList.add("fondoMoviesList");
// }

// h1.innerHTML = "<h1>LISTADO DE PELÍCULASsssss</h1>";
