"use strict";
let myName = "pw";
let isCool = true;
let favNumber = 32;
function addToNumber(a, b) {
    return a + b;
}
let result = addToNumber(2, 3);
console.log(addToNumber(3, 2));
const number = [2, 4, 5, 6];
const numbersAndStrings = ["Panzer", 7, "CJ", 2];
console.log(numbersAndStrings);
let theAnswer = 42;
theAnswer = "42";
class Person {
    name;
    dogName;
    favNumber;
    constructor(name, dogName, favNumber) {
        this.name = name;
        this.dogName = dogName;
        this.favNumber = favNumber;
    }
}
