let alumnos = [{     //UN ARREGLO CON MUCHOS OBJETOS
    nombre: "Irving Rivera",
    email: "multizato@hotmail.com",
    materia: "Programacion"
},{
    nombre: "Jade Rivera",
    email: "jadeAketzalli@hotmail.com",
    materia: "Artes"
},{
    nombre: "Angeles Rivera",
    email: "nina_rl@hotmail.com",
    materia: "Quimica"
},{
    nombre: "Jesus Rivera",
    email: "pilantropo@hotmail.com",
    materia: "Antropologia"
}];

const botonConfirmar = document.querySelector(".button-confirm");
const contenedor = document.querySelector(".grid-container");

for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos.nombre;              //tambien funciona asi datos["nombre"];
    let email = datos.email;
    let materia = datos.materia;
    let htmlCode = `
    <div class="grid-item nombre"> ${nombre} </div>
        <div class="grid-item email"> ${email} </div>
        <div class="grid-item materias"> ${materia} </div>
        <div class="grid-item semana">
            <select class="semana-elegida" name="">
                <option value="Elegiste semana 1">Semana 1</option>
                <option value="Elegiste semana 2">Semana 2</option> 
            </select>
        </div>
    `;
    contenedor.innerHTML += htmlCode;     //Selecciono el contenedor y le añado codigo HTML, con += para que de todos 
}

botonConfirmar.addEventListener("click",()=>{
    let confirmar = confirm("¿Estas seguro de tus elecciones?");
    if(confirmar){
        let elementos = document.querySelectorAll(".semana");           //Para que selecciono todos lo que sean ".semana"
        let semanaElegida = document.querySelectorAll(".semana-elegida");
        //console.log(semanaElegida);

        for(elemento in elementos){
            //console.log(`${elemento} `);
            let semana = elementos[elemento];
            semana.innerHTML = semanaElegida[elemento].value;
        }
        document.body.removeChild(botonConfirmar);              //Selecciono un padre del HTML y quito a su hijo
    }
});