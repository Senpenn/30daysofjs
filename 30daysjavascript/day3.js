//Activity if-else Statements


//Task1: num +ve,-ve or 0.

let number = -5;

if (number > 0) {
    console.log("The number is positive.");  
} else if (number < 0) {
    console.log("The number is negative.");  // Output: The number is negative.
} else {
    console.log("The number is zero."); 
}

//Task2: Person can vote or not

let age = 20;  

if (age >= 18) {
    console.log("The person is eligible to vote.");  
    // Output: "The person is eligible to vote."
} else {
    console.log("The person is not eligible to vote.");  
}

//Activity 2:Nested if-else Statements

//Task3:Largest number

let a = 15;
let b = 25;
let c = 20;

let largest;

if (a > b) {
    if (a > c) {
        largest = a;
    } else {
        largest = c;
    }
} else {
    if (b > c) {
        largest = b;
    } else {
        largest = c;
    }
}

console.log("The largest number is " + largest);  // Output: "The largest number is 25"

//Activity 3: Switch Case


//Task4:Day of the week

let dayNumber = 3; // Example input: 3 (Wednesday)

let dayName;

switch (dayNumber) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day number";
}

console.log("The day of the week is " + dayName);  // Output: "The day of the week is Wednesday"

//Task5:Assigning a Grade

let score = 85; 
let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = 'A';
        break;
    case (score >= 80 && score < 90):
        grade = 'B';
        break;
    case (score >= 70 && score < 80):
        grade = 'C';
        break;
    case (score >= 60 && score < 70):
        grade = 'D';
        break;
    case (score < 60):
        grade = 'F';
        break;
    default:
        grade = 'Invalid score';
}

console.log("The grade is " + grade);  // Output: "The grade is B"

//Activity 4:Conditional (Ternary) Operator

//Task6:even or odd

let num = 7; 

let result = (num % 2 === 0) ? "Even" : "Odd";

console.log("The number is " + result); // Output: "The number is Odd"


//Activity 5:Combining Conditions

//Task7:Leap Year or not

let year = 2024; 

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a Leap Year"); //Output: 2024 is a Leap Year
} else {
    console.log(year + " is not a Leap Year");
}








