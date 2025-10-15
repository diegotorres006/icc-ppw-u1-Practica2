document.getElementById("agregarFila").addEventListener("click", function() {
    const tabla = document.getElementById("tablaElementos");
    const nuevaFila = tabla.insertRow();
    const celda1 = nuevaFila.insertCell(0);
    const celda2 = nuevaFila.insertCell(1);
    celda1.textContent = "hola";
    celda2.textContent = "hola";
});

const titulo = document.getElementById("titulo");

titulo.addEventListener("mouseover", function() {
    titulo.style.color = "red";
});

titulo.addEventListener("mouseout", function() {
    titulo.style.color = "white";
});

