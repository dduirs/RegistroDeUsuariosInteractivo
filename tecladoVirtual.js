const teclado = document.getElementById("tecladoVirtual");
const tecladoMinu = document.getElementById("tecladoMinusculas");
const keysArray = [];
const keysArrayMinu = [];
const keyValues = "1234567890QWERTYUIOPASDFGHJKLZXCVBNM@._-";
const keyValuesMinusculas = "1234567890qwertyuiopasdfghjklzxcvbnm@._-";

for (letter in keyValues) {
    keysArray.push(keyValues[letter]);
}
for (letter in keyValuesMinusculas) {
    keysArrayMinu.push(keyValuesMinusculas[letter]);
}

const cerrarBtn = document.getElementById("cerrarTecladoBtn");
const toggle = document.getElementById("tecladoToggle");
toggle.addEventListener('click', () => {
    toggleTeclado(true);
});
toggle.addEventListener('focus-within', () => {
    toggle.style.background = "#913030";
});

cerrarBtn.addEventListener('click',()=>{
    escondeTecladoMostrarEnviar();
})

function toggleTeclado(tecladoVisible) {
    if (tecladoVisible) {
        if (tecladoMinu.style.display != "flex") {
            tecladoMinu.style.display = "flex";
            teclado.style.display = "none";
            toggle.style.background = "#f9c5c5";
        } else {
            tecladoMinu.style.display = "none";
            teclado.style.display = "flex";
            toggle.style.background = "#f37f7f";
        }
    } else {
        tecladoMinu.style.display = "none";
        teclado.style.display = "flex";
        toggle.style.display = "none";
    }
}

let inputActualString;
let inputActualElement;

const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const password = document.querySelector("#contrasena");
const password2 = document.querySelector("#contrasena2");

function inputActualizar(input) {
    inputActualString = input;
}

function cargarTecladoVirtual(tecladoSelected, arrayDeKeys) {
    let keys = "";
    for (let key in arrayDeKeys) {
        keys += '<button id="' + arrayDeKeys[key] + '" class="keys">' + arrayDeKeys[key] + '</button>';
    }
    keys += '<button id="backspaceKey" class="keys">←</button>'; // añade Botón de retroceso key
    tecladoSelected.innerHTML = keys;
}

function addKeyListeners() {
    const keyListener = document.querySelectorAll(".keys");
    keyListener.forEach(key => {
        key.addEventListener('click', (e) => {
            focusInput(e.target);
        });
    });
}

const formEnviarBtn = document.getElementById("enviar");
const formResetBtn = document.getElementById("resetForm");

function tecladoListeners() {
    password.addEventListener('focus', () => {
        mostrarTecladoEscondeEnviar();
        inputActualizar("contrasena");
    })
    password2.addEventListener('focus', () => {
        mostrarTecladoEscondeEnviar();
        inputActualizar("contrasena2");
    })
}

function focusInput(target) {
    if (inputActualString == "nombre") {
        if (target.id != 'backspaceKey') {
            nombre.value += target.innerHTML;
        } else {
            nombre.value = nombre.value.slice(0,nombre.value.length - 1);
        }
        nombre.focus();
    }
    else if (inputActualString == "correo") {
        if (target.id != "backspaceKey") {
            correo.value += target.innerHTML;
        } else {
            correo.value = correo.value.slice(0,correo.value.length - 1);
        }
        correo.focus();
    }
    else if (inputActualString == "contrasena") {
        if (target.id != "backspaceKey") {
            password.value += target.innerHTML;
        } else {
            password.value = password.value.slice(0,password.value.length - 1);
        }
        password.focus();
    }
    else if (inputActualString == "contrasena2") {
        if (target.id != "backspaceKey") {
            password2.value += target.innerHTML;
        } else {
            password2.value = password2.value.slice(0,password2.value.length - 1);
        }
        password2.focus();
    }
}

const toTopAction = document.getElementById("toTop");

toTopAction.addEventListener('click',()=>{
    escondeTecladoMostrarEnviar();
})

function mostrarTecladoEscondeEnviar() {
    document.getElementById("toTopClose").innerText = "Ocultar teclado";
    formEnviarBtn.style.zIndex = 0;
    formResetBtn.style.zIndex = 0;
    formEnviarBtn.style.display = "none";
    formResetBtn.style.display = "none";
    toggleTeclado(false);
    toggle.style.display = "initial";
    cerrarBtn.style.display = "initial";
}

function escondeTecladoMostrarEnviar() {
    formEnviarBtn.style.zIndex = 2;
    formResetBtn.style.zIndex = 2;
    formEnviarBtn.style.display = "initial";
    formResetBtn.style.display = "initial";
    teclado.style.display = "none";
    tecladoMinu.style.display = "none";
    toggle.style.display = "none";
    cerrarBtn.style.display = "none";
    document.getElementById("toTopClose").innerText = "Ir al principio";
}

document.addEventListener("DOMContentLoaded", () => {
    cargarTecladoVirtual(teclado, keysArray);
    cargarTecladoVirtual(tecladoMinu, keysArrayMinu);
    addKeyListeners();
    tecladoListeners();
    teclado.style.display = "none";
    tecladoMinu.style.display = "none";
    toggle.style.display = "none";
    cerrarBtn.style.display = "none";
});