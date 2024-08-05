//Activity 1:

//Task1:

function throwError() {
    // Intentionally throw an error
    throw new Error("Something went wrong!");
}

try {
    // Call the function that throws an error
    throwError();
} catch (error) {
    // Handle the error and log a message
    console.log("An error occurred: " + error.message);
}

// Output:
// An error occurred: Something went wrong!

//Task 2:

function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        // Throw an error if the denominator is zero
        throw new Error("Cannot divide by zero!");
    }
    return numerator / denominator;
}

try {
    // Call the function with a zero denominator to trigger the error
    const result = divideNumbers(10, 0);
    console.log("Result: " + result);
} catch (error) {
    // Handle the error and log a message
    console.log("An error occurred: " + error.message);
}

// Output:
// An error occurred: Cannot divide by zero!

//Activity 2:

//Task 3:

function exampleFunction() {
    try {
        console.log("In the try block: Attempting to execute code.");
        // Intentionally throw an error to trigger the catch block
        throw new Error("This is an error!");
    } catch (error) {
        console.log("In the catch block: An error occurred - " + error.message);
    } finally {
        console.log("In the finally block: This block always executes.");
    }
}

// Call the function to observe the execution flow
exampleFunction();
//Output:
//In the try block: Attempting to execute code.
//In the catch block: An error occurred - This is an error!
//In the finally block: This block always executes.

//Activity 3:

//Task 4:

// Define a custom error class
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name; // Set the error name to the class name
    }
}

function throwCustomError() {
    // Throw an instance of the custom error class
    throw new CustomError("This is a custom error!");
}

try {
    // Call the function that throws the custom error
    throwCustomError();
} catch (error) {
    // Handle the custom error
    if (error instanceof CustomError) {
        console.log("Caught a custom error: " + error.message);
    } else {
        console.log("Caught a different type of error: " + error.message);
    }
}

// Output:
// Caught a custom error: This is a custom error!

//Task 5:

 // Define a custom error class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name; // Set the error name to the class name
    }
}

// Function to validate user input
function validateInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        // Throw a custom error if input is invalid
        throw new ValidationError("Input cannot be empty and must be a string.");
    }
    console.log("Input is valid: " + input);
}

try {
    // Example input to validate
    const userInput = ""; // Change this to test different inputs

    // Call the function to validate the input
    validateInput(userInput);
} catch (error) {
    // Handle the custom error
    if (error instanceof ValidationError) {
        console.log("Validation error: " + error.message);
    } else {
        console.log("An unexpected error occurred: " + error.message);
    }
}

// Output when `userInput` is an empty string:
// Validation error: Input cannot be empty and must be a string.

// Output when `userInput` is a non-empty string:
// Input is valid: [userInput]

//Task 6:

function getRandomPromise() {
    return new Promise((resolve, reject) => {
        // Simulate random resolution or rejection
        const isSuccess = Math.random() > 0.5;

        setTimeout(() => {
            if (isSuccess) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected!");
            }
        }, 1000); // 1-second delay for simulation
    });
}

getRandomPromise()
    .then((message) => {
        // Handle promise resolution
        console.log(message);
    })
    .catch((error) => {
        // Handle promise rejection
        console.log("Error: " + error);
    });

// Output :Error: Promise rejected!

//Task 7:

function getRandomPromise() {
    return new Promise((resolve, reject) => {
        // Simulate random resolution or rejection
        const isSuccess = Math.random() > 0.5;

        setTimeout(() => {
            if (isSuccess) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected!");
            }
        }, 1000); // 1-second delay for simulation
    });
}

async function asyncFunction() {
    try {
        // Wait for the promise to resolve or reject
        const message = await getRandomPromise();
        console.log(message); // Log success message
    } catch (error) {
        // Handle rejection and log the error message
        console.log("Error: " + error);
    }
}

// Call the async function to see the result
asyncFunction();// Output :Error: Promise rejected!

//Activity 5:

//Task 8:

function requestData() {
    // URL of the invalid endpoint
    const erroneousUrl = "https://api.example.com/invalid-endpoint";

    fetch(erroneousUrl)
        .then(response => {
            if (!response.ok) {
                // Throw an error if the response status is not OK
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse JSON data if the response is OK
        })
        .then(data => {
            // Handle the response data
            console.log("Received data:", data);
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.log("Fetch error:", error.message);
        });
}

// Call the function to perform the fetch request
requestData();
//Output: Fetch error: fetch failed

//Task 9:

async function fetchData() {
    // URL of the invalid endpoint
    const invalidUrl = "https://api.example.com/invalid-endpoint";

    try {
        // Make the fetch request
        const response = await fetch(invalidUrl);

        // Check if the response status is not OK
        if (!response.ok) {
            // Throw an error if the response status is not OK
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data if the response is OK
        const data = await response.json();
        console.log("Received data:", data);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.log("Fetch error:", error.message);
    }
}

// Call the async function to perform the fetch request
fetchData();

