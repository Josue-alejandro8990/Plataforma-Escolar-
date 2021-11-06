const forelement = document.getElementById("formulario");

forelement.addEventListener("submit", (event)=>{
    event.preventDefault();
    let correo = document.getElementById("email").value;
    let contraseña = document.getElementById("password").value;

    let registro = {correo : correo, contraseña : contraseña};
    let registrojson = JSON.stringify(registro);
    //guardados los datos en la base de datos

});