var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(_productName, _count, _price) {
        this.GetTotal = function () {
            return "product...: ".concat(this.productName, " - total...: ").concat(this.count * this.price, " ");
        };
        this.productName = _productName;
        this.count = _count;
        this.price = _price;
    }
    return ShoppingCart;
}());
var myBasket = new ShoppingCart("Smart TV", 2, 500);
console.log(myBasket.GetTotal());
