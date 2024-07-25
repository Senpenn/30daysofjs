//Activity 1: Object Creation and Access

//Task1:Creating BOOK

let book = {
    year: 2021,
    author: "John Doe",
    title: "JavaScript Essentials",
    
  };
console.log(book);//Output:{ year: 2021, author: 'John Doe', title: 'JavaScript Essentials' }

//Task2:Access the title and author

// Accessing and logging the title and author properties
  console.log("Title:", book.title); //Output:Title: JavaScript Essentials
  console.log("Author:", book.author); //Output:Author: Jane Doe

//Activity 2: Object Methods

//Task3:Creating a String

// Creating an object representing a book with a method
let Book = {
    year: 2021,
    author: "Jane Doe",
    title: "The Adventures of Code",
    getBookInfo: function() {
      return `Title: "${this.title}", Author: ${this.author}`;
    }
  };
  
  // Calling the method and logging the result
  let bookInfo = Book.getBookInfo();
  console.log(bookInfo); // Output: Title: "The Adventures of Code", Author: Jane Doe

//Task4:Add Parameter

// Creating an object representing a book with a method to update the year
let BOOK = {
    year: 2021,
    author: "Jane Doe",
    title: "The Adventures of Code",
    getBookInfo: function() {
      return `Title: "${this.title}", Author: ${this.author}`;
    },
    updateYear: function(newYear) {
      this.year = newYear;
    }
  };
  
  // Updating the year property using the method
  BOOK.updateYear(2024);
  
  // Logging the updated book object and year property
  console.log(BOOK); // Logs the entire updated book object
  console.log("Updated Year:", BOOK.year); // Output: Updated Year: 2024

//Activity 3:Nested Objects

//Task5:Create a Nested Object,'Library'

// Creating book objects
let book1 = {
    title: "The Adventures of Code",
    author: "Jane Doe",
    year: 2021
  };
  
  let book2 = {
    title: "Learning JavaScript",
    author: "John Smith",
    year: 2019
  };
  
  let book3 = {
    title: "Web Development Essentials",
    author: "Alice Brown",
    year: 2023
  };
  
  // Creating a library object with a name and an array of books
  let library = {
    name: "City Library",
    books: [book1, book2, book3]
  };
  
  // Logging the library object to the console
  console.log(library);
  
  /* Output:
  {
    name: "City Library",
    books: [
      { title: "The Adventures of Code", author: "Jane Doe", year: 2021 },
      { title: "Learning JavaScript", author: "John Smith", year: 2019 },
      { title: "Web Development Essentials", author: "Alice Brown", year: 2023 }
    ]
  }
  */

//Task6:Access the name and tile in lib

// Accessing and logging the library name
console.log("Library Name:", library.name);

// Accessing and logging the titles of all books in the library
console.log("Book Titles:");
library.books.forEach(book => {
  console.log(book.title);
});
/*Output:
Library Name: City Library
Book Titles:
The Adventures of Code
Learning JavaScript
Web Development Essentials
*/

//Activity 4: the THIS keyword

//Task7: Using This method

// Creating an object representing a book with a method
let books = {
    year: 2021,
    author: "Jane Doe",
    title: "The Adventures of Code",
    getBookInfo: function() {
      return `Title: "${this.title}", Year: ${this.year}`;
    }
  };
  
  // Calling the method and logging the result
  let BookInfo = books.getBookInfo();
  console.log(BookInfo); // Output: Title: "The Adventures of Code", Year:2021

//Activity 5:Object Iteration

//Task8: Using for..in for iteration

// Using for...in loop to iterate over the properties of the book object
for (let key in book) {
    // Ensure the property is not from the prototype chain
    if (book.hasOwnProperty(key)) {
      console.log(`${key}: ${book[key]}`);
    }
  }
/*Ouput:
year: 2021
author: John Doe
title: JavaScript Essentials
*/

//Task9: Using Object.keys and Object.values

// Using Object.keys to get all property names (keys) and log them
let keys = Object.keys(book);
console.log("Keys:");
keys.forEach(key => {
  console.log(key);
});

// Using Object.values to get all property values and log them
let values = Object.values(book);
console.log("Values:");
values.forEach(value => {
  console.log(value);
});
/*Output:
Keys:
year
author
title
Values:
2021
John Doe
JavaScript Essentials
*/
  


  
  


  