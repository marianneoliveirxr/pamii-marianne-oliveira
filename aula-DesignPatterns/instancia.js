var Carro = /** @class */ (function () {
    function Carro(marca) {
        this.marca = marca;
    }
    return Carro;
}());
var carro1 = new Carro('BMW'); // Instância do Carro
var carro2 = new Carro('Honda'); //outra instância
console.log(carro1.marca); //BMW
console.log(carro2.marca); //Honda
