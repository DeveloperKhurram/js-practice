const coding = ["js", "ruby", "python", "cpp", "java"];

coding.forEach((code, index, coding) => {
  return console.log(`${index}: ${code} - ${coding}`);
});

console.log("===//===");
coding.filter(
  (code) => code.length > 3 && !code.includes("p") && console.log(code)
);

console.log("===//===");
coding.forEach((code) => {
  if (code !== "js" && !code.includes("c") && !code.includes("y")) {
    return;
    console.log(code);
  }
});

console.log("===//===");
const langSet = [];
coding.forEach((code) => {
  if (code.includes("y") || code.includes("p")) {
    langSet.push(code);
  }
});
console.log(langSet);

console.log("===//===");
const peoples = [
  { country: "Pakistan", nationality: "Pakistani" },
  { country: "India", nationality: "Indian" },
  { country: "Malaysia", nationality: "Malaysian" },
  { country: "America", nationality: "American" },
];

for (const people of peoples) {
  console.log(people.country);
}

console.log("===//===");
peoples.forEach((ppl) => console.log(ppl.nationality));

console.log("===//===");
peoples.filter((ppl) => {
  if (ppl.country.startsWith("P") || ppl.country.startsWith("M")) {
    console.log(ppl.country);
  }
});
console.log("===//===");
peoples.filter((ppl) => {
  if (ppl.nationality.includes("k")) {
    console.log(ppl.nationality);
  }
});
console.log("===//===");
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = nums
  .map((num) => num * 3)
  .map((num) => num - 1)
  .filter((num) => num % 2 !== 0);
console.log(result);

console.log("===//===");
const cart = [
  { course: "javascript", price: 2999 },
  { course: "python", price: 999 },
  { course: "data science", price: 12999 },
  { course: "app development", price: 5999 },
];

const initialValue = 0;

const totalBill = cart.reduce((prev, curr, index) => {
  const total = prev + curr.price;
  console.log(`${index + 1}: ${curr.course}- ${curr.price}`);
  return total;
}, initialValue);

console.log(`Total Bill: ${totalBill}`);
