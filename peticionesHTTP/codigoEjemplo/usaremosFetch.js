peticion = fetch("https://reqres.in/api/unknown/2");  //No hace falta definirle el "GET" por que lo tiene por defecto

//peticion.then(res => console.log(res)); //La promesa es asyncrona, cuando tenga resultados da la respuesta, esto esta encapsulado, el servidor dio informacion pero esta encapsulada y accedemos con los metodos

peticion.then(res => res.text()).then(res => console.log(res));     //Aqui ya usamos text() para desencapsular y despues imprimimos lo que nos devuelve. Pero nos devuelve un texto "string"

//peticion.then(res => res.json()).then(res => console.log(res));   //Aqui usamos el metodo json() y ya nos lo devuelve como un objeto

//console.log(peticion);      //Nos muestra la promesa

//7:00:00 Ahora en lugar de peticion GET, empezamos con POST


const imagen = document.querySelector(".imagen");

fetch("img/GETvsPOST.png")                      //Con get mando la imgen, probar blob() en lugar de text()
    .then(res => res.blob())
    .then(res => imagen.src = URL.createObjectURL(res));    //accedemos a la imagen para que se pueda visualizar, tambien si inspeccionamos la consola nos muestra en los elementos del HTML 
                                                            //un objeto blob(), con una ruta temporal donde se almacena la imgen durante la peticion    