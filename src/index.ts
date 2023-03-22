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
