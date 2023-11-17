
//(1)  Write a JavaScript function that takes an array of numbers and a target number as arguments. Use the find() method to find and return the first element in the array that matches the target number.


function findTargetNumber(numbers, target) {
   
    const result = numbers.find(function (number) {
      return number === target;
    });
  
    return result !== undefined ? result : null;
  }
  
 
  const numberArray = [2, 7, 5, 10, 8];
  const targetNumber = 5;
  
  console.log(findTargetNumber(numberArray, targetNumber)); 


// (2)    Given an array of objects representing books with titles and authors, write a function that uses the find() method to find and return the book object with a specific title.

  function findBookByTitle(books, title) {
    
    const result = books.find(function (book) {
      return book.title === title;
    });
  
    return result !== undefined ? result : null;
  }
  
  
  const booksArray = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
  ];
  
  const searchTitle = 'To Kill a Mockingbird';
  
  console.log(findBookByTitle(booksArray, searchTitle));
  
  
  
//(3)  Create an array of usernames. Write a function that takes a username as an argument and uses the find() method to find and return the first user object with the matching username.

function findUserByUsername(users, username) {
    
    const result = users.find(function (user) {
      return user.username === username;
    });
  
    return result !== undefined ? result : null;
  }
  // Example usage:
  const usersArray = [
    { username: 'john_doe', name: 'John Doe', age: 25 },
    { username: 'jane_smith', name: 'Jane Smith', age: 30 },
    { username: 'bob_jones', name: 'Bob Jones', age: 28 },
  ];
  
  const searchUsername = 'jane_smith';
  
  console.log(findUserByUsername(usersArray, searchUsername));









  // (4) Write a function that takes an array of product objects and a product name as an argument. Use the find() method to find and return the first product object with the given name.


  function findProductByName(products, productName) {
   
    const result = products.find(function (product) {
      return product.name === productName;
    });
  
    return result !== undefined ? result : null;
  }
  
 
  const productsArray = [
    { name: 'Laptop', price: 999.99, brand: 'Dell' },
    { name: 'Smartphone', price: 599.99, brand: 'Samsung' },
    { name: 'Tablet', price: 349.99, brand: 'Apple' },
  ];
  
  const searchProductName = 'Smartphone';
  
  console.log(findProductByName(productsArray, searchProductName));
  
 
  // (5)  Create a function that simulates a library catalog. Given an array of book objects with titles, authors, and categories, write a function that uses the find() method to find and return the book object with a specific category.

  function findBookByCategory(books, category) {
   
    const result = books.find(function (book) {
      return book.category === category;
    });
  
    return result !== undefined ? result : null;
  }
  
 
  const libraryCatalog = [
    { title: 'Book 1', author: 'Author 1', category: 'Fiction' },
    { title: 'Book 2', author: 'Author 2', category: 'Science Fiction' },
    { title: 'Book 3', author: 'Author 3', category: 'Non-Fiction' },
  ];
  
  const searchCategory = 'Science Fiction';
  
  console.log(findBookByCategory(libraryCatalog, searchCategory));



  
// (6)  Write a function that takes an array of email addresses and an email address as an argument. Use the find() method to find and return the first email address that matches the provided one.

function findEmail(emailAddresses, targetEmail) {
  // Using find() to find the email address that matches the target
  const result = emailAddresses.find(function (email) {
    return email === targetEmail;
  });

  return result !== undefined ? result : null;
}


const emailList = [
  'user1@example.com',
  'user2@example.com',
  'user3@example.com',
];

const targetEmail = 'user2@example.com';

console.log(findEmail(emailList, targetEmail));



//(7)  Create an array of tasks with descriptions and due dates. Write a function that takes a due date as an argument and uses the find() method to find and return the first task with that due date.



function findTaskByDueDate(tasks, targetDueDate) {
 
  const result = tasks.find(function (task) {
    return task.dueDate === targetDueDate;
  });

  return result !== undefined ? result : null;
}


const tasks = [
  { description: 'Task 1', dueDate: '2023-12-01' },
  { description: 'Task 2', dueDate: '2023-12-15' },
  { description: 'Task 3', dueDate: '2023-12-01' },
];

const targetDueDate = '2023-12-15';

console.log(findTaskByDueDate(tasks, targetDueDate));



// (8)  Implement a function that simulates a user database. Given an array of user objects with names and roles, write a function that uses the find() method to find and return the first user object with a specific rol2.458


function findUserByRole(users, targetRole) {
  
  const result = users.find(function (user) {
    return user.role === targetRole;
  });

  return result !== undefined ? result : null;
}


const users = [
  { name: 'User1', role: 'Admin' },
  { name: 'User2', role: 'Editor' },
  { name: 'User3', role: 'Viewer' },
];

const targetRole = 'Editor';

console.log(findUserByRole(users, targetRole));






 