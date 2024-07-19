// Activity 1: Variable Declaration

// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.

var numVar = 31;
console.log(numVar); // Output: 31

// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.

let name = "Hi,I am sanjana";
console.log(name); // Output: Hi,I am Sanjana

// Activity 2: Constant Declaration

// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.

const boolConst = false;
console.log(boolConst); // Output: false

// Activity 3: Data Types

// Task 4: Create variables of different data types and log each variable's type using the `typeof` operator.

let num = 31; // Number
let str = "openCodeDeveloper"; // String
let bool = true; // Boolean
let obj = {name: "Sanjana", Number : 31}; // Object
let arr = [31,19,82,29,5]; // Array

console.log(typeof num); // Output: number
console.log(typeof str); // Output: string
console.log(typeof bool); // Output: boolean
console.log(typeof obj); // Output: object
console.log(typeof arr); // Output: object (Arrays are a type of object in JavaScript)

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.

let reassignVar = "GitHub";
console.log(reassignVar); // Output: Initial Value
reassignVar = "Git";
console.log(reassignVar); // Output: New Value

// Activity 5: Understanding `const`

// Task 6: Try reassigning a variable declared with `const` and observe the error.

const constVar = "Run";
console.log(constVar); // Output: Constant Value
// Uncommenting the next line will cause an error
// constVar = "Fast Fast"; // Error: Assignment to constant variable.

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let numType = 3174;
let strType = "I am hungry";
let booleanType = false;
let objType = { key: "not really" };
let arrayType = [1, 2, 3, 4, 5];
let undefinedType;
let nullType = null;

console.log("Value: ", numType, ", Type: ", typeof numType);
// Output: Value:  <value of numberType>, Type: number

console.log("Value: ", strType, ", Type: ", typeof strType);
// Output: Value:  <value of stringType>, Type: string

console.log("Value: ", booleanType, ", Type: ", typeof booleanType);
// Output: Value:  <value of booleanType>, Type: boolean

console.log("Value: ", objType, ", Type: ", typeof objType);
// Output: Value:  <value of objectType>, Type: object

console.log("Value: ", arrayType, ", Type: ", typeof arrayType);
// Output: Value:  <value of arrayType>, Type: object (Arrays are a type of object in JavaScript)

console.log("Value: ", undefinedType, ", Type: ", typeof undefinedType);
// Output: Value:  <value of undefinedType>, Type: undefined

console.log("Value: ", nullType, ", Type: ", typeof nullType);
// Output: Value:  <value of nullType>, Type: object (This is a well-known quirk in JavaScript)

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.

let letVariable = "Hello";
console.log(letVariable); // Output: I can be reassigned
letVariable = "Bonjour";
console.log(letVariable); // Output: I've been reassigned

const constVariable = "oops i am constant";
console.log(constVariable); // Output: I cannot be reassigned
// Uncommenting the next line will cause an error
// constVariable = "Attempting reassignment"; // Error: Assignment to constant variable.