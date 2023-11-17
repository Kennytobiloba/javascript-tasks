// 1 Write a JavaScript function that takes an array of numbers and uses the some() method to check if at least one element in the array is greater than 10. Return true if there is, otherwise false.

function hasElementGreaterThan10(numbers) {
    return numbers.some((number) => number > 10);
  }
  
  
  const numbersArray = [5, 8, 12, 7];
  console.log(hasElementGreaterThan10(numbersArray)); // Output: true
  

  
// 2 Given an array of boolean values, write a function that uses the some() method to check if at least one value in the array is true. Return true if there is, otherwise false

function hasTrueValue(booleanArray) {
    return booleanArray.some((value) => value === true);
  }
  
  
  const booleanArray = [false, true, false];
  console.log(hasTrueValue(booleanArray)); 


  
// 3 Create an array of ages. Write a function that uses the some() method to check if at least one age in the array is greater than or equal to 18. Return true if there is, otherwise false.

function hasAgeGreaterThan18(ages) {
    return ages.some((age) => age >= 18);
  }
  
  
  const agesArray = [15, 22, 30];
  console.log(hasAgeGreaterThan18(agesArray)); 


  
// 4 Write a function that takes an array of product objects and uses the some() method to check if at least one product has a price greater than $50. Return true if there is, otherwise false.


function hasProductPriceGreaterThan50(products) {
    return products.some((product) => product.price > 50);
  }
  
  
  const productsArray = [{ name: 'Product1', price: 45 }, { name: 'Product2', price: 60 }];
  console.log(hasProductPriceGreaterThan50(productsArray)); 
  

  
// 5   reate a function that simulates a voting system. Given an array of voter objects with voted properties (boolean), write a function that uses the some() method to check if at least one voter has voted. Return true if there is, otherwise false.

function hasVoted(voters) {
    return voters.some((voter) => voter.voted === true);
  }
  
  
  const votersArray = [{ name: 'Voter1', voted: false }, { name: 'Voter2', voted: true }];
  console.log(hasVoted(votersArray)); 
  


  
// 6 Write a function that takes an array of strings and uses the some() method to check if at least one string has a length greater than 10 characters. Return true if there is, otherwise false.

function hasStringLengthGreaterThan10(strings) {
    return strings.some((str) => str.length > 10);
  }
  
  
  const stringsArray = ['Short', 'MediumLength', 'VeryLongString'];
  console.log(hasStringLengthGreaterThan10(stringsArray)); 


  
// 7 Create an array of tasks with completion statuses (boolean). Write a function that uses the some() method to check if at least one task has been completed (status is true). Return true if there is, otherwise false.
// 
  function tasks(status){
    return status.some((task) => task.completed === true)
  }
  const arrayTasks = [
    {
        id:1,
        completed:true,
  },
  {
    id:2,
    completed:true,
},
{
    id:1,
    completed:false,
},
]
  const arryResult = tasks(arrayTasks)
  console.log(arryResult)



  
// 8 Implement a function that simulates a survey response system. Given an array of response objects with a valid property (boolean), write a function that uses the some() method to check if at least one response is valid. Return true if there is, otherwise false.


function hasValidResponse(responses) {
    return responses.some((response) => response.valid === true);
  }
  
 
  const responsesArray = [
    { answer: 'Yes', valid: false },
    { answer: 'No', valid: true },
    { answer: 'Maybe', valid: false }
  ];
  
  console.log(hasValidResponse(responsesArray)); 
  