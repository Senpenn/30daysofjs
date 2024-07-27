//Leetcode 1:
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

 //Leetcode 2:

 /**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    // Initialize the counter with the value of n
    let count = n;
    
    // Return a function that increments and returns the current count
    return function() {
        return count++;
    };
};
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */