var Person = function () { };
Person.prototype.Say = function () {
    console.log("Person say");
};
Person.prototype.Salary = 50000;

var Programmer = function () { };
Programmer.prototype = new Person();
Programmer.prototype.WriteCode = function () {
    console.log("programmer writes code");
};
Programmer.prototype.Salary = 500;
var p = new Programmer();
p.Say();
p.WriteCode();
console.log(p.Salary);