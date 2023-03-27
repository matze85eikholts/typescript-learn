var Sonar = /** @class */ (function () {
    function Sonar() {
    }
    Sonar.prototype.ping = function () {
        console.log('Sonar is pinging');
    };
    return Sonar;
}());
var sonar = new Sonar();
sonar.ping();
var B = /** @class */ (function () {
    function B() {
        this.x = 0;
        this.y = 0;
    }
    return B;
}());
var C = /** @class */ (function () {
    function C() {
        this.x = 5;
    }
    return C;
}());
var c = new C();
//C.y = 10
//It is wrong because y parameter was not implemented
console.log(c.x);
var rect1 = {
    id: '01',
    size: {
        width: 30,
        height: 30
    },
    color: '#abc'
};
var rect2 = {
    id: '02',
    size: {
        width: 30,
        height: 20
    }
};
console.log(rect1.color);
console.log(rect1.size.width);
rect2.color = '#abb';
console.log(rect2.color);
