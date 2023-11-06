
// 1  Question: Write a JavaScript function that takes an array of numbers and uses the findIndex() method to find the index of the first element in the array that is greater than 10. Return the index or -1 if not found.
function findIndexOfFirstElementGreaterThan10(arr) {
    return arr.findIndex(num => num > 10);
  }
  
  const numArray = [3, 5, 11, 4];
  const result = findIndexOfFirstElementGreaterThan10(numArray);
  console.log(result);

//   Question: Given an array of boolean values, write a function that uses the findIndex() method to find the index of the first true value in the array. Return the index or -1 if not found.
// 
function findTrue(arr){
    return arr.findIndex(num => num === true)
}
const findArray = [false,false,true,false] ;
const findResult = findTrue(findArray);
console.log(findResult)


// Question: Create an array of ages. Write a function that uses the findIndex() method to find the index of the first age in the array that is greater than or equal to 18. Return the index or -1 if not found.

function age(ages){
    const index = ages.findIndex(num => num > 18)
    return index !== -1 ? index : -1;
}
const ageArr = [1,3,5,6,8]
const ageResult = age(ageArr)
console.log(ageResult)


// Question: Write a function that takes an array of product objects and uses the findIndex() method to find the index of the first product with a price greater than $50. Return the index or -1 if not found.


function obj(objects){
    const index = objects.findIndex(product => product.price > 50)
    return index !== -1 ? index : -1;
}
const  product = [
    {
        item_one:"book",
        price:20,
        id:1,
    },
    {
        item_two:"pen",
        price:60,
        id:1,
    }
]

const objResult = obj(product)
console.log(objResult)


// Question: Write a function that takes an array of strings and uses the findIndex() method to find the index of the first string with a length greater than 10 characters. Return the index or -1 if not found.

function str(names){
    const value = names.findIndex(values => values.length > 10)
    return  value !== -1 ? value : -1;
}
const arryNames = ["tolu","kenny","taiwo","ayomide","olaatunbikehinde"]
const namesResult = str(arryNames)
console.log(namesResult)


// Question: Create an array of tasks with completion statuses (boolean). Write a function that uses the findIndex() method to find the index of the first incomplete task (status is false). Return the index or -1 if not found.
