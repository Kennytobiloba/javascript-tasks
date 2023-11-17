//(1) Given an array of names, write a function to remove the last name from the list using the pop() method. Return the updated array.
function removeLastName(names) {
    names.pop();
    return names; // Return the updated array
}

const nameArray = ["kenny", "ayo", "emma"];
const updatedArray = removeLastName(nameArray);
console.log(updatedArray);


//(2) Create an array of integers. Write a function that removes the last integer from the array using the pop() method. Return the updated array.


function lastIntegers(integer){
    integer.pop()
    return integer;
}
const integerArray = [0,2,3,5];
const updatedinteger = lastIntegers(integerArray)
console.log(updatedinteger);


//(3) Write a function that takes two arrays as arguments and removes the last element from the first array using the pop() method. Return the updated array.

function removeLastElementFromArray(arr1, arr2){
    arr1.pop()
    return arr1
}
const arrayone = ["a" ,"b", "c" ,"d"]
const arraytwo = [5,8,5,2,1]
const updatedArray1 = removeLastElementFromArray(arrayone,arraytwo)
console.log(updatedArray1)


// 4.Create a function that simulates a stack data structure using an array. Implement a pop() method to remove elements from the stack. Also, implement a push() method to add elements to the stack.
class Stack {
    constructor() {
        this.items = [];
    }

    // Push method to add elements to the stack
    push(element) {
        this.items.push(element);
    }

    
    pop() {
       
        if (this.items.length === 0) {
            return "Underflow: Stack is empty";
        }
        return this.items.pop();
    }

    
    isEmpty() {
        return this.items.length === 0;
    }

    
    peek() {
        if (this.items.length === 0) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    
    size() {
        return this.items.length;
    }
}

// Example usage:
const myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log("Top element:", myStack.peek()); // Output: 30
console.log("Stack size:", myStack.size());  // Output: 3

console.log("Popped element:", myStack.pop()); // Output: 30
console.log("Stack after pop:", myStack.items); // Output: [10, 20]




    //(5) Write a function that takes an array and an element as arguments and removes the last occurrence of the element from the array using the pop() method. Return the updated array.
    function removeLastOccurrence(arr, element) {
        const index = arr.lastIndexOf(element);
    
        if (index !== -1) {
            // Check if the found index is the last one
            if (index === arr.length - 1) {
                arr.pop();
            } else {
                // If it's not the last one, use splice to remove that occurrence
                arr.splice(index, 1);
            }
        }
    
        return arr;
    }
    
    
    const originalArray = [1, 2, 3, 4, 2, 5, 2];
    const elementToRemove = 2;
    
    const updatedArraytwo = removeLastOccurrence(originalArray, elementToRemove);
    
    console.log(updatedArraytwo);
    

    //(6) Create an array to represent a playlist of songs. Write a function that simulates removing the last song from the playlist using the pop() method. Return the updated playlist.


    function removeLastSong(song){
        song.pop()
        return song
    }
    const songArray = ["Song 1", "Song 2", "Song 3", "Song 4"];
    const updatedSong = removeLastSong(songArray)
    console.log(updatedSong)


    //(7) Implement a shopping cart using an array. Write functions to remove products from the cart using the pop() method, add products, and calculate the total cost of items in the cart.
    
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
    