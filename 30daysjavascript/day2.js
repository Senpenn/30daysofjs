//Activity 1:Arithmetic Operations

//Task1:Add
let num1 = 5;
let num2 = 3;
let sum = num1 + num2;
console.log(sum); // Output: 8

//Task2:subtract
let num3=31;
let num4=29;
let sub=num3-num4;
console.log(sub);//Output:2

//Task3:Multiply
let M1 = 5;
let M2 = 30;
let product = M1 * M2;
console.log(product); // Output: 150

//Task4:Divison
let D1 = 10;
let D2 = 2;
let quotient = D1 / D2;
console.log(quotient); // Output: 5

//Task5:Remainder
let R1 = 10;
let R2 = 3;
let remainder = R1 % R2;
console.log(remainder); // Output: 1

//Acitvity 2:Assignment Operators

//Task6: += operator
let P1 = 5;
let P2 = 3;
P1 += P2;
console.log(P1); // Output: 8

//Task7: -= operator
let S1 = 10;
let S2 = 4;
S1 -= S2;
console.log(S1); // Output: 6

//Activity 3:Comparison Operator

//Task8: '>' &'<' operator
let c1 = 10;
let c2 = 15;

if (c1 > c2) {
    console.log(c1 + " is greater than " + c2);
} else if (c1 < c2) {
    console.log(c1 + " is less than " + c2);
    // Output: 10 is less than 15
} else {
    console.log(c1 + " is equal to " + c2);

}

//Task9:'>=' &'<=' operator
let L1 = 10;
let L2 = 10;

if (L1 >= L2) {
    console.log(L1 + " is greater than or equal to " + L2);
    // Output: 10 is greater than or equal to 10
} else if (L1 <= L2) {
    console.log(L1 + " is less than or equal to " + L2);
}

//Task10:'==' & '===' operator
let k1 = 10;
let k2 = 15;
let k3 = '10'; // string representation of 10

// Using '==': Checks for equality, but type coercion is allowed
if (k1 == k3) {
    console.log(k1 + " is equal to " + k3 + " (== comparison)");
    // Output: 10 is equal to 10 (== comparison)
} else {
    console.log(k1 + " is not equal to " + k3 + " (== comparison)");
}

if (k1 === k3) {
    console.log(k1 + " is equal to " + k3 + " (=== comparison)");
    // Output: This line will not be executed
} else {
    console.log(k1 + " is not equal to " + k3 + " (=== comparison)");
    // Output: 10 is not equal to 10 (=== comparison)
}

//Acitvity 4: Logical Operator

//Task11: && condition
let a = 5;
let b = 10;

if (a > 0 && b > 0) {
  console.log('Both a and b are greater than 0.'); // Output: Both a and b are greater than 0.
} else {
  console.log('At least one of a or b is not greater than 0.');
}

//Task12: || condition
let c = 5;
let d = -10;

if (c > 0 || d > 0) {
  console.log('At least one of a or b is greater than 0.'); // Output: At least one of a or b is greater than 0.
} else {
  console.log('Neither a nor b is greater than 0.');
}

//Task13: '!' negation
let a1 = 5;
let b1 = -10;

if (!(a1 > 0)) {
  console.log('a1 is not greater than 0.'); // This will not be printed because a1 > 0 is true.
} else {
  console.log('a1 is greater than 0.'); // Output: a1 is greater than 0.
}

if (!(b1 > 0)) {
  console.log('b1 is not greater than 0.'); // Output: b1 is not greater than 0.
} else {
  console.log('b1 is greater than 0.');
}

//Activity 5:Ternary Operator

//Task14:
let num = -5;

let result = num > 0 ? 'Positive' : 'Negative';

console.log(result); // Output: Negative

//Feature Request

//1.Arithmetic Operations Script:
let firstNumber = 10;  // First number
let secondNumber = 5;  // Second number

// Addition
let sum1 = firstNumber + secondNumber;
console.log(`Addition: ${firstNumber} + ${secondNumber} = ${sum1}`); // Output: Addition: 10 + 5 = 15

// Subtraction
let difference = firstNumber - secondNumber;
console.log(`Subtraction: ${firstNumber} - ${secondNumber} = ${difference}`); // Output: Subtraction: 10 - 5 = 5

// Multiplication
let product1 = firstNumber * secondNumber;
console.log(`Multiplication: ${firstNumber} * ${secondNumber} = ${product1}`); // Output: Multiplication: 10 * 5 = 50

// Division
let quotient1;
if (secondNumber !== 0) {
  quotient = firstNumber / secondNumber;
  console.log(`Division: ${firstNumber} / ${secondNumber} = ${quotient1}`); // Output: Division: 10 / 5 = 2
} else {
  console.log('Error: Division by zero');
}


//2.Comparison and Logical operator Script:
let firstValue = 10;  // First number
let secondValue = 5;  // Second number

// Comparison using different operators
let isEqual = firstValue === secondValue;          // Check if firstValue is equal to secondValue
let isNotEqual = firstValue !== secondValue;       // Check if firstValue is not equal to secondValue
let isGreaterThan = firstValue > secondValue;      // Check if firstValue is greater than secondValue
let isLessThan = firstValue < secondValue;         // Check if firstValue is less than secondValue
let isGreaterThanOrEqual = firstValue >= secondValue; // Check if firstValue is greater than or equal to secondValue
let isLessThanOrEqual = firstValue <= secondValue;    // Check if firstValue is less than or equal to secondValue

// Combine conditions using logical operators
let combinedAnd = (firstValue > 0 && secondValue < 10); // true if firstValue is greater than 0 and secondValue is less than 10
let combinedOr = (firstValue < 5 || secondValue > 0);  // true if firstValue is less than 5 or secondValue is greater than 0

// Display results
console.log(`firstValue === secondValue: ${isEqual}`);               // Output: firstValue === secondValue: false
console.log(`firstValue !== secondValue: ${isNotEqual}`);            // Output: firstValue !== secondValue: true
console.log(`firstValue > secondValue: ${isGreaterThan}`);           // Output: firstValue > secondValue: true
console.log(`firstValue < secondValue: ${isLessThan}`);              // Output: firstValue < secondValue: false
console.log(`firstValue >= secondValue: ${isGreaterThanOrEqual}`);   // Output: firstValue >= secondValue: true
console.log(`firstValue <= secondValue: ${isLessThanOrEqual}`);      // Output: firstValue <= secondValue: false

console.log(`Combined (firstValue > 0 && secondValue < 10): ${combinedAnd}`); // Output: Combined (firstValue > 0 && secondValue < 10): true
console.log(`Combined (firstValue < 5 || secondValue > 0): ${combinedOr}`);  // Output: Combined (firstValue < 5 || secondValue > 0): true

//3.Ternary Operator script:
let number = 7; // Number to check

// Use the ternary operator to check if the number is positive
let res = number > 0 ? 'Positive' : 'Not Positive';

console.log(`The number ${number} is ${res}.`); // Output: The number 7 is Positive.










