// 1 Write a JavaScript function that takes an array of numbers and uses the slice() method to create a new array containing only the elements from index 2 to index 4 (inclusive).


function selectNumbers(arr) {
    return arr.slice(2, 5); 
  }
  

  const numbersArray = [1, 2, 3, 4, 5, 6, 7];
  const selectedNumbers = selectNumbers(numbersArray);
  console.log(selectedNumbers);

  
// 2 Given an array of fruits, write a function that uses the slice() method to create a new array containing only the first three fruits.
function selectFruits(fruits) {
    return fruits.slice(0, 3); // Returns the first three fruits
  }
  
 
  const fruitsArray = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
  const selectedFruits = selectFruits(fruitsArray);
  console.log(selectedFruits);
 
  
// 3 Create an array of names. Write a function that uses the slice() method to create a new array containing only the last two names.


function selectLastTwoNames(names) {
    return names.slice(-2);
  }
  
 
  const namesArray = ['John', 'Jane', 'Bob', 'Alice'];
  const selectedNames = selectLastTwoNames(namesArray);
  console.log(selectedNames);


  
// 4 Write a function that takes an array of product objects and uses the slice() method to create a new array containing only the products with indices 1 to 3.


function selectProducts(products) {
    return products.slice(1, 4); 
  }
  
 
  const productsArray = [{ name: 'Product 1' }, { name: 'Product 2' }, { name: 'Product 3' }, { name: 'Product 4' }];
  const selectedProducts = selectProducts(productsArray);
  console.log(selectedProducts);
  
// 5 Create a function that simulates a pagination system. Given an array of items and a page number, write a function that uses the slice() method to retrieve and return the items for that page.



  function getPageItems(items, pageNumber, itemsPerPage) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }
  
  // Example usage:
  const allItems = [
    {
      id:1,
      item:"food",
  },
  {
    id:2,
    item:"book",
},
{
  id:3,
  item:"pencil",
},
]; // Your array of items
  const pageItems = getPageItems(allItems, 2, 5); // Get items for page 2 with 5 items per page
  console.log(pageItems);
  










// 6  write a function that takes an array of sentences and uses the slice() method to create a new array containing only the sentences with lengths between 20 and 50 characters.


function filterSentencesByLength(sentences, minLength, maxLength) {
    return sentences.slice().filter(sentence => sentence.length >= minLength && sentence.length <= maxLength);
  }
  
  
  const sentencesArray = ['Short sentence.', 'Medium-length sentence with some words.', 'Longer sentence with many words.'];
  const selectedSentences = filterSentencesByLength(sentencesArray, 20, 50);
  console.log(selectedSentences);

  


  
// 7 Create an array of tasks with descriptions and priorities. Write a function that uses the slice() method to create a new array containing only the high-priority tasks.


function getHighPriorityTasks(tasks) {
    return tasks.slice().filter(task => task.priority === 'high');
  }
  
  // Example usage:
  const tasksArray = [{ description: 'Task 1', priority: 'low' }, { description: 'Task 2', priority: 'high' }, /* ... */];
  const highPriorityTasks = getHighPriorityTasks(tasksArray);
  console.log(highPriorityTasks);
  // Output: Tasks with high priority
  

// 8 Implement a function that simulates a user list. Given an array of user objects, write a function that uses the slice() method to create a new array containing only a specified range of users (e.g., users 3 to 5).
  
function getUsersInRange(userList, start, end) {
  // Ensure start and end are within the array bounds
  start = Math.max(0, start);
  end = Math.min(userList.length, end);

  // Use sli
  const usersInRange = userList.slice(start, end);

  return usersInRange;
}


const userDatabase = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 28 },
  { name: 'Eve', age: 22 },
  
];

const startRange = 1; 
const endRange = 4;   

const usersInSpecifiedRange = getUsersInRange(userDatabase, startRange, endRange);
console.log(usersInSpecifiedRange);

  
 
  
