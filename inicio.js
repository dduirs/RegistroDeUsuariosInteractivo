// let passwordLogin = document.getElementById("contrasenaLogin");
// passwordLogin.setAttribute("style","color:green");

// let passwordView = document.getElementById("revealPassword");

// function ensenarContrasenar(){
    
//     if(passwordLogin.getAttribute("type") == 'password'){
//         passwordLogin.setAttribute("type","text");
//         passwordView.firstElementChild.innerHTML = `<path d="M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17
//             2.17c.47-.14.96-.24 1.47-.24ZM3.42 2.45 2.01 3.87l2.68 2.68A11.738 11.738 0 0 0 1 11.5C2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l3.43 3.43
//             1.41-1.41L3.42 2.45ZM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14
//             16c-.65.32-1.37.5-2.14.5Zm2.97-5.33a2.97 2.97 0 0 0-2.64-2.64l2.64 2.64Z" fill="currentColor"></path>`;
//     }
//     else{
//         passwordLogin.setAttribute("type","password");
//         passwordView.firstElementChild.innerHTML = `<path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4Zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24
//             5-5 5Zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z" fill="currentColor"></path>`;
//     }
// }

// passwordView.addEventListener('click',()=>{
//     ensenarContrasenar();
// });

// let email = document.getElementById("correo");
// let passwordLoginLabel = document.getElementById("passwordLoginLabel");

// email.addEventListener('blur',()=>{
//     if(passwordLogin.value !== null || passwordLogin.value !== ""){
//         passwordLogin.setAttribute("style","opacity:1");
//         passwordView.setAttribute("style","opacity:1");
//         passwordLoginLabel.setAttribute("style","opacity:1");
//     }
// });

// email.addEventListener('focusout',()=>
//     {
//     let email = document.getElementById("correo");
//     let emailLabel = document.getElementById("correoLabel");

//     if(email.value === localStorage.getItem("correo")){
//         emailLabel.innerText = localStorage.getItem("nombre");
//         emailLabel.style.fontWeight = "800";
//         emailLabel.style.color = "rgb(156, 42, 42, 0.993)";
//         email.style.textAlign = "center";
//         email.style.fontWeight = "600";
//         email.style.fontSize = "large";
//         email.style.background = "transparent";
//         email.style.outline = "transparent";
//     }
// });

// let formSendBtn = document.getElementById("enviar");

// email.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         passwordLogin.focus();
//     }
// });

// passwordLogin.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         formSendBtn.click();
//     }
// });

// formSendBtn.addEventListener('click',(e)=>
//     {
//     // let email = document.getElementById("correo");
//     // if(document.forms[0].checkValidity()){
//     //     if(email.value === localStorage.getItem("correo")){

//     //         if(passwordLogin.value !== localStorage.getItem("contrasena")){
//     //             e.preventDefault;
//     //             alert("La contraseña no es correcta");
//     //         }else{
//     //             formSendBtn.setAttribute("type","submit");
//     //         }
//     //     }else{
//     //         e.preventDefault;
//     //         alert("La contraseña o el correo no es correcto");
//     //     }
//     // }else{
//     //     alert("La contraseña o el correo no es correcto");
//     // }
//     formSendBtn.setAttribute("type","submit");
// });

function mostrarNombre(){
    const nombreUser = document.getElementById("nombreUser");
    nombreUser.innerText = sessionStorage.getItem("nombre");
}
document.addEventListener("DOMContentLoaded", () => {
    mostrarNombre();
    // console.log(localStorage.getItem("nombre"));
    // console.log(localStorage.getItem("contrasena"));
})

// document.addEventListener("DOMContentLoaded", function () {
//     passwordLogin.setAttribute("style","opacity:0");
//     passwordView.setAttribute("style","opacity:0");
// });