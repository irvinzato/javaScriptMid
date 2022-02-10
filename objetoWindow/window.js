/*Ejemplos para seguir probando
let ulrYt ="../../../../../../https//www.youtube.com";

let ventana = window.open(ulrYt); Revisar

const screen = window.screen;

console.log(screen);
document.write(screen);
document.write(screen.pixelDepth);         //asi se accede a la pepiedad de un objeto
*/

let alto = window.screen.availHeight;   //probar con .screen.height; y lo mismo en widgth
let ancho = window.screen.availWidth;

comprar = confirm(`El alto es: ${alto} El ancho es: ${ancho}`);

if(comprar) {
    alert("compra realizada");
} else {
    alert("compra cancelada");
}

/*00:40:00*/

let href = window.location.href;
let hostname = window.location.hostname;
let pathname = window.location.pathname;
let protocol = window.location.protocol;

let html = `Url es: ${href}  <br>`;
html += `hostname es: ${hostname} <br>`;
html += `pathname es: ${pathname} <br>`;
html += `protocol es: ${protocol} <br>`;

document.write(html);
