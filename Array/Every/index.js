// (1)Write a JavaScript function that takes an array of numbers and uses the every() method to check if all elements in the array are greater than 5. Return true if they are, otherwise false.

function allGreaterThanFive(numbers) {
   
    return numbers.every(function (number) {
      return number > 5;
    });
  }
  
 
  const array1 = [6, 8, 10, 12];
  const array2 = [3, 7, 2, 9];
  
  console.log(allGreaterThanFive(array1)); // Output: true
  console.log(allGreaterThanFive(array2)); // Output: false




// (2)  Given an array of boolean values, write a function that uses the every() method to check if all values in the array are true. Return true if they are, otherwise false.


  function allTrue(booleanArray) {
   
    return booleanArray.every(function (value) {
      return value === true;
    });
  }
  
 
  const booleanArray1 = [true, true, true, true];
  const booleanArray2 = [true, false, true, true];
  
  console.log(allTrue(booleanArray1)); 
  console.log(allTrue(booleanArray2)); 
  
//  (3) Create an array of ages. Write a function that uses the every() method to check if all ages in the array are greater than or equal to 18. Return true if they are, otherwise false.

function areAllAdults(ages) {
  
    return ages.every(function (age) {
      return age >= 18;
    });
  }
  
  
  const agesArray1 = [20, 25, 30, 22];
  const agesArray2 = [19, 17, 25, 21];
  
  console.log(areAllAdults(agesArray1)); 
  console.log(areAllAdults(agesArray2)); 


  
// (4)Write a function that takes an array of product objects and uses the every() method to check if all products have a price greater than $10. Return true if they do, otherwise false.


function areAllPricesGreaterThanTen(products) {
    
    return products.every(function (product) {
      return product.price > 10;
    });
  }
  
  
  const productsArray1 = [
    { name: 'Product A', price: 15 },
    { name: 'Product B', price: 12 },
    { name: 'Product C', price: 20 }
  ];
  
  const productsArray2 = [
    { name: 'Product X', price: 8 },
    { name: 'Product Y', price: 11 },
    { name: 'Product Z', price: 9 }
  ];
  
  console.log(areAllPricesGreaterThanTen(productsArray1)); 
  console.log(areAllPricesGreaterThanTen(productsArray2)); 


//  (5) Create a function that simulates a voting system. Given an array of voter objects with voted properties (boolean), write a function that uses the every() method to check if all voters have voted. Return true if they have, otherwise false.


function haveAllVotersVoted(voters) {
    // Using every() to check if all voters have voted
    return voters.every(function (voter) {
      return voter.voted === true;
    });
  }
  
  
  const votersArray1 = [
    { name: 'Voter A', voted: true },
    { name: 'Voter B', voted: true },
    { name: 'Voter C', voted: true }
  ];
  
  const votersArray2 = [
    { name: 'Voter X', voted: true },
    { name: 'Voter Y', voted: false },
    { name: 'Voter Z', voted: true }
  ];
  
  console.log(haveAllVotersVoted(votersArray1)); 
  console.log(haveAllVotersVoted(votersArray2)); 



//  (6) Write a function that takes an array of strings and uses the every() method to check if all strings have a length greater than 5 characters. Return true if they do, otherwise false.

  function areAllStringsGreaterThanFive(arr) {
    
    return arr.every(function (str) {
      return str.length > 5;
    });
  }
  
  
  const stringsArray1 = ['example', 'lengthy', 'strings'];
  const stringsArray2 = ['short', 'brief', 'words'];
  
  console.log(areAllStringsGreaterThanFive(stringsArray1)); // Output: true
  console.log(areAllStringsGreaterThanFive(stringsArray2)); // Output: false




  
// (7) Create an array of tasks with completion statuses (boolean). Write a function that uses the every() method to check if all tasks have been completed (status is true). Return true if they have, otherwise false.


  
// (8)  Implement a function that simulates a survey response system. Given an array of response objects with a valid property (boolean), write a function that uses the every() method to check if all responses are valid. Return true if they are, otherwise false.
  
  function areAllResponsesValid(responses) {
   
    return responses.every(function (response) {
      return response.valid === true;
    });
  }
  
  
  const surveyResponses1 = [
    { valid: true },
    { valid: true },
    { valid: true }
  ];
  
  const surveyResponses2 = [
    { valid: true },
    { valid: false },
    { valid: true }
  ];
  
  console.log(areAllResponsesValid(surveyResponses1)); // Output: true
  console.log(areAllResponsesValid(surveyResponses2)); // Output: false
  