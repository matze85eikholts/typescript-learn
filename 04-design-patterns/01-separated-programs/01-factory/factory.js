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
var Shoe = /** @class */ (function () {
    function Shoe() {
        this.name = 'some kind of old nasty shoe';
    }
    return Shoe;
}());
var AbibaShoe = /** @class */ (function (_super) {
    __extends(AbibaShoe, _super);
    function AbibaShoe() {
        var _this = _super.call(this) || this;
        _this.name = 'It is abiba shoe';
        _this.cost = 50;
        return _this;
    }
    return AbibaShoe;
}(Shoe));
var NiseShoe = /** @class */ (function (_super) {
    __extends(NiseShoe, _super);
    function NiseShoe() {
        var _this = _super.call(this) || this;
        _this.name = 'It is nise shoe';
        _this.cost = 100;
        return _this;
    }
    return NiseShoe;
}(Shoe));
var ShoeFactory = /** @class */ (function () {
    function ShoeFactory() {
    }
    ShoeFactory.createShoe = function (shoeName) {
        if (shoeName === 'abiba') {
            return new AbibaShoe();
        }
        if (shoeName === 'nise') {
            return new NiseShoe();
        }
        else {
            return new Shoe();
        }
    };
    return ShoeFactory;
}());
var Product = ShoeFactory.createShoe(' ');
console.log(Product.name);
