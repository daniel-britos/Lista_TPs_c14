window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  /*validaciones del formulario*/

  let form = document.querySelector("form");
  let inputtitulo = document.querySelector("#title");
  let inputlength = document.querySelector("#length");
  let inputawards = document.querySelector("#awards");
  let inputrating = document.querySelector("#rating");
  let inputgenre_id = document.querySelector("#genre_id");
  let inputrelease_date = document.querySelector("#release_date");

  inputtitulo.focus();
  let errores = {};

  inputtitulo.addEventListener("blur", function (event) {
    if (!event.target.value) {
      inputtitulo.classList.add("is-invalid");
      document.querySelector(".error-title").classList.add("is-invalid");
      document.querySelector(".error-title").innerHTML =
        "tiene que ingresar un titulo";
    } else {
      document.querySelector(".error-title").classList.remove("is-invalid");
      document.querySelector(".error-title").innerHTML = "";
      inputtitulo.classList.remove("is-invalid");
      inputtitulo.classList.add("is-valid");
    }
  });
  inputrating.addEventListener("blur", function (event) {
    if (!event.target.value) {
      inputrating.classList.add("is-invalid");
      document.querySelector(".error-rating").classList.add("is-invalid");
      document.querySelector(".error-rating").innerHTML =
        "tiene que ingresar un rating";
    } else if (event.target.value > 10 || event.target.value < 0) {
      inputrating.classList.add("is-invalid");
      document.querySelector(".error-rating").classList.add("is-invalid");
      document.querySelector(".error-rating").innerHTML =
        "el rating tiene que estar entre 1 y 10";
    } else {
      document.querySelector(".error-rating").classList.remove("is-invalid");
      document.querySelector(".error-rating").innerHTML = "";
      inputrating.classList.remove("is-invalid");
      inputrating.classList.add("is-valid");
    }
  });
  inputawards.addEventListener("blur", function (event) {
    if (!event.target.value) {
      inputawards.classList.add("is-invalid");
      document.querySelector(".error-awards").classList.add("is-invalid");
      document.querySelector(".error-awards").innerHTML =
        "tiene que ingresar un valor de awards";
    } else if (event.target.value > 10 || event.target.value < 0) {
      inputawards.classList.add("is-invalid");
      document.querySelector(".error-awards").classList.add("is-invalid");
      document.querySelector(".error-awards").innerHTML =
        "los awards tienen que estar entre 1 y 10";
    } else {
      document.querySelector(".error-awards").classList.remove("is-invalid");
      document.querySelector(".error-awards").innerHTML = "";
      inputawards.classList.remove("is-invalid");
      inputawards.classList.add("is-valid");
    }
  });
  inputrelease_date.addEventListener("blur", function (event) {
    if (!event.target.value) {
      inputrelease_date.classList.add("is-invalid");
      document.querySelector(".error-release_date").classList.add("is-invalid");
      document.querySelector(".error-release_date").innerHTML =
        "tiene que ingresar una fecha";
    } else {
      document
        .querySelector(".error-release_date")
        .classList.remove("is-invalid");
      document.querySelector(".error-release_date").innerHTML = "";
      inputrelease_date.classList.remove("is-invalid");
      inputrelease_date.classList.add("is-valid");
    }
  });
  inputlength.addEventListener("blur", function (event) {
    if (!event.target.value) {
      inputlength.classList.add("is-invalid");
      document.querySelector(".error-length").classList.add("is-invalid");
      document.querySelector(".error-length").innerHTML = "valor de duracion";
    } else if (event.target.value > 360 || event.target.value < 60) {
      inputlength.classList.add("is-invalid");
      document.querySelector(".error-length").classList.add("is-invalid");
      document.querySelector(".error-length").innerHTML =
        "debe durar entre 60 min y 360 min";
    } else {
      document.querySelector(".error-length").classList.remove("is-invalid");
      document.querySelector(".error-length").innerHTML = "";
      inputlength.classList.remove("is-invalid");
      inputlength.classList.add("is-valid");
    }
  });
  inputgenre_id.addEventListener("blur", function (event) {
    if (!event.target.value) {
      inputgenre_id.classList.add("is-invalid");
      document.querySelector(".error-genre").classList.add("is-invalid");
      document.querySelector(".error-genre").innerHTML =
        "tiene que ingresar un valor de genero";
    } else {
      document.querySelector(".error-genre").classList.remove("is-invalid");
      document.querySelector(".error-genre").innerHTML = "";
      inputgenre_id.classList.remove("is-invalid");
      inputgenre_id.classList.add("is-valid");
    }
  });

  form.addEventListener("submit", function (event) {
    let error = 0;

    event.preventDefault();

    for (let i = 0; i < form.elements.length - 1; i++) {
      if (!form.elements[i].value) {
        error = 1;
        form.elements[i].classList.add("is-invalid");
      }
    }

    for (let i = 0; i < form.elements.length; i++) {
      if (form.elements[i].classList.contains("is-invalid")) {
        error = 1;
      }
    }

    if (!error) {
      alert("La pelicula se guardo exitosamente");
      document.querySelector(".errores").innerHTML = "";
      document.querySelector(".errores").classList.remove("alert-warning");
      event.target.submit();
    } else {
      document.querySelector(".errores").innerHTML = "aun tiene errores";
      document.querySelector(".errores").classList.add("alert-warning");
    }
  });
};
