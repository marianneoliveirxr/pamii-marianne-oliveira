interface Carro {
    dirigir(): void;
}

class SUV implements Carro {
    dirigir() {
        console.log('Dirigindo um SUV');
    }
}

class Esportivo implements Carro {
    dirigir() {
        console.log('Dirigindo um Esportivo');
    }
}

class Sedan implements Carro {
    dirigir() {
        console.log('Digirindo um Sedan');
    }
}

class Montadora {
    static fabricarCarro(tipo: string): Carro {
        if (tipo === 'SUV') {
            return new SUV();
        } else if (tipo === 'Esportivo') {
            return new Sedan();
        } else {
            throw new Error('Tipo de carro desconhecido');
        }
    }
}

//Uso 
const meuCarro = Montadora.fabricarCarro('Esportivo');
meuCarro.dirigir();