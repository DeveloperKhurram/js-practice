const accountId = 14424;
let accountEmail = "user@test.com";
var accountPassword = "2@3"; // does not have block scope or functional scope
accountCity = "Islamabad"; // not recommended way
let accountState; // undefined

// accountId = 624553 // can't be changed
accountEmail = "user2@test.com";
accountPassword = "abc@3";
accountCity = "Lahore";

console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
