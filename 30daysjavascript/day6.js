//Activity 1: Array Creation and Access

//Task1:array with num 1 to 5

let array = [];
for (let i = 1; i <= 5; i++) {
  array.push(i);
}
console.log(array); // Output: [1, 2, 3, 4, 5]

//Task2:Access the last and first element

let arr= [1, 2, 3, 4, 5];

// Accessing the first element
let firstElement = arr[0];
console.log(firstElement); // Output: 1

// Accessing the last element
let lastElement = arr[arr.length - 1];
console.log(lastElement); // Output: 5

//Activity 2: Array Methods(Basic)

//Task3:PUSH Method

let brr = [1, 2, 3, 4, 5];
brr.push(6);
console.log(brr); // Output: [1, 2, 3, 4, 5, 6]

//Task4: POP Method

let array1 = [1, 2, 3, 4, 5];

// Removing the last element using pop
let lastEle = array1.pop();
console.log(lastEle); // Output: 5
console.log(array1);       // Output: [1, 2, 3, 4]

//Task5:SHIFT Method

let a = [1, 2, 3, 4, 5];

// Removing the first element using shift
let firstEle = a.shift();
console.log(firstEle); // Output: 1
console.log(a);        // Output: [2, 3, 4, 5]

//Task6: UNSHIFT Method

let numbers = [2, 3, 4, 5];

// Adding an element to the beginning of the array using unshift
numbers.unshift(1);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

//Activity 3: Array Methods(Intermediate)

//Task7: MAP Method

let originalArray = [1, 2, 3, 4, 5];

// Using map to create a new array with doubled values
let doubledArray = originalArray.map(num => num * 2);

console.log(doubledArray);   // Output: [2, 4, 6, 8, 10]
console.log(originalArray);  // Output: [1, 2, 3, 4, 5]

//Task8: FILTER Method

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Using filter to create a new array with only even numbers
let evenNumbers = num1.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8]
console.log(num1);     // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Task9:REDUCE Method

let values = [1, 2, 3, 4, 5];

// Using reduce to sum all the numbers in the array
let totalSum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(totalSum); // Output: 15

//Activity 4:Array Iteration

//Task10: For loop

let items = ['apple', 'banana', 'cherry', 'date'];

// Using a for loop to iterate over the array
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}
//Output:
//apple
//banana
//cherry
//date

//Task11: ForEach loop

let fruits = ['tamatar', 'baigan', 'bhindi', 'kaddu'];

// Using forEach to iterate over the array
fruits.forEach(fruit => {
  console.log(fruit);
});
//Output:
//tamatar
//baigan
//bhindi
//kaddu

//Activity 5:Multi-Dimensional Arrays

//Task12: Matrix

let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Logging the entire 2D array to the console
  console.log(grid);
  //Output:[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

//Task13: Specific Element

// Creating a 2D array with 3 rows and 3 columns
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Accessing and logging a specific element
  let rowIndex = 1;  // Row index (second row)
  let columnIndex = 2; // Column index (third column)
  
  let specificElement = matrix[rowIndex][columnIndex];
  console.log(specificElement); // Output: 6
  












