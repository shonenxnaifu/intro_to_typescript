// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Type Annotations<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let myName: string = "pw";
// let isCool: boolean = true;
// let favNumber: number = 32;

// // myName = 23;

// function add(a: number, b: number) {
//   return a + b;
// }


// console.log(add(3,2));
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>End of Type Annotations<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Inferred Types<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let myName = "pw";
let isCool = true;
let favNumber = 32;

function addToNumber(a: number, b: number) {
  return a + b;
}

let result = addToNumber(2,3);
console.log(addToNumber(3,2));

const number = [2, 4, 5, 6];
// number.push("wow");
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>End of Inferred Types<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Union Types<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const numbersAndStrings: (string | number)[] = ["Panzer", 7, "CJ", 2];
console.log(numbersAndStrings);

let theAnswer: string | number = 42;
theAnswer = "42" ;
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> >End of Union Types<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Object and Interfaces<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// interface Person {
//   name: string;
//   favNumber: number;
// }

// function greet (person: Person) {
//   return `Hello ${person.name}`;
// }

// console.log(greet({
//   name: "CJ",
//   favNumber: 42,
// }));
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>End of Object and Interfaces<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Optional Properties<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// type StreamerType = "affiliate" | "partner";
// interface Person {
//   name: string;
//   favNumber: number;
//   dogName?: string;
//   streamerType: StreamerType;
//   currentTime () : Date;
// }

// type Person = {
//   name: string;
//   favNumber: number;
//   dogName?: string;
//   streamerType: StreamerType;
//   currentTime () : Date;
//  } 

// function greet (person: Person) {
//   if (person.currentTime()) {
//     return `Hello ${person.name} it is ${person.currentTime()}`;
//   }
//   return `Hello ${person.name}`;
// }

// console.log(greet({
//   name: "CJ",
//   favNumber: 42,
//   streamerType: "affiliate",
//   currentTime () {
//     return new Date();
//   }
// }));

// function greetPersonAndDog(person: Person) {
//   if (person.dogName) {
//     if (person.currentTime()) {
//       return `Hello ${person.name} and their dog ${person.dogName}, it is ${person.currentTime()}`;
//     }

//     return `Hello ${person.name} and their dog ${person.dogName}`;
    
//   }

//   return greet(person);
// }

// console.log(greetPersonAndDog({
//   name: "Chris",
//   favNumber: 42,
//   dogName: "Blu",
//   streamerType: "partner",
//   currentTime () {
//     return new Date();
//   }
// }));
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>End of Optional Properties<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Classes<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// class Person {
//   name: string;
//   dogName: string;
//   favNumber: number;

//   constructor (name: string, dogName: string, favNumber: number) {
//     this.name = name;
//     this.dogName = dogName; 
//     this.favNumber = favNumber;
//   }
// }

class Person {
  constructor (public name: string, public dogName: string, public favNumber: number) {}
}

const cj = new Person("CJ", "Panzer", 42);

function greet (person: Person) {
  return `Hello ${person.name}`;
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>End of Classes<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
