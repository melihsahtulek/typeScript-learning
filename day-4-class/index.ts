class ShoppingCart {
  productName: string;
  count: number;
  price: number;

  constructor(_productName: string, _count: number, _price: number) {
    this.productName = _productName;
    this.count = _count;
    this.price = _price;
  }

  GetTotal = function (): string {
    return `product...: ${this.productName} - total...: ${
      this.count * this.price
    } `;
  };
}

const myBasket = new ShoppingCart("Smart TV", 2, 500);
console.log(myBasket.GetTotal());
