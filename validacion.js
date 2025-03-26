const passwordView = document.getElementById("revealPassword");
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

resetBtn.addEventListener('click', ()=>{
    if(confirm("¿Seguro que quieres borrar todo?")){
        resetBtn.setAttribute("type","reset");
        alert("formulario vaciado");
    };
});

let formSendBtn = document.getElementById("enviar");
formSendBtn.addEventListener('click',()=>
    {
    password2.blur();
        if(document.forms[0].checkValidity()){
            alert("Los datos se han enviado correctamente");
        }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", () => {
        const formData = new FormData(form);
        console.log(formData);

        for (let item of formData) {
            if(item[0] == "nombre" || item[0] == "correo" || item[0] == "contrasena"){
                sessionStorage.setItem(item[0],item[1]);
                console.log(item[0]+" guardado");
            }
        }
    })
});