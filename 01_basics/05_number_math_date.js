let amount = 23475356.946794;

console.log(amount);
const expo = amount.toExponential(4);
console.log(typeof expo, expo);
const toFixed = amount.toFixed(2);
console.log(typeof toFixed, toFixed);
const toPrecision = amount.toPrecision(4);
console.log(typeof toPrecision, toPrecision);
const toString = amount.toString();
console.log(typeof toString, toString);

console.log(amount.toLocaleString());

console.log(
  amount.toLocaleString("en-In", {
    style: "currency",
    currency: "INR",
    maximumSignificantDigits: "3",
  })
);

console.log(
  amount.toLocaleString("ja-JP", {
    currency: "JPY",
    style: "currency",
    compactDisplay: "long",
  })
);

// ---------------- Math ----------------------

const initialRandom = Math.random();
console.log(initialRandom);
const applyFloor = Math.floor(initialRandom * 10);
console.log(applyFloor);

console.log("------------------------- // ----------------------- ");

// create a dice roll
const diceRoll = () => {
  const min = 1;
  const max = 6;
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  return console.log(random);
};

diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();

console.log("------------------------- // ----------------------- ");

// create a max to min random number generator
const randomGenerator = (min, max) => {
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random);
};

randomGenerator(10, 15);
randomGenerator(10, 15);
randomGenerator(10, 15);
randomGenerator(10, 15);
randomGenerator(10, 15);

// ---------------- Date ----------------------

console.log("current date not stored in a variable & in number format ");
console.log(Date.now());

console.log("custome date ");
const date = new Date(2024, 3, 8, 11, 16, 36, 28);
console.log(date.toUTCString());

console.log("current date in string formate ");
console.log(new Date().toUTCString());

console.log("current date stored in a variable ");
const dateNow = new Date().toUTCString();
console.log(dateNow);

console.log(";;;;;;;;;;;;;;;;;;;;;;;;");

const today = new Date();
console.log(today.toDateString(), "To date string");
console.log(today.toISOString(), "To ISO string");
console.log(today.toJSON(), "To JSON");
console.log(today.toLocaleDateString(), "To locale date");
console.log(today.toLocaleString(), "To locale string");
console.log(today.toLocaleTimeString(), "To locale time");
console.log(today.toString(), "To string");
console.log(today.toTimeString(), "To time");
console.log(today.toUTCString(), "To UTC");
