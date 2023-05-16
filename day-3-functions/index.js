function sayHello() {
    return "Hello My Friend!";
}
var sum = function (n1, n2, n3) {
    if (!n3) {
        return n1 + n2;
    }
    return n1 + n2 + n3;
};
console.log(sum(30, 20, 10));
