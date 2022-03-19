/* 
const getName = () => {
    fetch("informacion.txt")
        .then(res =>{
            if (res.ok) Promise.resolve(res)
            else Promise.reject(res);
        })
        .then(res => console.log(res))  //Aqui entra si se resolvio la promesa correctamente, a pesar que todo esta bien dice undefined por que llamamos la funcion antes de que esto se pueda ejecutar, por eso recurrimos a Async y await
        .catch(e => console.log(e))
}
 */

//Con aync y await ya no tenemos que usar el .then(), el await es como si pusieramos el .then(res=>console.log(res)) - el ultimo res seria igual a peticion en este caso
const getName = async () => {

    let peticion = await fetch("informacion.txt");
    let resultado = await peticion.json();
    console.log(resultado);         //revisamos como llego el json, axios es el que nos devuelve un "data"
    //Con esta variable le doy formato a lo que quiero mostrar, por que mi resultado no trae un valor "data", asi que tomo los campos por separado
    let htmlCode = `Nombre: ${resultado.nombre} <br>   
                    Apellido: ${resultado.edad} `;

    document.querySelector(".resultado").innerHTML = htmlCode;

}

document.getElementById('nombre').addEventListener("click",getName);  

//PODEMOS AMPLICAR EL EJERCICIO 7:38:00 con un boton para nombre, otro para edad, etc