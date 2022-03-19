let peticion;

if(window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP"); //Esto es para que funcione en internet explorer tambien

peticion.addEventListener("load", () => {
    let respuesta;
    if(peticion.status == 200 ||peticion.status == 201 ) respuesta = peticion.response;
    else respuesta = "Error 404 pero puede haber muchas mas validaciones";
    console.log(peticion.status);           //EN POST el estado 201 quiere decir que fue creado, "Tuvo exito"                    
    console.log(JSON.parse(respuesta));
} );

peticion.open("POST","https://reqres.in/api/users");  //URL de regres.in

//Con esta linea de codigo nos envia los valores que le estamos diciendo, nos pide el tipo de contenido(Hay muchos tipos de encabezados)
//Encabezado y valor
peticion.setRequestHeader("Content-type", "application/json;charset=UTF8");

peticion.send(JSON.stringify({
    "name": "Irving",
    "job": "Full Stake"
}));