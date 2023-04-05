"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Dog = exports.Cat = exports.Shark = exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    Animal.prototype.introduce = function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Animal;
}());
exports.Animal = Animal;
var Shark = /** @class */ (function (_super) {
    __extends(Shark, _super);
    function Shark(name, age, status) {
        return _super.call(this, name, age, 0, 'shark', status) || this;
    }
    return Shark;
}(Animal));
exports.Shark = Shark;
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age, status) {
        return _super.call(this, name, age, 4, 'cat', status) || this;
    }
    Cat.prototype.introduce = function () {
        return "".concat(_super.prototype.introduce.call(this), "  Meow meow!");
    };
    return Cat;
}(Animal));
exports.Cat = Cat;
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, status, master) {
        var _this = _super.call(this, name, age, 4, 'dog', status) || this;
        _this.master = master;
        return _this;
    }
    Dog.prototype.greetMaster = function () {
        return "Hello ".concat(this.master);
    };
    return Dog;
}(Animal));
exports.Dog = Dog;
var dog = new Dog('Sushi', 21, 'lazy', 'Billy');
console.log(dog.introduce());
console.log(dog.greetMaster());
