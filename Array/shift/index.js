// .Write a JavaScript function that takes an array as an argument and removes the first element from the array using the shift() method.


function arrayElement(numbers){
    numbers.shift()
    return numbers
}
const arrayNumber = [1,2,3,4,5,6,7]
const updatedArray = arrayElement(arrayNumber)
console.log(updatedArray)


// 2.Given an array of cities, write a function to remove the first city from the list using the shift() method. Return the updated array.

function arrayCity(city){
    city.shift()
    return city
}
const cityArray = ["ibadan","oyo" ,"ondo"]
const updatedCity = arrayCity(cityArray)
console.log(updatedCity)


// .Create an array of numbers. Write a function that removes the first number from the array using the shift() method. Return the updated array.




function arraynUMBER(numbers){
    numbers.shift()
    return numbers
}
const arrayNUM = [0,1,2,3,4,5,6,7,8]
const updatedNum = arrayElement(arrayNUM)
console.log(updatedNum)




// 4.Write a function that takes two arrays as arguments and removes the first element from the first array using the shift() method. Return the updated array.


function removeFirstElementFromArray(arr1, arr2){
    arr1.shift()
    return arr1.concat(arr2)
}

const arrayone = ["a","b","c","d"]
const arraytwo = [1,2,3,4,5]
const updatedElement = removeFirstElementFromArray(arrayone,arraytwo)
console.log(updatedElement)


// 5.Create a function that simulates a queue data structure using an array. Implement a shift() method to remove elements from the front of the queue. Also, implement an enqueue() method to add elements to the back of the queue.

function Queue() {
    this.elements = [];

    
    this.enqueue = function(element) {
        this.elements.push(element);
    };


    this.dequeue = function() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.elements.shift();
    };

    
    this.isEmpty = function() {
        return this.elements.length === 0;
    };

    
    this.size = function() {
        return this.elements.length;
    };
}


const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log("Initial Queue:", myQueue.elements);

const removedElement = myQueue.dequeue();
console.log("Removed Element:", removedElement);

console.log("Updated Queue:", myQueue.elements);
console.log("Queue Size:", myQueue.size());


function removeFirstOccurrence(arr, element) {
    const indexToRemove = arr.indexOf(element);

    if (indexToRemove !== -1) {
        arr.splice(indexToRemove, 1);
    }

    arr.shift(); // Remove the first element using shift()

    return arr;
}






// .Write a function that takes an array and an element as arguments and removes the first occurrence of the element from the array using the shift() method. Return the updated array.

function removeFirstOccurrence(arr, element) {
    const indexToRemove = arr.indexOf(element);

    if (indexToRemove !== -1) {
        arr.splice(indexToRemove, 1);
    }

    arr.shift(); 

    return arr;
}


const myArray = [1, 2, 3, 4, 2, 5];
const elementToRemove = 2;

const updatedArra = removeFirstOccurrence(myArray, elementToRemove);

console.log("Initial Array:", myArray);
console.log("Element to Remove:", elementToRemove);
console.log("Updated Array:", updatedArra);

// 7.Create an array to represent a list of tasks. Write a function that simulates completing the first task by removing it from the list using the shift() method. Return the updated list of tasks.


function taskArray(task) {
task.shift()
return task
}
const taskarray = ["reading","cooking","coding"]
const updatedtask = taskArray(taskarray)
console.log(updatedtask)









// Implement a queue for processing tasks using an array. Write functions to remove tasks from the front of the queue using the shift() method, add tasks to the back of the queue, and check the next task in line.


class TaskQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(task) {
        // Add a task to the back of the queue
        this.queue.push(task);
    }

    dequeue() {
        // Remove and return the task from the front of the queue
        if (this.queue.length === 0) {
            console.log("Queue is empty!");
            return null;
        }
        return this.queue.shift();
    }

    peek() {
        // Return the next task in line without removing it
        if (this.queue.length === 0) {
            console.log("Queue is empty!");
            return null;
        }
        return this.queue[0];
    }

    viewQueue() {
        // Display the current state of the queue
        console.log("Current Queue:", this.queue);
    }
}


const taskQueue = new TaskQueue();

taskQueue.enqueue("Task 1");
taskQueue.enqueue("Task 2");
taskQueue.enqueue("Task 3");

taskQueue.viewQueue();

const nextTask = taskQueue.peek();
console.log("Next Task in Line:", nextTask);

const completedTask = taskQueue.dequeue();
console.log("Completed Task:", completedTask);

taskQueue.viewQueue();
