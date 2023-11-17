

// 1. Question: Write a JavaScript function that takes an array of numbers and uses the indexOf() method to find the index of a specific number in the array. Return the index or -1 if not found.

function number(num,index) {
    return num.indexOf(index)  
}
const arrayNum = [1,2,3,4,5,6,7] ;
const result = number(arrayNum,3)
console.log(result)


// 2. Question: Given an array of colors, write a function that uses the indexOf() method to find the index of the color "blue" in the array. Return the index or -1 if not found.

function color(colors, index){
    return colors.indexOf(index);
}
const arrayColor = ["red","blue","pink"]
const resultcolor =color(arrayColor,"blue")
console.log(resultcolor)



// 3. Question: Create an array of names. Write a function that uses the indexOf() method to find the index of the name "Alice" in the array. Return the index or -1 if not found.
function Name(names,index){
    return names.indexOf(index)
}
const namesArray = ["kenny","taiwo","Alice","ayo"]
const namesResult = Name(namesArray,"Alice")
console.log(namesResult)




// 4. Question: Write a function that takes an array of product objects and uses the indexOf() method to find the index of a specific product by its name in the array. Return the index or -1 if not found.

function product(products,index) {
    return products.indexOf(index)
    
}
const productArray = [
    {
       
        name:"book"
    },
    {
       
        name:"pen"
    },
    {
       
        name:"biro"
    },

]
const productResult = product(productArray, "book")
console.log(productResult)


// 5. Question: Create a function that simulates a library catalog. Given an array of book objects with titles, write a function that uses the indexOf() method to find the index of a book with a specific title. Return the index or -1 if not found.


function findBookIndex(library, title) {
    const index = library.findIndex((book) => book.title === title);
    return index !== -1 ? index : -1;
  }
  
  // Example usage:
  const libraryCatalog = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' },
    { title: 'Book 3', author: 'Author 3' }
  ];
  
  const bookTitleToFind = 'Book 2';
  const bookIndex = findBookIndex(libraryCatalog, bookTitleToFind);
  
  if (bookIndex !== -1) {
    console.log(`The book "${bookTitleToFind}" is found at index ${bookIndex}.`);
  } else {
    console.log(`The book "${bookTitleToFind}" is not found in the library catalog.`);
  }
  





// 6. Question: Write a function that takes an array of email addresses and uses the indexOf() method to find the index of a specific email address in the array. Return the index or -1 if not found.

function email(emails,value){
    return emails.indexOf(value)
}
const emailArray = ["olakenny@gmail.com", "taiwo@gmail.com"]
const arrayResult = email( emailArray,"taiwo@gmail.com")
console.log(arrayResult)



// Question: Create an array of tasks with descriptions. Write a function that uses the indexOf() method to find the index of a specific task by its description in the array. Return the index or -1 if not found.


function findTaskIndex(tasks, description) {
    const index = tasks.findIndex((task) => task.description === description);
    return index !== -1 ? index : -1;
  }
  
  // Example usage:
  const taskList = [
    { description: 'Task 1', priority: 'High' },
    { description: 'Task 2', priority: 'Medium' },
    { description: 'Task 3', priority: 'Low' }
  ];
  
  const taskDescriptionToFind = 'Task 2';
  const taskIndex = findTaskIndex(taskList, taskDescriptionToFind);
  
  if (taskIndex !== -1) {
    console.log(`The task "${taskDescriptionToFind}" is found at index ${taskIndex}.`);
  } else {
    console.log(`The task "${taskDescriptionToFind}" is not found in the task list.`);
  }

  

//   8. Question: Implement a function that simulates a user database. Given an array of user objects with names, write a function that uses the indexOf() method to find the index of a specific user by their name in the array. Return the index or -1 if not found.


function findUserIndex(users, name) {
    const index = users.findIndex((user) => user.name === name);
    return index !== -1 ? index : -1;
  }
  
  // Example usage:
  const userDatabase = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 28 }
  ];
  
  const userNameToFind = 'Alice';
  const userIndex = findUserIndex(userDatabase, userNameToFind);
  
  if (userIndex !== -1) {
    console.log(`The user "${userNameToFind}" is found at index ${userIndex}.`);
  } else {
    console.log(`The user "${userNameToFind}" is not found in the user database.`);
  }
  