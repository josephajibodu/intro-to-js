/**
 * Switch : conditional statement
 * 
 */

let gender = 0;

// if (gender === 0) {
//   console.log("Male");
// } else if (gender === 1) {
//   console.log("Female");
// } else if (gender === 2) {
//   console.log("Transgender")
// } else {
//   console.log("We don't understand")
// }
// Syntax

// switch (value_to_be_checked) {
//   case value:
//     // do this
//     break;

//   case value_1:
//     // do this
//     break;

//   default:
//     break;
// }
// 
gender = 0;

// Switch is mainly for checking equality

switch (gender) {
  case 0:
    console.log("You are a MAN!");
    break;
  case 1:
    console.log("You are a FEMALE!");
    break;
  case 2:
    console.log("You are TRANSGENDER!");
    console.log("You are TRANSGENDER!");
    console.log("You are TRANSGENDER!");
    break;
  default:
    console.log("We really don't understand you sir/ma.");
    break;
}

// break : is used to exit a block of code

// 
console.log("Hey!")