// 1. Write a JavaScript function that takes an array of numbers and uses the reduce() method to calculate the sum of all the numbers in the array.

function calculate(numbers){
   return  numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber,0)
}
const arryNumber = [4,5,6,7]
const updatedNumber = calculate(arryNumber)
console.log(updatedNumber)


//2 Given an array of prices, write a function that uses the reduce() method to find the total cost of all the items.

function totalPrice(price){
    const total = price.reduce((price1 , price2) => price1 + price2,0)
    return total
}
const arryPrice = [50,60,70,100]
const updatedPrice = totalPrice(arryPrice)
console.log( updatedPrice)



// 3 Create an array of ages. Write a function that uses the reduce() method to calculate the average age of the people in the array.

function arrayAge(age){
    const totalage = age.reduce((accumulator , currentAge) => accumulator + currentAge)
    const averageAge = totalage / age.length
    return averageAge
}
const ageArray = [20,3,5,6]
const updateAge = arrayAge(ageArray)
console.log(updateAge)


//4 Write a function that takes an array of product objects and uses the reduce() method to calculate the total price of all the products.

function arrayProduct(arry){
    const sumProduct = arry.reduce((accumulator, currentPrice) =>{
        return accumulator + currentPrice.price
    },0)
    return sumProduct
}

const products = [
    {
        id:1,
        price:20,
        product:"car"
    },
    {
        id:2,
        price:2000,
        product:"pen"
    },
    {
        id:1,
        price:30,
        product:"book"
    },
]

const updateProduct = arrayProduct(products)
console.log(updateProduct)



// 5 Create a function that simulates a bank account ledger. Given an array of transactions (positive and negative amounts), write a function that uses the reduce() method to calculate the final balance.


function accountLedger(account){
    const transactions = account.reduce((accumulator, currentAccount) => {
       return accumulator + currentAccount
    }, 0)
    return transactions
}
const Arrayledger = [-20, 10,-5,-10]
const finalBalance = accountLedger(Arrayledger)
console.log(finalBalance)


// 6 Write a function that takes an array of numbers and uses the reduce() method to find the maximum value in the array.


function findMaxValue(numbers) {
  
    const maxValue = numbers.reduce((max, currentNumber) => {
      return currentNumber > max ? currentNumber : max;
    }, numbers[0]);
  
   
    return maxValue;
  }
  
  
  const numbersArray = [5, 12, 8, 25, 3];
  
  const maxNumber = findMaxValue(numbersArray);
  
  console.log("Maximum value:", maxNumber);

// 7  Create an array of expenses with categories and amounts. Write a function that uses the reduce() method to calculate the total expenses for each category.

  function calculateTotalExpenses(expenses) {
   
    const totalExpenses = expenses.reduce((result, currentExpense) => {
      const category = currentExpense.category;
      const amount = currentExpense.amount;
  
      
      if (result.hasOwnProperty(category)) {
        result[category] += amount;
      } else {
        result[category] = amount;
      }
  
      return result;
    }, {});
  
   
    return totalExpenses;
  }
  
 
  const expensesArray = [
    { category: 'Food', amount: 50 },
    { category: 'Food', amount: 50 },
    { category: 'Utilities', amount: 100 },
    { category: 'Food', amount: 30 },
    { category: 'Entertainment', amount: 80 },
  ];



// 8  Implement a function that simulates a shopping cart. Given an array of cart items with prices and quantities, write a function that uses the reduce() method to calculate the total cost of all items in the cart.1

  function calculateTotalCost(cartItems) {
   
    const totalCost = cartItems.reduce((accumulator, currentItem) => {
      const itemPrice = currentItem.price;
      const itemQuantity = currentItem.quantity;
  
     
      return accumulator + itemPrice * itemQuantity;
    }, 0);
  
   
    return totalCost;
  }
  
  
  const shoppingCart = [
    { name: 'Item A', price: 20, quantity: 2 },
    { name: 'Item B', price: 10, quantity: 3 },
    { name: 'Item C', price: 15, quantity: 1 },
  ];
  
  const totalCost = calculateTotalCost(shoppingCart);
  
  console.log("Total Cost of Items in the Cart:", totalCost);
  
  
  const totalExpensesByCategory = calculateTotalExpenses(expensesArray);
  
  console.log("Total Expenses by Category:", totalExpensesByCategory);
  
  