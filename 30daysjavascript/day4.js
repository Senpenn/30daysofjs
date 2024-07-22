//Activity 1: For Loops

//Task1: 1 to 10 num

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//Task2: Table of 5

const num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

//Activity 2:While Loop

//Task3: Sum of num 1 to 10

let sum = 0;
let i = 1;

while (i <= 10) {
    sum += i;
    i++;
}

console.log(`The sum of numbers from 1 to 10 is ${sum}`);

// Output:
// The sum of numbers from 1 to 10 is 55

//Task4: num from 1 to 10

let a = 1;

while (a <= 10) {
    console.log(a);
    a++;
}

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//Activity 3: Do while loop

//Task5: num from 1 to 5

let b = 1;

do {
    console.log(b);
    b++;
} while (b <= 5);

// Output:
// 1
// 2
// 3
// 4
// 5

//Task6:Factorial of a num

let fact = 5; 
let factorial = 1;
let k = 1;

do {
    factorial *= k;
    k++;
} while (k <= fact);

console.log(`The factorial of ${fact} is ${factorial}`);

// Output for num = 5:
// The factorial of 5 is 120


//Activity 4:Nested loops

//Task7:Star pattern

let rows = 5; // Number of rows

for (let p = 1; p<= rows; p++) {
    let pattern = '';
    for (let j = 1; j <= p; j++) {
        pattern += '*';
    }
    console.log(pattern);
}
//Output:
//*
//**
//***
//****
//*****

//Activity 5: Loop Control Statements:

//Task8: num from 1 to 10 except 5

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip the rest of the loop iteration if i is 5
    }
    console.log(i);
}
//Output:
//1
//2
//3
//4
//6
//7
//8
//8
//9
//10

//Task9: num from 1 to 10 except break the loop when num is 7

for (let num = 1; num <= 10; num++) {
    if (num === 7) {
        break; // Stop the loop when num is 7
    }
    console.log(num);
}
//Output:
//1
//2
//3
//4
//5
//6




