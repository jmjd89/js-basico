// Math.floor(Math.random() * 3)
var autos = [];
var marcas = ["Ford", "Nissan", "Chevrolet", "Kia", "Volswagen"];
var modelos = ["A","B","C","D","E"]
var annios = [2017, 2018, 2019, 2020, 2021];

class auto {
    constructor(marca, modelo, annio) {
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
    }
}

function mostrarAuto(auto)
{
    console.log(`Marca: ${auto.marca} Modelo: ${auto.modelo} Año: ${auto.annio}`);
}


function crearObjetos()
{
    for(var item = 1; item <= 30; item++)
    {
        autos.push(new auto(marcas[Math.floor(Math.random() * 5)], modelos[Math.floor(Math.random() * 5)],annios[Math.floor(Math.random() * 5)]));
    }
}

crearObjetos();

while (autos.length > 0) {
    var movil = autos.shift();
    mostrarAuto(movil);
}

