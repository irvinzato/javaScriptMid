class Personas {
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

const datos = [
    ["Irving Rivera", "@irvinzato"],
    ["Jade Rivera", "@jadeAketza"],
    ["Angeles Rivera", "@ninaRl"],
    ["Jesus Rivera", "@pilantropo"]
];

const llenadoPersonas = [];

for(let i=0; i < datos.length; i++ ){
    llenadoPersonas[i] = new Personas(datos[i][0],datos[i][1]);
}

console.log(llenadoPersonas[0]);           //Ahora tengo un arreglo que dentro tiene objetos

const obtenerPersona = (id, callBack) => {    //Le estoy pasando un id y una fucnion que llamo dentro de la condicion
    if(llenadoPersonas[id] == undefined) {
        callBack("No se encontro ninguna persona");
    } else {
        callBack(null, llenadoPersonas[id]);
    }
};

obtenerPersona(0,(err,persona) => {   //Le estoy pasando un valor y una funcion que tiene dos parametros
    if(err){                          //(err,persona) son valores que le paso a la funcion callBack
        console.log(err);
    } else {
        console.log(persona.nombre);        //persona es el arreglo llenadoPersonas[id] y como dentro tiene objetos puedo usar sus propiedades
        console.log(persona.instagram);
    }
});



// PROMESAS 

let name = "Irving";

const promesa = new Promise((resolve,reject) => {
    if(name != "Irving") reject("Lo siento, el nombre no es Irving");  //Se lo paso a .catch()
    else resolve(name);             //Se lo paso a promesa.then()
});

promesa.then((name) => {            //then es resolve
    console.log(name);
}).catch((e) => {                   //catch es reject
    console.log(e);
});