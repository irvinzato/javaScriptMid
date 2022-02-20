//Continuar mejorando el programa, que halla notas que influyan en el promedio
const sendButton = document.getElementById("enviar-nota");
const resultadoNota = document.querySelector(".muestraResultado");

sendButton.addEventListener("click", () => {
    let resultado, mensaje;
    let resultadoFinal;

    try {
        resultado = parseInt(document.getElementById("nota-alumno").value);
        mensaje = "No he detectado problemas";
        if (isNaN(resultado)) {
            console.log("Hay un problema con la introduccion de la nota");
            throw "Chistosito";
        }
        
        mensaje = verificarAprovacion(resultado);
        //resultado = resultadoFinal;
    } catch(e) {  
        resultado = "¿Eres payaso?";
        mensaje = "Te descubri";
    }

    if (resultado < 7) {
        //resultadoNota.style.display = "flex";   
        resultadoNota.innerHTML = `<input type="button" value="Quitar Informacion" id="botonResultado">
        <h2 class="h2Resultado">El resultado de la nota es: <span style="color:red"> ${mensaje}</span></h2>`;
        
    } else {
        resultadoNota.innerHTML = `<input type="button" value="Quitar Informacion" id="botonResultado">
        <h2 class="h2Resultado">El resultado de la nota es: <span style="color:green"> ${mensaje}</span></h2>`;
    }
    //abrirModal(resultado, mensaje);
    resultadoNota.appendChild();
});

/*Hay que implementar un modulo para que aparezca y desaparesca
const botonQuitar = document.getElementById("botonResultado");

botonQuitar.addEventListener("click", () => {
    //console.log("Estoy recibiendo la accion quitar");
    resultadoNota.style.display = "none";
});*/

/* Se trabaja con animaciones 
const abrirModal = (res, msg) => {
    document.querySelector(".resultadoModal").innerHTML = res;
    document.querySelector(".mensajeModal").innerHTML = msg;
    let modalFondo = document.querySelector(".modalFondo");
    modalFondo.style.display = "flex";
    modalFondo.style.animation = "aparecer 1s forwards";
   
};*/

const verificarAprovacion = (res) => {
    if (res >= 7 ) {
        return `Felicidades, vas a aprobar`;
    } else {
        return "Lo siento pero son malas noticias";
    }
};