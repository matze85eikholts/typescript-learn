var State = /** @class */ (function () {
    function State() {
        this.list = [];
    }
    State.prototype.emit = function (event) {
        this.list.push(event);
    };
    State.prototype.getAll = function () {
        return this.list;
    };
    return State;
}());
var s = new State();
s.emit({ code: 200 });
s.emit({ code: 404 });
s.getAll().forEach(function (event) { return console.log(event.code); });
