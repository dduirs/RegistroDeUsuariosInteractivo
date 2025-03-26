const teclado = document.getElementById("tecladoVirtual");
const keysArray = [];
const keyValues = "1234567890QWERTYUIOPASDFGHJKLZXCVBNM@._-";

for (letter in keyValues) {
    keysArray.push(keyValues[letter]);
}

// const formulario = document.getElementById("registro");
var inputActual;

const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const password = document.querySelector("#contrasena");
const password2 = document.querySelector("#contrasena2");

function inputActualizar(input) {
    if (input == "nombre") {
        return nombre;
    }
    else if (input == "correo") {
        return correo;
    }
    else if (input == "password") {
        return password;
    }
    else if (input == "password2") {
        return password2;
    }
    // else if (inputActual == "formulario") {
    //     formulario.focus();
    // } 
    // else {
    //     var inputFocus = document.getElementById(inputActual);
    //     inputFocus.focus();
    // }
    console.log("inputActual = " + inputActual);
}

function cargarTecladoVirtual() {
    var keys = "";
    for (let key in keysArray) {
        keys += '<button id="' + keysArray[key] + '" class="keys">' + keysArray[key] + '</button>';
    }
    keys += '<button id="BackspaceKey">←</button>'; // add Backspace key
    teclado.innerHTML = keys;

    // var keyListener = document.getElementsByClassName("keys");
    const keyListener = document.querySelectorAll(".keys");
    keyListener.forEach(key => {
        key.addEventListener('click', () => {
            focusInput();
        });
    });
}

// var a = keysArray[key];
// input = document.getElementById('"' + a + '"');
// console.log(keysArray[key]);
// console.log("input = " + input);
// // input.removeEventListener('onmouseup', focusInput(actual));
// // input.addEventListener('onmouseup', focusInput(actual));// inputActual.innerText += e.target.id;
// input.addEventListener('onmouseup', focusInput());// inputActual.innerText += e.target.id;
// console.log("    Added listener for key index " + key);
// }

// var keyListener = document.getElementsByClassName("keys");
// for (i = 0; keyListener.length; i++) {
//     keyListener[i].addEventListener('click', (e) => {
//         inputActual.innerText += e.target.id;
//     })
// }
// }

const formEnviarBtn = document.getElementById("enviar");
const formResetBtn = document.getElementById("resetForm");
// const formInputs = document.querySelector("#inputs").getElementsByTagName("input");

function tecladoListeners() {
    // nombre.addEventListener('click', () => {
    //     inputActual(nombre);
    // })
    nombre.addEventListener('focus', () => {
        mostrarTecladoEscondeEnviar();
        // activarKeyListeners(nombre);
        // activarKeyListeners();
        teclado.removeEventListener('focusout', this);
        // tecladoVirtual.addEventListener('onmouseup', () => {
        //     // activarKeyListeners();
        //     nombre.focus();
        // });
        inputActual = inputActualizar("nombre");
        console.log("inputActual updated = " + inputActual);
    })
    // nombre.addEventListener('focusout', () => {
    //     escondeTecladoMostrarEnviar();
    // })
    correo.addEventListener('focus', () => {
        mostrarTecladoEscondeEnviar();
        // activarKeyListeners(correo);
        // tecladoVirtual.removeEventListener('focusout', this);
        // tecladoVirtual.childNodes.addEventListener('onmouseup', () => {
        //     correo.focus();
        // });
        inputActual = inputActualizar("correo");
        console.log("inputActual updated = " + inputActual);
    })
    // correo.addEventListener('focusout', () => {
    //     escondeTecladoMostrarEnviar();
    // })

    password.addEventListener('focus', () => {
        mostrarTecladoEscondeEnviar();
        // activarKeyListeners(password);
        // tecladoVirtual.removeEventListener('focusout', this);
        // tecladoVirtual.childNodes.addEventListener('onmouseup', () => {
        //     password.focus();
        // });
        inputActual = inputActualizar("password");
        console.log("inputActual updated = " + inputActual);
    })
    // password.addEventListener('focusout', () => {
    //     escondeTecladoMostrarEnviar();
    // })
    password2.addEventListener('focus', () => {
        mostrarTecladoEscondeEnviar();
        // activarKeyListeners(password2);
        // tecladoVirtual.removeEventListener('focusout', this);
        // tecladoVirtual.childNodes.addEventListener('onmouseup', () => {
        //     password2.focus();
        // });
        inputActual = inputActualizar("password2");
        console.log("inputActual updated = "+inputActual);
    })
    // password2.addEventListener('focusout', () => {
    //     escondeTecladoMostrarEnviar();
    // })

    // tecladoVirtual.addEventListener('click', () => {
    //     inputActualizar("else");
    //     console.log("inputActual updated = "+inputActual);
    // })
    // tecladoVirtual.addEventListener('focusout', () => {
    //     escondeTecladoMostrarEnviar();
    //     // inputActualizar("else");
    //     // console.log("inputActual updated = "+inputActual);
    // })
    // console.log(formEnviarBtn);
    // console.log(formResetBtn);
}

// function activarKeyListeners(actual) {
// var keyListener = document.getElementsByClassName("keys");
// if (inputActual == "nombre") {
// inputActual = "nombre"
// var input;
// for (let key in keysArray) {
//     var a = keysArray[key];
//     input = document.getElementById('"'+a+'"');
//     console.log(keysArray[key]);
//     console.log("input = " + input);
//     // input.removeEventListener('onmouseup', focusInput(actual));
//     input.addEventListener('onmouseup', focusInput(actual));// inputActual.innerText += e.target.id;
//     console.log("    Added listener for key index " + key);
// }
// console.log("activarKeyListeners(actual) actual = " + actual);
// console.log("activarKeyListeners(actual) actual = " + actual);
//     }
//     else if (inputActual == "correo") {
//         inputActual = "correo"
//     }
//     else if (inputActual == "password") {
//         inputActual = "password"
//     }
//     else if (inputActual == "password2") {
//         inputActual == "password2"
//     }
//     else if (inputActual == "formulario") {
//         formulario.focus();
//     }

// }
// }
var focusActual;

function focusInput() {
    // input.focus();
    focusActual = inputActualizar();
    focusActual.focus();
    console.log("fn(): focusInput success");
}
// function focusInput(input) {
//     input.focus();
//     console.log("fn(): focusInput input = " + input);
// }

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