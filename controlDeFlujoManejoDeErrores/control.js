//  try debe estar acompañado forzosamente del catch o del finally
// Se usa en casos muy especificos
// ¿Cuando se usa? - Cuando tenemos mucho codigo y existe una minima probabilidad de que salga un error

try {
    console.log("Todo bien");
    throw {
        nombre: "error tal",
        info: "ocurrio por tal cosa"
    }
}

catch(error){
    console.log(typeof error);          //Por definicion los errores son objetos
}
finally {
    console.log("ME ESCRIBO SIEMPRE");
}

//PROBLEMA EN 4:02:00