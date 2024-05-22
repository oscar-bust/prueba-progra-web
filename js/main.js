
var modal = document.getElementById("miModal");


function mostrarModalPrimeraVez() {

  var modalMostrado = sessionStorage.getItem("modalMostrado");
  if (!modalMostrado || modalMostrado !== "true") {
    modal.style.display = "block";
  
    sessionStorage.setItem("modalMostrado", "true");
  }
}



window.onload = mostrarModalPrimeraVez;


var span = document.getElementsByClassName("cerrar")[0];


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');

botonesAgregarCarrito.forEach(boton => {
  boton.addEventListener('click', () => {
    const card = boton.closest('.card'); 
    const nombreProducto = card.querySelector('.card-title').textContent;
    const precioProducto = parseInt(card.querySelector('.card-text').textContent.slice(1)); 

    agregarAlCarrito(nombreProducto, precioProducto);
  });
});





