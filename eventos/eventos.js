const button2 = document.querySelector(".button2");

button2.onclick = () => {
    alert("Ahora lo hago llamando onclick desde el documento js");
}

const button3 = document.querySelector(".button3");

//EJEMPLO ESCUCHANDO EVENTOS
button3.addEventListener("click",saludar);

function saludar(){
    alert("Usando addEventListener y revomeEventListener");
    button3.removeEventListener("click", saludar);          //Despues de esto ya no vuelve a escuchar el evento
}

const button4 = document.querySelector(".button4");

button4.addEventListener("click",(e)=>{                     //e es el objeto del evento
    document.write(e);
    console.log(e);
});

//EJEMPLO DE FLUJO DE EVENTOS
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");
const button5 = document.querySelector(".button5");

button5.addEventListener("click",(e)=>{
    alert("Diste click en boton 5");
});

contenedor1.addEventListener("click",(e)=>{
    alert("Diste click en contenedor verde");
});

contenedor2.addEventListener("click",(e)=>{
    alert("Diste click en contenedor rosa");
    e.stopPropagation();                //Con esto hacemos que se pare la propagacion donde queramos
});

//EJEMPLOS DE EVENTOS CON TECLADO
const inputText = document.querySelector(".inputEventos");

inputText.addEventListener("keydown",(e)=>{
    console.log("Presionaste una tecla");
});
inputText.addEventListener("keypress",(e)=>{
    console.log("Presionaste y soltaste la tecla");
});
inputText.addEventListener("keyup",(e)=>{
    console.log("Soltaste la tecla");
});

//Ejemplo de seleccion, ocupando el inputText anterior, se puede combinar con la parte del teclado 2:35:00
const seleccion = document.querySelector(".muestraSeleccion");          //Clase del elemento donde quiero mostar la seleccion

inputText.addEventListener("select",(e)=>{
    console.log(e);
    let start = e.target.selectionStart;        //Aqui accedemos a las propiedades del objeto que podemos revisar en console log
    let end = e.target.selectionEnd;
    let textoCompleto = inputText.value;
    seleccion.innerHTML = `Seleccionaste: ` + textoCompleto.substring(start,end);       //es mejor usar textContent
});
