var btnCambiar = document.querySelector("button#btn-cambiar");
var parrafo = document.querySelector("p#p-texto");
btnCambiar === null || btnCambiar === void 0 ? void 0 : btnCambiar.addEventListener("click", function () {
    parrafo.innerHTML = "Hola mundo";
});
