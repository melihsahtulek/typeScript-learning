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

const person: {
  name: string;
  surname: string;
  getFullName: any;
  yearOfBirth: number;
  getAge: any;
} = {
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

const numbers: number[] = [1, 2];

function doSomething(): string {
  return "Write something else!";
}

function calculate(num1: number, num2: number): number {
  return num1 + num2;
}

// console.log(calculate(10, 25));

function repeat(name: string, repeatValue: number): void {
  for (let i = 0; i < repeatValue; i++) {
    console.log(`${i + 1}. ${name}`);
  }
}

repeat("Melihşah", 5);

type Car = {
  brand: string;
  colour?: number;
};

const car: Car = {
  brand: "Mazda",
};

console.log(car);
