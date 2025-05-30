var Painel = /** @class */ (function () {
    function Painel() {
    }
    Painel.prototype.update = function (evento) {
        console.log("Painel: ".concat(evento));
    };
    return Painel;
}());
var LuzDeFreio = /** @class */ (function () {
    function LuzDeFreio() {
    }
    LuzDeFreio.prototype.update = function (evento) {
        console.log("Luz de freio ativada: ".concat(evento));
    };
    return LuzDeFreio;
}());
var AlertaSonoro = /** @class */ (function () {
    function AlertaSonoro() {
    }
    AlertaSonoro.prototype.update = function (evento) {
        console.log("Alerta sonoro: ".concat(evento));
    };
    return AlertaSonoro;
}());
var Freio = /** @class */ (function () {
    function Freio() {
        this.observers = [];
    }
    Freio.prototype.registrar = function (observer) {
        this.observers.push(observer);
    };
    Freio.prototype.remover = function (observer) {
        this.observers = this.observers.filter(function (o) { return o !== observer; });
    };
    Freio.prototype.pressionar = function () {
        console.log('Freio pressionado!');
        this.notificar('Freio acionado!');
    };
    Freio.prototype.notificar = function (evento) {
        this.observers.forEach(function (o) { return o.update(evento); });
    };
    return Freio;
}());
//Uso
var freio = new Freio();
var painel = new Painel();
var luz = new LuzDeFreio();
var alerta = new AlertaSonoro();
freio.registrar(painel);
freio.registrar(luz);
freio.registrar(alerta);
freio.pressionar();
