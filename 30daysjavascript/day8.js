//Activity 1: Template Literals

//Task1:Use template

let name = "Sanjana";
let age = 19;

let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);

// Output: Hello, my name is Sanjana and I am 19 years old.

//Task2:Multi-Line String

let introduction = `
Hello, my name is ${name}.
I am ${age} years old.
I enjoy programming and learning new technologies.
Nice to meet you!
`;

console.log(introduction);
/*Output:
Hello, my name is Sanjana.
I am 19 years old.
I enjoy programming and learning new technologies.
Nice to meet you!
*/

//Activity 2:Destructuring

//Task3: Array

let numbers = [10, 20, 30, 40, 50];

let [first, second] = numbers;

console.log(first);  // Output: 10
console.log(second); // Output: 20

//Task4: Object

const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction"
};

const { title, author } = book;

console.log(`Title: ${title}`);//Output:Title: To Kill a Mockingbird
console.log(`Author: ${author}`);//Output:Author: Harper Lee

//Activity 3: Spread and Rest Operators

//Task5: SPREAD

const originalArray = [1, 2, 3];
const additionalElements = [4, 5, 6];

const newArray = [...originalArray, ...additionalElements, 7, 8];

console.log(newArray);
/*Output:[
  1, 2, 3, 4,
  5, 6, 7, 8
]*/

//Task6: REST

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

const result = sum(1, 2, 3, 4, 5);
console.log(result); // Output: 15

//Activity 4: Default Parameters

//Task7: Product

function multiply(a, b = 1) {
    return a * b;
}

// Calling the function with both parameters
let result1 = multiply(5, 3);
console.log(result1); // Output: 15

// Calling the function with only the first parameter
let result2 = multiply(5);
console.log(result2); // Output: 5

//Activity 5: Enhanced Object Literals

//Task8:Enhanced Object

// Variables to be used as property values
let name1 = "John Doe";
let age1 = 30;

// Creating an object with enhanced object literal syntax
let person = {
    name1, // Shorthand for name: name
    age1,  // Shorthand for age: age

    // Method to introduce the person
    introduce() {
        return `Hello, my name is ${this.name1} and I am ${this.age1} years old.`;
    },

    // Method to celebrate a birthday
    celebrateBirthday() {
        this.age1 += 1;
        return `Happy Birthday! You are now ${this.age1} years old.`;
    }
};

console.log(person);
console.log(person.introduce());
console.log(person.celebrateBirthday());
console.log(person.introduce());
/*Output:
{
  name1: 'John Doe',
  age1: 30,
  introduce: [Function: introduce],
  celebrateBirthday: [Function: celebrateBirthday]
}
Hello, my name is John Doe and I am 30 years old.
Happy Birthday! You are now 31 years old.
Hello, my name is John Doe and I am 31 years old.
*/

//Task9:Computed Property

// Variables to be used as property names
let key1 = "firstName";
let key2 = "lastName";

// Variables for property values
let firstNameValue = "Jane";
let lastNameValue = "Doe";

// Creating an object with computed property names
let person1 = {
    [key1]: firstNameValue,
    [key2]: lastNameValue,
    // Additional property
    age: 28
};

console.log(person1);
//Output:{ firstName: 'Jane', lastName: 'Doe', age: 28 }


