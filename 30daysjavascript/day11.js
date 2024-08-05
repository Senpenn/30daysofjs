//Activity 1: Understanding Promises

//Task 1:

const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, this message is displayed after a 2-second delay!");
    }, 2000);
  });
  
  myPromise.then((message) => {
    console.log(message);
  });
//output: Hello, this message is displayed after a 2-second delay!

//Task 2:

const delayedErrorPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Oops, something went wrong after a 2-second delay!"));
    }, 2000);
  });
  
  delayedErrorPromise
    .catch((err) => {
      console.error(err.message);
    });
//Output: Oops, something went wrong after a 2-second delay!

//Activity 2: Chaining Process

//Task 3:

const fetchData1 = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hello,World");
      resolve("Data from server 1");
    }, 1000);
  });
  
  const fetchData2 = new Promise((resolve) => {
    setTimeout(() => {
      console.log("I am SenPenn");
      resolve("Data from server 2");
    }, 2000);
  });
  
  const fetchData3 = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Bunty tera saboon slow hai kya?");
      resolve("Data from server 3");
    }, 3000);
  });
  
  fetchData1
    .then((data1) => {
      console.log(data1);
      return fetchData2;
    })
    .then((data2) => {
      console.log(data2);
      return fetchData3;
    })
    .then((data3) => {
      console.log(data3);
    })
    .catch((error) => {
      console.error(error.message);
    });
//Output:  
//I am SenPenn
//Data from server 2
//Bunty tera saboon slow hai kya?
//Data from server 3

//Task4:

async function fetchData() {
    const simulatedFetch = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched after 2 seconds!");
      }, 2000);
    });
  
    try {
      const data = await simulatedFetch;
      console.log(data); // Output: Data fetched after 2 seconds!
    } catch (error) {
      console.error(error.message);
    }
  }
  
  fetchData();

//Task 5:
async function handleRejectedPromise() {
    const simulatedError = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Something went wrong after 2 seconds!"));
      }, 2000);
    });
  
    try {
      const result = await simulatedError;
      console.log(result);
    } catch (error) {
      console.error(error.message); // Output: Something went wrong after 2 seconds!
    }
  }
  
  handleRejectedPromise();

//Activity 4: Fetching Data from an API

//Task 6:

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); 
    // Output: 
    // {
    //   userId: 1,
    //   id: 1,
    //   title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //   body: "quia et suscipit\nsuscipit repellat nisi..."
    // }
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
  });

//Task 7:

async function fetchData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      // Output: 
      // {
      //   userId: 1,
      //   id: 1,
      //   title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      //   body: "quia et suscipit\nsuscipit repellat nisi..."
      // }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  fetchData();

//Activity 5: ConCurrent Promises

//Task 8:

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("First promise resolved!");
    }, 1000);
  });
  
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Second promise resolved!");
    }, 2000);
  });
  
  const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Third promise resolved!");
    }, 3000);
  });
  
  Promise.all([promise1, promise2, promise3])
    .then((values) => {
      console.log(values);
      // Output: 
      // [
      //   "First promise resolved!",
      //   "Second promise resolved!",
      //   "Third promise resolved!"
      // ]
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });

//Task 9: 

const firstTask = new Promise((resolve) => {
    setTimeout(() => {
      resolve("First task completed!");
    }, 3000);
  });
  
  const secondTask = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Second task completed!");
    }, 1000);
  });
  
  const thirdTask = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Third task completed!");
    }, 2000);
  });
  
  Promise.race([firstTask, secondTask, thirdTask])
    .then((result) => {
      console.log(result);
      // Output: "Second task completed!"
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
  
  