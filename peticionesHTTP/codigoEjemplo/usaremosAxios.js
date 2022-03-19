fetch("informacion.txt")                      
    .then(res => res.json())
    .then(res => console.log(res));

//La estructura de axios a comparacion de fetch ahora es esta, ahorramos una linea de codigo
//Axios nos dara un objeto donde "data" tendra nuestra informacion
//puede ser axios.get que es por defecto o axios.post y dentro de config estara su metodo
axios("informacion.txt")            //Este es un ejemplo GET
    .then(res => console.log(res));



axios.post("https://reqres.in/api/users", {   //Este es un ejemplo POST, el segundo parametro del metodo es lo que queremos enviarle en caso que queramos hacerlo
    "nombre": "IRVING",
    "facebook": "Irvinzato Rivera"
} )            
    .then(res => console.log(res));