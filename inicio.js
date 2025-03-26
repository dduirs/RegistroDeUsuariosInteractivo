function mostrarNombre(){
    const nombreUser = document.getElementById("nombreUser");
    nombreUser.innerText = sessionStorage.getItem("nombre");
}
document.addEventListener("DOMContentLoaded", () => {
    mostrarNombre();
})
