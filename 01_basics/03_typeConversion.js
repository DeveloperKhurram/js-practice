let numString = "33";
console.log(typeof numString); // string

let numNumber = Number(numString); // number
console.log(typeof numNumber);

let numValue = "33abc";
let numConverted = Number(numValue);
console.log(typeof numConverted); // number
console.log(numConverted); // NaN

// when converted to number : then value =
let text = "abc"; // NaN
let bool = true; // 1
let bool2 = false; // 0
let object = null; // 0
let data = undefined; // NaN

let result = Number(data);
console.log(result);

let isLoggedIn = 1;
let isBool = Boolean(isLoggedIn);
console.log(isBool); // true

// 1 => true, 0 => false
// "" => false, "Larkana" => true

// operations
let str1 = "Neyagra";
let str2 = "falls";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let score = 5;
console.log(score++); // 5

let space = 12;
console.log(++space); // 13

console.log("2" == 2); // true
console.log("2" === 2); // false
