// const recipe = [
//   {
//     ingredients: {
//       BasmatiRice: "1½ cup",
//       BellPeppers: "100 grams - cut in long strips",
//       Cabbage: "150 grams - finely chopped",
//       Aginomotto: "1/2 tsp",
//     },
//   },
//   {
//     methods: {
//       rinseVeges: function rinse() {
//         console.log("clean vegetables");
//       },
//       mixSpices: () => console.log("mix spices in vegetables"),
//       fryFood: () => console.log("bake nicely and serve"),
//     },
//   },
// ];

const cities = [
  "istanbul",
  "birmingham",
  "new york",
  "yorkshire",
  "venice",
  "puerto rico",
];

// console.log(cities.length);
// console.log("---//---");
// cities[6] = "athens";
// console.log(cities);
// console.log("---//---");
// console.log(cities.reverse());
// console.log("---//---");
// console.log(Object.keys(cities));
// console.log("---//---");
// console.log(
//   cities.forEach((city, index) => {
//     console.log(`${index + 1}: ${city}`);
//   })
// );
console.log("---//---");
cities.push("Quetta");
cities.push("Ahmedabad");
cities.push("rome");
cities.shift();
cities.sort();
console.log("---//---");
console.log(cities);
console.log("---//---");
cities.filter((city) => {
  if (city.includes("ro")) {
    console.log(city);
  }
});
console.log("---//---");
cities.filter((city) => city.length === 4 && console.log(city));
