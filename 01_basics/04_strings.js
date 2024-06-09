let username = "jhoncandy";
let city = "dalas";

console.log(`His name is ${username} and he lives in ${city}`); // His name is jhoncandy and he lives in dalas

const title = new String("Babylonian Civilization");

console.log(username); // jhoncandy
console.log(title); // [String: 'Babylonian Civilization']

let gameName = "King Of Fighters 2024";

console.log(gameName);

// .............................................................

let phrase = "A quick brown fox jumps over the lazy dog";
let animal = "fox";
let fish = "Blue Whales";

// Finding the length of a string
console.log(phrase.length); // 41
console.log(phrase.length - 1); // 40
// Retrieving a specific string character
console.log(fish.charAt(3)); // e
console.log(phrase[0]); // A
console.log(phrase[phrase.length - 1]); // g
// Testing if a string contains a substring
console.log(
  `This phrase ${
    animal.includes(fish) ? "includes" : "does not include"
  } ${fish}`
);
console.log(
  `Fox name ${animal.startsWith("f", 0) && "starts with f"} and ${
    animal.endsWith("x", 3) && "ends with x"
  } and contains ${animal.length} characters`
);
// Finding the position of a substring in a string
const tagline =
  "MDN - Resources for developers, by developers, to stregthen developers";
const firstOccurance = tagline.indexOf("developers"); // 20
const secondOccurance = tagline.indexOf("developers", firstOccurance + 1); // 35
const thirdOccurance = tagline.indexOf("developers", secondOccurance + 1); // 60

console.log(firstOccurance, secondOccurance, thirdOccurance); // 20 35 60

// Extracting a substring from a string
console.log(tagline.slice());
console.log(tagline.slice(20, 34));
console.log(tagline.slice(35));

const start = tagline.lastIndexOf(",") + 2;
console.log(start);
console.log(tagline.slice(start));

// Changing case
console.log(
  `normal: ${fish} \nlower: ${fish.toLowerCase()} \nupper: ${fish.toUpperCase()}`
);

// Updating parts of a string
console.log(fish.replace("Whales", "Gales"));
console.log(fish.replace("Wh", "G"));

console.log(tagline.replace("developers", "nerd"));
console.log(tagline.replaceAll("developers", "nerd"));

// PRACTICAL EXAMPLES:

// Filtering greeting messages
const greetings = [
  "Happy Eid-ul-Fitr",
  "Happy Eid-ul-Azha",
  "Jumma Mubarak",
  "Ramazan Mubarak",
  "Salaam!",
];

for (const greeting of greetings) {
  //   console.log(greeting);
  if (greeting.includes("Eid")) {
    console.log(greeting);
  }
}

// Fixing capitalization
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  console.log(city.toUpperCase());
}

console.log("------------------------------------------");

for (const city of cities) {
  console.log(city.toLowerCase());
}

console.log("------------------------------------------");

for (const city of cities) {
  console.log(city);
  const lower = city.toLowerCase();
  console.log(lower);
  const firstLetter = lower.slice(0, 1);
  console.log(firstLetter);
  const final = lower.replace(firstLetter, firstLetter.toUpperCase());
  console.log(final);
  console.log("---//---");
}

// Making new strings from old parts

const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
  const initial = station.slice(0, 3);
  const stationIndex = station.indexOf(";");
  const final = station.slice(stationIndex + 1);
  const stationName = `${initial}: ${final}`;
  console.log(stationName);
}
