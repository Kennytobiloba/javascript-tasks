// 1. Write a JavaScript function that takes an array of numbers and a target number as arguments. Use the includes() method to check if the target number is present in the array and return true or false accordingly.

function  isTargetInArray(number,target){
    return number.includes(target)
}
const numberArray = [1, 2, 3, 4, 5];
const targetNumber = 3
const isPresent = isTargetInArray(numberArray, targetNumber);
console.log(isPresent)


//(2)  Given an array of strings, write a function that uses the includes() method to check if a specific string exists in the array. Return true if it exists, otherwise false.
function nameTarget(names, target) {
   return names.includes(target)
}
const nameArray = ["ayo","taiwo","kenny"]
const targetNames = "ayo" 
const updatedname = nameTarget(nameArray,targetNames)
console.log(updatedname)


//(3) Create an array of usernames. Write a function that takes a username as an argument and uses the includes() method to check if it exists in the array of usernames. Return true if found, otherwise false.

function isUsernameExists(usernames, targetUsername) {
    return usernames.includes(targetUsername);
  }
  
  
  const usernameArray = ['john_doe', 'alice_smith', 'bob_johnson'];
  const inputUsername = 'alice_smith';
  const isUsernamePresent = isUsernameExists(usernameArray, inputUsername);
  
  console.log(isUsernamePresent); 



// (4)  Write a function that takes an array of objects representing products and a product name as an argument. Use the includes() method to check if a product with the given name exists in the array. Return true if found, otherwise false.


function isProductExists(products, productName) {
    
    const productNames = products.map(product => product.name);
  
   
    return productNames.includes(productName);
  }
  
  
  const productsArray = [
    { name: 'Laptop', price: 1200 },
    { name: 'Smartphone', price: 500 },
    { name: 'Headphones', price: 80 },
    { name: 'Tablet', price: 300 }
  ];
  const inputProductName = 'Smartphone';
  const isProductPresent = isProductExists(productsArray, inputProductName);
  
  console.log(isProductPresent); 


//(5)   create a function that simulates a shopping cart. Given an array of product objects and a product ID, use the includes() method to check if the product with the given ID is already in the cart. Return true if it's in the cart, otherwise false.
  
function isProductInCart(cart, productId) {
    
    const productIdsInCart = cart.map(item => item.id);
  
    
    return productIdsInCart.includes(productId);
  }
  
  
  const shoppingCart = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 500 },
    { id: 3, name: 'Headphones', price: 80 }
  ];
  const inputProductId = 2;
  const isProductInCartResult = isProductInCart(shoppingCart, inputProductId);
  
  console.log(isProductInCartResult); 
  

// (6)  Write a function that takes an array of email addresses and an email address as an argument. Use the includes() method to check if the provided email address is in the array. Return true if found, otherwise false.

function isEmailInArray(emailArray, targetEmail) {
    return emailArray.includes(targetEmail);
  }
  
 
  const emailAddresses = ['user1@example.com', 'user2@example.com', 'user3@example.com'];
  const inputEmail = 'user2@example.com';
  const isEmailPresent = isEmailInArray(emailAddresses, inputEmail);
  
  console.log(isEmailPresent); 

// (7)  Create an array of sentences. Write a function that takes a word as an argument and uses the includes() method to check if any sentence in the array contains that word. Return true if found in any sentence, otherwise false.


function isWordInSentences(sentencesArray, targetWord) {
    
    return sentencesArray.some(sentence => sentence.includes(targetWord));
  }
  
  
  const sentencesArray = [
    'This is a sample sentence.',
    'Another example with more words.',
    'A short one.'
  ];
  const inputWord = 'example';
  const isWordFound = isWordInSentences(sentencesArray, inputWord);
  
  console.log(isWordFound); 


// (8)  Implement a function that simulates a membership system. Given an array of member IDs and a member ID as an argument, use the includes() method to check if the provided member ID is part of the membership. Return true if it's a member, otherwise false.

  function isMember(memberIds, targetMemberId) {
    return memberIds.includes(targetMemberId);
  }
  
  
  const membershipIds = ['123456', '789012', '345678'];
  const inputMemberId = '789012';
  const isMemberResult = isMember(membershipIds, inputMemberId);
  
  console.log(isMemberResult); 
  
  
  