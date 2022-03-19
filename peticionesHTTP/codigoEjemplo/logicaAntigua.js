alert("Empecemos con las peticiones !");

const peticion = new XMLHttpRequest();      //lo usamos para hacer peticiones

console.log(peticion);                  //Antes de enviar el "readySate" es 0

peticion.addEventListener("readystatechange", () => {       //readyState tiene 4 cambios 6:31:00
    console.log(peticion.readyState);
    console.log(peticion.response);           //Segun el numero de readyState sabemos cuando ya proceso la informacion
    console.log(peticion.status);             //Me dice si encontro el valor, hay mas respuestar pero 404 es el mas comun

    if(peticion.readyState ==4 && peticion.status == 200){
        console.log("Se pudo validar la informacion");
        console.log(peticion.response);
    }
});

peticion.open("GET","informacion.txt");     //Para iniciar la peticion

peticion.send();                //Con este metodo ahora si lo enviamos, en consola "red" podemos notarlo

console.log(peticion);          //En la propiedad "response" esta nuestro JSON, revisar en consola. Despues de enviar el "readySate" es 1
