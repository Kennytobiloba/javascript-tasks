// 1. Write a JavaScript function that takes an array and an element as arguments and adds the element to the beginning of the array using the unshift() method.

function arrayElement(arry,element){
     arry.unshift(element)
     return arry
}
 const myArray = [1,2,3,4,]
 const newArray = 0
 const updatedArray = arrayElement(myArray,newArray)
 console.log(updatedArray)


// 2 Given an array of fruits, write a function to add a new fruit to the beginning of the list using the unshift() method. Return the updated array.


function arrayFruit(index,fruit){
    index.unshift(fruit)
    return index

}
const arryFruits = ["orange","apple"]
const newFruit = "mango"
const updatedFruits = arrayFruit(arryFruits,newFruit)
console.log(updatedFruits)



// .3 Create an array of numbers. Write a function that adds a new number to the beginning of the array using the unshift() method. Return the updated array.



function arrayNumber(arry,element){
    arry.unshift(element)
    return arry
}
const myArr = [1,2,3,4,]
const newNumber = 0
const updatedNumber = arrayElement(myArr,newNumber)
console.log(updatedNumber)



// 4 Write a function that takes two arrays as arguments and adds all elements from the second array to the beginning of the first array using the unshift() method. Return the updated array.


function secondArray(arry1, arry2){
    arry1.unshift(...arry2)
    return arry1
}
const arrayOne = [5,6,7,8,9,]
const arrayTwo = [1,2,3,4,5]
const updated = secondArray(arrayOne,arrayTwo)
console.log(updated)


// 5 Create a function that simulates a queue data structure using an array. Implement an enqueue() method to add elements to the front of the queue using the unshift() method. Also, implement a dequeue() method to remove elements from the back of the queue.



function Queue() {
    
    this.elements = [];
  
    
    this.enqueue = function (element) {
      this.elements.unshift(element);
    };
  
    
    this.dequeue = function () {
      
      if (this.elements.length === 0) {
        return undefined; 
      } else {
        return this.elements.pop(); 
      }
    };
  
    
    this.peek = function () {
      
      if (this.elements.length === 0) {
        return undefined; 
      } else {
        return this.elements[this.elements.length - 1]; 
      }
    };
  
    
    this.size = function () {
      return this.elements.length;
    };
  }
  
 
  const myQueue = new Queue();
  
  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  
  console.log("Queue after enqueuing 1, 2, 3:", myQueue.elements);
  
  const removedElement = myQueue.dequeue();
  console.log("Removed element from the queue:", removedElement);
  console.log("Queue after dequeuing:", myQueue.elements);
  
  const peekedElement = myQueue.peek();
  console.log("Peeked element at the back of the queue:", peekedElement);
  console.log("Current size of the queue:", myQueue.size());
  


//   6. Write a function that takes an array and an element as arguments and adds the element to the beginning of the array only if it's not already in the array. Use the unshift() method. Return the updated array.


function addElementIfNotExists(arr, element) {
    
    if (!arr.includes(element)) {
      
      arr.unshift(element);
    }
  
   
    return arr;
  }
  
  
  const myArrayone = [2, 3, 4];
  const newElement = 1;
  
  const updatedArry = addElementIfNotExists(myArrayone, newElement);
  
  console.log(updatedArry);


// 7  Create an array to represent a list of tasks. Write a function that simulates adding a new task to the top of the list using the unshift() method. Return the updated list of tasks.




function taskArray(task) {
    task.unshift()
    return task
    }
    const taskarray = ["reading","cooking","coding"]
    const updatedtask = taskArray(taskarray)
    console.log(updatedtask)


    // 8 a history stack using an array to keep track of visited URLs. Write functions to add new URLs to the top of the stack using the unshift() method and retrieve the most recent URL

    function HistoryStack() {
      
      this.stack = [];
    
      
      this.addUrl = function (url) {
       
        this.stack.unshift(url);
      };
    
     
      this.getMostRecentUrl = function () {
       
        if (this.stack.length > 0) {
          return this.stack[0]; 
        } else {
          return null; 
        }
      };
    }
    
   
    const history = new HistoryStack();
    
    history.addUrl("https://example.com/page1");
    history.addUrl("https://example.com/page2");
    history.addUrl("https://example.com/page3");
    
    const mostRecentUrl = history.getMostRecentUrl();
    console.log("Most recent URL:", mostRecentUrl);
    
  