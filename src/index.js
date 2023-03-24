/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 **/
var person = {
    name: "John",
    surname: "Doe",
    getFullName: function () {
        return this.name + " " + this.surname;
    },
    yearOfBirth: 1970,
    getAge: function () {
        return +new Date().getFullYear() - this.yearOfBirth;
    },
};
var numbers = [1, 2];
function doSomething() {
    return "Write something else!";
}
function calculate(num1, num2) {
    return num1 + num2;
}
console.log(calculate(10, 25));
