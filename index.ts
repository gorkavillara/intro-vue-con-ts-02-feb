const btnCambiar = document.querySelector("button#btn-cambiar")
const parrafo = document.querySelector("p#p-texto")!

btnCambiar?.addEventListener("click", () => {
    parrafo.innerHTML = "Hola mundo"
})