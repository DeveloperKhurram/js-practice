"use strict"; // treat all JS code as newer version

// alert("welcome to JS"); // we are using Node.js not browser

/*
console.log(3 +
     3);
console.log(3 + 3); console.log("welcome to JS") // not good for code readability
*/

// resources to explore JS
// https://tc39.es/ecma262/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript

// Primitive Data Types
let num = 124; // number
let num2 = 753566799764324456885677n; // BigInt
let num3 = BigInt(8654579975433567); // BigInt
let text = "Pakistan"; // string
let text2 = ""; // empty string
let isVisible = true; // boolean
let isNotVisible = false; // boolean
let area; // undefined - not declared or defined yet
let temprature = null; // to strictly declare that the data is emmpty not undefined
const sym1 = Symbol(); // symbol for uniquness
const sym2 = Symbol("foo"); // symbol
const sym3 = Symbol("foo"); // symbol
// here: sym2 !== sym3

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

// String, Number, Boolean, BigInt, Symbol, Null, Undefined

// Non-Primitive Data Types (Reference types)

// Arrays, Objects, Functions
const heros = ["humayon", "babar", "salahuddin"];
let person = {
  name: "Sheikh Abdullah",
  age: "38",
};
const greetPpl = function () {
  console.log("Welcome to JavaScript");
};

greetPpl();

console.log(typeof heros); // object
console.log(typeof person); // object
console.log(typeof greetPpl); // function

// Memory:

// 1 - Stack: Primitive data type - You get a copy of the original value

let ytChannel = "hiteshChaudhary";
let anotherYtChannel = ytChannel;

anotherYtChannel = "chaiAurCode";
console.log(ytChannel); // hiteshChaudhary
console.log(anotherYtChannel); // chaiAurCode

// 2 - Heap: Reference data type - You get the reference of original value

let jhon = {
  email: "jhon@user.com",
  city: "Kuala Lampur",
};

let adam = jhon;
adam.city = "Bijing";

console.log(jhon.city); // Bijing
console.log(adam.city); // Bijing
