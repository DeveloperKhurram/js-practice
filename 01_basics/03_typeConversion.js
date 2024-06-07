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
