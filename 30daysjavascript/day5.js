//Activity 1: Function declaration:

//Task1:Even or Odd

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let number = 4;
let result = checkEvenOdd(number);
console.log(`The number ${number} is ${result}.`);//The number 4 is Even.

//Task2:Square of a num

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
let num = 4;
let res = checkEvenOdd(num);
console.log(`The number ${num} is ${res}.`);

//Activity 2:Function Expression

//Task3: Max of two num

const findMax = function(a, b) {
    return a > b ? a : b;
};

let num1 = 5;
let num2 = 10;
let maxNumber = findMax(num1, num2);

console.log(`The maximum of ${num1} and ${num2} is ${maxNumber}.`); // Output: The maximum of 5 and 10 is 10.

//Task4: Two Strings

const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};

let string1 = "Hello, ";
let string2 = "world!";
let output = concatenateStrings(string1, string2);

console.log(output); // Output: Hello, world!

//Activity 3:Arrow Functions

//Task5: AR for the sum of two num

const sum = (num1, num2) => num1 + num2;

let number1 = 5;
let number2 = 7;
let res1 = sum(number1, number2);

console.log(res1); // Output: 12

//Task6:Specific char in string

const containsCharacter = (str, char) => str.includes(char);
let string = "Hello, world!";
let character = "o";
let res2 = containsCharacter(string, character);

console.log(res2); // Output: true

//Activity 4:Function Parameters and Default Values

//Task7:Two para & their products

const multiply = (a, b) => a * b;
let p = 5;
let q = 3;
let product = multiply(p, q);

console.log(product); // Output: 15

//Task8: Greeting Message

function createGreeting(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
}

let name = "Sanjana";
let age = 19;
let greeting = createGreeting(name, age);

console.log(greeting); // Output: Hello, Sanjana! You are 19 years old.

//Activity 5:Higher-Order Functions

//Task9: Calls the function,many times

function callMultipleTimes(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}
const sayHello = () => console.log("Hello!");

callMultipleTimes(sayHello, 3);
// Output:
// Hello!
// Hello!
// Hello!

//Task10:

const composeFunctions = (func1, func2) => value => func2(func1(value));
const double = x => x * 2;
const increment = x => x + 1;

const doubleThenIncrement = composeFunctions(double, increment);

let tamatar = doubleThenIncrement(5);

console.log(tamatar); // Output: 11









