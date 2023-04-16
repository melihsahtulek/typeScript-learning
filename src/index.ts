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

let myAge: number = 24;

const country: {
  name: string;
  capital: string;
} = {
  name: "Türkiye",
  capital: "Ankara",
};

let age: number | string = null;

age = 25;
age = "25";

function getFullName(name: string, surname: string): string {
  return `${name} ${surname.toUpperCase()}`;
}

console.log(getFullName("John", "Doe"));

const myColors: Array<String> = ["Red", "Blue", "Green"];

enum Payment {
  CREDIT = "credit",
  TRANSFER = "transfer",
  EFT = "eft",
  CASH_ON_DELIVERY = "cash on delivery",
}

console.log("Your Payment Method is ...: " + Payment.CASH_ON_DELIVERY);

/*
function getAverage(a: number, b: number, c?: number): string {
  let total = 0;
  let count = 2;

  if (typeof c !== "undefined") {
    total += c;
    count++;
  }

  total = (a + b + total) / count;
  return `Average...: ${total.toFixed(2)}`;
}

console.log(getAverage(10, 20, 10));
*/

function getAverage(...params: Array<number>): string {
  let total = 0;
  let count = params.length;

  for (let i = 0; i < params.length; i++) {
    total += params[i];
  }

  total = total / count;

  return `Average...: ${total.toFixed(2)}`;
}

console.log(getAverage(10, 20, 10));

class Person {
  name: string;
  lastName: string;
  yearOfBirth: number;

  constructor(name: string, lastName: string, yearOfBirth: number) {
    this.name = name;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
  }

  public get info(): string {
    return `Name is ${this.name}`;
  }
}

// console.log(person_1.info);

class Employee extends Person {
  salary: number;

  constructor(
    name: string,
    lastName: string,
    yearOfBirth: number,
    salary: number
  ) {
    super(name, lastName, yearOfBirth);
    this.salary = salary;
  }
}

const person_1 = new Employee("John", "Doe", 1999, 8500);
console.log(person_1.info);

interface IDatabase {
  create();
  read();
  update();
  delete();
}

class MySql implements IDatabase {
  create() {
    console.log("MySql Create!");
  }
  read() {
    console.log("MySql Read!");
  }
  update() {
    console.log("MySql Update!");
  }
  delete() {
    console.log("MySql Delete!");
  }
}

class MongoDb implements IDatabase {
  create() {
    console.log("MongoDb Create!");
  }
  read() {
    console.log("MongoDb Read!");
  }
  update() {
    console.log("MongoDb Update!");
  }
  delete() {
    console.log("MongoDb Delete!");
  }
}

function addToDb(database: IDatabase) {
  database.create();
}

addToDb(new MongoDb());

enum Colours {
  DARK = "#000",
  LIGHT = "#fff",
}

console.log(Colours.DARK);

enum BookGenre {
  FANTASY = "Fantasy",
  MYSTERY = "Mystery",
  THRILLER = "Thriller",
  ROMANCE = "Romance",
  WESTERNS = "Westerns",
  DYSTOPIAN = "Dystopian",
  CONTEMPORARY = "Contemporary",
}

abstract class Book {
  private name: string;
  private author: string;
  private price: number;
  private pageCount: number;
  private genre: string;

  constructor(
    name: string,
    author: string,
    price: number,
    pageCount: number,
    genre: string
  ) {
    this.name = name;
    this.author = author;
    this.price = price;
    this.pageCount = pageCount;
    this.genre = genre;
  }

  getInfo(): string {
    return `
      The Book Name is ${this.name}.
      Author name is ${this.author}.
      ${this.name}'s genre is ${this.genre}.
      ${this.name}'s price is ${this.price.toFixed(2)}$
      and Its page count ${this.pageCount}
    `;
  }
}

class FantasyBook extends Book {
  constructor(
    name: string,
    author: string,
    price: number,
    pageCount: number,
    genre: string
  ) {
    super(name, author, price, pageCount, genre);
  }
}

const myFantasyBook = new FantasyBook(
  "The Lord of the Rings",
  "J. R. R. Tolkien",
  50,
  800,
  BookGenre.FANTASY
);

console.log(myFantasyBook.getInfo());
