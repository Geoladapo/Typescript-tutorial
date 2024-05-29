var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("".concat(this.name, " is a nice department "));
    };
    return Department;
}());
var science = new Department('Science');
science.describe();
