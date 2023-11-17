//(1) Write a JavaScript function that takes an array of numbers and uses the map() method to square each number, returning a new array with the squared values.


function arrayNumber(number){
    const squaredArray = number.map((number) => number** 2)
    return squaredArray
}
const numbers = [2,3,6]
const squareNumber = arrayNumber(numbers)
console.log(squareNumber)

 
//(2) Given an array of strings, write a function that uses the map() method to capitalize the first letter of each string, returning a new array with the capitalized strings.

function capitalizeFirstLetter(strings) {
    
    const capitalizedArray = strings.map((str) => str.charAt(0).toUpperCase() + str.substring(1));
  
    return capitalizedArray;
  }
  
  
  const words = ["apple", "banana", "cherry", "date"];
  const capitalizedWords = capitalizeFirstLetter(words);
  console.log(capitalizedWords);
  


  
//(3) Create an array of temperatures in Celsius. Write a function that uses the map() method to convert each temperature to Fahrenheit and return a new array with the converted values.


function celsiusToFahrenheit(temperaturesCelsius){
    const temperature = temperaturesCelsius.map((celsius) => (celsius * 9/5) + 32)
    return temperature
}
const temperaturesCelsius = [0, 15, 25, 30, 10];
const temperaturesFahrenheit = celsiusToFahrenheit(temperaturesCelsius);
console.log(temperaturesFahrenheit);



//(4) Write a function that takes an array of objects representing people's names and ages. Use the map() method to create a new array of just the names and return it.

 function arrayPerson(person){
    const persons = person.map((names) => names.age)
    return persons
 }

 const peopleArray = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 40 }
  ];
  const upddatedperson = arrayPerson(peopleArray)
  console.log(upddatedperson)




// (5)  Create a function that simulates a currency converter. Given an array of amounts in one currency, use the map() method to convert each amount to another currency based on exchange rates and return a new array with the converted amounts.


  function convertCurrency(amounts, exchangeRate) {
    
    const convertedAmounts = amounts.map((amount) => amount * exchangeRate);
  
    return convertedAmounts;
  }
  
 
  const amountsInUSD = [100, 200, 300];
  const exchangeRateToEUR = 0.85; 
  
  const amountsInEUR = convertCurrency(amountsInUSD, exchangeRateToEUR);
  console.log(amountsInEUR);






  

//(6)   Write a function that takes an array of objects representing products and their prices. Use the map() method to add a new property to each object that represents the price with a 10% discount. Return a new array with the updated objects.




function applyDiscount(products) {
    
    const productsWithDiscount = products.map((product) => {
     
      const discountedPrice = product.price * 0.9;
  
      
      return {
        ...product,
        discountedPrice: discountedPrice
      };
    });
  
    return productsWithDiscount;
  }
  
  
  const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Smartphone', price: 500 },
    { name: 'Headphones', price: 80 }
  ];
  
  const productsWithDiscount = applyDiscount(products);
  console.log(productsWithDiscount);
  


//  (7) Create an array of sentences. Write a function that uses the map() method to count the number of words in each sentence and return a new array with the word counts.

  function countWordsInSentences(sentences) {
   
    const wordCounts = sentences.map((sentence) => {
      
      const words = sentence.split(' ');
      
     
      return words.length;
    });
  
    return wordCounts;
  }
  
 
  const sentences = [
    'This is a simple sentence.',
    'Another example with more words.',
    'A short one.'
  ];
  
  const wordCounts = countWordsInSentences(sentences);
  console.log(wordCounts);
  
  





//  (8) Implement a function that simulates an online store. Given an array of product objects and a user's shopping cart array, use the map() method to calculate the total cost of each product in the cart and return a new array with the total costs.

  function calculateTotalCost(products, shoppingCart) {
   
    const totalCosts = shoppingCart.map((cartItem) => {
      
      const product = products.find((product) => product.id === cartItem.productId);
  
     
      const totalCost = product ? product.price * cartItem.quantity : 0;
  
      return totalCost;
    });
  
    return totalCosts;
  }
  

  const productArray = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 500 },
    { id: 3, name: 'Headphones', price: 80 }
  ];
  
  const shoppingCart = [
    { productId: 1, quantity: 2 },
    { productId: 2, quantity: 1 }
  ];
  
  const totalCosts = calculateTotalCost(productArray, shoppingCart);
  console.log(totalCosts);
  