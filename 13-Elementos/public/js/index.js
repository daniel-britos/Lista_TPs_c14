console.log('index.js success');
const $ = (element) => document.querySelector(element);

let main = $(".container");
let h2 = $("h2.subtitulo");
let a = $("a");
let p = document.querySelectorAll('p');
let body = $("body");

let nombre = prompt("Digame su nombre");


if (!nombre) {
    h2.innerHTML = "Invitado";
}else{
    h2.innerHTML += nombre;
}

h2.style.textTransform = "uppercase";
a.style.color = "#E51B3E";


let fondo = confirm("¿Desea colocar un fondo de pantalla?")
if (fondo) {
    body.classList.add('fondo')
}else {
    body.classList.remove('fondo')
}

let coco = "locura"
for (let i = 0; i < p.length; i++) {
    if (i%2 === 0) {
        p[i].classList.add("descatadoPar");
    }else {
        p[i].classList.add("destacadoImpar");
    }
    
}

main.style.display = "block";



