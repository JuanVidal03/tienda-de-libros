const contenedorPrincipal = document.getElementById("modal-principal-container");
const modalContainer = document.getElementById("modal-contenedor");
const abrirModal = document.getElementById("carrito-btn");
const cerrarModal = document.getElementById("carritoCerrar");

abrirModal.addEventListener("click", () =>{
    contenedorPrincipal.style.display = "block";
});

cerrarModal.addEventListener("click", () =>{
    contenedorPrincipal.style.display = "none";
})



window.addEventListener("click", (e) =>{
    if(e.target == modalContainer){
        contenedorPrincipal.style.display = "none";
    }
});