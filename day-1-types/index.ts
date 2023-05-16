import { faker } from "@faker-js/faker";

let fullName: string = faker.name.fullName();
let age: number = faker.number.int({ max: 100 });
let isChecked: boolean = false;
let words: string[] = [];
words.push(faker.word.words({ count: 1 }));

let cities: Array<string> = ["New York", "Oslo"];

console.log(fullName, age, isChecked);
console.log(words);
console.log(cities);
