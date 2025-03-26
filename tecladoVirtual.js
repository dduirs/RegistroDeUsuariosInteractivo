const teclado = document.getElementById("tecladoVirtual");
const keysArray = [];
const keyValues = "1234567890QWERTYUIOPASDFGHJKLZXCVBNM@._-";

for (letter in keyValues) {
    keysArray.push(keyValues[letter]);
}

let inputActualString;
let inputActualElement;

var nombre = document.querySelector("#nombre");
var correo = document.querySelector("#correo");
var password = document.querySelector("#contrasena");
var password2 = document.querySelector("#contrasena2");

function inputActualizar(input) {
    inputActualString = input;
    if (input == "nombre") {
        console.log("return nombre = " + nombre);
        return nombre;
    }
    else if (input == "correo") {
        console.log("return correo = " + correo);
        return correo;
    }
    else if (input == "contrasena") {
        console.log("return password = " + password);
        return password;
    }
    else if (input == "contrasena2") {
        console.log("return password2 = " + password2);
        return password2;
    }
    else {
        return formEnviarBtn;
    }
}

function cargarTecladoVirtual() {
    var keys = "";
    for (let key in keysArray) {
        keys += '<button id="' + keysArray[key] + '" class="keys">' + keysArray[key] + '</button>';
    }
    keys += '<button id="BackspaceKey">←</button>'; // add Backspace key
    teclado.innerHTML = keys;

    const keyListener = document.querySelectorAll(".keys");
    keyListener.forEach(key => {
        key.addEventListener('click', (e) => {
            focusInput(e.target.id);
        });
    });
}

const formEnviarBtn = document.getElementById("enviar");
const formResetBtn = document.getElementById("resetForm");

function tecladoListeners() {
    nombre.addEventListener('focus', () => {
        mostrarTecladoEscondeEnviar();
        inputActualElement = inputActualizar("nombre");
        console.log("inputActual updated = " + inputActualElement);
    })
    correo.addEventListener('focus', () => {
        mostrarTecladoEscondeEnviar();
        inputActualElement = inputActualizar("correo");
        console.log("inputActual updated = " + inputActualElement);
    })

    password.addEventListener('focus', () => {
        mostrarTecladoEscondeEnviar();
        inputActualElement = inputActualizar("contrasena");
        console.log("inputActual updated = " + inputActualElement);
    })
    password2.addEventListener('focus', () => {
        mostrarTecladoEscondeEnviar();
        inputActualElement = inputActualizar("contrasena2");
        console.log("inputActual updated = " + inputActualElement);
    })
}

var focusActualElement;

function focusInput(targetId) {
    if (inputActualString == "nombre") {
        nombre.value += targetId;
        nombre.focus();
        console.log("return nombre = " + nombre);
    }
    else if (inputActualString == "correo") {
        correo.value += targetId;
        correo.focus();
        console.log("return correo = " + correo);
    }
    else if (inputActualString == "contrasena") {
        password.value += targetId;
        password.focus();
        console.log("return contrasena = " + password);
    }
    else if (inputActualString == "contrasena2") {
        password2.value += targetId;
        password2.focus();
        console.log("return contrasena2 = " + password2);
    }
}

function mostrarTecladoEscondeEnviar() {
    formEnviarBtn.style.zIndex = 0;
    formResetBtn.style.zIndex = 0;
    formEnviarBtn.style.display = "none";
    formResetBtn.style.display = "none";
    teclado.style.display = "flex";
    // tecladoVirtual.scrollIntoView(true);
    teclado.scrollIntoView({ overflow: "scroll", behavior: "smooth", block: "end", inline: "nearest" });
}

function escondeTecladoMostrarEnviar() {
    formEnviarBtn.style.zIndex = 2;
    formResetBtn.style.zIndex = 2;
    formEnviarBtn.style.display = "initial";
    formResetBtn.style.display = "initial";
    teclado.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    cargarTecladoVirtual();
    tecladoListeners();
    teclado.style.display = "none";
});