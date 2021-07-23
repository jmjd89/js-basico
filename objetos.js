var miAuto  =
{
    marca: "Honda",
    modelo: "Corolla",
    annio: 2020,
    /**
     * Metodo de objeto
     */
    detalleDelAuto: function()
    {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

console.log(miAuto.marca);
console.log(miAuto.modelo);
console.log(miAuto.annio);
miAuto.detalleDelAuto();

class auto {
    constructor(marca, modelo, annio) {
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
    }
}

var autoNuevo = new auto("Tesla", "Z", 2020);
var autoNuevo2 = new auto("Ford", "Bora", 2021);
var autoNuevo3 = new auto("Nio", "S3", 2021);