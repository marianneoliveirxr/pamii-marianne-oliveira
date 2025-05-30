var SUV = /** @class */ (function () {
    function SUV() {
    }
    SUV.prototype.dirigir = function () {
        console.log('Dirigindo um SUV');
    };
    return SUV;
}());
var Esportivo = /** @class */ (function () {
    function Esportivo() {
    }
    Esportivo.prototype.dirigir = function () {
        console.log('Dirigindo um Esportivo');
    };
    return Esportivo;
}());
var Sedan = /** @class */ (function () {
    function Sedan() {
    }
    Sedan.prototype.dirigir = function () {
        console.log('Digirindo um Sedan');
    };
    return Sedan;
}());
var Montadora = /** @class */ (function () {
    function Montadora() {
    }
    Montadora.fabricarCarro = function (tipo) {
        if (tipo === 'SUV') {
            return new SUV();
        }
        else if (tipo === 'Esportivo') {
            return new Sedan();
        }
        else {
            throw new Error('Tipo de carro desconhecido');
        }
    };
    return Montadora;
}());
//Uso 
var meuCarro = Montadora.fabricarCarro('Esportivo');
meuCarro.dirigir();
