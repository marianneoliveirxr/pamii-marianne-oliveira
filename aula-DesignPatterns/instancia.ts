class Carro {
    marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }
}

const carro1 = new Carro('BMW'); // Instância do Carro
const carro2 = new Carro('Honda'); //outra instância

console.log(carro1.marca); //BMW
console.log(carro2.marca); //Honda