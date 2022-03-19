fetch("https://reqres.in/api/users", {      //POST ademas de la url usa como parametro un tipo objeto con los atributos "method", "body" y "headers"
    method: "POST",
    body: JSON.stringify({                  //En lugar del metodo JSON.stringify tambien sirve con "back ticks"
        "nombre": "Irving",
        "apellido": "Rivera",
        "apodo": "irvinzato"
    }),
    headers: {
        "Content-type": "application/json"          //7:03:00 tambien se puede ordenar con headers como variable, hay muchos tipos de headers, dependiento el tipo de informacion
    }
})
    .then(res => res.text())
    .then(res => console.log(res));