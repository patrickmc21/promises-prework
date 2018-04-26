// 1

const testNum = (num) => {
  if (num > 10) {
    return Promise.resolve(`${num} is greater than 10, success!`);
  } else {
    return Promise.reject(`${num} is less than 10, error!`);
  }
};

// 2

const makeAllCaps = (words) => {
  try {
    const upperCase = words.map(word => word.toUpperCase());
    return Promise.all(upperCase);
  } catch (error) {
    return Promise.reject('No, the array you passed in contained an element that was not a string!');
  }
};

const sortWords = (words) => {
  return Promise.resolve(words.sort());
};

// Questions
// 1. What is .then() used for, and what is .catch() used for?
// .then() is used to perform an action once a promise is resolved, and will then return another promise. 
// .catch() is used to handle any errors that occur with the promises, such as a failed fetch request, or 
// trying to turn a number to upperCase...

// 2. What are good use cases for Promises?
// They are best used for API fetch requests, so code can continue to run while the fetch is in process. 

// 3. What other libraries/functions can you find that uses Promises?
//  jQuery and dojo 