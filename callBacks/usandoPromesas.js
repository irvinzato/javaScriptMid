class Personas {
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

const datos = [
    ["Irving Rivera", "@irvinzato"],
    ["Jade Rivera"],
    ["Angeles Rivera", "@ninaRl"],
    ["Jesus Rivera", "@pilantropo"]
];

const llenadoPersonas = [];

for(let i=0; i < datos.length; i++ ){
    llenadoPersonas[i] = new Personas(datos[i][0],datos[i][1]);
}


//PROMESAS
const obtenerPersona = id => {
    return new Promise((resolve,reject) => {
        if(llenadoPersonas[id] == undefined) reject("No se encontro la persona");
        else resolve(llenadoPersonas[id]);      //lo paso en el then como "persona"
    });
};

const obtenerInstagram = id => {
    return new Promise((resolve,reject) => {
        if(llenadoPersonas[id].instagram == undefined) reject("No tiene instagram esta persona");
        else resolve(llenadoPersonas[id].instagram);
    });
};

idRequerido = 1;

obtenerPersona(idRequerido).then((persona) => {
    console.log(persona.nombre);
    obtenerInstagram(idRequerido).then((instagram) => {
        console.log(instagram);
    });
}).catch((e) => {
    console.log(e);
});

/* Otra manera de estructurarlo, para que salga mejor el error
obtenerPersona(idRequerido).then((persona) => {
    console.log(persona.nombre);
    return obtenerInstagram(idRequerido);
}).then((instagram) => {
        console.log(instagram);
}).catch((e) => {
    console.log(e);
});
*/