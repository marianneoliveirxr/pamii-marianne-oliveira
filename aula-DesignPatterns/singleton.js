var CentralDeTrafego = /** @class */ (function () {
    function CentralDeTrafego() {
        console.log('Central de Tráfego iniciada');
    }
    CentralDeTrafego.getInstance = function () {
        if (!CentralDeTrafego.instance) {
            CentralDeTrafego.instance = new CentralDeTrafego();
        }
        return CentralDeTrafego.instance;
    };
    CentralDeTrafego.prototype.emitirAlerta = function (mensagem) {
        console.log("Alerta: ".concat(mensagem));
    };
    return CentralDeTrafego;
}());
//Uso 
var central1 = CentralDeTrafego.getInstance();
var central2 = CentralDeTrafego.getInstance();
central1.emitirAlerta('Acidente na rodovia!');
console.log(central1 === central2); //true (mesma instância)
