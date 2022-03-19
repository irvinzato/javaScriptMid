let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let materia = document.getElementById("materia");
let boton = document.getElementById("btn-enviar");
let resultado = document.querySelector(".resultado");

boton.addEventListener("click", ()=>{
    let error = validarCampos();

    if(error[0]){
        resultado.innerHTML =  error[1];
        resultado.classList.add("red");
    } else {
        resultado.innerHTML = error[1];
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
});

const validarCampos = ()=>{
    let error = [];
    let materias = ["quimica","matematicas","español"];

    if(nombre.value.length < 5){
        error[0] = true;
        error[1] = "El nombre no puede tener menos de 5 caracteres";
        return error;

    } else if(nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre no puede tener mas de 40 caracteres";
        return error;

    } else if(email.value.length < 8 || email.value.length > 35
              || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ) {
        error[0] = true;
        error[1] = "Error en el correo electronico";
        return error;

    } else if (materia.value.length < 4 || materia.value.length > 20) {
        error[0] = true;
        error[1] = "Materia invalida";
        return error;

    } else {
        error[0] = false;
        error[1] = "Solicitud enviada";
        return error;
    }
}