var Sonar = /** @class */ (function () {
    function Sonar() {
    }
    Sonar.prototype.ping = function () {
        console.log("Sonar is pinging");
    };
    return Sonar;
}());
var sonar = new Sonar();
sonar.ping();
