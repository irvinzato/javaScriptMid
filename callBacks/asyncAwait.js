const obtenerInformacion = (text) => {
    return new Promise((resolve, reyect) => {
        setTimeout(() => {resolve(text);}, Math.random()*200);
    });
};

const mostrarData = async () => {
    data1 = await obtenerInformacion("1: Milanesa");
    data2 = await obtenerInformacion("2: Enchiladas");
    data3 = await obtenerInformacion("3: Tacos");
    console.log(data1);
    console.log(data2);
    console.log(data3);
};

mostrarData();

//Quedamos en problema - 5:42:00