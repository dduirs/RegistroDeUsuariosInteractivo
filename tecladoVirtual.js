const tecladoVirtual = document.getElementById("tecladoVirtual");
const keysArray = [];
const keyValues = "1234567890QWERTYUIOPASDFGHJKLZXCVBNM@._-";

for (letter in keyValues) {
    keysArray.push(keyValues[letter]);
}

function cargarTecladoVirtual() {
    var keys = "";
    for (let key in keysArray) {
        keys += '<span id="' + keysArray[key] + 'Key">' + keysArray[key] + '</span>';
    }
    keys += '<span id="BackspaceKey">←</span>'; // add Backspace key
    tecladoVirtual.innerHTML = keys;
    // var keyListener = document.getElementById(keysArray[key]);
}

const formEnviarBtn = document.getElementById("enviar");
const formResetBtn = document.getElementById("resetForm");
// const formInputs = document.querySelector("#inputs").getElementsByTagName("input");

var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var password = document.getElementById("contrasena");
var password2 = document.getElementById("contrasena2");


function mostrarTecladoListeners() {   
    nombre.addEventListener('focus', () => {
        mostrarTecladoEscondeEnviar();
    })
    nombre.addEventListener('focusout', () => {
        escondeTecladoMostrarEnviar();
    })
    correo.addEventListener('focus', () => {
        mostrarTecladoEscondeEnviar();
    })
    correo.addEventListener('focusout', () => {
        escondeTecladoMostrarEnviar();
    })

    password.addEventListener('focus', () => {
        mostrarTecladoEscondeEnviar();
    })
    password.addEventListener('focusout', () => {
        escondeTecladoMostrarEnviar();
    })
    password2.addEventListener('focus', () => {
        mostrarTecladoEscondeEnviar();
    })
    password2.addEventListener('focusout', () => {
        escondeTecladoMostrarEnviar();
    })

    tecladoVirtual.addEventListener('focusout', () => {
        escondeTecladoMostrarEnviar();
    })
    // console.log(formEnviarBtn);
    // console.log(formResetBtn);
}

function mostrarTecladoEscondeEnviar() {
    formEnviarBtn.style.zIndex = 0;
    formResetBtn.style.zIndex = 0;
    formEnviarBtn.style.display = "none";
    formResetBtn.style.display = "none";
    tecladoVirtual.style.display = "flex";
    // tecladoVirtual.scrollIntoView(true);
    tecladoVirtual.scrollIntoView({overflow: "scroll", behavior: "smooth", block: "end", inline: "nearest" });    
}

function escondeTecladoMostrarEnviar() {
    formEnviarBtn.style.zIndex = 2;
    formResetBtn.style.zIndex = 2;
    formEnviarBtn.style.display = "initial";
    formResetBtn.style.display = "initial";
    tecladoVirtual.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    cargarTecladoVirtual();
    mostrarTecladoListeners();
    tecladoVirtual.style.display = "none";
});