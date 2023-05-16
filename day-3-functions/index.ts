function sayHello(): string {
  return "Hello My Friend!";
}

const sum = (n1: number, n2: number, n3?: number): number => {
  if (!n3) {
    return n1 + n2;
  }
  return n1 + n2 + n3;
};

console.log(sum(30, 20, 10));
