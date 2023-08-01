var diapositivas;
var puntos;
var indiceActual = 0;

// Función para cambiar la diapositiva actual
function cambiarDiapositiva(indice) {
  diapositivas[indiceActual].classList.remove("activa");
  puntos[indiceActual].classList.remove("activo");
  diapositivas[indice].classList.add("activa");
  puntos[indice].classList.add("activo");
  indiceActual = indice;
}

// Función para alternar las diapositivas automáticamente
function alternarDiapositivas() {
  setInterval(function() {
    var siguiente = (indiceActual + 1) % diapositivas.length;
    cambiarDiapositiva(siguiente);
  }, 7000); 
}

// Lógica para obtener las diapositivas y los puntos
diapositivas = Array.from(document.getElementsByClassName("diapositiva"));
puntos = Array.from(document.getElementsByClassName("punto"));

// Iniciar el slideshow
alternarDiapositivas();

// Mostrar información al llevar el mouse sobre las imágenes
diapositivas.forEach(function(diapositiva, indice) {
  diapositiva.addEventListener("mouseover", function() {
    mostrarInformacion(diapositiva);
  });

  diapositiva.addEventListener("mouseout", function() {
    ocultarInformacion(diapositiva);
  });
});

function mostrarInformacion(diapositiva) {
  var info = diapositiva.querySelector(".info");
  var botonMasInfo = diapositiva.querySelector(".btn-info");
  info.style.display = "block";
  botonMasInfo.style.display = "block";
}

function ocultarInformacion(diapositiva) {
  var info = diapositiva.querySelector(".info");
  var botonMasInfo = diapositiva.querySelector(".btn-info");
  info.style.display = "none";
  botonMasInfo.style.display = "none";
}
