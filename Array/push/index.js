// 1.Write a JavaScript function that takes an array and an element as arguments and adds the element to the end of the array using the push() method.


function  addElementToArray(arry,element){
    arry.push(element)
    return arry
}
const arry1 = ["book","pen"]
const arry2 = "ruler"
const updatedElement = addElementToArray(arry1,arry2)
console.log(updatedElement)


//2 Given an array of colors, write a function to add a new color to the list using the push() method. Return the updated array.
function arrayColor( array, colors){
    array.push(colors)
    return array

}
const colorArray = ["red","blue"]
const newColor = "pink"
const updatedColors = arrayColor(colorArray,newColor)
console.log(updatedColors)



// 3 Create an array of numbers. Write a function that takes a number as an argument and adds it to the end of the array using the push() method. Return the updated array.

function arrayNumber( arrayNum, number){
arrayNum.push(number)
return arrayNum
}
const numberArray = [1,2,3,4]
const newNumber = 5
const updatednumber = arrayNumber(numberArray,newNumber)
console.log(updatednumber)



// 4 Write a function that takes two arrays as arguments and merges the second array into the first array using the push() method. Return the merged array.

function mergesArray(arrayone, arrytwo){
    arrayone.push(...arrytwo)
    return arrayone
}
const mergesArrayOne = [1,2,3,4,5,6]
const mergesArrayTwo = [7,8,9,10,11,12]
const updatemergeArray = mergesArray(mergesArrayOne,mergesArrayTwo)
console.log(updatemergeArray)




function Stack() {
    
    const stack = [];

   
    this.push = function(element) {
        stack.push(element);
    };

    
    this.pop = function() {
        if (stack.length === 0) {
            
            return undefined;
        }
        return stack.pop();
    };
}


const myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log(myStack.pop()); 
console.log(myStack.pop()); 
console.log(myStack.pop()); 
console.log(myStack.pop()); 



// 5.Write a function that takes an array and an element as arguments and adds the element to the beginning of the array using the push() method. Return the updated array.


function addElementToBeginning(array,element){
    array.reverse();
    array.push(element)
    array.reverse();
    return array
}
const reverseArray = [1,2,3,4]
const newArr = 0
const updatedReverse = addElementToBeginning(reverseArray,newArr)
console.log(updatedReverse)



// 6.Write a function that takes an array and an element as arguments and adds the element to the beginning of the array using the push() method. Return the updated array.

function arraySong(array,song){
    array.push(song)
    return array
}
const songArray = ["song1","song2"]
const newSong = "song2"
const UpdateSong = arraySong(songArray,newSong)
console.log(UpdateSong)




// 7.Implement a shopping cart using an array. Write functions to add products to the cart using the push() method, remove products, and calculate the total cost of items in the cart.


const shoppingCart = [];


function addProductToCart(product) {
    shoppingCart.push(product);
}


function removeLastProduct() {
    shoppingCart.pop();
}


function calculateTotalCost() {
    const total = shoppingCart.reduce((acc, product) => acc + product.price, 0);
    return total;
}


addProductToCart({ name: "Product 1", price: 20 });
addProductToCart({ name: "Product 2", price: 30 });
addProductToCart({ name: "Product 3", price: 15 });

console.log("Current Cart:", shoppingCart);

removeLastProduct();
console.log("Cart after removing the last product:", shoppingCart);

const totalCost = calculateTotalCost();
console.log("Total Cost of Items in the Cart:", totalCost);
