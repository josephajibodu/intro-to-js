/**
 * For is a Loop
 * 
 * What is a loop?
 * A loop is a block of code that
 * runs repeatedly when a condition is met
 * 
 * Different ways of creating a loop: 
 * - for
 * - for/in
 * - for/of
 * - while
 * - do/while
 */

// For Loop
// Syntax:
// for (statement 1; statement 2; statement 3) {
//   // block of code
// }

// statement 1 : initialization 
              // (it only runs the first 
              // time and it is the first to run)
// statement 2: condition
// statement 3: after effect
// block of code: code to be executed

// Flow
// S1 -> check condition in S2 -> BOC -> S3
      // check condition in S2 -> BOC -> S3
      // check condition in S2 -> BOC -> S3

for (let index = 2; index <= 10; index++) {
 console.log(index)
}
