window.onload = function () {
  let fondo = document.querySelector("body");
  let container = document.querySelector(".container");
  let subtitulo = document.querySelector(".subtitulo");
  let destacado = document.querySelectorAll("p");
  let enlace = document.querySelector("a");

  subtitulo.innerHTML += "INVITADO";

  subtitulo.style.textTransform = "uppercase";

  fondo.classList.add("fondo");
  enlace.style.color = "#E51B3E";

  for (let i = 0; i < destacado.length; i++) {
    if (i % 2 == 0) {
      destacado[i].classList.add("destacadoPar");
    } else {
      destacado[i].classList.add("destacadoImpar");
    }
  }

  container.style.display = "block";
};
