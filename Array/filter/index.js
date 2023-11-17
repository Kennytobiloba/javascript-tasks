// (1) Write a JavaScript function that takes an array of numbers and uses the filter() method to return a new array containing only the even numbers.

function EvenNumber(even){
    const evenNumbers = even.filter((number) => number % 2 === 0)
    return evenNumbers
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const updatedNumber = EvenNumber(numbers)
console.log(updatedNumber)

// (2) Given an array of strings, write a function that uses the filter() method to return a new array containing only the strings that have more than five characters.

function arrayString(stringArray){
    const str = stringArray.filter((strings) => strings.length > 5)
    return str
}
const words = ["apple", "banana", "cherry", "date", "grapefruit"];
const filteredWords = arrayString(words);
console.log(filteredWords)


// (3) Create an array of ages. Write a function that uses the filter() method to return a new array containing only the ages that are greater than or equal to 18.

function filterAge(age){
    const ages = age.filter((age) => age >= 18)
    return ages
}
const arrayAge = [20,18,4,3,2,19]
const updatedAge = filterAge(arrayAge)
console.log(updatedAge)


//(4) Write a function that takes an array of objects representing people's names and ages. Use the filter() method to return a new array containing only the people who are under 30 years old.


function filterPeopleUnder30(people) {

    const under30 = people.filter((person) => person.age < 30);
  
    return under30;
  }
  
 
  const people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 22 },
    { name: 'Eva', age: 35 }
  ];
  
  const under30Array = filterPeopleUnder30(people);
  console.log(under30Array);









// (5)  Create a function that simulates an e-commerce website. Given an array of product objects, use the filter() method to return a new array containing only the products that are currently in stock.

  function filterInStockProducts(products) {
   
    const inStockProducts = products.filter((product) => product.inStock);
  
    return inStockProducts;
  }
  
 
  const products = [
    { id: 1, name: 'Laptop', price: 1200, inStock: true },
    { id: 2, name: 'Smartphone', price: 500, inStock: false },
    { id: 3, name: 'Headphones', price: 80, inStock: true },
    { id: 4, name: 'Tablet', price: 300, inStock: true }
  ];
  
  const inStockProductsArray = filterInStockProducts(products);
  console.log(inStockProductsArray);


  
// (6)Write a function that takes an array of objects representing books and their ratings. Use the filter() method to return a new array containing only the books that have a rating of 4 stars or higher.
  
  function filterHighRatedBooks(books) {
    
    const highRatedBooks = books.filter((book) => book.rating >= 4);
  
    return highRatedBooks;
  }

// (7)  Create an array of words. Write a function that uses the filter() method to return a new array containing only the words that start with the letter "A."
  function filterWordsStartingWithA(words) {
   
    const wordsStartingWithA = words.filter((word) => word.charAt(0).toUpperCase() === 'A');
  
    return wordsStartingWithA;
  }
  
  const wordArray = ["Apple", "Banana", "Apricot", "Cherry", "Avocado"];
  const wordsStartingWithAArray = filterWordsStartingWithA(wordArray);
  console.log(wordsStartingWithAArray);


  
//(8) Implement a function that simulates a task manager. Given an array of task objects, use the filter() method to return a new array containing only the tasks that are marked as completed.



function filterCompletedTasks(tasks) {
   
    const completedTasks = tasks.filter((task) => task.completed);
  
    return completedTasks;
  }
  
  const taskList = [
    { id: 1, description: 'Write code', completed: true },
    { id: 2, description: 'Read a book', completed: false },
    { id: 3, description: 'Exercise', completed: true },
    { id: 4, description: 'Buy groceries', completed: false }
  ];
  
  const completedTasksArray = filterCompletedTasks(taskList);
  console.log(completedTasksArray);
  
  
  
  
  const books = [
    { title: 'Book A', rating: 3.5 },
    { title: 'Book B', rating: 4.2 },
    { title: 'Book C', rating: 3.8 },
    { title: 'Book D', rating: 4.5 },
    { title: 'Book E', rating: 2.9 }
  ];
  
  const highRatedBooksArray = filterHighRatedBooks(books);
  console.log(highRatedBooksArray);
  