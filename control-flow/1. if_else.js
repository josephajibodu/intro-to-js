/**
 * Conditional Statements:
 * 1. if/else statement
 * Syntax
 * 
 * if statement
 * 
 * if (condition) {
 * 
 * }
 * 
 * else statement
 * 
 * if (condition) {
 * 
 * } else {
 * 
 * }
 * 
 * 
*/

let age = 12;

// if (age < 13) {
//   console.log('You cannot open an account with us now.')
// }


// if (score > 200) {
  //   console.log("you are eligible to enter university.")
  // } else {
    //   console.log('YOu failed JAMB')
    // }
    
    // if else if
    // 0 - 99 (failed, no tertiary institution)
    // 100 - 149 (vocational studies)
    // 150 - 179 (college of edu)
    // 180 - 199 (polytechnic)
// 200 - 400 (university)

let score = -45;

if (score < 0) {
  console.log("Questionable!");
} else if (score < 100) {
  console.log("You have to repeat JAMB next year! So sorry.");
} else if (score < 150) {
  console.log("You qualify for vocational studies");
} else if (score < 180) {
  console.log("College of Edu.")
} else if (score < 200) {
  console.log("Polytechnic")
} else if (score <= 400) {
  console.log("University")
} else {
  console.log("Result withheld!")
}