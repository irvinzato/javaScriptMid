let peticion;

if(window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP"); //Esto es para que funcione en internet explorer tambien

peticion.addEventListener("load", () => {
    let respuesta;
    if(peticion.status == 200) respuesta = peticion.response;
    else respuesta = "Error 404 pero puede haber muchas mas validaciones";
    console.log(typeof respuesta);
    console.log(JSON.parse(respuesta));  //Debemos Desearilizarlo, si no tiene las comillas en el txt de ambos lados, no leera el parse
    let nombre = JSON.parse(respuesta).nombre;      //Con el parseo ahora ya puedo acceder a las propiedades del objeto JSON
    console.log(nombre);                            
} );

peticion.open("GET","informacion.txt");

peticion.send();