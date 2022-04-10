// Reference Data types
// Combine primitive data types, more than one value.

// 1. Object
// 2. Array
// 3. Function

// Object - a type that has multiple values

let firstName = "Sodeeq";
let lastName = "Adefisan";
let status = "Single";
let city = "Lagos";
let dob = 2002;

// To declare an object, we create a variable, or a constant, and set it to  {}
// let object = {};
// Object is a data type that holds multiple values (properties)

let sodeeq = {
  firstName: "Sodeeq",
  lastName: "Adefisan",
  status: "Single",
  city: "Lagos",
  dob: 2002
};

let joseph = {
  firstName: "Joseph",
  lastName: "Ajibodu",
  status: "Single",
  city: "Ife",
  dob: 2003
};

// Extracting value from an object
// Dot Notation => object.property
// console.log(joseph.firstName)
// console.log("The first objects firstName property is " + sodeeq.dob)

// Bracket Notation => object['property']
// console.log(sodeeq["firstName"])

// Changing the property values
sodeeq.firstName = "Kopa Sodeeq";
sodeeq['status'] = "Married";

console.log(sodeeq.status)
