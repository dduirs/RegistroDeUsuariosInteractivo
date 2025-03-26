// "use strict";   // The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
                // With strict mode, you can not, for example, use undeclared letiables.

// alert("Entra tus detalles para registrar usuario nuevo.");

// usar POST no GET

// "use strict";
// let formElement1 = document.forms[0].elements[0];
// formElement1.setAttribute("style","color:blue");

// let miVentana;
// function abrir() { miVentana = window.open( "", "Log in",
//     "height=200,width=700,location=yes,resizable=yes,scrollbars=yes" );
// }
// abrir();

// confirm("Do you want to log in? "+location.pathname);

const passwordView = document.getElementById("revealPassword");
// let password = document.getElementById("contrasena");
// let password2 = document.getElementById("contrasena2");
const resetBtn = document.getElementById("resetForm");

function ensenarContrasenar(){
    
    if(password.getAttribute("type") == 'password'){
        password.setAttribute("type","text");
        password2.setAttribute("type","text");
        passwordView.firstElementChild.innerHTML = `<path d="M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17
            2.17c.47-.14.96-.24 1.47-.24ZM3.42 2.45 2.01 3.87l2.68 2.68A11.738 11.738 0 0 0 1 11.5C2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l3.43 3.43
            1.41-1.41L3.42 2.45ZM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14
            16c-.65.32-1.37.5-2.14.5Zm2.97-5.33a2.97 2.97 0 0 0-2.64-2.64l2.64 2.64Z" fill="currentColor"></path>`;
    }
    else{
        passwordView.firstElementChild.innerHTML = `<path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4Zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24
            5-5 5Zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z" fill="currentColor"></path>`;
        password.setAttribute("type","password");
        password2.setAttribute("type","password");
    }
}

passwordView.addEventListener('click',()=>{
    ensenarContrasenar();
});
// TODO: 

function comprobarPasswordsMatch(){
const errorPassword = document.getElementById("passwordMismatchError");
errorPassword.textContent = "No coinciden";
 if(password2.value != password.value){
    password2.setAttribute('isvalid','false');
    // password2.setAttribute('invalid','true');
    password2.setCustomValidity("password mismatch");
    if(password2.getAttribute('isvalid') == 'false'){
        alert("Las contraseñas no coinciden");
        errorPassword.setAttribute("style","opacity:1")
        if(password2.getAttribute("type") == 'password'){
            ensenarContrasenar();
        }
    }
    // password.setAttribute("type","text");
 }
 else{
    errorPassword.setAttribute("style","opacity:0")
    password2.setCustomValidity("");
 }
}

// password2.addEventListener('blur',()=>{
//     comprobarPasswordsMatch();
//     });

    // Note: Input restrictions are not foolproof, and JavaScript provides many ways to add illegal input. 
    // To safely restrict input, it must also be checked by the receiver (the server)! 

// let formElement2 = document.getElementById("nombre").form;
// formElement2.elements[1].setAttribute("style","color:red");

// let nombre = document.getElementById("nombre");

// nombre.addEventListener('focusout',()=>{
//     if((/^\s{2}|[^a-zA-Z]/.test(nombre.value))){ // \s{2}|[^a-zA-Z]
//         console.log("No válido: "+nombre.value);
//         birthday.setCustomValidity("No válido");
//     }else{
//         birthday.setCustomValidity("");
//         console.log("válido: "+nombre.value);
//     }
// });

// let birthday = document.getElementById("cumpleanos");

// // birthday.setCustomValidity("noCambiado");

// birthday.addEventListener('focusout',()=>{
//     if(!(birthday.value > new Date().getDate)){
//         birthday.setCustomValidity("");
//     }
//     else if((birthday.value - new Date().getDate) < 110){
//         birthday.setCustomValidity("");
//     }else{
//         birthday.setCustomValidity("No valido");
//     }
// });

//TODO: check birthday validity is working;




// document.getElementById('enviar').addEventListener('click', validar, false);

// valor = document.getElementById("corro").value;
// if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
// return false;}

// /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/  email regex

// /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/ password regex

    // password must contain 1 number (0-9)
    // password must contain 1 uppercase letters
    // password must contain 1 lowercase letters
    // password must contain 1 non-alpha numeric character
    // password is 8-16 characters with no space



// const email = document.getElementById("mail");

// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity(
//       "¡Se esperaba una dirección de correo electrónico!",
//     );
//   } else {
//     email.setCustomValidity("");
//   }
// });

// alert(window.navigator.userAgent);


// alert(window.screen.height);

// const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
//   };
  
//   function success(pos) {
//     const crd = pos.coords;
  
//     console.log("Your current position is:");
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     console.log(`More or less ${crd.accuracy} meters.`);
//   }
  
//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   }
  
//   navigator.geolocation.getCurrentPosition(success, error, options);

// Aa1234!2

resetBtn.addEventListener('click', ()=>{
    if(confirm("¿Seguro que quieres borrar todo?")){
        resetBtn.setAttribute("type","reset");
        alert("formulario vaciado");
    };
});

let formSendBtn = document.getElementById("enviar");
formSendBtn.addEventListener('click',()=>
    {
    // let formValid = true;
    // let a = 0;
    password2.blur();
        if(document.forms[0].checkValidity()){
            alert("Los datos se han enviado correctamente");
            // alert("Los datos han enviado correctamente a las "+ new Date().getHours +" y "+ new Date().getMinutes);

        }
    //     else{
    //         formValid = false;
    //         // break;
    //     }
    //     a++;
    // // for(let element in document.forms[0].elements){
    // //     if(element.checkValidity()){
    // //         alert("Los datos son validos "+a);
    // //     }
    // //     else{
    // //         formValid = false;
    // //         break;
    // //     }
    // //     a++;
    
    // if(formValid){
    //     // alert("Los datos han enviado correctamente");
    //     document.forms[0].requestSubmit(formSendBtn);
    // }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", () => {
        // event.preventDefault();
        const formData = new FormData(form);
        console.log(formData);

        // const formData = new FormData(form)
        for (let item of formData) {
            if(item[0] == "nombre" || item[0] == "correo" || item[0] == "contrasena"){
                // console.log(item);
                sessionStorage.setItem(item[0],item[1]);
                //TODO: make items case insensitive
                console.log(item[0]+" guardado");
            }
        }
    })
});