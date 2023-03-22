var Greater = /** @class */ (function () {
    function Greater(message) {
        this.greeting = message;
    }
    Greater.prototype.greet = function () {
        return this.greeting;
    };
    return Greater;
}());
;
var greeter = new Greater("Hello world!!!");
console.log(greeter.greet());
